import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

const Problem2 = () => {
  // ====================||contact data||=================
  const [allContactData, setAllContactData] = useState([]);

  // =====================||fetch data function||===============
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const { results } = await res.json();
      setAllContactData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //   ==================|| onchange value handler ||=================
  const handleModalButtonClick = (url) => () => fetchData(url);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#all-contact"
            onClick={handleModalButtonClick(
              "https://contact.mediusware.com/api/contacts/?format=json"
            )}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#us-contact"
            onClick={handleModalButtonClick(
              "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
            )}
          >
            US Contacts
          </button>
        </div>

        {/* ALL CONTACT MODAL */}
        <ModalComponent
          headerButton={
            <>
              <button
                type="button"
                className="btn btn-primary"
                style={{ color: "#46139f" }}
              >
                All Contact
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#us-contact"
                style={{ color: "#ff7f50" }}
                onClick={handleModalButtonClick(
                  "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
                )}
              >
                Us Contact
              </button>
            </>
          }
          modalId="all-contact"
          modalTitle="All Contacts"
          allContactData={allContactData}
        />

        {/* US CONTACT MODAL */}
        <ModalComponent
          headerButton={
            <>
              <button
                type="button"
                className="btn btn-primary "
                data-bs-toggle="modal"
                data-bs-target="#all-contact"
                onClick={handleModalButtonClick(
                  "https://contact.mediusware.com/api/contacts/?format=json"
                )}
                style={{
                  border: "#46139f",
                  color: "#46139f",
                }}
              >
                All Contact
              </button>

              <button
                style={{ color: "#ff7f50" }}
                type="button"
                className="btn btn-primary"
              >
                Us Contact
              </button>
            </>
          }
          modalId="us-contact"
          modalTitle="US Contacts"
          allContactData={allContactData}
        />
      </div>
    </div>
  );
};

export default Problem2;
