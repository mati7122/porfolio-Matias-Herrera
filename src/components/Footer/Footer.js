import './Footer.scss';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerContainer__text">
                <p>this website was made with react js and sass
                    <br />
                    You can also contact me on linkedIn and see the code of my projects on github
                </p>
            </div>

            <div className="footerContainer__social">
                <a href={'https://www.linkedin.com/in/matias-herrera-5830b7200/'} style={{ marginRight: '20px' }}>
                        <h2>LinkedIn</h2>
                        <img src={'https://image.flaticon.com/icons/png/512/174/174857.png'} />
                </a>
                <a>
                    <h2>GitHub</h2>
                    <img src={'https://image.flaticon.com/icons/png/512/25/25231.png'} />
                </a>
            </div>

        </div>
    );
}

export default Footer;