// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAuth} from '@clerk/nextjs/server'
export default function handler(req, res) {
  const { userId } = getAuth(req);
  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  res.status(200).json({ name: 'John Doe' })
}
