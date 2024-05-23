import mongoose from 'mongoose';
const dbName = 'basicRestCrud';

const connectDb = async () => {
    try {
        const connectionInctanse = await mongoose.connect(`${process.env.DATABASE_URL}/${dbName}`);
        console.log(`\n MOngo db is connected on DB host : ${connectionInctanse.connection.host}`);
    } catch (error) {
        console.log('MongoDb connection error', error);
    }
};

export default connectDb;