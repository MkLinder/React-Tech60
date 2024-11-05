import './styles.css';

import { BackButton } from '../back-button/Back-button';
import { ImgLogo } from '../img-logo/Img-logo';
import { ContentTitle } from './content-title/Content-title';
import { ReactElement } from 'react';


export function LinkContent(
    {title, children}: {title:string, children:ReactElement}
) {
    return (
        <>
            <section id="header-page">
                <a href="/">
                    <BackButton />
                </a>
                <ImgLogo />
            </section>
            <ContentTitle title={title} />
            <ul className="link-content">
                {children}
            </ul>
        </>
    )
}