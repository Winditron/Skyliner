import { Button, Table } from "react-bootstrap";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

import Paginator from "../../Paginator";

export default function ArticleList({ className, articles }) {
  //DeleteModal
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState();

  //handleDelete
  const handleDelete = (id) => {
    const index = articles.findIndex((article) => article._id === id);
    articles.splice(index, 1);
  };

  //Pagination
  const [articlePerPage, setArticlePerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItem = currentPage * articlePerPage;
  const firstItem = lastItem - articlePerPage;
  const currentArticles = articles.slice(firstItem, lastItem);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  //generate listItems
  const listItems = currentArticles?.map((article, index) => (
    <tr key={article._id}>
      <td>{firstItem + index + 1}</td>
      <td>
        <Link href={`/admin/article/${article._id}/edit`}>{article.title}</Link>
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
          <Button
            variant="link"
            onClick={() => {
              setModalShow(true);
              setModalData(article);
            }}
          >
            <TrashIcon className="h-1r" />
          </Button>
        </div>
      </td>
    </tr>
  ));

  for (let i = 0; listItems.length < articlePerPage; i++) {
    listItems.push(
      <tr key={i}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <>
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
          {listItems}
          <tr>
            <td colSpan={5} className="text-center">
              <Paginator
                items={articles}
                perPage={articlePerPage}
                currentPage={currentPage}
                changePage={paginate}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <DeleteModal
        show={modalShow}
        article={modalData}
        onHide={() => setModalShow(false)}
        onDel={(id) => handleDelete(id)}
      />
    </>
  );
}
