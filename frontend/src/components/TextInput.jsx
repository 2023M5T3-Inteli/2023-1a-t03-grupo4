//Importação de arquivo de estilo .css
import './components_css/TextInput.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function TextInput({label, placeholder, icon, htmlFor, type, value, onChange, width}) {

  if (!width) {
    width="22rem"
  }

  //Retorna o componente em si
  return (<div className="flex-col textInput" style={{width:width}}>

    <div className="text-left w-full">
      <label id='input' className="label text-opacity-70 font-semibold pl-4" style={{margin:0, paddingBottom:5, color:"var(--subheading)"}}>{label}</label>
    </div>

    <div className="flex flex-row items-center w-full">
      <input type={type} htmlFor={htmlFor} value={value} onChange={onChange} className="text-input" style={{width:"100%"}} placeholder={placeholder}></input>
      
    </div>

  </div>)
}

export default TextInput;