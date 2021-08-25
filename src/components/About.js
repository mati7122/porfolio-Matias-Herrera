
const style = {
    p : {
        margin: '0 40px'
    },
    div : {
        margin: '5vh 0'
    }
}

function About(){
    return(
        <div style={style.div}>
            <h1>Un poco sobre mi</h1>
            <p style={style.p}>Soy oriundo de Argentina, provincia de Buenos Aires. Hice la secundaria en la
                escuela técnica Nº5 de la localidad de Temperley.
                La programación comenzó a interesarme a la edad de 13 años, pasaba la mayor parte del
                tiempo con computadora. Practicaba en c++ a través de tutoriales en youtube
                y experimentaba con unity intentando desarrollar mi propio videojuego.
                En la secundaria mi interés se incrementó al trabajar con Arduino.<br/>
                Actualmente estudio por mi cuenta ya sea por documentación, cursos, blogs, 
                vídeos en Youtube, foros, hablando con programadores.
                Tengo un fuerte interés por el desarrollo web y móvil. Quiero saber como funciona todo y
                tener la capacidad de desarrollar todo tipos de proyectos. Mi meta es seguir aprendiendo
                y más importante, aportar a mi equipo, ser un miembro valioso. 
            </p>
        </div>
    );
}

export default About;