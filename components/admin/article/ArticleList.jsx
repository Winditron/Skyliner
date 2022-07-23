import { Button, Table } from "react-bootstrap";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import ArticleService from "../../../services/ArticleService";

export default function ArticleList({ className, articles }) {
  const [modalShow, setModalShow] = useState(false);

  const deleteArticle = async (id) => {
    setModalShow(false);

    await ArticleService.delete(id);
  };

  return (
    <Table variant="dark" striped bordered hover className={`${className}`}>
      <thead>
        <tr>
          <th>#</th>
          <th>Titel</th>
          <th>Kategorie</th>
          <th>Erstellt am</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {articles?.map((article, index) => (
          <tr key={article.title}>
            <td>{index + 1}</td>
            <td>
              <Link href={`/admin/article/${article._id}/edit`}>
                {article.title}
              </Link>
            </td>
            <td>{article.category}</td>
            <td>{article.createdAt}</td>
            <td>
              <div className="d-flex ">
                <Link href={`/admin/article/${article._id}/edit`}>
                  <a>
                    <PencilIcon className="h-1r" />
                  </a>
                </Link>
                <Button variant="link" onClick={() => setModalShow(true)}>
                  <TrashIcon className="h-1r" />
                </Button>
                <DeleteModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  onDelete={() => {
                    deleteArticle(article._id);
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
