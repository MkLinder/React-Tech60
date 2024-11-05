import './styles.css';

export function ImageContent({ image }: { image:string }) {
    return (
        <section id="img">
            <span id='image-content' style={{ backgroundImage: `url(${ image })` }}/>
        </section>
    )
}