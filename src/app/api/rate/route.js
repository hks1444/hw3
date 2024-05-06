import { NextResponse } from "next/server";

export async function POST(req, res) {
  /*Juries shall be able to rate a session that are assigned to them only if they
haven’t rated that session yet and if the current date (like the date of the Demo
:) ) is after the date of the specific match session.*/
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const id = parseInt(data.id);
  const rating = parseInt(data.rating);
  console.log(username, password, id, rating);
  if (rating >= 0 && rating <= 5) {
    return NextResponse.json({ username: username, password: password }, { status: 200 })
  } else {
    return NextResponse.json({ username: username, password: password }, { status: 405 })
  }
}