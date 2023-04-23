import { MongoClient } from "mongodb";

const url = "mongodb+srv://admin:w3130698@cluster0.ecff9zv.mongodb.net/?retryWrites=true&w=majority";
const options = {useNewURLParser : true};
let connectDB;

if(process.env.NODE_ENV === 'development') {
    if(!global._mongo) {
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect();
}

export {connectDB};


// connect 많이 실행하면 큰일남
// Next js 서버 띄울 떄 1번만 실행하면 좋음
