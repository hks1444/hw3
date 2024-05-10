import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

export async function POST(req, res) {
  /*Also a player should see the height
of the player that he/she played with the most. If there are more than one
players that he/she played the most, he/she should see the average height of
those players*/
  dotenv.config();
  const data = await req.json();
  const username = data.username;
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  let sqlQuery = `with playercounts as (select count(*) as count, A.played_player_username as username from (select S.played_player_username from sessionsquads S where S.session_id in (select session_id from sessionsquads where played_player_username = ?) and S.played_player_username != ?) A group by A.played_player_username) select avg(height) from player P where P.username in (select username from playercounts where count = (select max(count) from playercounts));`;
  if (data.role !== "player") {
    return NextResponse.json({ error: 'You are not authorized to see height' }, { status: 405 });
  }
  try {
    const [rescheck1] = await connection.execute(sqlQuery, [username, username]);
    const height = rescheck1[0]['avg(height)'];
    return NextResponse.json({ height: height }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error occured while getting height of the player who played with you most.' }, { status: 405 });
  } finally {
    await connection.end();
  }
}