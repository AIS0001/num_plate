const { getFittingKit,
        getPlate,
        CreatePlateType,
        getPlateTypeList,
        CreateVipPlate,
        CreatePlatepricing,
        CreateFittingKit,
        createadmin,
        deleteUserRecord,
         deleteplateType,
         deleteNumPlate,
         getSellPlate,
         updateplatePrice,
         deleteplatePricing,
        login,
        updateUserDetails
} = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { validate } = require("../../validation/form_validation");

router.post("/",createadmin);
router.post("/insertplateprice",CreatePlatepricing); 
router.post("/getplatetype",getPlateTypeList); 
router.post("/insertplatetype",CreatePlateType); 
router.post("/insertfittingprice",CreateFittingKit); 
router.post("/insertvipplate",CreateVipPlate); 
router.post("/getfittingkit",getFittingKit); 
router.post("/getplate",getPlate); 
router.post("/updateuser",updateUserDetails); 

router.post("/sellplate",getSellPlate); 

router.post("/deleteuser",deleteUserRecord); 
router.post("/deleteplatetype",deleteplateType); 
router.post("/deleteplatepricing",deleteplatePricing); 
router.post("/deletenumplate",deleteNumPlate); 
router.post("/updateplateprice",updateplatePrice); 



/*
router.post("/updateparty",updateUserDetails);
router.post("/updatedelivery",updateDeliveryDetails);
router.post("/deleteparty",deletePartyRecord);
router.post("/deletedelivery",deleteDeliveryRecord);*/
/*
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);*/
router.post("/login",login);

module.exports = router;