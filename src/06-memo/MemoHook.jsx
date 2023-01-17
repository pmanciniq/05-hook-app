import { useState,useMemo } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations = 10) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Iterando...');
    }
    return `${iterations} iterations Done`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(0);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter),[counter]);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
        </>
    )
}
