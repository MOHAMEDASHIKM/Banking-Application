import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import userContext from "./context.js";
import "./styles.css";
import Card from 'react-bootstrap/Card';



export default function Create(){

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    const Username=useContext(userContext);
    function handle(e){
        e.preventDefault()
        alert("login successfully")
        Username.users=[...Username.users,{Name:name,Email:email,Balance:0,password:password}]
        
        setName("")
        setEmail("")
        setPassword("")
        
    }

    return(
        <>
        <section>
        <Card style={{ width: '25rem',paddingLeft:'90px',paddingTop:'50px',paddingBottom:'50px'}} className="creat">
      <Card.Body>
      <Form className='for' onSubmit={(e)=>handle(e)}>
        <h1><span style={{color: "red"}}>Create</span></h1>
        <p>welcome to bad bank ....,</p>
        <label>Name </label><br></br>
        <input type="text" placeholder="Name" id="nam" onChange={e=>setName(e.target.value)}/><br></br><br></br>
        <label>Email : </label><br></br>
        <input type="text" placeholder="Email" id="mail" onChange={e=>setEmail(e.target.value)} /><br></br><br></br>
        <h6>we'll never share your Email with anyone</h6>
        <label>Password : </label><br></br>
        <input type="password" placeholder="Password" id="pass" minLength="8"  onChange={e=>setPassword(e.target.value)} /><br></br><br></br>
        
        <Button type="subimt" variant="primary" disabled={!(name,email,password)} id="">Create</Button>

       
    
        </Form>
      </Card.Body>
    </Card>
    </section>
        </>
    );
}