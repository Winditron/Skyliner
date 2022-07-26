import mongodb from "../../../utils/mongodb";
import Article from "../../../models/Article";
import Articlelist from "../../../components/admin/article/Articlelist";
import { Container } from "react-bootstrap";
import ArticleActionBar from "../../../components/admin/article/ArticleActionBar";
import ErrorAndSuccess from "../../../components/ErrorAndSuccess";

export default function index({ articles }) {
  return (
    <>
      <section className="bg-5-gradient-2">
        <Container className=" d-flex justify-content-center align-items-center  py-7">
          <div className="w-100">
            <ErrorAndSuccess />
            <h1>Artikel</h1>
            <ArticleActionBar className="py-3" />
            <Articlelist articles={articles} />
          </div>
        </Container>
      </section>
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
