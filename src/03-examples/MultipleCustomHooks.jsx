import { useFetch,useCounter } from "../hooks/";
import { Quote,Loading } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const urlAPI = 'https://api.breakingbadquotes.xyz/v1/quotes/' + counter;

    const { data, isLoading, hasError } = useFetch(urlAPI);

    return (
        <>
            <h1>
                Breaking Bad Quotes
            </h1>
            <hr />
            {
                isLoading
                ?
                (<Loading />)
                :
                !!data && data.map(x => (<Quote key={x.author+Math.random()} author={x.author} quote={x.quote} />))
            }
            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment()}>Add quote</button>
        </>
    )
}
