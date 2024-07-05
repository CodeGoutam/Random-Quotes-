const Save = ({ array }) => {
    console.log(array);
    return (
        <>
            <div className="bg-white h-full rounded-md p-3">
                <p>
                    {array.map((data) => {
                        return <>
                            <p className="bg-yellow-200 m-1">
                                {data}
                            </p>
                        </>
                    })}
                </p>
            </div>
        </>)
}
export default Save