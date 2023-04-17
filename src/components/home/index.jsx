///////////////////////////////////////////////////////////////
import { useEffect, useState } from "react"
///////////////////////////////////////////////////////////////
import Header from '../header'
import Form   from '../form'
import Editor  from '../editor'
import Footer from '../footer'
///////////////////////////////////////////////////////////////
const Home = () => {

    const[ file,set_file ] = useState("")
   
    const NewSubmit = ( data, download ) => {
        set_file(data)
    }

    return (
        <div>
            <Header/>
            <Form  NewSubmit={NewSubmit}/>
            <Editor file={file}/>
            <Footer/>
        </div>
    )
}
///////////////////////////////////////////////////////////////
export default Home
///////////////////////////////////////////////////////////////