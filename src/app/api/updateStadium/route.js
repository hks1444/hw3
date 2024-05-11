import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

export async function POST(req, res) {
  dotenv.config();
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  if (data.role !== "manager") {
    return NextResponse.json({ error: 'You are not authorized to add user' }, { status: 405 });
  }
  let sqlQuery = "update stadium set stadium_name = ? where stadium_name = ?;";
  try {
    const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE

    });
    const [res1] = await connection.execute(sqlQuery, [data.newStadiumName, data.currentStadiumName]);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 405 });
  }

  return NextResponse.json({ data }, { status: 200 })
}