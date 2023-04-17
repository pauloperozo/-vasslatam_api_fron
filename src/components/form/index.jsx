///////////////////////////////////////////////////////////////
import { useEffect, useState } from "react"
import axios from "axios"
///////////////////////////////////////////////////////////////
const Form = ({NewSubmit}) => {

    const [ repository,setrepository ] = useState([])
    const [ language,setlanguage ] = useState([])


    const handleSubmit = async ( event ) => {
        
        event.preventDefault()
        const form = new FormData( event.currentTarget )
        const response = await axios.post("/files",form, { headers: { 'Content-Type': 'multipart/form-data' } } )
        if( response.status === 200)
        {
            const name = document.querySelector('input[type=file]').files[0].name
            NewSubmit( name )
            event.target.reset()
        }
        else alert("Error Enviando Publicacion")
    }

    useEffect(()=>{ },[])
    

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <form className="d-flex"  onSubmit={handleSubmit} enctype="multipart/form-date" >
                    <input id="file" name="file" className="form-control me-2" type="file" placeholder="File" aria-label="File" required />
                    <button className="btn btn-success" type="submit">Cargar</button>
                </form>
            </div>
        </nav>
    )
}
///////////////////////////////////////////////////////////////
export default Form
///////////////////////////////////////////////////////////////