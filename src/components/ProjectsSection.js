
import ImgCRUD from '../assets/CRUD.gif';
import API from '../assets/APIimage.jpg';
import poke from '../assets/pokemon.jpg';

import ArticleProject from './ArticleProject';

const paragraph = {
    CRUD: `
    Aplicación CRUD (create, read, update, delete o en español, crear, leer, actualizar, eliminar) desarrollada con
    React JS, NodeJS y se utilizó MongoDB como base de datos.
    Esta aplicación está desarrollada bajo Stack MERN (Mongo, Express, React y Node)
  `,
    API: `
    Aplicación desarrollada con NodeJS, utilizando Express y mongoose
  `,
    Pokemon: `Aplicación sencilla desarrollada con React y estilizada con css, consumiendo los datos 
    de una API la cual contiene datos de la saga de videojuegos Pokémon`
}

function ProjectsSection() {
    return (
        <div className="ContainerProjects">
            <h1>Mis proyectos</h1>
            <ArticleProject title="CRUD STACK MERN" paragraph={paragraph.CRUD} img={ImgCRUD} GitHub="https://github.com/mati7122/CRUD-stack-MERN" link="https://crud-stack-mern.vercel.app" />
            <ArticleProject title="API REST CRUD STACK MERN" paragraph={paragraph.API} img={API} GitHub="https://github.com/mati7122/API-CRUD-Stack-MERN" link="https://api-crud-stack-mern.herokuapp.com" />
            <ArticleProject title="Pokémon APP" paragraph={paragraph.Pokemon} img={poke} GitHub="https://github.com/mati7122/pokedex" link='https://pokemon-red.vercel.app' />
        </div>
    );
}

export default ProjectsSection;