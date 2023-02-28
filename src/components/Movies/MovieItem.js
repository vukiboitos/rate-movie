import { useContext ,useState} from 'react';

import MovieItemForm from './MovieItemForm';
import classes from './MovieItem.module.css';
import CartContext from '../../store/cart-context';

import { DUMMY_MEALS } from '../SortTable';



const MovieItem = (props) => {
  const [data,setData]=useState(DUMMY_MEALS)
  const[order,setOrder]=useState("ASC")
  
  const cartCtx = useContext(CartContext);
  
    
    const sorting= (col)=>{
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
        setData(sorted);
        setOrder("DSC")
        
        }
    
        if(order === "DSC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
        setData(sorted);
        setOrder("ASC")
        
        }}
    // }
    //     return <table className="table table-bordered">
    //             <thead>
    //                 <tr onClick={()=>sorting("name")} >Name</tr>
    //                 <tr onClick={()=>sorting("description")} >Description</tr>
    //                 <tr onClick={()=>sorting("price")} >Rate</tr>
    //                     </thead>
    //                 <tbody>
    // {data.map((d)=>(
    //     <tr key={d.id}>
    
    //     <td>{d.name}</td>
    //     <td>{d.description} </td>
    //     <td> {d.price} </td>
    //     </tr>
    // ))}
    //                 </tbody>
                    
    //         </table>
    
      
     
    
 
 
  const price = `🌟${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.movie}>
      <div>
        <h3 onClick={()=>sorting("name")}>{props.name}</h3>
        <div className={classes.description} onClick={()=>sorting("description")} >{props.description}</div>
        <div className={classes.price} onClick={()=>sorting("price")} >{price}</div>
      <div> 

      {data.map((d)=>(
        <tr key={d.id}>
          <td>{d.name}</td>
          <td> {d.description}</td>
          <td>{d.price}</td>
          
         
          
    </tr>
     ))}


        </div> 
       
      </div>
      <div>
        <MovieItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MovieItem;