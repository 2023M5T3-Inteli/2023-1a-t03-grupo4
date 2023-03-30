//Importação de arquivos de estilo .css
import { useEffect } from 'react'
import './components_css/Btns.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function Btn({href,type, text, onClick, onSubmit, onChange, width, disabled, variant}) {

    if(!width) {
        width = "10rem"
    }

    if(!disabled) {
        disabled = false
    }

    if(!variant) {
        variant = "primaryBtn"
    }

    //Retorna o componente em si
    return (<div>
        <button href={href} id='btn' disabled={disabled} className={variant} type={type} onClick={onClick} onSubmit={onSubmit} onChange={onChange} style={{margin:'0',width:width,height:'fit-content',fontWeight:600,fontSize:'15px', letterSpacing:"1px"}}>{text}</button>
    </div>
    )
}

export default Btn;