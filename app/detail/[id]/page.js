// dynamic route 사용

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  console.log(props.params.id)

//   console.log(result);

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <div>{result.content}</div>
    </div>
  );
}







  // db.collection(컬렉션명).findOne(찾을document내용)
  //  게시물 하나를 정확히 찾아오고 싶을 땐
  // .findOne({ _id: ObjectId('63ce8d2b10e3e9fd2d7e0c0b') }) 이렇게 _id로 가져와서 보여주는게 좋습니다.
  // _id는 document마다 유니크해서 그렇다.
