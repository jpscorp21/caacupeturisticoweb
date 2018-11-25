import { Jumbotron } from 'reactstrap';

const JumbotronStyle = {            
    color: 'white'
}

const PrincipalBlog = () => (
  <section className="principalCont">
    <Jumbotron className="bg-dark" style={JumbotronStyle}>
      <h1 className="display-3 text-center">Blog</h1>
      <p className="lead" />
    </Jumbotron>
  </section>
);

export default PrincipalBlog;
