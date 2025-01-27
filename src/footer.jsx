import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample() {
    return (
        <Card>
            <Card.Header as="h5">Owner Of The Bank </Card.Header>
            <Card.Body>
                <img src={require('./myimg.jpg')} alt='error' id='myimhg' />

                <Card.Title style={{ marginTop: '3em', marginLeft: '200px' }} >Mohamed Ashi</Card.Title>
                <Card.Text style={{ marginTop: '3px', marginLeft: '200px' }}>
                    <a href='https://bad-bank-of-ashi.netlify.app/'>www.Bad-Bank-Of-Ashi.com</a>
                </Card.Text>
                <section id='soc'>
                   <a href='https://www.instagram.com/m_md_ashik?igsh=cHAwNDRhaDRnbDJm' target='_black'> <h6 id='insta'>Instagram <span> | </span>  </h6></a>
                   <a href='https://www.linkedin.com/in/mohamed-ashik-m-8b6324284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_black'> <h6 id='linkedin'>LinkedIn <span> | </span> </h6></a>
                   <a href='https://github.com/MOHAMEDASHIKM' target='_black'><h6 id='git'>GITHUB</h6></a>

                </section>
                <Card.Text style={{ marginTop: '3em', marginLeft: '730px' }}>
                    @ Copy Rights Ashi
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default WithHeaderStyledExample;