import { connectDB } from "@/util/database";

export default async function handler(req,res) {

//   const client = await connectDB;
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  res.status(200).json(result);
//   console.log(result)
};


// mongoDB에 있는 데이터 가져오기
