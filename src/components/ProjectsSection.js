
// import GitHubSVG from '../assets/svgImages/github.svg';
// import WebSiteSVG from '../assets/svgImages/website.svg';
// import Img from '../assets/CRUD.gif';
import ImgCRUD from '../assets/CRUD.gif';
import API from '../assets/APIimage.jpg';

import ArticleProject from './ArticleProject';

const paragraphCRUD = `
  Aplicación CRUD (create, read, update, delete o en español, crear, leer, actualizar, eliminar) desarrollada con
  React JS, NodeJS y se utilizó MongoDB como base de datos.
  Esta aplicación está desarrollada bajo Stack MERN (Mongo, Express, React y Node)
`
const paragraphAPI = `
    Aplicación desarrollada con NodeJS, utilizando Express y mongoose
`

function ProjectsSection() {
    return (
        <div className="ContainerProjects">
            <h1>Mis proyectos</h1>
            <ArticleProject title="CRUD STACK MERN" paragraph={paragraphCRUD} img={ImgCRUD} GitHub="https://github.com/mati7122/CRUD-stack-MERN" link="https://crud-stack-mern.vercel.app"/>
            <ArticleProject title="API REST CRUD STACK MERN" paragraph={paragraphAPI} img={API} GitHub="https://github.com/mati7122/API-CRUD-Stack-MERN" link="https://api-crud-stack-mern.herokuapp.com"/>
        </div>
    );
}

export default ProjectsSection;