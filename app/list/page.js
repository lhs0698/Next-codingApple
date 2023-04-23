import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      <div className="list-bg">
        {result.map((list, i) => {
          return (
            <div className="list-item" key={i}>
              <h4>{list.title}</h4>
              <p>{list.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
