import jwt from "jsonwebtoken";
export const isAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.send(400).send({ message: "Please Login..." });
  }

  const userInfo = jwt.verify(token, "secretkey");

  req.role =
    userInfo.userRole === "admin"
      ? "admin"
      : userInfo.userRole === "superAdmin"
        ? "superAdmin"
        : "user";

  next();
};

export const isAdmin = (req, res, next) => {
  const role = req.role;

  if (role === "admin") {
    next();
  } else {
    return res.status(401).send({ message: "Not access" });
  }
};

export const isSuperAdmin = (req, res, next) => {
  const role = req.role;

  if (role === "superAdmin") {
    next();
  } else {
    return res.status(401).send({ message: "Not access" });
  }
};

export const isAdminOrSuper = (req, res, next) =>{
    const role = req.role;

  if (role === "superAdmin" || role === "admin") {
    next();
  } else {
    return res.status(401).send({ message: "Not access" });
  }
}

export const isUser = (req, res, next) => {
  const role = req.role;

  if (role === "user12") {
    next();
  } else {
    return res.status(401).send({ message: "Not access" });
  }
};
