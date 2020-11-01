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
         
         updateplatePrice,
         deleteplatePricing,
        login,
        updateUserDetails
} = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { validate } = require("../../validation/form_validation");

router.post("/",createadmin);
router.post("/insertplateprice",checkToken,CreatePlatepricing); 
router.post("/getplatetype",checkToken,getPlateTypeList); 
router.post("/platetype",checkToken,CreatePlateType); 
router.post("/insertfittingprice",checkToken,CreateFittingKit); 
router.post("/insertvipplate",checkToken,CreateVipPlate); 
router.post("/getfittingkit",checkToken,getFittingKit); 
router.post("/getplate",checkToken,getPlate); 
router.post("/updateuser",checkToken,updateUserDetails); 

router.post("/deleteuser",checkToken,deleteUserRecord); 
router.post("/deleteplatetype",checkToken,deleteplateType); 
router.post("/deleteplatepricing",checkToken,deleteplatePricing); 
router.post("/deletenumplate",checkToken,deleteNumPlate); 
router.post("/updateplateprice",checkToken,updateplatePrice); 


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