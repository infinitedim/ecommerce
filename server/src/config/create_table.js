import database from "./config_db";

const sql = `CREATE TABLE cart (
                id_Cart INT NOT NULL AUTO_INCREMENT,
                PRIMARY KEY(id_Cart)
  )`;

database.query(sql, (err) => {
  if (err) throw err;
  console.log("Table successfully created!!");
});

// const sql = `CREATE TABLE shop (
//     id_Product INT NOT NULL AUTO_INCREMENT,
//     id_Seller INT,
//     id_Category INT,
//     ProductName VARCHAR(255),
//     DescrProduct VARCHAR(255),
//     UnitPrice VARCHAR(255),
//     ProductPicture TEXT,
//     PRIMARY KEY(id_Product)
// )`
