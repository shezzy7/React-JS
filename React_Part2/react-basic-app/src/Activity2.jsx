// In this activity we are going to build 4 cards.Each card will have a title,a description and at bottom prices section.

import Card from "./Card";
export default function Activity2(){
    let styling = {
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center"
    }
    return(
        <div >
            <h2>BlockBuster Deals on Computer Accessories | Shop Now</h2>
            <div style={styling}>
            <Card idx1={0} />
            <Card idx1={1} />
            <Card idx1={2} />
            <Card idx1={3} />
            </div>
        </div>
    );
}