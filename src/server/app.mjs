import express from "express";
const app = express();
import multer from "multer";
import userRoute from '../routes/userRoutes.js'
// global middleware----------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());


// route based middleware--------------------------------------------------------

app.use("/",userRoute)

export default app;