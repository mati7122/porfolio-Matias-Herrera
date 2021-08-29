
// import GitHubSvg from '../assets/svgImages/github.svg';
import LinkeDinSvg from '../assets/svgImages/linkedin.svg';
import GitHubSvg from '../assets/svgImages/github.svg';

import { ItemContact } from './Item';

function Footer() {
    return (
        <footer>

            <div className="footerContainer__text">
                <p>Este sitio fue desarrollado con React JS y Sass
                    <br />
                    Puedes contactarme a través de mi cuenta en LinkedIn y ver mis código de este y otros proyectos en GitHub
                </p>
            </div>

            <div className="footerContainer__contact">
                <ItemContact href="https://www.linkedin.com/in/matias-herrera-5830b7200/" img={LinkeDinSvg} alt="LinkedIn"/>
                <ItemContact href="https://github.com/mati7122" img={GitHubSvg} alt="GitHub"/>
            </div>

        </footer>
    );
}

export default Footer;