import '../style.css';
import { Header } from '../../header/Header';
import { Title } from '../../main-title/Title';

export function MainContent_2() {
    return (
        <section className="content">
            <Header />
            <Title />
            <p className="main">
                Preparado(a) para explorar tudo o que a tecnologia tem de melhor, de maneira fácil e prática?
            </p>
            <p className="main">
                Aqui, você aprenderá a dominar seu smartphone, se conectar com a família via WhatsApp, curtir vídeos no YouTube, e até mesmo fazer compras e pagar contas online com total segurança. Então vamos ao que interessa...
            </p>
            <span id="img-smartphone"></span>
        </section>
    )
}