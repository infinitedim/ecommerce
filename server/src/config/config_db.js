import { createConnection } from "mysql";

const database = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "miolica",
});

database.connect((err) => {
  if (err) throw err;
  console.log("mysql is running...");
});

export default database;
