

function Array({arr1}){
    const list2 = arr1.map((ele)=> <li>{ele}</li>);
    // const list = arr1.map((ele) => <li>{ele}</li>); maping array elements to list items through seond method.
    return (
        <>
            <h1>Array File</h1>
            <h4>Array Elements are below</h4>
            <p>{arr1}</p>
            <h5>{list2}</h5> 
            {/* we can also directly convert it here */}
            {/* <h5>{arr1.map((ele) => <li>{ele}</li> )}</h5> */}
            
           
        </>
    );
}
export default Array;