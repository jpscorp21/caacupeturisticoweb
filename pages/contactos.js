import Layout from "../components/MyLayout";
import { Container } from "reactstrap";
let nombre = "Hola Mundo";
const Contactos = () => (

    <Layout>
        <Container>
            <h1>{nombre}</h1>
        </Container>
    </Layout>
)

export default Contactos;
