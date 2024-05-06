import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  console.log(username, password, data);
  return NextResponse.json({ data }, { status: 200 })
}