import React, {useContext} from "react";

import {Context} from "../contexts/Context"
import Image from "../components/Image";
import {getClass} from "../utils/utils";

export default function Photos() {

    const {photos} = useContext(Context);
    const photoComponents = photos.map((photo, index) => (
        <Image key={photo.id} image={photo} classname={getClass(index)}/>
    ));

    return (
        <main className="photos">
            {photoComponents}
        </main>
    )
}