import mongoose from 'mongoose';

let isConnected: boolean = false;

export async function connectToDB() {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI??"", {
            dbName: process.env.MONGODB_DB??"",
        });
        isConnected = true;
        console.log('=> using new database connection');
    } catch (err) {
        console.log(err);
    }
};