import db from "../database/db.js";

export const getUser = (req, res) => {
  res.send("I am from Get Request.");
};

export const postUser = (req, res) => {
  try {
    const { name, phone, address, email, password } = req.body;

    const q = `insert into user(name, phone, address, email, password) values(?,?,?,?,?)`;

    db.query(q, [name, phone, address, email, password], (err, result) => {
      if (err) {
        return res.send({
          messsage: "Error while executing query",
          error: err,
        });
      }

      return res.send({
        message: "User registred successfully",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
