import "./styles.css";

import Card from 'react-bootstrap/Card';




export default function Home(){



return(
<>
<img src={require('./download.jpg')} alt='error' />
<p>
   <h4 id="home-head">BAD BANK</h4>
   <p id="about">
   Welcome to Bad Bank - the bank that carries with it a tradition of
   100+ years and yet is young enough to adapt itself to the rapidly changing scenario in the banking industry.
   Explore more about Bad Bank in this section.
   Bad Bank is a Scheduled Commercial Bank, headquartered in Karur in Tamil Nadu, India.
   It was founded in 1916 by M. A. Venkatarama Chettiar and Athi Krishna Chettiar. 
   The bank primarily operates in the treasury, corporate/wholesale banking, and retail banking segments.

   BB provides services such as personal, corporate, and agricultural banking and services to NRIs and SMBs. 
   The bank had approximately 800 branches and 1,650 ATMs as of 31 March 2020. 
   BB has recorded a Total Business of ₹107,591 crore with deposits of ₹59,075 crore and advances of ₹48,516 crore.
   The Bad Bank Limited, popularly known as BB, was set up on 25 July 1916 by M. A. Venkatarama Chettiar and 
   Athi Krishna Chettiar to capitalise on the previously unexploited market of traders and agriculturists in 
   and around Karur, a town in Tamil Nadu.
   <br /> <br /> 
   <h6><center><a href="#/Create">Create A New Account</a></center></h6>
   </p>
</p><br />

<section id="homesection">

    <Card style={{ width: '21rem',marginLeft:'200px'}} className="car">
      <Card.Img variant="top" src={require('./loan.jpg')} className="carim" />
      <Card.Body>
        <Card.Title>Loan Bad Bank</Card.Title><br />
        <Card.Text>
        Personal
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '21rem'}} className="car">
      <Card.Img variant="top" src={require('./card.jpg')} className="carim" />
      <Card.Body>
        <Card.Title>Card BB</Card.Title><br />
        <Card.Text>
        Personal
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '21rem'}} className="car">
      <Card.Img variant="top" src={require('./money.jpg')} className="carim" />
      <Card.Body>
        <Card.Title>Interest Rates</Card.Title><br />
        <Card.Text>
        Personal
        </Card.Text>
      </Card.Body>
    </Card>
    </section>
</>
)
}