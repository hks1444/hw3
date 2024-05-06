import { NextResponse } from "next/server";

export async function POST(req, res) {
  /*Juries shall be able to view the average rating of all sessions that he/she rated
also the count of total rated sessions by him/her. */
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const average = "4.5";
  const count = "2";
  console.log(username, password);
  return NextResponse.json({ username: username, average: average, count: count }, { status: 200 })
}