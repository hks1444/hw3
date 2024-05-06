import { NextResponse } from "next/server";

export async function POST(req, res) {
  /*Also a player should see the height
of the player that he/she played with the most. If there are more than one
players that he/she played the most, he/she should see the average height of
those players*/
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const height = "180";
  console.log(username, password);
  return NextResponse.json({ username: username, password: password, height: height }, { status: 200 })
}