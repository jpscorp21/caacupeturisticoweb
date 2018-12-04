import { Button, Container, Jumbotron } from 'reactstrap';
import Link from "next/link";
import Layout from '../components/MyLayout';

const Index = () => (
    <Layout>
            <Jumbotron className="bg-success" style={JumbotronStyle}>
        <Container className="inicioCont">
            <div className="tituloCont">
                <h1 className="text-dark text-center">Caacupé Turístico</h1>
                <Link href="/blog">
                    <Button color="success" block style={ButtonStyle} size="lg">Ir al Blog</Button>
                </Link>
            </div>
        </Container>
            </Jumbotron>
        <style jsx>
        {`
            .inicioCont: {
                position: relative !important;
                top: 500px;                
            }            
        `}
        </style>
    </Layout>
)

const JumbotronStyle = {
    background: "center",
    backgroundColor: 'green',
    backgroundImage: 'url("https://farm5.staticflickr.com/4836/45435664814_58abce7f45_o.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',    
    height: '500px',    
}

const ButtonStyle = {
    margin: 'auto',
    textAlign: 'center',    
}

export default Index;
