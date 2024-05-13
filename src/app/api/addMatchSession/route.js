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

/*
  let sqlQuery1 = `select team_id from team T where T.team_id = ? and T.coach_username = ? and CURDATE() between T.contract_start and T.contract_finish; `;
  let sqlQuery2 = `insert into matchsession(session_id, team_id, stadium_id, time_slot, date, assigned_jury_username, rating) values(?,?,?,?,?,?,null)`;
  let sqlQuery3 = `select max(session_id) from matchsession;`;
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
  
  try {
    const [id321] = await connection.execute(sqlQuery3, []);
    const session_id = id321[0]['max(session_id)'] + 1; 
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
*/

let sqlQuery1 = `select team_id, T.contract_start, T.contract_finish from team T where T.team_id = ? and T.coach_username = ? and CURDATE() between T.contract_start and T.contract_finish; `;
let sqlQuery2 = `insert into matchsession(session_id, team_id, stadium_id, time_slot, date, assigned_jury_username, rating) values(?,?,?,?,?,?,null)`;
let sqlQuery3 = `select max(session_id) from matchsession;`;
let sqlQuery4 = `select username from jury where name = ? and surname = ?;`;
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
const splitIndex = jury.lastIndexOf(" ");
const jury_name = jury.substring(0, splitIndex);
const jury_surname = jury.substring(splitIndex + 1);
let jury_username = "aa";

try {
  const [id321] = await connection.execute(sqlQuery3, []);
  const session_id = id321[0]['max(session_id)'] + 1; 
  const [check] = await connection.execute(sqlQuery1, [teamid, username]);
  if (check.length === 0) {
    throw new Error('Invalid team');
  } try {
    const cont_start = new Date(check[0].contract_start);
    const cont_finish = new Date(check[0].contract_finish);
    const check_date = new Date(date);
    if(cont_start > check_date || cont_finish < check_date){
      throw new Error('Invalid date');
    }
    const [jury_username_lst] = await connection.execute(sqlQuery4, [jury_name, jury_surname]);
    try {
      if (jury_username.length === 0) {
        throw new Error('Invalid jury');
      } else {
        jury_username = jury_username_lst[0].username;
      }
    } catch (err) { 
      throw new Error('Invalid jury'); 
    }
    const [insert] = await connection.execute(sqlQuery2, [session_id, teamid, stadiumid, timeslot, date, jury_username]);
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