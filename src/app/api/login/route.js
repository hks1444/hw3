import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const role = "coach";
  console.log(username, password);
  if (username === 'admin' && password === 'admin') {
    return NextResponse.json({ username, password, role }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 400 });
  }
}