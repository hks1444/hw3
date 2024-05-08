import { NextResponse } from "next/server";
import mysql from 'mysql2';
export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const role = "coach";
  console.log(username, password);
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19932003',
    database: 'project3'
  });

  connection.connect(function (err) {
    if (err) throw err;
    let sqlSorgusu = `SELECT * FROM coach`;
    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
    connection.query(sqlSorgusu, function (err, results, fields) {
      if (err) throw err;
      console.log(results);
    });

  });
  if (username === 'admin' && password === 'admin') {
    return NextResponse.json({ username, password, role }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 400 });
  }
}