import {
  Card,
  Form,
  Container,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import mongodb from "../../../../utils/mongodb";
import Article from "../../../../models/Article";
import ArticleService from "../../../../services/ArticleService";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CategorySelect from "../../../../components/admin/article/form/CategorySelect";
import ContentEditor from "../../../../components/admin/article/form/ContentEditor";
import TitleInput from "../../../../components/admin/article/form/TitleInput";
import ErrorAndSuccess from "../../../../components/ErrorAndSuccess";
import { useDispatch } from "react-redux";
import {
  displayError,
  displaySuccess,
} from "../../../../redux/errorAndSuccessSlice";

export default function edit({ article }) {
  const dispatch = useDispatch();

  const schema = yup
    .object({
      title: yup.string().trim().min(3).max(50).required(),
      category: yup
        .string()
        .oneOf(["Audio", "Game Design", "Game Programming", "Web Design"])
        .required(),
      content: yup.string().trim().required(),
    })
    .required();

  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const update = await ArticleService.update(article._id, data);

    if (update.errors) {
      Object.keys(update.errors).map((field) => {
        setError(field, update.errors[field]);
      });
      dispatch(displayError("Der Artikel konnte nicht gespeichert werden!"));
    } else {
      dispatch(
        displaySuccess("Der Artikel konnte erfolgreich gespeichert werden!")
      );
    }
  };

  return (
    <section className="bg-7-dark-blue py-7">
      <Container>
        <ErrorAndSuccess />
        <Card>
          <Card.Header>
            <h1>Artikel bearbeiten</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Button
                Button
                variant="outline-yellow"
                type="submit"
                className="mb-3"
              >
                SPEICHERN
              </Button>

              <Row>
                <Col xs={12} md={9} lg={{}}>
                  <TitleInput
                    defaultValue={article.title}
                    register={register}
                    error={errors.title}
                  />
                </Col>
                <Col xs={12} md={3}>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue={article.category}
                    render={({ field }) => (
                      <CategorySelect {...field} error={errors.category} />
                    )}
                  />
                </Col>
              </Row>
              <Controller
                name="content"
                control={control}
                defaultValue={article.content}
                render={({ field: { onChange } }) => (
                  <ContentEditor
                    onEditorChange={onChange}
                    error={errors.content}
                    initialValue={article.content}
                  />
                )}
              />
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  await mongodb.dbConnect();
  const article = await Article.findById(id).lean();
  return {
    props: {
      article: JSON.parse(JSON.stringify(article)),
    },
  };
}
