import db from "../database/db.js";
import bcrypt from "bcryptjs";

export const login = (req, res) => {
  const { email, password } = req.body;

  const q = `select * from user where email = ?`;

  db.query(q, [email], (err, result) => {
    if (err) {
      return res.status(500).send({
        messsage: "Error while executing query",
        error: err,
      });
    }

    if (result.length === 0) {
      return res.status(404).send({
        message: "User not found..",
      });
    } else {
      const isPasswordMatch = bcrypt.compareSync(password, result[0].password);
      if (isPasswordMatch) {
        const { password, ...others } = result[0];
        return res.status(200).send({
          message: "User Login successfully",
          user: others,
        });
      } else {
        return res.status(400).send({
          message: "Email or password don't match",
        });
      }
    }
  });
};
