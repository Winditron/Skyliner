// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "../../utils/mongodb";
import jsondb from "../../jsondb/articles";
import Article from "../../models/Article";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Article.deleteMany();
  await Article.insertMany(jsondb.articles);
  const articles = await Article.find({}).lean();
  await mongodb.dbDisconnect();
  res.send({ articles: articles });
}
