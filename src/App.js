import { useState } from 'react';
import './App.css';
import Card from './Card';
import Save from './Save';

function App() {
    const [arr, setArr] = useState([])
    const [quote, setQuote] = useState(`"Normally, if given the choice between doing something and nothing, I’d choose to do nothing. But I will do something if it helps someone else do nothing. I’d work all night, if it meant nothing got done."`)

    async function fetching() {
        let res = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        res = await res.text()
        res = res.replace(/[\[\]]/g, '')
        console.log(res)
        setQuote(res)
    }
    let savedQuotes = []
    function saving() {
        setArr([...arr, quote])
    }
    return (
        <div className="App h-screen w-screen">
            <div className='md:flex h-screen w-screen p-3'>
                <div className='flex justify-center items-center bg-yellow-200 md:w-2/3 p-3 md:h-full'>
                    <Card fun={fetching} change={quote} save={saving} />
                </div>
                <div className='bg-yellow-200 md:w-1/3 p-8 '>
                    <p className="font-bold bg-red-400 text-white text-xl rounded-sm ">Save List</p>
                    <div className='bg-white pb-2 overflow-auto h-full'> 
                        <Save array={arr} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
