import React,{useState,useEffect,useRef} from "react";


function State(){
    // useState concept //
    // let product="redmi Note5 pro";
    let price=16000;
   let [Product, updateProduct]=useState("");

   let [Address,setAddress]=useState('');
   let inputDom=useRef("");


   useEffect(()=>{
   console.log(inputDom);
   });

   const Focus =()=>{
    inputDom.current.Focus();
   };




    // useEffect concept //
   let [Count,setCount]=useState(0);
   let [Toggle,setToggle]=useState(true);
   useEffect(()=>{
    console.log("hii how r u guys !!" ,Count);
   } ,[Count,Toggle]);
       return(
        <div>
            <center>
             <h1>productName:{Product}</h1>

             <h1>cost:{price}</h1>
             <input id="pname" />
             < button onClick={()=>{
                let pname=document.getElementById("pname").value;
                // product=pname;
                updateProduct((prev)=>{
                    return prev +pname;
                })
             }}>update</button>

             {/* useeffect */}

           <h1>learning useeffect concept</h1>
             <h1>{Count}</h1>
            
             <button onClick={()=>{
                setCount (Count+1);
             }}>+</button>

            <h1  onClick={()=>setToggle(!Toggle)}>{Toggle ? "open" :"close"}</h1>


            <input  ref={inputDom} type="text" id="Address" name="Address" onChange={(e)=>{
                setAddress(e.target.value);
            }}/>
         <h1>type:{Address}</h1>
         {/* <h3>Render Component {RenderComponent.current}</h3> */}
         <button onClick={Focus}>Focus</button>
            </center>

        </div>
    )
}

export default State;