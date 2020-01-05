import React from "react";
import DataFetcher from "./DataFetcher";

function SWAPIRender(props) {

    return (
        <React.Fragment>
            <h2>Render props</h2>
            <DataFetcher url={props.url}>
                {({loading, data, error}) => {
                    if(loading) {
                        return <h1>Loading data...</h1>;
                    } else {
                        return data ?
                            <p>{JSON.stringify(data)}</p>
                            :
                            <p>{error}</p>
                    }
                }}
            </DataFetcher>
        </React.Fragment>
    )
}

SWAPIRender.defaultProps = {
    url: "https://swapi.co/api/people/1"
};

export default SWAPIRender
