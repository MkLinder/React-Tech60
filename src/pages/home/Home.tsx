import './style.css';

import { Header } from "../../components/header/Header";
import { Title } from "../../components/title/Title";
import { Main } from "../../components/main/Main";
import { Main_2 } from "../../components/main/Main-2";

export function Home() {
    return (
        <>
            <section className="page">
                <Header />
                <Title />
                <Main />
            </section>
            <section className="page">
                <Main_2 />
            </section>
        </>
    )
}