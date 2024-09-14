import Descp from "./Descp";
import Pri from "./Pri";
export default function Card({idx1}){
    let titles = ["Logitec MX Master 35","Apple Pencile (2Gen)","Zebronics Zeb-Transformer","Portronics Toad 23 Wireless Mouse"];
    let des = [
        [<li>"800 DPI"</li>,<li>"5 Programmale Buttons"</li>],
        [<li>"Inituative Surface"</li>,<li>"Designed for IpadPro"</li>],
        [<li>"Inituative Surface"</li>,<li>"Designed for IpadPro"</li>],
        [<li>"Inituative Surface"</li>,<li>"Designed for IpadPro"</li>]
    ];
    let prices = [
        [12496,10000],
        [15490,6900],
        [7000,5000],
        [28000,23000]
    ];
    let styling = {border : "1px solid black",width:"300px" ,height :"200px" , borderRadius : "5px",marginLeft:"5px"};
    return(
        <div style = {styling}>
            <h3>{titles[idx1]}</h3>
            <Descp val={des[idx1][0]}/>
            <Descp val={des[idx1][1]}/>
            <Pri oldPrice={prices[idx1][0]} newPrice={prices[idx1][1]} />

        </div>
    );
}
