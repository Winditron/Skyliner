import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideErrorSuccess } from "../redux/errorAndSuccessSlice";

export default function ErrorAndSuccess() {
  const dispatch = useDispatch();
  const { display, type, message } = useSelector(
    (state) => state.errorAndSuccess
  );

  if (display) {
    setTimeout(() => {
      dispatch(hideErrorSuccess());
    }, 5000);
  }

  if (display && type === "error") {
    return (
      <Alert
        variant="danger"
        onClose={() => dispatch(hideErrorSuccess())}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    );
  }

  if (display && type === "success") {
    return (
      <Alert
        variant="success"
        onClose={() => dispatch(hideErrorSuccess())}
        dismissible
      >
        <Alert.Heading>Aktion erfolgreich!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
}
