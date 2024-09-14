
export default function Pri({oldPrice , newPrice} ){
    let oldStyling = {textDecorationLine:"line-through"}
    let newStyling = {fontWeight:"bold"}
    let outerStyle = {backgroundColor:"orange",height:"50px" , borderBottomLeftRadius:"10px" , borderBottomRightRadius:"10px"};
    return(
        <div style={outerStyle}>
            <span style={oldStyling}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyling}>{newPrice}</span>
        </div>
    )
} 