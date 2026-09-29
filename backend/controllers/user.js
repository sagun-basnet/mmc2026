import db from "../database/db.js";
import bcrypt from "bcryptjs";

export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const q = `select * from user`;

    db.query(q, [id], (err, result) => {
      if (err) {
        return res.status(500).send({
          messsage: "Error while executing query",
          error: err,
        });
      }
      return res.status(200).send({
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getListByUser = (req, res) => {
  const { id } = req.params;

  const q = `select * from list where user_id = ?`;
};

export const getSingleUser = (req, res) => {
  try {
    const { id } = req.params;
    const q = `select * from user where id = ?`;

    db.query(q, [id], (err, result) => {
      if (err) {
        return res.status(500).send({
          messsage: "Error while executing query",
          error: err,
        });
      }
      return res.status(200).send({
        data: result[0],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const q = `delete from user where id = ?`;

    db.query(q, [id], (err, result) => {
      if (err) {
        return res.send({
          messsage: "Error while executing query",
          error: err,
        });
      }
      return res.send({
        message: "User deleted successfully..",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const editUser = (req, res) => {
  try {
    const { name, phone, address, email, password } = req.body;
    const { id } = req.params;

    const q = `update user set name = ?, phone = ?, address=?, email=?, password=? where id=?`;

    db.query(q, [name, phone, address, email, password, id], (err, result) => {
      if (err) {
        return res.send({
          messsage: "Error while executing query",
          error: err,
        });
      }
      return res.send({
        message: "User edited successfully",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const postUser = (req, res) => {
  try {
    const { name, phone, address, email, password } = req.body;

    const q = `insert into user(name, phone, address, email, password) values(?,?,?,?,?)`;

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    console.log(hashPassword);

    db.query(q, [name, phone, address, email, hashPassword], (err, result) => {
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
