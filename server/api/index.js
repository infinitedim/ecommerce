import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

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

app.get("/", (req, res) => {
  res.send("ok");
});

export default app;
