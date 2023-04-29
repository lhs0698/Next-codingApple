// 유저에게 날짜와 시간 보내주는 서버기능

export default function Today() {

  return (
    <div>
      <h4>현재시간</h4>
      <form action="/api/date" method="POST">
        <button type="sumbit">시간 보여줘</button>
      </form>
    </div>
  );
}
