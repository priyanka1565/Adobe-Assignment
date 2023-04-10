const express = require("express");
const router = express.Router();
// Import controller for user
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController")

router.post("/createuser", createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
