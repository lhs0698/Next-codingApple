import { connectDB } from "@/util/database"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray(); //컬렉션의 모든 document들을 꺼내오기
  // post 컬렉션에 있는 모든 데이터를 가져와서 array로 변환해 주세요라는 코드

  // console.log(result);

  return (
    <div></div>
  )
}


// DB입출력하는 코드는 server component 안에서만 사용합시다. 

// client component 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문에 그렇습니다. 

