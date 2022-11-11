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

const db = new Sequelize("auth", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
