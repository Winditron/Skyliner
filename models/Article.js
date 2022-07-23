import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      max: 50,
      min: 3,
      required: true,
    },
    category: {
      type: String,
      enum: ["Web Design", "Audio", "Game Programming", "Game Design"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
