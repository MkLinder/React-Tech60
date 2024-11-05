import './styles.css';

import { ImageContent } from '../image-content/Image-content';

export function ContentList({ refContent, content, imgUrl }: { refContent:string, content:string, imgUrl:string}) {
    return (
        <>
            <li className="list-content">
                <p>
                    <b>{ refContent }</b><br/>{content}
                </p>
                <ImageContent image={ imgUrl } />
            </li>
        </>
    )
}