import express from "express";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import routes from "../src/routes/routes";

dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(helmet());
app.use(express.json());

// UniqueSuffix sebagai randomizer
const ImgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const UniqueSuffix = `${Date.now}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${UniqueSuffix}`);
  },
});

// ImgFilter untuk filter extensi file
const ImgFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// lokasi penyimpanan file yangg sudah diupload
app.use("/images", express.static(path.join(__dirname, "images")));

// multiple image upload, maxCount max gambar yang bisa diupload
app.use(
  multer({
    storage: ImgStorage,
    fileFilter: ImgFilter,
  }).fields([
    {
      name: "Profile_Picture",
      maxCount: 1,
    },
    {
      name: "thumbnail_category",
      maxCount: 1,
    },
    {
      name: "product_pictures",
      maxCount: 5,
    },
  ]),
);

app.use("/api/v1", routes);

export default app;
