import mongoose from "mongoose";

const Connection = () => {

    const MOGODB_URI = 'mongodb+srv://user:abcd1234@mern-todo.kc0lov4.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connect(MOGODB_URI, { useNewUrlParser : true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;