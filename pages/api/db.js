// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "../../utils/mongodb";
import jsondb from "../../jsondb/articles";
import Article from "../../models/Article";

export default async function handler(req, res) {
  let collection = [];
  for (let i = 0; i < 20; i++) {
    collection.push({
      title: `00${i}`,
      category: "Game Programming",
      content:
        "Begonnen hat die Sliding Mechanik mit der Suche einer passenden Animation auf Mixamo (https://www.mixamo.com/#/). Daraufhin wurde diese durch ein Programm (Mixamo Converter – erriblis Studio: https://terribilisstudio.fr/?section=MC) auf das Skelett des Unreal Engine 4 Charakters gebaked. Durch dieses Baken konnte die Sliding Animation ohne Probleme im Projekt verwendet werden.",
    });
  }

  await mongodb.dbConnect();
  await Article.deleteMany();
  // await Article.insertMany(jsondb.articles);
  await Article.insertMany(collection);
  const articles = await Article.find({}).lean();

  res.send({ articles: articles });
}
