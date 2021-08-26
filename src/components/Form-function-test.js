import React from 'react';
import { useForm } from 'react-hook-form';

import MessageSVG from '../../assets/svgImages/paper-plane.svg';

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="formSection">
            <h1>Enviame un mensaje :)</h1>

            <div>
                <section>
                    <h4>Envíame un mensaje a mi cuenta de correo para ponerme en contacto con vos</h4>
                    <img id="FlySvg" src={MessageSVG} />
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("Name", { required: true })} />
                    {errors.Name?.type === 'required' && "El nombre es requerido"}

                    <textarea {...register("Message", { required: true })}></textarea>
                    {errors.Message?.type === 'required' && "El mensaje es requerido"}

                    <input id="submitButton" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Form;