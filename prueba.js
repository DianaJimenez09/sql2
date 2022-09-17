let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Petachis94.",
  database: "conexion",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion correcta con Conexion.");
  }
});

// let sql =
//   "CREATE TABLE rating (id INT, app_name VARCHAR(255), app_size BIGINT, price DECIMAL(5,2), total_ratings DECIMAL(2,1), genre VARCHAR(50)";

// connection.query(sql, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Tabla creada");
//     console.log(result);
//   }
// });

// let sql2 =
//   'INSERT INTO rating (id, app_name, app_size, price, total_ratings, genre) VALUES (281656475, \"PAC-MAN Premium\", 100788224, 3.99, 4.5, \"Games\")';

// connection.query(sql2, function (err, result) {
//   if (err) console.log(err);
//   else {
//     console.log("Dato Insertado");
//     console.log(result);
//   }
// });

let sql3 = "SELECT SUM(price) FROM conexion.rating;";
connection.query(sql3, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato obtenido");
    console.log(result);
  }
});

let sql4 = "SELECT MAX(total_ratings) FROM conexion.rating";
connection.query(sql4, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato obtenido");
    console.log(result);
  }
});

let sql5 = "SELECT AVG(price) FROM conexion.rating GROUP BY genre";
connection.query(sql5, function (err, result) {
  if (err) console.log(err);
  else {
    console.log("Dato obtenido");
    console.log(result);
  }
});
