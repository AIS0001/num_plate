const pool = require("../../config/database");

module.exports = {
    create:(data,callback)=>{
        pool.query(
            `INSERT INTO admin (userid,password,type) 
            VALUES ( ?, ?, ?)`,
        [
            data.userid,
            data.password,
            data.type,
         
        ],
        (error,results,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,results);
        }

        );
    },
//add vip plate data
insertVipPlates:(data,callback)=>{
    pool.query(
        `INSERT INTO vip_plates ( title, plateno, price, description, flag) 
        VALUES ( ?, ?, ?, ?, ?);`,
    [
        data.title,
        data.plateno,
        data.price,
        data.description,
        data.flag
    ],
    (error,results,fields)=>{
        if(error)
        {
            return callback(error);
        }
        return callback(null,results);
    }

    );
},

//Insert Fitting Kit Data
insertFittingKit:(data,callback)=>{
    pool.query(
        `INSERT INTO fitting_kit (name, price, type) VALUES ( ?, ?, ?);`,
    [
        data.name,
        data.price,
        data.type
    ],
    (error,results,fields)=>{
        if(error)
        {
            return callback(error);
        }
        return callback(null,results);
    }

    );
},
//Insert Plate Pricinf  Data
insertPlatePricing:(data,callback)=>{
    pool.query(
        `INSERT INTO plate_pricing (name, price, type) VALUES ( ?, ?, ?);`,
    [
        data.name,
        data.price,
        data.type
    ],
    (error,results,fields)=>{
        if(error)
        {
            return callback(error);
        }
        return callback(null,results);
    }

    );
},    
//Insert Plate Pricinf  Data
insertPlateType:(data,callback)=>{
    pool.query(
        `INSERT INTO plate_type (type,price) VALUES ( ?, ?);`,
    [
        data.type,
        data.price
    ],
    (error,results,fields)=>{
        if(error)
        {
            return callback(error);
        }
        return callback(null,results);
    }

    );
},  
 getFittingPrice:(callback)=>{
        pool.query(`SELECT * FROM fitting_kit`,
        [],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    getPlateType:(callback)=>{
        pool.query(`SELECT * FROM plate_type`,
        [],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    getPlatePricing:(callback)=>{
        pool.query(`SELECT * FROM plate_pricing`,
        [],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    getUsers:callback=>{
        pool.query(`select * from admin`,
        [

        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    viewSellPlate:callback=>{
        pool.query(`select * from sell order by id DESC`,
        [

        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    getUserByid:(id,callback)=>{
        pool.query(`select * from admin where id=?`,
        [id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    updateParty:(data,callback)=>{
        pool.query(`UPDATE party SET comp_name = "dsfsdf", cust_name = "piaaa", contact = 554, city = "1dsd", pincode = "586786" WHERE id =31`,
        [
          
        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        });
    },
    updateDelivery:(data,callback)=>{
        pool.query(`UPDATE delivery SET type= ?,invoice= ?,party= ?,qty= ?,amount= ?,Remark= ? WHERE id =?`,
        [
            data.type,
            data.invoice,
            data.party,
            data.qty,
            data.amount,
            data.Remark ,
            data.id
        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        });
    },
    deleteUser:(data,callback)=>{
        pool.query(`delete from users where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    deletePlateType:(data,callback)=>{
        pool.query(`delete from plate_type where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    deletePlatePricing:(data,callback)=>{
        pool.query(`delete from plate_pricing where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    delNumPlate:(data,callback)=>{
        pool.query(`delete from number_plate where id=?`,
        [data.id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    updatePlatePricing:(data,callback)=>{
         pool.query(`update plate_pricing set name= ?, price= ?, type= ? where id= ?`,
        [
            data.name,
            data.price,
            data.type,
            data.id
        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callack(error);
            }
            return callback(null,results);
        }
        );
    },
  
    getUserByuserEmail:(userid,callack)=>{
        pool.query(
            `select * from admin where userid = ?`,
            [userid],
            (error,results,fields)=>{
                if(error)
                {
                    callack(error);
                }
                return callack(null,results[0]);
            }
        );
    }

};