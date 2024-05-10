import { NextResponse } from "next/server";
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

const validate = async (data, connection) => {
  let sqlQueryCheck1 = `select * from position where position_ID = ?;`;
  let sqlQueryCheck2 = `select * from team where team_id = ?;`;

  const positionlistcheck = data.positionlist.split(',').map((position) => parseInt(position));
  for (const i in positionlistcheck) {
    const [rescheck1] = await connection.execute(sqlQueryCheck1, [positionlistcheck[i]]);
    if (rescheck1.length === 0) {
      throw new Error('Invalid position list');
    }
  }


  const teamlistcheck = data.teamlist.split(',').map((team) => parseInt(team));
  for (const i in teamlistcheck) {
    const [rescheck2] = await connection.execute(sqlQueryCheck2, [teamlistcheck[i]]);
    if (rescheck2.length === 0) {
      throw new Error('Invalid team list');
    }
  }
}


export async function POST(req, res) {
  dotenv.config();
  const data = await req.json();
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  if (data.role !== "manager") {
    return NextResponse.json({ error: 'You are not authorized to add user' }, { status: 405 });
  }
  try {
    let sqlQuery = ``;
    switch (data.type) {
      case "player":
        let sqlQuery1 = `insert into player(username, password, name, surname, date_of_birth, height, weight) values(?,?,?,?,?,?,?); `;
        let sqlQuery2 = `insert into playerpositions(player_positions_id, username, position) values(?,?,?)`;
        let sqlQuery3 = `insert into playerteams(player_teams_id, username, team) values(?,?,?);`;
        let sqlQuery4 = `select count(*) FROM project3.playerteams;`;
        let sqlQuery5 = `select count(*) FROM project3.playerpositions;`;

        try {
          await validate(data, connection);
          try {
            const [res1] = await connection.execute(sqlQuery1, [data.username, data.password, data.name, data.surname, data.birthdate, data.height, data.weight]);
          } catch (err) {
            throw new Error('Invalid data');
          }
        } catch (err) {
          throw new Error(err.message);
        }

        const [playerteams] = await connection.execute(sqlQuery4, []);
        const playerteamcount = playerteams[0]['count(*)'];

        const [playerpositions] = await connection.execute(sqlQuery5, []);
        const playerpositionscount = playerpositions[0]['count(*)'];

        try {
          const positionlist = data.positionlist.split(',').map((position) => parseInt(position));
          let count = 0;
          for (const i in positionlist) {
            const [res1_1] = await connection.execute(sqlQuery2, [playerpositionscount + count, data.username, positionlist[i]]);
            count++;
          }
        } catch (err) {
          throw new Error('Invalid position list');
        }
        try {
          let count = 0;
          const teamlist = data.teamlist.split(',').map((team) => parseInt(team));
          for (const i in teamlist) {
            const [res1_2] = await connection.execute(sqlQuery3, [playerteamcount + count, data.username, teamlist[i]]);
            count++;
          }
        } catch (err) {
          throw new Error('Invalid team list');
        }
        break;
      case "coach":
        sqlQuery = `insert into coach(username, password, name, surname, nationality) values(?,?,?,?,?);`;
        const [res2] = await connection.execute(sqlQuery, [data.username, data.password, data.name, data.surname, data.nationality]);
        break;
      case "jury":
        sqlQuery = `insert into jury(username, password, name, surname, nationality) values(?,?,?,?,?);`;
        const [res3] = await connection.execute(sqlQuery, [data.username, data.password, data.name, data.surname, data.nationality]);
        break;
      default:
        break;
    }
    return NextResponse.json({ msg: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 405 });
  } finally {
    await connection.end();
  }
}