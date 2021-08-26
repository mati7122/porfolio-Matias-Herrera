//SVG IMAGES
import HTMLsvg from '../assets/svgImages/html-1.svg';
import CSSsvg from '../assets/svgImages/css-3.svg';
import JSsvg from '../assets/svgImages/logo-javascript.svg';
import NodeJSsvg from '../assets/svgImages/nodejs-icon.svg';
import SASSsvg from '../assets/svgImages/sass-1.svg';
import GITsvg from '../assets/svgImages/git-icon.svg';
import REACTsvg from '../assets/svgImages/react-2.svg';
import MongoDBsvg from '../assets/svgImages/mongodb-icon-1.svg';

function TechSection(){
    return(
        <div className="techSection">
            <h1>Tecnologías</h1>
            <section className="animateTech">
                <div>
                    <strong>HTML</strong>
                    <img className="techSection__img" src={HTMLsvg} alt="HTML"/>
                </div>
                <div>
                    <strong>CSS</strong>
                    <img className="techSection__img" src={CSSsvg} alt="CSS"/>
                </div>
                <div>
                    <strong>JS</strong>
                    <img className="techSection__img" src={JSsvg} alt="JS"/>
                </div>
                <div>
                    <strong>SASS</strong>
                    <img className="techSection__img" src={SASSsvg} alt="SASS"/>
                </div>
                <div>
                    <strong>NodeJS</strong>
                    <img className="techSection__img" src={NodeJSsvg} alt="NodeJS"/>
                </div>
                <div>
                    <strong>Git</strong>
                    <img className="techSection__img" src={GITsvg} alt="Git"/>
                </div>
                <div>
                    <strong>ReactJS</strong>
                    <img className="techSection__img" src={REACTsvg} alt="ReactJS"/>
                </div>
                <div>
                    <strong>MongoDB</strong>
                    <img className="techSection__img" src={MongoDBsvg} alt="MongoDB"/>
                </div>           
            </section>
        </div>
    );
}

export default TechSection;