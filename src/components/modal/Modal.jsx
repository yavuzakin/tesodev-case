import "./modal.css";

function Modal({ modalHandler, setOrderMethod }) {
  return (
    <ul className="modal-list">
      <li
        onClick={() => {
          modalHandler();
          setOrderMethod(1);
        }}
        className="modal-list-item"
      >
        Name ascending
      </li>
      <li
        onClick={() => {
          modalHandler();
          setOrderMethod(2);
        }}
        className="modal-list-item"
      >
        Name descending
      </li>
      <li
        onClick={() => {
          modalHandler();
          setOrderMethod(3);
        }}
        className="modal-list-item"
      >
        Year ascending
      </li>
      <li
        onClick={() => {
          modalHandler();
          setOrderMethod(4);
        }}
        className="modal-list-item"
      >
        Year descending
      </li>
    </ul>
  );
}

export default Modal;
