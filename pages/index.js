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
                <Card style={cardStyle} className="card">                  
                  <CardImg src={p.imagenEncabezado} width="100%" alt="arroyo_yhaka" />                  
                  <CardBody>
                    <CardTitle>{p.titulo}</CardTitle>
                    <CardText>{p.contenido}</CardText>
                    <Link href={`/blog-detail?id=${p.idPost}`} as={`/blog-detail/${p.idPost}`}>
                      <Button color="success" outline >Ver más</Button>
                    </Link>
                  </CardBody>
                </Card>
            </Col>
              ))}                       
          </Row>
          
        </Container>
        <style jsx global>
          {`
            .blog-cont {
              margin-bottom: 50px;
            }
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

            .card {
              -webkit-box-shadow: 9px 10px 24px -6px rgba(143,143,143,1);
              -moz-box-shadow: 9px 10px 24px -6px rgba(143,143,143,1);
              box-shadow: 9px 10px 24px -6px rgba(143,143,143,1);
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
  const data = await import('../data/posts.json');  
  return { posts: data.default };
};

const listGroupItemStyle = {
  border: "none"
};

const cardStyle = {
  marginTop: "25px"
}

export default Blog;
