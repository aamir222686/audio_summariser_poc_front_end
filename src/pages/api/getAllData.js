// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("audio_summarizer");
  const allPosts = await db.collection("audio_summarizer").find({}).toArray();
  res.json({ status: 200, data: allPosts });
}
