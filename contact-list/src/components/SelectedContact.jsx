import { useState } from "react";
import { useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, []);
  console.log("contact: ", contact);
  return (
    <>
      <h2>More Info</h2>
      <div className="container">
        <p>Full Name: {contact.name}</p>
        <p>Email Address: {contact.email}</p>
        <p>Phone Number: {contact.phone}</p>
        <p>Website: {contact.website}</p>
      </div>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back to Contacts
      </button>
    </>
  );
};

export default SelectedContact;
