import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
let contains = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

export async function POST(req, res) {
  dotenv.config();
  let data = await req.json();
  let username = data.username;
  let password = data.password;
  let session_id = data.session_id;
  let player1 = data.player1;
  let player1position = data.player1position;
  let player2 = data.player2;
  let player2position = data.player2position;
  let player3 = data.player3;
  let player3position = data.player3position;
  let player4 = data.player4;
  let player4position = data.player4position;
  let player5 = data.player5;
  let player5position = data.player5position;
  let player6 = data.player6;
  let player6position = data.player6position;
  console.log(username, password);
  let connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19932003',
    database: 'project3'
  });
  let sqlQuery1 = `select T.team_id from team T, matchsession M where T.team_id = M.team_id and T.coach_username = ? and M.session_id = ? and CURDATE() between T.contract_start and T.contract_finish;  `;
  let sqlQuery2 = `insert into sessionsquads (squad_id, session_id, played_player_username, position_id) values (?,?,?,?),(?,?,?,?),(?,?,?,?),(?,?,?,?),(?,?,?,?),(?,?,?,?);`;
  let sqlQuery3 = `select max(squad_id) from project3.sessionsquads;`;
  let sqlQuery4 = `select PT.username from playerteams as PT where PT.team = ? `;
  let sqlQuery5 = `Select username from player where name = ? and surname = ?`
  if (data.role !== "coach") {
    return NextResponse.json({ error: 'You are not authorized create this match.' }, { status: 405 });
  }
  console.log("1", player1, player1position);
  console.log("2", player2, player2position);
  console.log("3", player3, player3position);
  console.log("4", player4, player4position);
  console.log("5", player5, player5position);
  console.log("6", player6, player6position);
  try {
    const lastIndex1 = player1.lastIndexOf(" ");
    const beforeLastSpace1 = player1.substring(0, lastIndex1);
    const afterLastSpace1 = player1.substring(lastIndex1 + 1);
    let [username1] = await connection.execute(sqlQuery5, [beforeLastSpace1, afterLastSpace1]);
    player1 = username1[0].username;
    console.log(player1);

    const lastIndex2 = player2.lastIndexOf(" ");
    const beforeLastSpace2 = player2.substring(0, lastIndex2);
    const afterLastSpace2 = player2.substring(lastIndex2 + 1);
    let [username2] = await connection.execute(sqlQuery5, [beforeLastSpace2, afterLastSpace2]);
    player2 = username2[0].username;
    console.log(player2);

    const lastIndex3 = player3.lastIndexOf(" ");
    const beforeLastSpace3 = player3.substring(0, lastIndex3);
    const afterLastSpace3 = player3.substring(lastIndex3 + 1);
    let [username3] = await connection.execute(sqlQuery5, [beforeLastSpace3, afterLastSpace3]);
    player3 = username3[0].username;
    console.log(player3);

    const lastIndex4 = player4.lastIndexOf(" ");
    const beforeLastSpace4 = player4.substring(0, lastIndex4);
    const afterLastSpace4 = player4.substring(lastIndex4 + 1);
    let [username4] = await connection.execute(sqlQuery5, [beforeLastSpace4, afterLastSpace4]);
    player4 = username4[0].username;
    console.log(player4);

    const lastIndex5 = player5.lastIndexOf(" ");
    const beforeLastSpace5 = player5.substring(0, lastIndex5);
    const afterLastSpace5 = player5.substring(lastIndex5 + 1);
    let [username5] = await connection.execute(sqlQuery5, [beforeLastSpace5, afterLastSpace5]);
    player5 = username5[0].username;
    console.log(player5);

    const lastIndex6 = player6.lastIndexOf(" ");
    const beforeLastSpace6 = player6.substring(0, lastIndex6);
    const afterLastSpace6 = player6.substring(lastIndex6 + 1);
    let [username6] = await connection.execute(sqlQuery5, [beforeLastSpace6, afterLastSpace6]);
    player6 = username6[0].username;
    console.log(player6);

    let [check] = await connection.execute(sqlQuery1, [username, session_id]);
    if (check.length !== 0) {
      let [teammembers] = await connection.execute(sqlQuery4, [check[0].team_id]);
      let teamlist = teammembers.map((member) => member.username);
      console.log(teamlist)
      console.log(contains(teamlist, player5));
      if (contains(teamlist, player1) && contains(teamlist, player2) && contains(teamlist, player3) && contains(teamlist, player4) && contains(teamlist, player5) && contains(teamlist, player6)) {
        console.log("ok");
      } else {
        throw new Error('Invalid team');
      }
    } else {
      throw new Error('Invalid team');
    }
    try {
      let [max] = await connection.execute(sqlQuery3, []);
      let id = max[0]['max(squad_id)'];
      /*let positions = new Set([player1position, player2position, player3position, player4position, player5position, player6position]);
      let truePositions = new Set([1, 2, 3, 4, 5, 6]);
      if (truePositions !== positions) {
        throw new Error('Invalid positions');
      }*/
      let [insert1] = await connection.execute(sqlQuery2, [id + 1, session_id, player1, player1position, id + 2, session_id, player2, player2position, id + 3, session_id, player3, player3position, id + 4, session_id, player4, player4position, id + 5, session_id, player5, player5position, id + 6, session_id, player6, player6position]);
      return NextResponse.json({ msg: "ok" }, { status: 200 })
    } catch (err) {
      throw new Error('Invalid data');
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 405 });
  } finally {
    await connection.end();
  }
}


