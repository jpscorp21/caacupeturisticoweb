import Layout from "../components/MyLayout";
import { Container } from "reactstrap";
let nombre = "Hola Mundo";
const Contactos = () => (

    <Layout>
        <Container style={ContainerStyle}>
            <h1>Contactos</h1>
            <ul>
                <li><strong>Correo: </strong>jpscorp21@gmail.com</li> 
                <li><strong>Números: </strong>0961 383308  0961383306</li>
                <li><strong>Ciudad: </strong>Paraguay - Caacupé</li>
                <li><strong>Dirección: </strong>General Roa C/ Cap. Dominguez</li>
            </ul>
        </Container>
        <style jsx>
        {`            
            ul {
                padding-left: 0px;
            }

            li {
                list-style-type: none;
                padding-top: 10px;
                margin: 0px;
                
            }
        `}
        </style>
    </Layout>
)

const ContainerStyle = {
    height: '580px',
    marginTop: '20px'
}

export default Contactos;
