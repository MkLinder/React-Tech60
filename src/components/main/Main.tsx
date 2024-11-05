import { MainContent_1 } from './main-content/Main-content-1';
import { MainContent_2 } from './main-content/Main-content-2';

export function Main() {
    const width = window.innerWidth;

    return (
        <>
            {width < 431 ? <MainContent_1 /> : <MainContent_2 />}
        </>
    )
}