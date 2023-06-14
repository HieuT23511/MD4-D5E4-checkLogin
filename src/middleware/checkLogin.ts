
export const checkLogin=(req:any, res:any, next)=>{
    let {username,password} = req.body;
    if(username ==='admin' && password ==='123'){
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized",
        })
    }
}