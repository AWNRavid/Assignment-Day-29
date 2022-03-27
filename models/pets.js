const { json } = require('express/lib/response');
const mysql = require('mysql');
const { JSON } = require('mysql/lib/protocol/constants/types');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pet',
  port: '3306',
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});

class Pets {
  static getPets() {
    const query = 'SELECT * FROM pet';
    connection.query(query, (err, rows) => {
      if (err) {
        throw err;
      } else console.log(rows);
    });
  }

  static addPets(data) {
    // console.log('ok');
    const query = `INSERT INTO pet (id, name, status) VALUES (?,?,?)`;
    connection.query(query, [data.id, data.name, data.status], function (err, result) {
      if (err) throw err;
    });
    return data;
  }

  static updatePetStatus(id, status) {
    const query = 'UPDATE pet SET status = ? WHERE id = ?';
    const dataUpdate = [status, id];
    // console.log(data.status, dataId);
    connection.query(query, dataUpdate, function (err, result) {
      if (err) throw err;
      console.log('Rows affected:', result.affectedRows);
    });
    // connection.query(query);
  }

  // static updatePetStatus(id, name, status) {
  //   const query = 'UPDATE pet SET status = ? WHERE id = ?';
  //   const dataUpdate = [status, id];
  //   // console.log(data.status, dataId);
  //   connection.query(query, dataUpdate, function (err, result) {
  //     if (err) throw err;
  //     console.log('Rows affected:', result.affectedRows);
  //   });
  //   // connection.query(query);
  // }

  static deletePet(data) {
    const query = 'DELETE FROM pet WHERE id = ?';
    connection.query(query, data);
  }
}

module.exports = Pets;
