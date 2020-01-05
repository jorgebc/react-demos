import React, {useState} from "react";

export default function Contacts() {

    const [inputData, setInputData] = useState({firstName: "", lastName: ""});
    const [contactsData, setContactsData] = useState([]);

    function handleSubmit(event) {
        setContactsData(prevState => [...prevState, inputData]);
        event.preventDefault();
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const contacts = contactsData.map(contact =>
        <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>
    );

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br/>
                <button>Add contact</button>
            </form>
            {contacts}
        </React.Fragment>
    )
}