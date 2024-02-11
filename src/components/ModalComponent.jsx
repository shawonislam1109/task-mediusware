import React from "react";
import { Modal } from "bootstrap";

const ModalComponent = ({ headerButton, modalId, modalTitle, children }) => {
  return (
    <div className="modal fade" id={modalId} aria-hidden="true" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>

            <div className="btn-group">
              {headerButton}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
