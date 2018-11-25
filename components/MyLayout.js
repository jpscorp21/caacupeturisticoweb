import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}        
    </div>
)

export default Layout;