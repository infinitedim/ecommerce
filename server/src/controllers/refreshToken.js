/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import jwt from "jsonwebtoken";
import Users from "../models/UsersModels";

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      res.sendStatus(401);
    }
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) {
      res.sendStatus(403);
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      }

      const dataUsers = {
        userId: user[0].id,
        name: user[0],
        email: user[0],
      };
      const accessToken = jwt.sign({ dataUsers }, process.env.SECRET_TOKEN, {
        expiresIn: "60s",
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};

export default refreshToken;
