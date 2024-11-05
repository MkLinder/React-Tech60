import { ContentList } from '../../components/link-content/content-list/Content-list';
import { LinkContent } from '../../components/link-content/Link-content';

import poweroff from '../../assets/poweroff.png';
import swipeScreen from '../../assets/swipe-the-screen.png';

export function LigandoOSmartphone() {
    return (
        <LinkContent
            title='LIGANDO O SMARTPHONE'
            children={
                <>
                    <ContentList
                        refContent='Pressione o botão Liga/Desliga:'
                        content='Segure por alguns segundos até ver o logotipo do aparelho na tela.'
                        imgUrl={poweroff}
                    />
                    <ContentList
                        refContent='Tela de Bloqueio:'
                        content='Após ligar, você verá a tela de bloqueio. Se for preciso, deslize o dedo de baixo para cima na tela para desbloquear. Alguns smartphones podem pedir uma senha ou um padrão (desenho na tela).'
                        imgUrl={swipeScreen}
                    />
                </>
            }
        />
    )
}