import { NextResponse } from "next/server";
import mysql from 'mysql2';
export async function POST(req, res) {
  const data = await req.json();
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19932003',
    database: 'project3'
  });
  let sqlQuery = ``;
  switch (data.type) {
    case "player":
      sqlQuery = `insert into player(username, password, name, surname, date_of_birth, height, weight) values("${data.username}","${data.password}","${data.name}","${data.surname}","${data.birthdate}","${data.height}","${data.weight}"); 
      insert into playerpositions(player_positions_id, username, position) values("${10000000}","${data.username}","${1}");
      insert into playerteams(player_teams_id, username, team) values("${10000000}","${data.username}","${1}");`;
      break;
    case "coach":
      sqlQuery = `insert into coach(username, password, name, surname, nationality) values("${data.username}","${data.password}","${data.name}","${data.surname}","${data.nationality}");`;
      break;
    case "jury":
      sqlQuery = `insert into jury(username, password, name, surname, nationality) values("${data.username}","${data.password}","${data.name}","${data.surname}","${data.nationality}");`;
      break;
    default:
      break;
  }
  connection.connect(function (err) {
    if (err) { throw err };
    connection.query(sqlQuery, function (err, results, fields) {
      if (err) throw err;
      console.log(results);
    });

  });
  console.log(data);
  return NextResponse.json({ data }, { status: 200 })
}