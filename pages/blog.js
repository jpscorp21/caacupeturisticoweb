import React from "react";
import Link from 'next/link';
import Layout from "../components/MyLayout";
import PrincipalBlog from "../components/PrincipalBlog";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import fetch from "isomorphic-unfetch";

const listGroupItemStyle = {
  border: "none"
};

class Blog extends React.Component {
  render() {
    const { blogs } = this.props;

    return (
      <Layout>
        <PrincipalBlog />
        <Container className="blog-cont">        
          <ListGroup>
            {blogs.map(blog => (
              <ListGroupItem style={listGroupItemStyle} key={blog.id}>                
                <Link as={`/blog-detail/${blog.id}`} href={`/blog-detail?id=${blog.id}`}>
                    <h2 className="blog-title">{blog.title}</h2>
                </Link>            
                <h4 className="small">Publicado el 13 noviembre, 2018 </h4>
                <p className="blog-body">{blog.body}</p>                
              </ListGroupItem>
            ))}
          </ListGroup>
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
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respuesta.json();
  return {
    blogs: data
  };
};

export default Blog;
