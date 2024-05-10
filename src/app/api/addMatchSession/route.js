import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
export async function POST(req, res) {
  dotenv.config();
  const data = await req.json();
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });


  let sqlQuery1 = `select team_id from team T where T.team_id = ? and T.coach_username = ? and CURDATE() between T.contract_start and T.contract_finish; `;
  let sqlQuery2 = `insert into matchsession(session_id, team_id, stadium_id, time_slot, date, assigned_jury_username, rating) values(?,?,?,?,?,?,null)`;
  if (data.role !== "coach") {
    return NextResponse.json({ error: 'You are not authorized create this match.' }, { status: 405 });
  }
  const username = data.username;
  const password = data.password;
  const teamid = data.teamid;
  const stadiumid = data.stadiumid;
  const date = data.date;
  const timeslot = data.timeslot;
  const jury = data.jury;
  const session_id = data.session_id;
  try {
    const [check] = await connection.execute(sqlQuery1, [teamid, username]);
    if (check.length === 0) {
      throw new Error('Invalid team');
    } try {
      const [insert] = await connection.execute(sqlQuery2, [session_id, teamid, stadiumid, timeslot, date, jury]);
      return NextResponse.json({ msg: "ok" }, { status: 200 })
    } catch (err) {
      throw new Error('Invalid data');
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 405 });
  } finally {
    await connection.end();
  }
}