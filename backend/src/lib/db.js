import mongoose, { mongo } from 'mongoose';

export async function connectDB() {
    try{
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("mongoUri is required");
        }

        const conn = await mongoose.connect(mongoUri);

        console.log('mongoDB connected : ',conn.connection.host)

    } catch(error){
        console.log('mongoDB connection Error : ',error.message);
        process.exit(1);
    }
}