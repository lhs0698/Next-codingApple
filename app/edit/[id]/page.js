import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  //   console.log(props);

  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  //   console.log(result);

  await db
    .collection("post")
    .updateOne({ _id: 1 }, { $set: { title: "바보", content: "멍청이" } });
  // document 수정 방법 updateOne

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="글 제목" defaultValue={result.title} />
        <input
          name="content"
          placeholder="글 내용"
          defaultValue={result.content}
        />
        <input
          style={{display: 'none'}}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <button type="submit">전송</button>
      </form>
    </div>
  );
}
