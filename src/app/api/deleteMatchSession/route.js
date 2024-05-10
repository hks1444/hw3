import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const id = data.id;
  console.log(username, password, id);
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19932003',
    database: 'project3'
  });
  let sqlQuery = `delete from matchsession where session_id = ?;`;
  if (data.role !== "coach") {
    return NextResponse.json({ error: 'You are not authorized to delete this session' }, { status: 405 });
  }
  try {
    const [rescheck1] = await connection.execute(sqlQuery, [id]);
    return NextResponse.json({ msg: "ok" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error occured while deleting.' }, { status: 405 });
  }
}