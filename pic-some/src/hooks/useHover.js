import {useEffect, useRef, useState} from "react";

function useHover() {

    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter);
        ref.current.addEventListener("mouseleave", leave);

        return () => {
            ref.current.removeEventListener("mouseenter", enter);
            ref.current.removeEventListener("mouseleave", leave);
        }
    }, []);

    function enter() {
        setIsHovered(true);
    }

    function leave() {
        setIsHovered(false);
    }

    return [isHovered, ref]
}

export default useHover