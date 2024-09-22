
import { useState } from "react";
import "./Lottery.css"
import {genNums,sum} from "./createNumbers";
import Ticket from "./Ticket";
import Button from "./Button";
export default function Lottery({n,winCond}) {
    // importing an array from a helper file's function
    let [ticket, setTicket] = useState(genNums(n));
    let isWinner = winCond(ticket);

    let  buyTicket = ()=>{
        setTicket(genNums(n));
    }
    return (
        <div>
            
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <h3>
                {isWinner?"Congratulations you won":"Oops,try again"}
            </h3>
            <Button action={buyTicket}/>
        </div>
    )
}