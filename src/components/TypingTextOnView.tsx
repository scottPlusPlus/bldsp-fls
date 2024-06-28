"use client"

import Observer from "./Observer";
import { useState } from "react";
import TypingText from "./TypingText";

interface TypingTextOnViewProps {
    text: string;
    charactersPerSecond?: number;
    updateInterval?: number;
    repeat?: boolean;
}

export default function TypingTextOnView(props: TypingTextOnViewProps) {

    const [start, setStart] = useState(false);

    return (
        <>
            <Observer onFirstObserve={() => setStart(true)} />
            <TypingText text={props.text} start={start} repeat={props.repeat} />
        </>
    )
}