// client에서 useRoute를 이용한 페이지 이동 테스트 페이지
// server 컴포넌트에서는 useRoute 사용이 불가능 하기 때문에  client 컴포넌트에서 테스트 사용
'use client';

import { useRouter } from "next/navigation";

export default function DetailLink() {
    let router = useRouter(); // client 컴포넌트에서만 사용 가능

    return (
        <div>
            <button onClick={() => {router.push('/')}}>버튼</button>
        </div>
    )
}


// router.push('/경로') -> 그 경로로 페이지 이동
// router.back() -> 뒤로가기
// router.forward() -> 앞으로 가기
// router.refresh() -> 새로고침 : but 페이지를 처음부터 로드를 하는것이 아니라 이전에 변경된 부분만 새로고침 해준다 공식문서에서는 soft refresh라고 함
// router.prefetch('/경로) -> /경로의 내용을 미리 로드 한다. 페이지 방문 시 매우 빠르게 이동 할 수 있다. 빠른 웹 페이지를 만들 때 유용함
