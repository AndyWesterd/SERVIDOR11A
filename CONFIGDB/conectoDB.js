import mongoose from "mongoose";

const uri = "mongodb+srv://mateus569:Jf56$m4t3us@cluster0.c37wh4s.mongodb.net/bdatos?retryWrites=true&w=majority&appName=Cluster0"

export const conectoDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Conexion exitosa a la BD");
    } catch (error) {
        console.log("Error al conectar a la BD: ", error);
    }
}
