import { ImgLogo } from '../img-logo/Img-logo'
import './style.css'

export function Header(){
    return (
        <section id='header-container'>
            <span id="img-hand"></span>
            <p id='owner'>Desenvolvido por <b>Mike Linder</b></p>
            <ImgLogo />
        </section>
    )
}