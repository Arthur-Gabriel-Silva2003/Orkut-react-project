import "./Menu.css"
import {BsFillPencilFill, BsImages, BsEnvelope} from "react-icons/bs"
import {HiOutlineUser, HiOutlineUserAdd} from "react-icons/hi"
import {MdOutlineVideoLibrary, MdOutlineOndemandVideo} from "react-icons/md"

function Menu () {
    return(
        <div className="contorno">
            <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/110573448?v=4"/>
                <h3>Arthur Gabriel</h3>
            </div>
            <h4 className="status">Status <BsFillPencilFill/></h4>
            <ul>
                <li className="disp">disponivel</li>
            </ul>

            <p>Hello, World! Sou Arthur Gabriel e quero fazer novas amizades :) </p>

            <div className="opc">
                <p><HiOutlineUser/> Perfil</p>
                <p><BsImages/> Fotos</p>
                <p><MdOutlineVideoLibrary/> Videos</p>
                <p><MdOutlineOndemandVideo/> Videos</p>
                <p><BsEnvelope/> Recados</p>
                <p><HiOutlineUserAdd/> Add Amigo</p>
            </div>
            
            
        </div>
    )
}

export default Menu
