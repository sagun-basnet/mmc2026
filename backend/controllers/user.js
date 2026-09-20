export const getUser = (req, res) => {
  res.send("I am from Get Request.");
};

export const postUser = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  res.send({ username: username, password: password });
};
