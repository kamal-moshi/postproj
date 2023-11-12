
import mongoose from "mongoose";

export const startSevrer=async(app,port,uri)=>{
    try {
        await mongoose.connect(uri)
        console.log("connection/ established");
        app.listen(port,()=>{//
            console.log("running in a port "+port)
        })
    } catch (err) {
        console.log("connection error");
    }
}
