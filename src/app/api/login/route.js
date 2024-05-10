import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
export async function POST(req, res) {
  dotenv.config();
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  let user = null;
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  let sqlQueryCoach = `SELECT username, password FROM coach WHERE username = ? AND password = ?`;
  let sqlQueryManager = `SELECT username, password FROM dbmanager WHERE username = ? AND password = ?`;
  let sqlQueryPlayer = `SELECT username, password FROM player WHERE username = ? AND password = ?`;
  let sqlQueryJury = `SELECT username, password FROM jury WHERE username = ? AND password = ?`;

  try {
    const [coachResult] = await connection.execute(sqlQueryCoach, [username, password]);
    const [managerResult] = await connection.execute(sqlQueryManager, [username, password]);
    const [playerResult] = await connection.execute(sqlQueryPlayer, [username, password]);
    const [juryResult] = await connection.execute(sqlQueryJury, [username, password]);

    if (coachResult.length > 0) {
      user = { username, password, role: "coach" };
    } else if (managerResult.length > 0) {
      user = { username, password, role: "manager" };
    } else if (playerResult.length > 0) {
      user = { username, password, role: "player" };
    } else if (juryResult.length > 0) {
      user = { username, password, role: "jury" };
    }

    if (user === null) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 405 });
    } else {
      return NextResponse.json(user, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await connection.end();
  }
}
