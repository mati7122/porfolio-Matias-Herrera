import "./Slider.scss";
import Particles from "react-particles-js";
import configParticles from "../../config/configParticles";
import About from "../About";

function Slider() {
    return (
        // <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div>
            {/* <div style={{ position: 'absolute' }}>
                <Particles height="100vh" width="100vw" params={configParticles} />
            </div> */}

            <div  className="sliderContainer">

                <div className="sliderContainer__text">
                    <h1>Matías Facundo Herrera</h1>
                    <h2>FULLSTACK DEVELOPER</h2>
                </div>

                <div className="sliderContainer__imgs">
                    <img style={{ width: '100px', marginBottom: '5px' }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'} />
                    <div style={{ marginTop: '5px' }}>
                        <img style={{ width: '150px', marginRight: '10px' }} src={'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'} />
                        <img style={{ width: '100px' }} src={'https://img.icons8.com/color/452/mongodb.png'} />
                    </div>
                </div>

            </div>   

            <About /> 

        </div>

    );
}

export default Slider;