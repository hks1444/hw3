import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
export async function POST(req, res) {
  dotenv.config();
  /*Juries shall be able to view the average rating of all sessions that he/she rated
also the count of total rated sessions by him/her. */
  const data = await req.json();
  const username = data.username;
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  let sqlQuery = `select avg(rating), count(*) from matchsession M where M.assigned_jury_username = ? and M.rating is not null;`;
  if (data.role !== "jury") {
    return NextResponse.json({ error: 'You are not authorized see the count and the average rating of matches.' }, { status: 405 });
  }
  try {
    const [rescheck1] = await connection.execute(sqlQuery, [username]);
    const average = rescheck1[0]['avg(rating)'];
    const count = rescheck1[0]['count(*)'];
    console.log(rescheck1);
    return NextResponse.json({ average: average, count: count }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error occured while getting the count and the average rating of matches.' }, { status: 405 });
  } finally {
    await connection.end();
  }
}