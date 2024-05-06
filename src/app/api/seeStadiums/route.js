import { NextResponse } from "next/server";

export async function POST(req, res) {
  /*Coaches shall be able to see a list of all existing stadiums names and their
countries.*/
  const data = await req.json();
  const username = data.username;
  const password = data.password;
  const stadiums = ["İnönü Stadı", "Vodafone Park", "Ali Sami Yen Stadı", "Türk Telekom Stadyumu", "Ülker Stadyumu Fenerbahçe Şükrü Saracoğlu Spor Kompleksi", "Bursa Büyükşehir Belediye Stadyumu", "Konya Büyükşehir Belediye Stadyumu"];
  console.log(username, password);
  return NextResponse.json({ username: username, password: password, stadiums: stadiums }, { status: 200 })
}