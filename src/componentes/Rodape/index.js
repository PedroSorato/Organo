import './rodape.css'

const Rodape = () => {
    return (
            <section className='rodape'>
                <div className='rodape-midias'>
                    <img src='./imagens/fb.png' alt='logo do facebook'/>
                    <img src='./imagens/tw.png' alt='logo do twitter'/>
                    <img src='./imagens/ig.png' alt='logo do instagram'/>
                </div>
                <div className='rodape-logo'>
                    <img src='./imagens/logo.png'  alt='logo da Organo'/>
                </div>
                <div className='rodape-criador'>
                    Desenvolvido por <a href='https://github.com/PedroSorato' target='_blank'>Pedro Sorato</a>
                </div>
            </section>
    )
}

export default Rodape