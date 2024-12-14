import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://tejasgambhir2003:Tejas_1234@cluster0.lgbmx.mongodb.net/');
        console.log('MongoDB connected...');
    } catch (error) {
        console.error("it's not connecting : ",error.message);
        process.exit(1);
    }
}
connectDB();// this async function returns a promise