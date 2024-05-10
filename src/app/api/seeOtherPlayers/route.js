import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export async function POST(req, res) {
  /*Players shall be able to view all of the players’ names and surnames that he/she
has played within a session at least once.*/
  const data = await req.json();
  const username = data.username;
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19932003',
    database: 'project3'
  });
  let sqlQuery = `select P.name, P.surname from player P where P.username in 	(select S.played_player_username from sessionsquads S	where S.session_id in	(select session_id from sessionsquads where played_player_username = ?) and S.played_player_username != ?);`;
  if (data.role !== "player") {
    return NextResponse.json({ error: 'You are not authorized to see other players' }, { status: 405 });
  }
  try {
    const [rescheck1] = await connection.execute(sqlQuery, [username, username]);
    const others = rescheck1.map((player) => player.name + ' ' + player.surname + ', ');
    console.log(others);
    return NextResponse.json({ others: others }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error occured while getting other players.' }, { status: 405 });
  }
}