export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}>
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="btn-yes" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn-no" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
