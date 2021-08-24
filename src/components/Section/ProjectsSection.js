import './ProjectSection.scss';

function ProjectsSection(){
    return(
        <div className="projectsContainer">
            <h1>My projects</h1>
            <div className="projectsContainer__grid">
                <a className="projectsContainer__grid__link" id="link__CRUD">
                    <strong>CRUD</strong>
                </a>
                <a className="projectsContainer__grid__link" id="link__e-commerce">
                    <strong>E-COMMERCE</strong>
                </a>
            </div>
        </div>
    );
}

export default ProjectsSection;