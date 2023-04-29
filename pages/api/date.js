// 유저에게 현재 날짜, 현재 시간을 보내주는 서버기능 

export default function handler(req, res) {

    const today = new Date().toISOString();

    // if(req.method === "POST" ) {
    //     return res.status(200).json(today);
    // };
    res.status(200).json(today);

};
