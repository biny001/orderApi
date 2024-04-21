import Owner from "../models/Owner.js";

const createOwner = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, propertiesOwned } =
      req.body;

    const newUser = new Owner({
      firstName,
      lastName,
      email,
      phoneNumber,
      propertiesOwned,
    });

    await newUser.save();

    res.status(201).json(newUser); // Send a JSON response with the newly created user
  } catch (error) {
    console.error("Error creating owner:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createOwner };
