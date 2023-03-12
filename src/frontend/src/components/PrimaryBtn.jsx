//Importação de arquivos de estilo .css
import './components_css/Btns.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function PrimaryBtn({type, text, onClick, onSubmit}) {

    //Retorna o componente em si
    return (     
        <button className="primaryBtn shadow-md" type={type} onClick={onClick} onSubmit={onSubmit} style={{margin:'0',width:"10rem",height:'fit-content',fontWeight:600,fontSize:'15px', letterSpacing:"1px"}}>{text}</button>
    )
}

export default PrimaryBtn;