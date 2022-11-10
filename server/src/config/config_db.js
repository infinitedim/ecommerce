import { createConnection } from "mysql";
// import { createConnection } from "mysql";

// const database = createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "miolica",
// });

// database.connect((err) => {
//   if (err) throw err;
//   console.log("mysql is running...");
// });

// export default database;

import { Sequelize } from "sequelize";

const database = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "miolica",
});
const db = new Sequelize("auth", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

database.connect((err) => {
  if (err) throw err;
  console.log("mysql is running...");
});

export default database;
export default db;
