
import GitHubSvg from '../assets/svgImages/github.svg';
import LinkeDinSvg from '../assets/svgImages/linkedin.svg';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerContainer__text">
                <p>Este sitio fue desarrollado con React JS y Sass
                    <br />
                    Puedes contactarme a través de mi cuenta en LinkedIn y ver mis código de este y otros proyectos en GitHub
                </p>
            </div>

            <div className="footerContainer__social">
                <a href={'https://www.linkedin.com/in/matias-herrera-5830b7200/'} style={{ marginRight: '20px' }}>
                        
                        <img src={LinkeDinSvg} alt="LinkedIn"/>
                        <h2>LinkedIn</h2>
                </a>

                <a href='*'>
                    <img src={GitHubSvg} alt="GitHub"/>
                    <h2>GitHub</h2>
                </a>
            </div>

        </div>
    );
}

export default Footer;