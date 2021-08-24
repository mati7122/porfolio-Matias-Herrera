import React, { Component } from 'react';
import './Form.scss';
import cardSvg from '../../assets/svgImages/JScard.svg';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

class Form extends Component {

    GetForm = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'Pronto me pondré en contacto con usted :)',
            icon: 'success',
            confirmButtonText: 'Dale!',
            confirmButtonColor: '#2196F3'
        })
    }

    render() {
        return (
            <div>
                <h1>Send me a message :)</h1>

                <div className="formContainer">
                    <div className="formContainer__info">
                        <p style={{ marginBottom: '50px' }}>Send me a message to my email account so I can get in touch with you</p>
                        <img style={{ width: '250px' }} src={cardSvg} />
                    </div>

                    <form className="formContainer__formContact">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Your email account" />
                            <input type="text" placeholder="Your message" />       
                        <input id="send__button" type="submit" value="Send Message" onClick={this.GetForm} />
                    </form>
                </div>

            </div>
        );
    }
}

export default Form;