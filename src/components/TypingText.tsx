"use client";

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    text: string;
    start: boolean;
    charactersPerSecond?: number; // Optional prop to control the typing speed
    updateInterval?: number;
    repeat?: boolean;
}

export default function TypingText(props: TypingTextProps) {
    const cps = props.charactersPerSecond ?? 16;
    const intrvl = props.updateInterval ?? 100;
    const [displayedText, setDisplayedText] = useState('');
    const [startTime, setStartTime] = useState(-1);

    useEffect(() => {
        if (!props.start) {
            return;
        }
        setStartTime(new Date().getTime());
    }, [intrvl, cps, props.start, props.text]);


    useEffect(() => {
        if (startTime < 0){
            return;
        }
        const intervalId = setInterval(() => {
            const dur = new Date().getTime() - startTime;
            const characters = Math.floor(dur / 1000 * cps);
            setDisplayedText(props.text.slice(0, characters));
            if (characters > props.text.length) {
                clearInterval(intervalId);
                if (props.repeat) {
                    setStartTime(new Date().getTime());
                }
            }
        }, intrvl);
      }, [startTime]);

    return <div className="text-lg font-mono">{displayedText}</div>;
};
