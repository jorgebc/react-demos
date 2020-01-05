import React from "react";
import {Link} from "react-router-dom";

import servicesData from "./servicesData";

function Services(props) {

    const services = servicesData.map(service => (
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}>
                {service.name}
            </Link>
            - {service.price}€
        </h3>
    ));

    return (
        <React.Fragment>
            <h1>Services list page</h1>
            {services}
        </React.Fragment>
    )
}

export default Services