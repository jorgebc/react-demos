import React from "react";
import {useParams, useHistory} from "react-router-dom";

import servicesData from "./servicesData";

export default function ServiceDetails(props) {

    const {serviceId} = useParams();
    const service = servicesData.find(service => service._id === serviceId);

    const history = useHistory();

    function handleClick() {
        console.log("Submitting...");
        setTimeout(() => {
            history.push("/services");
        }, 2000);
    }

    return (
        <React.Fragment>
            <h1>Service details page</h1>
            <h3>{service.name} - {service.price}€</h3>
            <p>{service.description}</p>
            <button onClick={handleClick}>Back to all services</button>
        </React.Fragment>
    )
}