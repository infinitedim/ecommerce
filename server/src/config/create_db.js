import database from "./config_db";

const sql = "CREATE DATABASE miolica";

database.query(sql, (err) => {
  if (err) throw err;
  console.log("Database successfully created!!");
});
