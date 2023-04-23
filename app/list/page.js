import { connectDB } from "@/util/database";
import Link from "next/link";

import DetailLink from "./DetailLink";

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
              <Link href={'/detail/' + result[i]._id}>
                <h4>{list.title}</h4>
              </Link>
              <p>{list.content}</p>
              <DetailLink/>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// <Link href={'/detail/' + result[i]._id}>
// dynamic route를 사용 /list페이지에서 글제목을 누르면 알맞은 상세페이지로 이동할 수 있게 하는 링크 코드


// 1. 여러페이지를 만들려면 Dynamic route 
// 2. 현재 URL이 뭔지 궁금하다면 useRoute
// 3. 페이지 이동, prefetch 기능은 useRoute