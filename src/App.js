import logo from './logo.svg';
import './App.css';
import Heading from "./Components/Heading";
import List from './Components/List';
import App1 from './Components/App1';
import PI ,{doublePi,triplePi}from './Components/Math1';
import Prop from './Components/Prop';
import State from './Components/State';
import Effect from './Components/Effect'



// const lastName="gompa";
// const age="25";

// const currentDate=new Date();
// const year=currentDate.getFullYear();
// const img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJsAdAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA8EAACAQMDAgQEBAMHAwUAAAABAgMABBEFEiExQQYTYXEiMlGBFJGhwUKx4QckM3LR8PEWNFIVJVNjgv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAqEQACAgEDAwIGAwEAAAAAAAAAAQIRAwQhMRITQSJRBRQyYYGRQlJx4f/aAAwDAQACEQMRAD8A8UgQO+DRIjCzKaHtuJKIJzKB6VQmd2Nv2BKgVPo43s49KDuv8X7UZomPxJB7irI9sY61T++PHkjL4Iq21AeTZyoeNq0JZwA6of8AMafrEuYrkZ6FRVoQ5XNUZ0CrLSdkcnmugYjotAIu5gBWh0WzFxLDbA4kY8ZHf+nWigtx+eajHcNmu5bC1aQKVGNpI7mspdTvcymSQ5Y1Z+JLxbnUHjgcm2i+BMd8d6DttLu7hBJHEfL7u3Cj70crbpAYUox65csC71YWmnXl0oaKBipOAemTUrwQWhKsyTOBwUzgH9662rXKKqQMYsfQ1cUo8hylKS9KBJ4JIJWjlUq6nBB7VEankZ5WLysWY9WJyTULLV2WhprlKlUCobGcNkVMjHz/ALVCvBqRDiUVmJI5OcyGp9KJF4mDUE3LmnWr+XPG30NWVJXCjRWcZ/FySDpjmq/UX3Ws31afH2FG6bKvnXDsPh3L9qrLz/s1XaeZ2OSOpqJmXGvX+iCwi8y4jXIGTyT0A71o45RBpt7qQz5szC2gP0J5cj7YH3qp09PIikuCF4hJOfXgY9eDRspmSO0sWYb4gX29MMxySabje5M3rkT6J4fRoo7y7K4ZiEQsABjufvTJBcTTPb20W9WyvmltqD1z0qxs5HSLfKQzj4V3DgYHyge3J/5oh7oiKMwLEZsYaWT4yPZegrZGCoxyzz63e5W/9JXxVSZLYseQPMPP6UDJ4fNvve5vbcMD8i5P+lWFzd3MiBbi5Z1DH4ZJii9f/EUJcQQMxKSRR/VYg7g/c0Mox8I0QyZf5P8ASBvwEJQlbpGI7YNATw7CRuBxVtHYwvlRLl+w8oZ/Uigb1WhBWUoxHTA6UmUaRohK3yVjDmuUiwyaVLs0DVOGFSkgyLjpUI61JgkA+tJLaOzjEhpsXDg/Q12ZWWTD9a4o+En0qyLgt4JCbuTKgRlkyE570LcMTbqpOcTtkfYU1JmgZ2AxlVPT6HNOkDBpEcciViefqB/pUSE9NOycSF4kiwOWAJ5PCjp69TVtpthc6xf7IYiQzbWl6gAcE9OgwPyx3oDS0aSWAbSRH5sp45IU8/yra21+lpF+AsABL8EBdiM5OC547k80zHSdyMmqyShGsa3LLTPC0bWzyzOUdydqsflHr655z7UBe+EpY42kgZQcZyvGeeM1tPDyrNHnCjaAmOpBOOv5irC70wee0sAIKgYweCfb2xW1ZoNVR5dZtZ1uSe3seQ7pFuECWESSwkhiMfGfXJyauIru3ltHmuoFCZAURYUE+uBya0+u6PDf234edFhnX4lZBjNYXXJpIo47FRslUlSM/KMcn70aagurwdDDm+aahVNckV2Ir6Z57R0RwwxHIob7ZxWY1py92QYVSToQnQn2rSy26jTZZY1wBJEquO55Jrs+2PUILgKSXTDHHSlzj1HVw5VD8GHKNnlWH2rlbuO+0pQVe1RyDjc2cmlSexH+xo+bf9TBUQxHkAjrUFSBiIiODWRm0YxLHLdacvQ+1STrwhAwCKjXoeM8VCIMDeYsg3s+Lfn7Vxm3OxGArIjkD6gYP65rsLKJAAMh4SpA55qHqIj3wQT7VI8gUXGkOqSKSxyUmjyCMgMwGSPZifXFaKxjAuSrFSfifB9hj244rKaeyLPMrKHLb1TIzgkZB/StFZXCregjAVhgYHGMfSnYEnlgpcWZM8LTNGfFP/o9/wDHBLJH8zCHAwCOv2OeK33hvxJp2t2xNrcpI+8mRejIM8ZHavJ9eiKFWBysiK24HqMf0qhhurjS7qO9sZWinj5DL0PofqDXU1i7mR7cCfksfTcOT33V7RbnGxNw6+3+x/OvMvGWhNfXpmsATJs33h6bFHAA+pJ3flW08G+JovEOneccJMBtlTOdrf75om4gjjdivyTZDt3OayYlv0SOHqcktLk7kVujx+K4mES255VXwue7fSrPUYltolgQhpdmwE9fWpptOEOvNaAMgRidwXkAjr+VTatpjCaCaM7UdsNIew71eWfQqOpp3HLOL8cmKu7J4ZApYDKg4pVqbjRLnUriWe0tpDAGKIQp5ApVz+4vLOw4+y2MBCoMb5pIIzAxPUU+3bEL9+KaiHyXOOMUPkYclOVQYxhe1KNcxuTnilKMbep4rqoWjdgDhepHSrLJLcgXEBYkL3x1x3pMqiJyD8sv6Ef8UwceU3Qc4OaknCebNsORwRxjNQFhMEwW73nGNykg8DkYPerCXdChaA4G1GU//kYqmJxKNwwCASPrV1GiXNgJP/izkjqV3f1/KiQmdJps04aDVLWJg3llhwxAIGOoIFV+uaPHbREwSGVAcMcdDQOk3y2obew2E5XI7n/YrRPdW82nL511bR5ByrsnT23V6TFOGbD1+fJnhKUJ9D4M54Q1WTRtfjIw0U58uRcZ9iPXNeuz3Ul7Gu0eWrdGbgn6YHavKNPs4DqcTm4EiRyb827DOQCRgqCeoFbnTbiaaDy7WB0jLhGuJ8qzc84zk5965rx1FP7nK+OYtlNHXgVdduVI2DaGZi24kfWjp44NWuEAwiKmGB6hecYqi1C7Wy1O7TzC64BZ2PJPb7df261d6Fbut2txqDjlQzKMEL9Aaya3IoQc/KC+GY5TlDGuHX5Nlo2nJp2mwWyAHauSfqa5UZuyfkk+HtzSrxz1lu2meyWma2Pl6FwqsCODUqgtAxUHaByaZHFut2cHpRFurGyl2/fmvTswC/DFrVJTnn0qIjbBLkjtwep9a0ukac15pu/4RGB/EetVes2ywBjGfhPbFVe9F0VPI2/enONrMDk/CK5KuwoOflzTsEl8HgJz+Y/1ogThJD8DHwD+VWFtdtHGyqSNx9McY/egAMyYbrgDP0GP60TaxeZOB1QHcc+9ELnVbhjxtGqJKrDcuVyMZ+verTQ9ZvdNcIQZbcfwlckD0ouJra9tRBOMoPlLPjB9M1SOzWbBH/DP9G8zGfvimY8s8TuLM0ZdxdMlubRfFkIj3GO4Zj/AAg4IHB5NF6Tf3F3Kh4iUMXbJ3njJ4Ud/c1hEvBvDLFA3tcKP121oNAvtTdnexhh8woUjQN5jMTj/AMT0+2Kbl1ksjj1bJGPV6SWSFRVvwNu/xMmsTSXLs7FsiLHPYAtx15Fek2li1vpiRt/isoaXPc1V+FPCb6WG1DVk8y7lIbAOfL/b8uBVpqev6dajyzLvmbgRr1zXl9frcmqyLDg3SfJ39Dpceiis2T6q/X+Ar6lZ2pEUjMrAcgmlVPcWy3EpmuiEkfnax5ApUSjp0qctx71Wsk7jDY8osUQ2MxY5OOKjhx+HZ8nGKn0hd9vMoA+XoaHh3eW8Y+XnNdoyI9I8DWI1Dw6iGNWCs2HJ4HNUPjqyltILfeAVdiAUAw2OuDV1/Zruk0i5iikG4MSEHU5FB/2ojy57G1I2yLHnGODk0CW5RhLsYkUfRRTJFKtIB6Ci9SQJqc0QX5HVAPWn3tvturtRxtnWMfnTCAcmPNbaABvb+dEodkajA9XzgE/09DQ8StI5brkn1yaLRwAQMMT1bG9sd8dv51GKa8BkF2yoWQOT0JRCc/f4f3olNRnVfLkVWOc7ZL9Iz+RORVaYJJDiZreI/wD3vuJP+UZ5+1PWRYQwW8LE9Rb26kffdiopUTsXvRbwXGq4WW1shKvPxxzxyn+RrUL43i0yz8tUnSaIc+bbIpU/bA/SsTZ3eW2ma8fK52GxiYH8z0o0JvGEW4O75fL02NSKXk7f8kiSxaiVU5JfZsnufG+tai7Kst3IjnCp8gz6betWWhaNNCfxupu0l83MMTEkrUWi+ZayxpBYMs7/AC3N2Rx7AVqIrVLBTeXVzuuD8z54rjazVKC7cFSft5Oto9FGL7kt39/+grFAf/cAxuP4vT0pVW3mqrLOzqrOPqBXKyLHNo6HoMBo4d1mCsANveh4HKGVc9iDROhjd5q9yKDcGKWVT2J4r1Hk88eg/wBmDmO3dwD/AInXsMCo/Hc41Lxbp0cpV1+FcIe2aB8FXbW9iRG53F/lxxRML/ivHcL3CqVghJIxgd8VSW5LKOC2jv8AxlHFAD5MmogbT9A2T/I0Rrscay3aWrqZJNUndfiHwxoMZJ6Dlj+VTaPc2unahp+oXAAQXlxcN/lUED9azZ3TvJLwWkYt7ZOaJsGm2EhYlhEW0zsvTacIPc9z61LaLcXTGK1WWVf4orYbAfdupqOCBHA/GSrHCv8ADnaD+5Na3SvEemaXD5FtZy3BH8USBQ351myZZR+lWbtPpscleWdL28glr4P1vG78Pa2iN3yGKj35/nR7+DtVW33NrDLn5thY8/bHanyePL+M7YdHUqenmSHJHsBUX/XF6qjz7G0iHUq0xXI9qzN6uXFGrq0GN1KwZdM1/TpGMWqFjnIEnxA+vNG6fqniNrTzP7pN5chQjbsP6UNJ4tsp0Jn2I/bymLY/SlpfiTTLcP8A3kbX7MMGlZYZ5R9UE3/gccmib9Emv2SXt5qA8v8AEWsayF8AiTOKEa7uZb8QX0uY+u0Hiq6/v1ur1pY7kbCcqBQzTKq+YZtzn1o44JdO6SMj1GJTtNuvdmsN1bRHYNoA7V2scZ0c7mlJPvXaH5FDX8Sd7AehNiR/ag7r/upMnvU+lEqzmhbggzuR3rreTmF/om+KwWWNgG3Z5ou31Ii+1DUJiA6xeWoHTOKqraVYbCPLDaOTVdLKzI3YM2cUFkS9yWSZpxBETkRpjGcdTk0TDIkcuDKIR3CDc3270AmUHxHbnvR1m7Rr5lvGqsOssgzj2FVPgOKt8FkHtLJCy6a0sjdLi7cr9wKBe+mlyEO5c5xH8CD96kub+0TMjFr67cDMkw4X7VVSzzzkknj6DgUvHDy0OyT2pP8ACDXctDvuLzaw48uPI4+1Ds9qkJCZd2PO5aD+/NSQQSXEgSNck/pTelLkTy6S3G+YQcinw28s7YQftVvHpkVpF5k7bpOwxxUUbeUd3T0oHlT+kctM4tdYF+Hkt2+ICpCN4wcCn3dwJM/WgTKynrVpyktwcmPFFkrwHd1pU0T560qL1F1iJbAfCxz1oR/nb3oqDiMY44oRure9GjMTGXMQU9BTGYYUL0A5ph+WnH5PvUoJuyQPub4hvPYfSnO8svw5JA7DgCmn4Y1K8E1NMxjgGz4cjnFA3uMqiAqsZGcE4p8SmQbpW2xih0+dfenyH4sdvpRUBfknSNZpGEPwxD69aMtrhLJyIgGJ71VqSq5BxUluSZBmglG1uNhOmunktVmM4LSnn6ULcPinR/OfaoLjrS4rce2+mwd3NRE5pz9abWhGObtipUqVWAf/2Q==";

const getDate=new Date(2022,2,3, 20);
const currentDate=getDate.getHours();

let greetings;

const customStyle={
  color:""
}

if(currentDate<12){
  greetings="good morning"
  customStyle.color="red";
}else if(currentDate<18){
  greetings ="good afternoon";
  customStyle.color="blue";
}else{
  greetings="gdnight";
  customStyle.color="yellow"
}

// object //
const prop=[
  {
      firstname:"dhanaji",
      lastName:"gompa",
      age:"24"
  },
 
  {firstname:"siva",
  lastName:"tanneti",
  age:"26"
 },
 
 {firstname:"sai",
 lastName:"g",
 age:"26"
},

{firstname:"chandu",
lastName:"d",
age:"26"
},
]

function App() {
  return (
    <div>
      <center>
        {/*  <h1>Hii {firstName+" "+lastName}!
         </h1>
        <h2>how old r u {age+" "+ year}</h2>
        <h1 cla
        ss="a">My Favourite players</h1>
        <ul>
          <li>Dhoni</li>
          <li>Virat</li>
          <li>Smith</li>
        </ul>
        <img src={img}/>
        <h1 style={{color:"yellow"}}>Dhanaji</h1> */ }

        <Heading />
        <List />
        <App1 />
        
        <State />
        <Effect />

      <h1 class="heading" style={customStyle}>{greetings}</h1>
      <h1></h1>


          <h1>PROPS Friends & Place</h1>
          {prop.map((prop)=>{
            const{firstName,lastName,age}=prop;
            return(
            <Prop firstName={firstName} lastName={lastName} age={age} />
            )
          })}

      {/* <Prop name="dhanaji gompa" place="ayyappasociety" age="25"/>
      <Prop name="siva tanneti" place="Dlf" age="27"/> 
      <Prop name="naveen chimmu" place="anjaynagar" age="25"/> */}

        </center>
    </div>
  );
}

export default App;
