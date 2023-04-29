import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {

    let change = { title : req.body.title , content : req.body.content}

    const db = (await connectDB).db("forum");
    let result = await db.collection("post").updateOne(
        { _id : new ObjectId(req.body._id)},
        { $set : change }
        );
        console.log(result);

        res.status(200).json('수정 완료')
  }
}

// document 수정은 updateOne 사용
// 서버에 필요한 데이터가 없다면 1. 유저한테 보내라고 한다. 2. DB 조회
