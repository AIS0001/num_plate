
const { check, validationResult } = require('express-validator');
 

module.exports = {
    validate:(req,res,next)=>{
        check('name','Name required').required();
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    }
};
