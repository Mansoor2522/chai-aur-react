
// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            return setData(res[currency])
        })
        .catch(err => console.log(err))

        console.log(data);
    }, [currency]);

    console.log(data);

    return data
}

export default useCurrencyInfo;