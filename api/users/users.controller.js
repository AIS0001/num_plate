const { insert_user,getUsers,
    getUserByid,
    updateUser,
    getUserByuserEmail 
        } = require("./users.service");
const { genSaltSync,hashSync,compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports ={

    createUser:(req,res)=>{
        const body =req.body;
       
        const salt = genSaltSync(10);
        //var password = "welcome@123" ;
        body.password=hashSync(body.password,salt);
        console.log(body.password);
      insert_user(body,(err,results)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    status:500,
                    success:0,
                    message:err
                });
            }
            return res.status(200).json({
                status:200,
                success:1,
                data:results

            });

        });
    },
    getUserByid:(req,res)=>{
        const id = req.param.id;
        getUserByid(id,(err,results)=>{
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
    getUsers:(req,res)=>{
        getUsers((err,results)=>{
            if(err)
            {
                console.log(err);
                return res.json({
                    status:500,
                    success:0,
                    message:err
                });
            }
            if(!results)
            {
                return res.json({
                    status:403,
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
    
    updateUser:(req,res)=>{
        const body =req.body;
        const salt = genSaltSync(10);
       // body.password=hashSync(body.password,salt);
        updateUser(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                success:1,
                data:"Record updates successfully"
            });
        });


    },

    

  

    login:(req,res)=>{
        const body = req.body;
        getUserByuserEmail(body.email,(err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
               return res.json({
                success:0,
                data:"Invalid Email or Password"

               }) ;
          
            }
            const result = compareSync(body.password,results.password);
            if(result)
            {
                results.password=undefined;
                const jwt = sign({result,results},process.env.SECRET_KEY,{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
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