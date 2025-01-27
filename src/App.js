
//  bad bank program===================================================

import Nav2 from "./nav";
import{HashRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./create";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Alldata from "./alldata";
import userContext from "./context";
import Home from "./home";
import WithHeaderStyledExample from "./footer";


export default function App(){

    return(
        <>
        <HashRouter>
            <userContext.Provider value={
                {users:
                [{Name:"Ashi",
                 Email:"ashi123@gmail.com",
                 Password:"1234567890",
                 Balance:0}]
                 }}>
        <Nav2 />
        <Routes>
            <Route path='/Home' element =  {<Home />} />
            <Route path='/Create' element =  {<Create />} />
            <Route path='/Deposit' element =  {<Deposit />} />
            <Route path='/Withdraw' element =  {<Withdraw />} />
            <Route path='/Alldata' element =  {<Alldata />} />

        </Routes>
       
        <WithHeaderStyledExample/>
        </userContext.Provider>
        </HashRouter>
                 
        </>
    )
}


//============================shoping cart program week-9==========================================================


// import"./styles.css";
// import apple from "./apple.jpg"
// import banana from "./banana.jpg";
// import green from "./green-apple.png";
// import Money from "./money.jpg";
// import {useState , useEffect } from "react";
// import axios from "axios";

// export default  function App(){
    
    

//     let photos = [apple, banana , Money , green];
//     let [cart, setCart] = useState([]);
//     let [cost, setCost] = useState(0);

//     let produte = [
//         {name : "Apple" , cost : 100 , insock : 20 , country : "US"},
//         {name :  "Banana" , cost : 50 , insock : 25 , country : "US"},
//         {name : "Papaya" , cost : 150 , insock : 23 , country : "US"},
//         {name : "Green-Apple" , cost : 200 , insock : 27 , country : "US"}
//     ];

//     function addCart(item) {
//         setCart([...cart, item]);
//         let c = item.cost;
//         setCost(cost + c);
//       }
//       const shopcart = cart.map((item, index) => (
//         <div className="photos">
//           <img src={photos[index % 4]} alt="apple" width="4%" height="4%" />
//           <li>
//             {item.name}: Cost :{item.cost}
//           </li>
//         </div>
//       ));

//     const [item,setItem]=useState(produte);

//     let list = item.map((item,index)=>(
//     <div onClick={() => addCart(item)}>
//         <img src={photos[index % 4]} alt="img" width="4%" height="4%" />
    
//     <li> Name :{item.name} : Cost : {item.cost} : insock  :{item.insock}</li>
//     </div>
//     ));

//     return(
//         <>
//         <h1>Frurit list</h1>
//         <ul>
//        {list}
//         </ul>
//         <h1>Cart List</h1>
//         <ul>{shopcart}</ul>
//         <h1>Frurit Cost : {cost}</h1>
        
//         </>
//     )
// }


//============================================================================================================================

//new shoping cart

// import apple from "./apple.jpg"
// import banana from "./banana.jpg";
// import green from "./green-apple.png";
// import orange from "./organ.jpg";
// import { useState, useEffect } from "react";

// import axios from "axios";

// export default function App() {
//   let photos = [apple, banana , orange , green];

//   let products = [
//     { name: "Apples", cost: 10, instock: 10 },
//     { name: "banana", cost: 10, instock: 10 },
//     { name: "Orange", cost: 10, instock: 10 },
//     { name: "green Apple", cost: 10, instock: 10 }
//   ];

//   let [item, setItem] = useState(products);
//   let [cart, setCart] = useState([]);
//   let [cost, setCost] = useState(0);
//   let [data, setData] = useState();


//   let [name,setName]=useState();
//   let [price,setPrice]=useState();
//   let [instock,setInstock]=useState();
//   let [country,SetCountry]=useState();
//   let [name4,setName4]=useState();
//   let [name5,setName5]=useState();



//   let url = "http://localhost:1337/api/carts";
//   function addCart(item) {
//     setCart([...cart, item]);
//     let c = item.cost;
//     setCost(cost + c);
//     console.log(cart);
//   }

//   let list = item.map((item, key) => (
//     <div onClick={() => addCart(item)}>
//       <img src={photos[key % 4]} height="50px" width="50px" alt="cart" />{" "}
//       Name : {item.name} : inStock : {item.instock} : Price :{item.cost}
//     </div>
//   ));
//   useEffect(() => {
//     async function fetchdata() {
//       let res = await axios(url);
//       let result = res.data;
//       setData(result);
//     }
//     fetchdata();
//   }, [url]);

//   const restockproducts = (data) => {
//     let newItems = data.data.map((item) => {
//       let { name, country, cost, instock } = item.attributes;
//       return { name, country, cost, instock };
//     });
//     setItem([...item, ...newItems]);
//   };

//   const postproducts=async(data)=>{

//     var post={"data":{
//       "name":name,
//       "cost":price,
//       "instock":instock,
//       "country":country
//     }}
     
//     const res = await (axios.post(url,post))
//     console.log(res)
    
//     }
    
//     /*put method*/
//     const updateproducts=async(data)=>{
//       var update={"data":{
//         "name":name4
//       }}
//       const put=await (axios.put("http://localhost:1337/api/carts/7",update))
//       console.log(put)
//     }
//     /*Delete method*/
//     const deleteproducts=async(data)=>{
//       var Delete={"data":{
//         "name":name5
//       }}
//       const deleted=await (axios.delete(`http://localhost:1337/api/carts/${name5}`,Delete))
//       console.log(deleted)
//     }
    
//   return (
//     <>
//       <h1>Product List</h1>
//       <ul>{list}</ul>
//       <h1>Cart Items </h1>
//       <ul>
//         {cart.map((item, k) => (
//           <li>
//             {item.name} : cost {item.cost}
//           </li>
//         ))}
//       </ul>
//       <h1>Total Cost </h1>
//       {cost}
//       <h1>Restock Items</h1>
//       <form
//         onSubmit={(e) => {
//           restockproducts(data);
//           e.preventDefault();
//         }}
//       >
//         <input type="text" value={url} />
//         <button>Submit</button>
//       </form>
//       <form onSubmit={postproducts}>


// <h1>Push a data</h1>
// <label>Name:</label> <input  type="text" onChange={(e)=>setName(e.target.value)} value={name}/><br /><br />
// <label>cost:</label> <input  type="number" onChange={(e)=>setPrice(e.target.value)} value={price} /><br /><br />
// <label>Instock:</label> <input  type="number"  onChange={(e)=>setInstock(e.target.value)} value={instock}/><br /><br />
// <label>country:</label><input type="text" onChange={(e)=>SetCountry(e.target.value)} value={country}/><br /><br />

// <button >Submit</button>
// </form>
// <form onSubmit={updateproducts}>
        
//         <h1>Update a data</h1>
//         <label>Name:</label> <input  type="text" onChange={(e)=>setName4(e.target.value)} value={name4}/>
//         <button >Put</button>
//         </form>
//         <form onSubmit={deleteproducts}>
//         <h1>Delete a data</h1>
//         <label>Name:</label> <input  type="text" onChange={(e)=>setName5(e.target.value)} value={name5}/>
//         <button >Delete</button>
//         </form>
      
//     </>
//   );
// }

      