import { useState } from 'react';

function useForm(valuesCategoria) {
    const [values, setValues] = useState(valuesCategoria);
  
    function setValue(key, value) {
      setValues({
        ...values,
        [key]: value,
      })
    }
  
    function HandlerChange(event) {
      setValue(event.target.getAttribute('name'),event.target.value);
    }
  
    function clearForm(){
      setValues(valuesCategoria);
    }
    
    return {
      values,
      HandlerChange,
      clearForm,
    };
}

export default useForm;