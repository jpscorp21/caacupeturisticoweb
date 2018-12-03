import React from 'react'
import Layout from '../components/MyLayout';
import { Container } from 'reactstrap';
import fetch from "isomorphic-unfetch";

class BlogDetail extends React.Component {

    render() {

        const { blog } = this.props;

        return (
            <Layout>
                <Container className="blog-cont">                    
                    <h1 class="blog-title">Basilica de Caacupe</h1>  
                    {/* <h4 className="small">Publicado el 13 noviembre, 2018 </h4>
                    <p className="blog-body">{blog.body}</p>                      */}
                </Container>    
                <style jsx global>
                {`
                    .blog-title {
                        font-family: "Oxygen", sans-serif;
                        font-weight: 700;
                        font-size: 2rem;                    
                        text-align: center;
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
                        margin-top: 50px;                            
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
        )
    }
}

// BlogDetail.getInitialProps = async (context) => {
//     const { id } = context.query;
//     const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const data = await respuesta.json();
//     console.log(data);
//     return {
//       blog: data
//     };
// };


export default BlogDetail;