const UserModel = require("../model/user");

exports.create = async (req, res) => {
  if (
    !req.body.email &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone
  ) {
    res.status(400).send({ message: "Content can not be empty" });
  }

  const user = new UserModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "User created successfully",
        user: data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};
