
export class HomeControllers {
    static async logIn(req:any,res:any){
        res.status(200).json({
            message: "Login successfully!"
        })
    }
}