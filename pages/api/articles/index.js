import mongodb from "../../../utils/mongodb";
import Article from "../../../models/Article";
import yupErrorFormatter from "../../../helpers/yupErrorFormatter";
import { object, string } from "yup";

export default async function handler(req, res) {
  const { method } = req;
  await mongodb.dbConnect();

  if (method === "GET") {
    try {
      const articles = await Article.find();
      if (articles) {
        res.status(200).json(article);
      } else {
        res
          .status(400)
          .json({ error: "Artikel konnten nicht gefunden werden." });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    let validationSchema = object({
      title: string().trim().min(3).max(50).required(),
      category: string()
        .oneOf(["Audio", "Game Design", "Game Programming", "Web Design"])
        .required(),
      content: string().trim().required(),
    });

    try {
      await validationSchema.validate(req.body, { abortEarly: false });
      const article = await Article.create(req.body);
      res.status(201).json({
        message: "Der Artikel wurde erfolgreich erstellt.",
        data: article,
      });
    } catch (errors) {
      //validation
      if (errors.inner) {
        res.status(500).json(yupErrorFormatter(errors));
      }

      res.status(500).json(errors);
    }
  }
}
