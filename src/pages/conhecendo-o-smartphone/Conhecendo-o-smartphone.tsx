import { Subtitle } from '../../components/link-content/subtitle/Subtitle';
import { ContentList } from '../../components/link-content/content-list/Content-list';

import touchscreen from '../../assets/touchscreen.png';
import poweroff from '../../assets/poweroff.png';
import volume from '../../assets/volume.png';
import photo from '../../assets/photo.png';
import { LinkContent } from '../../components/link-content/Link-content';

export function ConhecendoOSmartphone() {
    return (
        <>
            <LinkContent
                title='CONHECENDO O SMARTPHONE'
                children={
                    <>
                        <Subtitle subtitle='Parte da Frente' />
                        <ContentList
                            refContent='Tela Touchscreen:'
                            content='A tela sensível ao toque é onde tudo acontece. Toque levemente com o dedo para abrir aplicativos, rolar páginas e digitar.'
                            imgUrl={touchscreen}
                        />
                        <ContentList
                            refContent='Botão Liga/Desliga:'
                            content='Geralmente localizado na lateral. Pressione-o por alguns segundos para ligar ou desligar o aparelho.'
                            imgUrl={poweroff}
                        />
                        <ContentList
                            refContent='Botão de Volume:'
                            content='São dois botões, um para aumentar e outro para diminuir o volume do som.'
                            imgUrl={volume}
                        />

                        <Subtitle subtitle='Parte de trás' />
                        <ContentList
                            refContent='Câmera:'
                            content='Para tirar fotos e gravar vídeos.'
                            imgUrl={photo}
                        />
                    </>
                }
            />
        </>
    )
}