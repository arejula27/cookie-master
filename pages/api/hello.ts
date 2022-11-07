import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //servidor
    console.log(req.cookies);

    res.status(200).json({ name: "Example" });
}
