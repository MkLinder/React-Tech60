import { MainContent_1 } from './main-content/Main-content-1';
import { MainContent_2 } from './main-content/Main-content-2';

export function Main() {
    const { innerWidth: width } = window;

    return (
        <>
            {innerWidth < 431 ? <MainContent_1 /> : <MainContent_2 />}
        </>
    )
}