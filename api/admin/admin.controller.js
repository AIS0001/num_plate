const { create,
       getPlatePricing,
       getFittingPrice,
       getPlateType,
       insertPlateType,
        updateParty,
        deletePlatePricing,
        deleteUser,
        deletePlateType,
        insertFittingKit,
        updatePlatePricing,
        delNumPlate,
        viewSellPlate,
        getUserByuserEmail, 
        insertPlatePricing,
        insertVipPlates
     } = require("./admin.service");
const { genSaltSync,hashSync,compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports ={

   createadmin:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
   // const empid = body.empcode;
    //console.log(body.password);
   body.password=hashSync(body.password,salt);
      create(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
             success:1,
             status:200
         });
    })
},
CreateVipPlate:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
  // body.password=hashSync(body.password,salt);
   insertVipPlates(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
            status:200,
             success:1,
             status:200
         });
    })
},
CreateFittingKit:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
  // body.password=hashSync(body.password,salt);
   insertFittingKit(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
            status:200,
             success:1,
             status:200
         });
    })
},

//Insert Plate Pricing
CreatePlatepricing:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
  // body.password=hashSync(body.password,salt);
  insertPlatePricing(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
            status:200,
             success:1,
             status:200
         });
    })
},
//Insert Plate Category
CreatePlateType:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
  // body.password=hashSync(body.password,salt);
  insertPlateType(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
            status:200,
             success:1,
             status:200
         });
    })
},
      //get All Plate Pricing Name
  getPlate:(req,res)=>{
        const body =req.body;
        getPlatePricing((err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
                return res.json({
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                success:1,
                data:results 
            });
        });
    },
    getSellPlate:(req,res)=>{
        const body =req.body;
        viewSellPlate((err,results)=>{
            if(err)
            {
                return res.json({
                    status:500,
                    success:0,
                    message:"Record not found"
                });
            }
            if(!results)
            {
                return res.json({
                    status:401,
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                status:200,
                success:1,
                data:results 
            });
        });
    },
          //get All Plate Type
  getPlateTypeList:(req,res)=>{
   
    getPlateType((err,results)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        if(!results)
        {
            return res.json({
                success:0,
                message:"Record not found"
            });
        }
        return res.json({
            success:1,
            data:results 
        });
    });
},
    getFittingKit:(req,res)=>{
        const pname =req.params.partyname;
        getFittingPrice((err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
                return res.json({
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                success:1,
                data:results 
            });
        });
    },
    
    updateUserDetails:(req,res)=>{
        const body =req.body;
        updateParty(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                status:200,
                success:1,
                data:"Record updates successfully"
            });
        });
    },
    updateDeliveryDetails:(req,res)=>{
        const body =req.body;
        updateDelivery(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                status:200,
                success:1,
                data:"Record updates successfully"
            });
        });
    },
    deleteUserRecord:(req,res)=>{
        // const id = req.param.id;
        const data = req.body;
         deleteUser(data,(err,results)=>{
             if(err)
             {
                 console.log(err);
                 return;
             }
             if(!results)
             {
                 return res.json({
                    status:404,
                     success:0,
                     message:"Record not found"
                 });
             }
             return res.json({
                 status:200,
                 success:1,
                 message:"Record deleted successfully"
             })
         });
 
     },
     deleteplateType:(req,res)=>{
         // const id = req.param.id;
         const data = req.body;
         deletePlateType(data,(err,results)=>{
              if(err)
              {
                  console.log(err);
                  return;
              }
              if(!results)
              {
                  return res.json({
                    status:404,
                      success:0,
                      message:"Record not found"
                  });
              }
              return res.json({
                status:200,
                  success:1,
                  message:"Record deleted successfully"
              })
          });
  
      },
      deleteplatePricing:(req,res)=>{
         // const id = req.param.id;
         const data = req.body;
         deletePlatePricing(data,(err,results)=>{
              if(err)
              {
                  console.log(err);
                  return;
              }
              if(!results)
              {
                  return res.json({
                    status:404,
                      success:0,
                      message:"Record not found"
                  });
              }
              return res.json({
                status:200,
                  success:1,
                  message:"Record deleted successfully"
              })
          });
  
      },
      deleteNumPlate:(req,res)=>{
        // const id = req.param.id;
        const data = req.body;
        delNumPlate(data,(err,results)=>{
             if(err)
             {
                 console.log(err);
                 return;
             }
             if(!results)
             {
                 return res.json({
                   status:404,
                     success:0,
                     message:"Record not found"
                 });
             }
             return res.json({
               status:200,
                 success:1,
                 message:"Record deleted successfully"
             })
         });
 
     },
      updateplatePrice:(req,res)=>{
        const body =req.body;
        updatePlatePricing(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                status:200,
               // message:results,
                success:1,
                data:"Plate price updated"
            });
        });
    },
    
    login:(req,res)=>{
        const body = req.body;
        getUserByuserEmail(body.userid,(err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
               return res.json({
                success:0,
                data:"Invalid Userid or Password"

               }) ;
          
            }
            const result = compareSync(body.password,results.password);
            if(result)
            {
                results.password=undefined;
                const jwt = sign({result,results},"TXlMb3ZlUHJpeWFua2E",{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
                    status:200,
                    message:"logged in successfully",
                    token:jwt
                });
            }
            else{
                return res.jason({
                   
                    success:0,
                    message:"Invalid email or password"
                });

            }
        });
    }


}