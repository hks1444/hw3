import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const id = data.id;
  console.log(username, password, id);
  return NextResponse.json({ username: username, password: password }, { status: 200 })
}