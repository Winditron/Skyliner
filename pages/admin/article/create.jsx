import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";

import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import CategorySelect from "../../../components/admin/article/form/CategorySelect";
import ContentEditor from "../../../components/admin/article/form/ContentEditor";
import TitleInput from "../../../components/admin/article/form/TitleInput";
import ArticleService from "../../../services/ArticleService";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import {
  displayError,
  displaySuccess,
} from "../../../redux/errorAndSuccessSlice";
import ErrorAndSuccess from "../../../components/ErrorAndSuccess";

export default function create() {
  const router = useRouter();
  const dispatch = useDispatch;

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
    formState: { errors },
    handleSubmit,
    register,
    control,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const create = await ArticleService.create(data);
    // const create = { data: { _id: "62db00dd2eed266c86c7c1f8" } };

    if (create.errors) {
      Object.keys(create.errors).map((field) => {
        setError(field, create.errors[field]);
      });
      dispatch(displayError("Der Artikel konnte nicht erstellt werden!"));
    } else {
      router.push(`${create.data._id}/edit`);
      //  Kann nicht nach einem dispatch die route ändern
      //  dispatch(
      //   displaySuccess("Der Artikel konnte erfolgreich erstellt werden!")
      // );
    }
  };

  return (
    <section className="bg-7-dark-blue py-7">
      <Container>
        <ErrorAndSuccess />
        <Card>
          <Card.Header>
            <h1>Artikel erstellen</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Button variant="outline-yellow" type="submit" className="mb-3">
                ERSTELLEN
              </Button>
              <Row>
                <Col xs={12} md={9} lg={{}}>
                  <TitleInput register={register} error={errors.title} />
                </Col>
                <Col xs={12} md={3}>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <CategorySelect {...field} error={errors.category} />
                    )}
                  />
                </Col>
              </Row>
              <Controller
                name="content"
                control={control}
                render={({ field: { onChange } }) => (
                  <ContentEditor
                    onEditorChange={onChange}
                    error={errors.content}
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
