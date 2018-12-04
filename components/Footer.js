import React from 'react';


export class Footer extends React.Component {

    render() {        

        return (
            <footer className="footerCont">
                Caacupe Turístico {new Date().getFullYear()}                                             
                <style jsx>
                {`                
                        .footerCont {
                            position: relative;
                            bottom: 0;                                                        
                            width: 100%;
                            background: green;
                            padding-top: 30px;
                            padding-bottom: 30px;
                            color: white;
                            text-align: center;
                            font-size: 18px;
                        }
                        
                 `}
                </style>
            </footer>
        )
    }
}


export default Footer;