const { createUser,
    getUsers,
    getUserByid,
    updateUser,
    
    login
    } = require("./users.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/insertusers",createUser);
router.get("/getusers",getUsers);
router.get("/getpartyDetails",checkToken,getUsers);
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);



router.post("/login",login);

module.exports = router;