import React,{useState} from "react";
//import { DUMMY_MEALS } from "./Profile/AvailableMeals";
import Card from "./ui/Card";

export const DUMMY_MEALS = [
    {
      id: 'm1',
       name: 'Land of Losttt',
       description: 'Story about parallel Worlds',
      price: 10,
     },
    {
       id: 'm2',
       name: 'Harry Potter',
       description: 'A magic around us , and a Wisdom Stone!',
      price: 10,
     }, {
       id: 'm3',    
        name: 'Top Gun',
       description: 'American way of livin',
       price: 10,
     },
     {
       id: 'm4',
       name: 'The days of Tunder',
      description: 'Furios race...story',
       price: 10,
    },
   ];
export default function SortTable(){

const [data,setData]=useState(DUMMY_MEALS)
const[order,setOrder]=useState("ASC")

// const sorting= (col)=>{
//     if(order === "ASC"){
//         const sorted = [...data].sort((a,b)=>
//         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
//     setData(sorted);
//     setOrder("DSC")
    
//     }
const sorting = (col)=>{
    if(order === "ASC"){
        const sorted = [...data].sort ((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase()? 1 :-1)
        setData(sorted);
        setOrder("DSC")
    }

 
    
}
    return <Card><div className="container" >
        <table className="table table-bordered">
            <thead>
                <tr onClick={()=>sorting("name")} >Name</tr>
                <tr onClick={()=>sorting("description")} >Description</tr>
                <tr onClick={()=>sorting("price")} >Rate</tr>
                    </thead>
                <tbody>
        {data.map((d)=>(
            <tr key={d.id}>

           <td>{d.name}</td>
           <td>{d.description} </td>
           <td> {d.price} </td>
           </tr>
         ))}
                </tbody>
                
        </table>


    </div></Card>
}