import mongodb from "../../../utils/mongodb";
import Article from "../../../models/Article";
import { object, string } from "yup";
import yupErrorFormatter from "../../../helpers/yupErrorFormatter";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await mongodb.dbConnect();

  if (method === "PUT") {
    let validationSchema = object({
      title: string().trim().min(3).max(50).required(),
      category: string()
        .oneOf(["Audio", "Game Design", "Game Programming", "Web Design"])
        .required(),
      content: string().trim().required(),
    });

    try {
      await validationSchema.validate(req.body, { abortEarly: false });
      const article = await Article.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (article) {
        res.status(200).json({
          message: "Der Artikel wurde erfolgreich gespeichert.",
          data: article,
        });
      } else {
        res
          .status(400)
          .json({ error: "Artikel konnte nicht gefunden werden." });
      }
    } catch (errors) {
      //validation
      if (errors.inner) {
        res.status(500).json(yupErrorFormatter(errors));
      }

      res.status(500).json(errors);
    }
  }

  if (method === "DELETE") {
    try {
      const article = await Article.findByIdAndDelete(id);
      if (article) {
        res
          .status(200)
          .json({ message: "Der Artikel wurde erfolgreich gelöscht." });
      } else {
        res
          .status(400)
          .json({ error: "Artikel konnte nicht gefunden werden." });
      }
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
}
