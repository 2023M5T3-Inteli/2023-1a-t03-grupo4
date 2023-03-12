//Importação de arquivo de estilo .css e bibliotecas

import { useState } from "react";
import './components_css/Checkbox.css'

//Cria o componente com suas variáveis e referenciando as informações necessárias
function CheckBox({label,count,checkFunction}) {

  //Cria e define as informações de checagem do checkbox para false
  const [isChecked, setIsChecked] = useState(false);

  //Varia o id do componente de acordo com a variável 'count'(contagem) para que não haja confusões nas funcçoes que referenciam o id do componente em páginas com mais de um componente
  var fieldId = 'checkBox' + count;

  //Marca ou desmarca (check) quando o checkbox é pressionado
  const handleCheck = () => {
    setIsChecked(!isChecked)
    checkFunction()
  }


  //Retorna o componente em si
  return (<div className="flex flex-row items-center">

    <input className="flex items-center justify-center checkbox" id={fieldId} type={"checkbox"} onChange={handleCheck} checked={isChecked}></input>

    <label htmlFor="checkbox_btn">{label}</label>
    
  </div>);
}

export default CheckBox;

//   para mais variações, acessar: https://blog.logrocket.com/building-custom-checkbox-react/