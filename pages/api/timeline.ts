import type { NextApiRequest, NextApiResponse } from "next";
import type { Timeline } from "@/types/Timeline";

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<Timeline>
) => {
  response.status(200).json({ name: "John Doe" });
};

export default handler;
