import React from 'react'
import Layout from '../components/MyLayout';
import { Container } from 'reactstrap';
import fetch from "isomorphic-unfetch";
import ReactHtmlParser from 'react-html-parser';

class BlogDetail extends React.Component {

    render() {

        const { blog } = this.props;

        return (
            <Layout>                
                    <Container className="blog-cont">     
                        <h1 className="blog-title mb-5">{blog.titulo}</h1>                          
                        {ReactHtmlParser(blog.contenidoDetalle)}
                    </Container>      

                <style jsx global>
                {`
                    .blog-cont {
                        margin-bottom: 30px;
                    }

                    .blog-title {
                        font-family: "Oxygen", sans-serif;
                        font-weight: 900;
                        font-size: 2.8rem;                    
                        text-align: center;                        
                    }                    

                    .blog-body, p {
                        font-family: "Lato", sans-serif;
                        color: #555;
                        font-size: 19px;                
                        text-rendering: geometricPrecision;                
                    }      
                    
                    .blog-cont li {
                        font-family: "Lato", sans-serif;
                        font-size: 19px;                
                        padding-bottom: 10px;
                        list-style-type: disc;
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
                            font-size: 2.2rem;
                        }

                        .blog-body, p, li {
                            font-size: 17px;
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

BlogDetail.getInitialProps = async (context) => {
    const { id } = context.query;
    const data = await import(`../data/posts.json`)
    const blog = data.default.filter((item) => item.idPost === id);    
    return { blog: blog[0] };
};


export default BlogDetail;