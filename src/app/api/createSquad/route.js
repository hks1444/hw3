import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const player1 = data.player1;
  const player1position = data.player1position;
  const player2 = data.player2;
  const player2position = data.player2position;
  const player3 = data.player3;
  const player3position = data.player3position;
  const player4 = data.player4;
  const player4position = data.player4position;
  const player5 = data.player5;
  const player5position = data.player5position;
  const player6 = data.player6;
  const player6position = data.player6position;
  console.log(username, password);
  console.log("1", player1, player1position);
  console.log("2", player2, player2position);
  console.log("3", player3, player3position);
  console.log("4", player4, player4position);
  console.log("5", player5, player5position);
  console.log("6", player6, player6position);
  return NextResponse.json({ username: username, password: password }, { status: 200 })
}