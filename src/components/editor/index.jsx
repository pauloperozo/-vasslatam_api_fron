///////////////////////////////////////////////////////////////
import { useEffect,useState} from "react"
import axios from "axios"
///////////////////////////////////////////////////////////////
const Editor = ({file}) => {

    const [ text,settext ] = useState("")
    const [ linea,setlinea ] = useState("0")
    const [ palabras,setpalabras ] = useState("0")
    const [ palindromes,setpalindromes ] = useState("0")


    const LoadFile = async ( name ) => {
        const response = await axios.get(`/files/${name}?ramd=${ new Date().getTime()}`)
        response.status === 200 ? settext( response.data ) : ""
    }

    const LoadLine = async ( name ) => {
        const response = await axios.get(`/operations/constarlineas/${name}?ramd=${ new Date().getTime()}`)
        response.status === 200 ? setlinea( response.data.menssage.replace("Cantidad De Lineas: ",'') ) : "0"
    }

    const LoadWord = async ( name ) => {
        const response = await axios.get(`/operations/contarpalabras/${name}?ramd=${ new Date().getTime()}`)
        response.status === 200 ? setpalabras( response.data.menssage.replace("Cantidad De Palabras: ",'') ) : "0"
    }
    const LoadPalindro = async ( name ) => {
        const response = await axios.get(`/operations/palindrome/${name}?ramd=${ new Date().getTime()}`)
        response.status === 200 ? setpalindromes( response.data.menssage.replace("coincidencias : ",'') ) : "0"
    }

    useEffect(()=>{

        if(file !== "")
        {
            LoadFile( file )
            LoadLine( file )
            LoadWord( file )
            LoadPalindro( file )
        }

    },[file])
 

    const styletext = {"text-align": "center"}
    const stylelabel = {"margin": "5px"}

    return (
        <div style= {styletext} >
            <textarea cols="120" rows="30" placeholder="Contenido Del Archivo a Cargar..." value={ text } >
            </textarea>
            
            <div>
                <label className="form-label">
                    <strong>Lineas:</strong>
                </label>
                
                <label className="form-label" style= {stylelabel}>{linea}</label>
                
                <label className="form-label">
                    <strong>Palabras:</strong>
                </label>

                <label className="form-label" style= {stylelabel}>{palabras}</label>

                <label className="form-label">
                    <strong>Palindromes:</strong>
                </label>

                <label className="form-label" style= {stylelabel}>{palindromes}</label>
              
            </div>
        </div>
    )
}
///////////////////////////////////////////////////////////////
export default Editor
///////////////////////////////////////////////////////////////