import GitHubSVG from '../assets/svgImages/github.svg';
import WebSiteSVG from '../assets/svgImages/website.svg';

function Button(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            <strong>{props.nameButton}</strong>
            <img src={props.imageButton} alt={props.alt}/>
        </a>
    );
}

function ArticleProject(props) {
    return (
        <div className="ArticleProject">

            <div className="ArticleProject__container">

                <img src={props.img} alt="img" />

                <div>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.paragraph}</p>
                    </div>

                    <div className="ArticleProject__buttons">
                        <Button nameButton="Código" imageButton={GitHubSVG} alt="GitHub" href={props.GitHub}/>
                        <Button nameButton="App" imageButton={WebSiteSVG} alt="Web" href={props.link}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ArticleProject;