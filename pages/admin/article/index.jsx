import mongodb from "../../../utils/mongodb";
import Article from "../../../models/Article";
import Articlelist from "../../../components/admin/article/Articlelist";
import { Container } from "react-bootstrap";
import ArticleActionBar from "../../../components/admin/article/ArticleActionBar";

export default function index({ articles }) {
  return (
    <>
      <section className="bg-5-gradient-2">
        <Container className=" d-flex justify-content-center align-items-center vh-100 ">
          <div className="d-block w-100">
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
