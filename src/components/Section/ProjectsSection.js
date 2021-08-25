import './ProjectSection.scss';
import GitHubSVG from '../../assets/svgImages/github.svg';
import WebSiteSVG from '../../assets/svgImages/website.svg';

function ProjectsSection() {
    return (
        <div className="projectsContainer">
            <h1>Mis proyectos</h1>
            <div className="projectsContainer__content">

                <div className="testStart">

                    <div id="CRUDimage"></div>

                    <div>
                        <div>
                            <h2>CRUD STACK MERN</h2>
                            <p>
                                Aplicación CRUD (create, read, update, delete o en español, crear, leer, actualizar, eliminar) desarrollada con
                                React JS, NodeJS y se utilizó MongoDB como base de datos.
                                Esta aplicación está desarrollada bajo Stack MERN (Mongo, Express, React y Node)
                            </p>

                        </div>
                        <div className="container__buttons">

                            <a href="https://github.com/mati7122/CRUD-stack-MERN" className="CodeButton" style={{marginRight: '30px'}}>
                                <strong>Código</strong>
                                <img src={GitHubSVG} alt="GitHub"/>
                            </a>

                            <a href="https://crud-stack-mern.vercel.app" target="_blank" rel="noreferrer" className="CodeButton">
                                <strong>App</strong>
                                <img src={WebSiteSVG} alt="Web"/>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectsSection;