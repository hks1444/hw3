import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
export async function POST(req, res) {
  /*Juries shall be able to rate a session that are assigned to them only if they
haven’t rated that session yet and if the current date (like the date of the Demo
:) ) is after the date of the specific match session.*/
  dotenv.config();
  const data = await req.json();
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  let sqlQuery1 = `select x.session_id, x.date from project3.matchsession as x where x.assigned_jury_username = ? and x.rating is null and x.session_id = ? `;
  let sqlQuery2 = `update matchsession set rating = ? where session_id = ?;`;
  if (data.role !== "jury") {
    return NextResponse.json({ error: 'You are not authorized rate this match.' }, { status: 405 });
  }
  const username = data.username;
  const id = parseInt(data.id);
  const rating = parseFloat(data.rating);
  console.log(username, id, rating);
  try {
    if (rating >= 0 && rating <= 5) {
      const [check] = await connection.execute(sqlQuery1, [username, id]);
      console.log(check);
      if (check.length === 0) {
        throw new Error('Invalid match');
      }else{
        const date = check[0].date;
        const currentDate = new Date();
        if (currentDate < date) {
          throw new Error('Invalid date');
        }
      }
      const [insert] = await connection.execute(sqlQuery2, [rating, id]);
      return NextResponse.json({ msg: "ok" }, { status: 200 })
    } else {
      throw new Error('Invalid rating');
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 405 });
  } finally {
    await connection.end();
  }
}