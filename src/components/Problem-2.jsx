import React, { useState } from "react";
import CustomModal from "./ModalComponent";
import ModalComponent from "./ModalComponent";

const Problem2 = () => {
  // CONTACT_DATA STATE
  const [allContactData, setAllContactData] = useState([]);

  // FETCH DATA FUNCTION
  const handleFetchData = async (url) => {
    const res = await fetch(url);
    const { results } = await res.json();
    setAllContactData(results);
  };

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
            onClick={() =>
              handleFetchData(
                "https://contact.mediusware.com/api/contacts/?format=json"
              )
            }
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#us-contact"
            onClick={() =>
              handleFetchData(
                "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
              )
            }
          >
            US Contacts
          </button>
        </div>

        {/* ALL CONTACT MODAL */}
        <ModalComponent
          headerButton={
            <>
              <button type="button" class="btn btn-primary">
                All Contact
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#us-contact"
                onClick={() =>
                  handleFetchData(
                    "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
                  )
                }
              >
                Us Contact
              </button>
            </>
          }
          modalId="all-contact"
          modalTitle="All Contacts"
        >
          {allContactData?.map((contact) => (
            <div key={contact.id}>
              <h5>Phone: {contact.phone}</h5>
              <p>Country: {contact.country.name}</p>
            </div>
          ))}
        </ModalComponent>

        {/* US CONTACT MODAL */}
        <ModalComponent
          headerButton={
            <>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#all-contact"
                onClick={() =>
                  handleFetchData(
                    "https://contact.mediusware.com/api/contacts/?format=json"
                  )
                }
              >
                All Contact
              </button>
              <button type="button" class="btn btn-primary">
                Us Contact
              </button>
            </>
          }
          modalId="us-contact"
          modalTitle="US Contacts"
        >
          {allContactData?.map((contact) => (
            <div key={contact.id}>
              <h5>Phone: {contact.phone}</h5>
              <p>Country: {contact.country.name}</p>
            </div>
          ))}
        </ModalComponent>
      </div>
    </div>
  );
};

export default Problem2;
