import "./Conditional.css";
function Conditional({title , price}){
    // let suppose we want to give a discount of 5% if price is greater then 100000 then simple method is as 
    // if(price >= 100000){
    //     return(
    //         <div id="cond">
    //             <h3>{title}</h3>
    //             <h3>Price : {price}</h3>
    //             <p>Discount of 5%</p>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div id="cond">
    //         <h3>{title}</h3>
    //         <h3>Price : {price}</h3>
    //         <p>No discount</p>

    //         </div>
    //     )
    // }
    // but a better method to write the same code is below

    return(
        <div id="cond">
            <h2>{title}</h2>
            <h3>Price : {price}</h3>
            {/* <p>{price>=100000? "Discount of 5%" : ""}</p> */}
             {/*if above condition becomes true and a paragraph with content doscount of 5% will be genrated and if this condition returns false then a paragraph with empty value value will also be generated which is useless.So to preventing from creation of this useless paragraph we can use a different method  */}
            {/* {price >= 100000 ? <p>Discount of 5%</p> : null} */}
            {/* we can also wrtie this using another method */}
            {price>=100000 && <p>Discount of 5%</p>}
            {/* in above method we are using && operater which will check second condition only if first condition is true and if furst codnition returns true then paragrapgh will be generated else nothing will happen */}
            
        </div>
    )
}
export default Conditional;