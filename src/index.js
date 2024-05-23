import dotenv from 'dotenv';
import connectDb from './dbConnection.js';
import express from 'express';
dotenv.config({
    patht: './.env',
});

const app = express();


const port = process.env.PORT || 7000;

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on PORT ${port}}`);
        });
    })
    .catch((err) => {
        console.log('Mongo db connection error :', err);
    });
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

