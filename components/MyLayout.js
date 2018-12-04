import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Footer';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}   
        <Footer />     
    </div>
)

export default Layout;