// we have to do a simple activity in which we will print a hello msg to the user in different colors.
// Pass 2 values as props : userName,textColor

function Activity1({userName,textColor}){
    let styling = {color : textColor};
    return(
        <div>
            <h2 style={styling}> Hello,{userName} </h2>
        </div>
    )
}
export default Activity1;