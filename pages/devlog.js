import Timeline from "../components/devlog/Timeline";
import mongodb from "../utils/mongodb";
import Article from "../models/Article";

export default function devlog({ articles }) {
  return (
    <>
      <Timeline className="bg-4-gradient-2" articles={articles} />
    </>
  );
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const articles = await Article.find({}).lean();
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
}
