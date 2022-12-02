import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherStare, setOtherStare] = useState("false");
    const toggleOtherState = () => {
        setOtherStare((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherStare;
    }, [otherStare]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherStare}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
