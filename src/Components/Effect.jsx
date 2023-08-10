import React,{useState,useEffect} from "react";

const URL=("https://6386fe17d9b24b1be3e2cc6d.mockapi.io/users");
const URL1=("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=l")

function Effect(){
   let [userData,setUserData]=useState([]);
   let [Drink,setDrink]=useState([]);

   const FetchUserData= async (apiURL)=>{
    const response =await fetch(apiURL);
    const data = await response.json();
    setUserData(data);
    console.log(data);
   }

   const GetDrink = async(apiURL1) =>{
    // const response=await fetch(apiURL1);
    // const data1=await response.json();
    // // console.log(data1);
    // setDrink(data1);

   }
   useEffect(()=>{
    GetDrink(URL1);
   },[]);

  useEffect(()=>{
    FetchUserData(URL);
  }, []);
 

    return(
        <div>
          <h1>use effect example1</h1>
          <h1>
            <ul>
                {
                    userData.map((eachUser)=>{
                        const{name,id, avatar}=eachUser;
                        return(
                            <li>
                                <div>{name}</div>
                                <div>{id}</div>
                                <img src={avatar}/>
                            </li>
                        )
                    })
                }
            </ul>
          </h1>
          <h1>useEffect example2</h1>
          <h1> 
            <ul>

              {
                Drink.map((useDrink)=>{
                  const{name,id,email}=useDrink;
                  return(
                    <li>
                      <div>{name}</div>
                      <div>{id}</div>
                      <div>{email}</div>
                    </li>
                  )
                })
              }
            </ul>
          </h1>
        </div>
    )
}
export default Effect;