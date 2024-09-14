
function DynamicComStyling({ title, price }) {
    // we can also give stylign to our components in jsx.
    // but if we want to give some styling on conditional basis then we can do this as follows
    // let styling = { backgroundColor: price >= 100000 ? "orange" : "" }
    // we can also store state of condition in a variable and we can also add more styling props seprating them by commas 
    let p = price>=100000;
    let styling = { backgroundColor: p? "orange" : "" ,border:"1px solid black" , borderRadius:"10px"};
    
    // backgroundColor will only be changed of componenets where price is above 100000 and border,borderRadius will be done for each component 
    return (
        // for giving styles thier exists a property style which can be used as follows
        <div style={styling}>
            <h2>{title}</h2>
            <h2>Price : {price}</h2>
        </div>

    )

}
export default DynamicComStyling;