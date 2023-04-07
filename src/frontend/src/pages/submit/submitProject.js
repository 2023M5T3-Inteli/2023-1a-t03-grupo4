import {useRef} from 'react';

const SubmitProject = () => {
    const roleInputRef = useRef();
    const tecnologiaInputRef = useRef();
    const emailInputRef = useRef();

    const fetchData = {
        role: roleInputRef.current.value,
        tecnologia: tecnologiaInputRef.current.value,
        email: emailInputRef.current.value,
    }   

    const submitHandler = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fetchData})
        };
        fetch('dev-loadbalancer-1136620238.us-east-1.elb.amazonaws.com/project', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

  return (200);
}