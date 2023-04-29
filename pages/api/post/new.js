import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("너 제목 없다");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body); // 글 작성 발행
      return res.status(200).json("완료");
    } catch (e) {
        console.log(e);
    }
  }
}
