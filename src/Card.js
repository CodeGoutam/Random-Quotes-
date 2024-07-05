import { useState } from "react"
const Card = ({ fun, change, save }) => {
    console.log()
    // const [quote, setQuote] = useState(`Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night, if it meant nothing got done.`);
    // async function fetching() {
    //     let res = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    //     res = await res.text()
    //     res = res.replace(/[\[\]]/g, '')
    //     console.log(res)
    //     setQuote(res)
    // }

    return (
        <>
            <div className="p-2 flex-auto bg-white rounded-2xl h-1/2 w-1/2">
                <div className="m-1 overflow-auto h-full ">
                    <p className="font-bold text-2xl sticky top-0 p-1 rounded-md bg-white">Quotes</p>
                    <p className="h-1/2 max-h-max first-letter-bold flex justify-center items-center text-lg font-medium">{change}</p>
                </div>
                <div className="flex justify-between p-1 w-full">
                    <button className="h-fit w-fit bg-red-800 p-1  text-white rounded-md" onClick={fun}>Change</button>
                    <button className="h-fit w-fit bg-red-800 p-1 text-white rounded-md" onClick={save}>Save</button>
                </div>
            </div>
        </>)
}
export default Card