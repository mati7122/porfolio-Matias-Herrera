//SVG IMAGES
import HTMLsvg from '../assets/svgImages/html-1.svg';
import CSSsvg from '../assets/svgImages/css-3.svg';
import JSsvg from '../assets/svgImages/logo-javascript.svg';
import NodeJSsvg from '../assets/svgImages/nodejs-icon.svg';
import SASSsvg from '../assets/svgImages/sass-1.svg';
import GITsvg from '../assets/svgImages/git-icon.svg';
import REACTsvg from '../assets/svgImages/react-2.svg';
import MongoDBsvg from '../assets/svgImages/mongodb-icon-1.svg';

import { ItemTech } from './Item';

function TechSection() {
    return (
        <section className="TechSection">
            <h1>Tecnologías</h1>
            <div className="TechSection__items">
                <ItemTech name="HTML" src={HTMLsvg} alt="HTML" />
                <ItemTech name="CSS" src={CSSsvg} alt="CSS" />
                <ItemTech name="JS" src={JSsvg} alt="JS" />
                <ItemTech name="ReactJS" src={REACTsvg} alt="React" />
                <ItemTech name="SASS" src={SASSsvg} alt="SASS" />
                <ItemTech name="NodeJS" src={NodeJSsvg} alt="NodeJS" />
                <ItemTech name="GIT" src={GITsvg} alt="Git" />
                <ItemTech name="MongoDB" src={MongoDBsvg} alt="MongoDB" />
            </div>
        </section>
    );
}

export default TechSection;