import { Modal, Button } from "react-bootstrap";
import ArticleService from "../../../services/ArticleService";
import { useDispatch } from "react-redux";
import { displaySuccess } from "../../../redux/errorAndSuccessSlice";

export default function DeleteModal(props) {
  const { article, onHide, onDel } = props;
  const dispatch = useDispatch();

  const deleteArticle = async () => {
    await ArticleService.delete(article._id);
    dispatch(displaySuccess("Der Artikel konnte gelöscht werden!"));
    onHide();
    onDel(article._id);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-purple">
        <Modal.Title id="contained-modal-title-vcenter">
          Artikel löschen!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark-blue">
        <h5>Möchtest du wirklich den Artikel löschen?</h5>
        <p>{article?.title}</p>
      </Modal.Body>
      <Modal.Footer className="bg-purple">
        <Button onClick={deleteArticle} variant="outline-light-red">
          Löschen
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
