const checkBody = (req, res, next)=>{
    if(req.body.username || !req.body.username.trim()){
        return res.status(401).json({
            message:"username is required"
        })
    }

    if(!req.body.password || !req.body.password.trim()){
        return res.status(401).json({
            message:"passwore is reqired"
        })
    }
    next()
}

module.exports = (checkBody)