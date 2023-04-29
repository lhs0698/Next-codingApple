// 서버 기능 만들기

export default function handler(req, res) {

    if(req.method === "POST" ) {
        return res.status(200).json('POST 처리 완료')
    };

};

