import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data)
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Contatcto</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input 
                type="text" 
                placeholder='ingresa tu nombre'
                {...register("nombre")}
                />
                <input 
                type="text" 
                placeholder='ingresa tu email'
                {...register("email")}
                />
                <input 
                type="phone" 
                placeholder='ingresa tu telefono' 
                {...register("telefono")}
                />
                <button typeof='Submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto