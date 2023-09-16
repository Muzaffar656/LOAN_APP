const JWT = require('jsonwebtoken')
const tokenhandler = async(req,res,next)=>{
    try {
        const token =  req.headers.Authorization || req.headers.authorization;
    if(!token){
        res.status(404).json({
            message:"Validation False"
        })
    }
    JWT.verify(token,process.env.JWT_KEY,(err,decode)=>{
    if(err){
        res.json({
            message:"Token is not vaklid"
        })
    }
    req.user = decode.user

    console.log(decode)
    next()
   })
    } catch (error) {
        console.log(error)
    }
}

module.exports = tokenhandler