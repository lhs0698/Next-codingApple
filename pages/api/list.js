import { connectDB } from "@/util/database";

export default async function ListTest() {

//   const client = await connectDB;
  const db = (await connectDB).db("forum");
  
  let result = await db.collection("post").find().toArray();

//   console.log(result)
  return (
    <div>
        <div>{result}</div>
    </div>
  )
}
