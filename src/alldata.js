import { useContext } from "react";
import userContext from "./context";
import "./styles.css";
import { Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';



export default function Alldata(){

    let  user = useContext(userContext);
    console.log("hi",user.users)
    return(
        <>
        <section>
         <Card style={{ width: '25rem',paddingLeft:'30px',paddingTop:'50px',paddingBottom:'50px'}} className="creat">
      <Card.Body>
        <Form className="wit">
        <h1><span style={{color: "red"}}>AllData</span></h1>
       <h5> 
        {user.users.map((item,key)=>
        <ul>
            NAME = {item.Name} .<br></br>
            BALANCE = <span style={{color: "red"}}>{item.Balance}</span> .<br></br>
            EMAIL = {item.Email} .<br />
            
        </ul>)}
        </h5>
        </Form>
        </Card.Body>
        </Card>
        </section>
        </>
    )
}