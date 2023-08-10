import React from "react";
import PI ,{doublePi,triplePi}from './Math1';
import {add,mul,sub,div} from "./Cal";

function List(){
    return(
       <div>
         <ul>
                <li>dhoni </li>
                <li>virat </li>
                <li>smith </li>
            </ul>
            <ul>
                <li> {PI}</li>
                
                <li>{doublePi()}</li>
                <li>{triplePi()} </li>
            </ul>
           < ul>
                <li>{add(1,2)}</li>
                <li>{mul(3,4)} </li>
                <li>{div(100,5)} </li>
                <li>{sub(20,10)}</li>
            </ul>    
       </div>
    )
}
export default List;