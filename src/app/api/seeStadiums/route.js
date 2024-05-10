import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
export async function POST(req, res) {
  /*Coaches shall be able to see a list of all existing stadiums names and their
countries.*/
  dotenv.config();
  const data = await req.json();
  const username = data.username;
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  let sqlQuery = `select stadium_name, stadium_country from stadium;`;
  if (data.role !== "coach") {
    return NextResponse.json({ error: 'You are not authorized to see height' }, { status: 405 });
  }
  try {
    const [rescheck1] = await connection.execute(sqlQuery, []);
    const stadiums = rescheck1.map((stadium) => stadium.stadium_name);
    console.log(stadiums);
    return NextResponse.json({ stadiums: stadiums }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error occured while getting the name of the stadiums.' }, { status: 405 });
  } finally {
    await connection.end();
  }
}