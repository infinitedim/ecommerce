import { DataTypes } from "sequelize";
import db from "../config/config_db";

const DataRelation = db.define(
  "category",
  {
    Category: {
      type: DataTypes.STRING,
    },
    DescrCategory: {
      type: DataTypes.STRING,
    },
    ThumbnailPicture: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true },
);

(async () => {
  await db.sync();
})();

export default DataRelation;
