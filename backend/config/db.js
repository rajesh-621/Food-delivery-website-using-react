import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rajeshsaw:9971739972@cluster0.4ed1hfg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}