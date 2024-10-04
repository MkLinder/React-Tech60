import './style.css'

export function Main(){
    return(
        <>
            <span className="title">
                <p>A tecnologia é para todos...</p>
                <h1>Tech <span className="_60">60</span><span className="mais">+</span></h1>
            </span>

            <section className="contain">
                <p className="main">
                Preparado(a) para explorar tudo o que a tecnologia tem de melhor, de maneira fácil e prática?
                </p>
                <p className="main">
                Aqui, você aprenderá a dominar seu smartphone, se conectar com a família via WhatsApp, curtir vídeos no YouTube, e até mesmo fazer compras e pagar contas online com total segurança.
                </p>
                <div className="img-smartphone"></div>
            </section>
        </>
    )
}