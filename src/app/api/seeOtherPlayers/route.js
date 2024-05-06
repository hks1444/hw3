import { NextResponse } from "next/server";

export async function POST(req, res) {
  /*Players shall be able to view all of the players’ names and surnames that he/she
has played within a session at least once.*/
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const others = ["John Doe", "Jane Doe"];
  console.log(username, password);
  return NextResponse.json({ username: username, password: password, others: others }, { status: 200 })
}