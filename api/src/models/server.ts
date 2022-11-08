import express, {Application, Request , Response} from "express";
import productRoutes from "../routes/product"
import db from "../db/connection"

class Server {
private app: Application;
private port: string

constructor() {    
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.routes();
    this.dbConnect();
}
listen() {
    this.app.listen(this.port, () => {
        console.log(`Aplicacion corriendo en el puerto ${this.port}`)
    })
}

routes(){
    this.app.get('/' , (req: Request,res: Response) => {
            res.json({msg: 'API Working'})
    })
    this.app.use("/api/product", productRoutes)
}

async dbConnect() {
   await db.authenticate()
   console.log("base de datos");
}
}

export default Server;