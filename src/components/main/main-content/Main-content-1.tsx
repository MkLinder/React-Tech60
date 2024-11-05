import { Header } from '../../header/Header';
import { Title } from '../../main-title/Title';
import '../style.css';

export function MainContent_1() {
    return (
        <>
            <section className="content">
                <Header />
                <Title />
                <p className="main">
                    Preparado(a) para explorar tudo o que a tecnologia tem de melhor, de maneira fácil e prática?
                </p>
                <span id="img-smartphone"></span>
            </section>
            <section className="content">
                <p className="main description">
                    Aqui, você aprenderá a dominar seu smartphone, se conectar com a família via WhatsApp, curtir vídeos no YouTube, e até mesmo fazer compras e pagar contas online com total segurança. Então vamos ao que interessa...
                </p>
                <span id="img-1tech"></span>
            </section>
            <section className="content">
                <h6 id='subtitle'>Como funciona meu smartphone</h6>
                <section id="links-list">
                    <ul id="topics-list">
                        <li>
                            <a href="/conhecendo-o-smartphone">Conhecendo o Smartphone</a>
                        </li>
                        <li>
                            <a href="/ligando-o-smartphone">Ligando o Smartphone</a>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}