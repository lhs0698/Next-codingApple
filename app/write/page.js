// 글 작성 페이지

export default function Write() {
  return (
    <div>
      <h4>글 작성</h4>
      <form action="/api/test" method="POST">
        <button type="submit">POST 버튼</button>
      </form>

      <form action="/api/test" method="GET">
        <button type="submit">GET 버튼</button>
      </form>
    </div>
  );
}
