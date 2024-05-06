import { NextResponse } from "next/server";
export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const teamid = data.teamid;
  const stadiumid = data.stadiumid;
  const date = data.date;
  const timeslot = data.timeslot;
  console.log(username, password, teamid, stadiumid, date, timeslot);
  return NextResponse.json({ username: username, password: password }, { status: 200 })
}