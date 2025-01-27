import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function Deposit(){

    let  user = useContext(userContext);
    let len= Number(user.users.length)
    console.log(len-1);
    let  [curr_balance,setCurr_balance] = useState(user.users[len-1].Balance);
    let [deposit,setDeposit] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();
        console.log("deposit", deposit);
        // setCurr_balance(Number(curr_balance) + Number(deposit));
        if(deposit > 0 && deposit ){
            setCurr_balance(Number(curr_balance) + Number(deposit));
          }
          else{
            alert("please Enter a valid amount")
          }
        
      }
      user.users[len-1].Balance = curr_balance;
    return(
        <>
        <section>
        <Card style={{ width: '25rem',paddingLeft:'30px',paddingTop:'50px',paddingBottom:'50px'}} className="creat">
      <Card.Body>
        <Form onSubmit={handleSubmit}  className="wit">
        <h1><span style={{color: "red"}}>Deposit</span></h1>

        {/* <input type="number" placeholder="AMOUNT" /> */}
        <input type="number" placeholder="AMOUNT" onChange={(e) => setDeposit(e.target.value)} /><span> </span>
        {/* <input type="subimt" value="Deposit" /> */}
        <Button type="submit" className='widbut' disabled={!(deposit)}>Deposit</Button>
        <h4>Balance : <span style={{color: "red"}}> {curr_balance} </span></h4>
        </Form>
        </Card.Body>
    </Card>
    </section>
        </>
    )
}

