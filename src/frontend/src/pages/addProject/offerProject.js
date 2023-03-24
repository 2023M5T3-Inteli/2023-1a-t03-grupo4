import { useRef } from 'react'

const OfferProject = () => {
  const nameInputRef = useRef()
  const emailInputRef = useRef()

  
  const submitHandler = (event) => {
    event.preventdefault()
    
    
      const fetchData = {
        name: nameInputRef.current.value,
        input: emailInputRef.current.value,
      }

      console.log(fetchData)
    // fetch("http://localhost:3000/project", {
    //   method: 'post',
    //   headers: {},
    //   body: {fetchData}
    // })

  }

  return (
    <form onsubmit={submitHandler}>
      <div>
        <label>Nome</label>
        <input ref={nameInputRef}/>
      </div>
      <div>
        <label>Email</label>
        <input ref={emailInputRef}/>
      </div>
      <div>
        <label>Nome</label>
        <input />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default OfferProject