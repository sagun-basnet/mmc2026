import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        const token = jwt.sign(
          {
            userId: result[0].id,
            userName: result[0].name,
            userRole: result[0].role,
          },
          "secretkey",
        );
        console.log(token);

        const { password, ...others } = result[0];
        return res.status(200).send({
          message: "User Login successfully",
          user: others,
          token: token,
        });
      } else {
        return res.status(400).send({
          message: "Email or password don't match",
        });
      }
    }
  });
};

// SELECT list.*, list.id as list_id, user.name, user.email, user.phone from list join user on list.user_id = user.id

// SELECT l.*, l.id as list_id, u.name, u.email, u.phone from list l join user u on l.user_id = u.id
