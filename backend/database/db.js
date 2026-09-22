import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "mcc_db",
});

db.connect((error) => {
  if (error) {
    console.log("Error while connecting to database", error);
  } else {
    console.log("Database connected successfully");
  }
});

export default db;
