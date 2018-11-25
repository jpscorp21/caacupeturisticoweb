import { Button, Container } from 'reactstrap';
import Link from "next/link";
import Layout from '../components/MyLayout';

const Index = () => (
    <Layout>
        <Container>
            <h1>Inicio</h1>
            <Link href="/galerias">
                <Button color="danger">Galeria</Button>
            </Link>
        </Container>
    </Layout>
)

export default Index;
