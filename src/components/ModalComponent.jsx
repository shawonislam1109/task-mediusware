import React, { useState } from "react";
import { Modal } from "bootstrap";

const ModalComponent = ({
  headerButton,
  modalId,
  modalTitle,
  allContactData,
}) => {
  // ===========|| search data input ||=========
  const [searchValue, setSearchValue] = useState("");

  // ===========||  search data  ||=========
  const searchData = allContactData.filter((data) => {
    return data?.country?.name
      ?.toLowerCase()
      .startsWith(searchValue.toLowerCase());
  });

  return (
    <div className="modal fade" id={modalId} aria-hidden="true" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>

            {headerButton}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              style={{
                backgroundColor: "white",
                color: "#46139f",
                border: "#46139f",
              }}
            >
              Close
            </button>
          </div>
          {/* search  input */}
          <div className="input-group input-group-sm mb-3 mr-3 ml-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Search
            </span>
            <input
              type="text"
              onChange={({ target: { value } }) => setSearchValue(value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="modal-body">
            {searchValue.length > 0
              ? searchData?.map((contact) => (
                  <div key={contact.id}>
                    <h5>Country: {contact.country.name}</h5>
                    <p>Phone: {contact.phone}</p>
                  </div>
                ))
              : allContactData?.map((contact) => (
                  <div key={contact.id}>
                    <h5>Country: {contact.country.name}</h5>
                    <p>Phone: {contact.phone}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
