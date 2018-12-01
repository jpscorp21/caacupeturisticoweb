import React from "react";
import Link from 'next/link';
import Layout from "../components/MyLayout";
import { 
  Container, 
  Card, 
  CardImg,
  CardText, 
  CardBody, 
  CardTitle,   
  Row,
  Col,
  Button } from "reactstrap";
import fetch from "isomorphic-unfetch";

const listGroupItemStyle = {
  border: "none"
};

const cardStyle = {
  marginTop: "25px"
}

class Blog extends React.Component {
  
  constructor() {    
    super();        
  }

  async fetchPost() {
    
    
  }

  componentWillMount() {
    this.fetchPost();    
  }  

  render() {
    const { posts } = this.props;

    return (
      <Layout>        
        <Container className="blog-cont">        
          <Row>
            {posts.map((p) => (
            <Col xs="12" sm="6" key={p.idPost}>   
                <Card style={cardStyle}>
                  <a data-flickr-embed="true" href="https://www.flickr.com/photos/86918208@N06/45218152975/in/photostream/" title="arroyo_yhaka">
                  <CardImg src="https://farm5.staticflickr.com/4856/45218152975_70f9109c26_z.jpg" width="100%" alt="arroyo_yhaka" />
                  </a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>                
                  <CardBody>
                    <CardTitle>{p.titulo}</CardTitle>
                    <CardText>{p.contenido}</CardText>
                    <Button color="primary" outline >Ver más</Button>
                  </CardBody>
                </Card>
            </Col>
              ))}           
            {/* <Col xs="12" sm="6">               */}
            {/* <Col xs="12" sm="6">
              <Card style={cardStyle}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></CardImg>
                <CardBody>
                  <CardTitle>Cerro Kavaju</CardTitle>
                  <CardText>Cerro situado en medio de tres ciudades Caacupé, Atyra y Tobati</CardText>
                  <Button color="primary" outline >Ver más</Button>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
          
        </Container>
        <style jsx global>
          {`
            .blog-title {
              font-family: "Oxygen", sans-serif;
              font-weight: 700;
              font-size: 1.8rem;
              cursor: pointer;
            }

            .blog-body {
                font-family: "Lato", sans-serif;
                color: #555;
                font-size: 17px;                
                text-rendering: geometricPrecision;                
            }

            h4.small {
                font-size: 14px;
                color: #9EABB3;
            }

            .blog-cont {                                
                width: 800px;
                margin-top: 30px;
            }

            @media only screen and (max-width: 630px) {
                .blog-title {
                    font-size: 1.6rem;
                }

                .blog-cont {
                    width: 100%;
                }
            }

            
          `}
        </style>
      </Layout>
    );
  }
}

Blog.getInitialProps = async () => {  
  const data = await import('../data/posts.json')
  console.log({ posts: data.default });  
  return { posts: data.default };
};

export default Blog;
