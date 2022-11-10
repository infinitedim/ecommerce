import { DataTypes } from "sequelize";
import db from "../config/config_db";

const Users = db.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refreshToken: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true },
);

(async () => {
  await db.sync();
})();

export default Users;
