var express =  require("express");
const userController = require("../controller/user")
var router = express.Router();

router.get("/",userController.home);
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/all_users",userController.listAllUsers);
router.get("/user/:id",userController.userProfile);
router.get("/user_delete/:id",userController.userDelete);

router.post("/regToDb",userController.regToDatabase);
router.post("/edit_profile",userController.editProfile);
module.exports = router;