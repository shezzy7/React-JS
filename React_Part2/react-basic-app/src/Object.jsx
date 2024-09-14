
function Object({ obj2 = {title : "Civic" , price : 75000},obj3}){ //here obj2 has been setted a defau;t value if calling file does not pass any argument then ther=se values will be setted as default values.
    return(
        <>
            {/* <h2>Object 1</h2>
            <h3>{obj.title}</h3>
            <h4>{obj.price}</h4> */}
            <h1>Object file</h1>
            <h2>Object 2</h2>
            <h3>{obj2.title}</h3>
            <h4>{obj2.price}</h4>
            <h2>Object 3</h2>
            <h3>{obj3.title}</h3>
            <h4>{obj3.price}</h4>

        </>
    )
}
export default Object;