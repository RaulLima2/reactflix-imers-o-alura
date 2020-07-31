import React, {useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/button'

function CadastroCategoria() {
  const valuesCategoria = {
    nome: '',
    descrição: '',
    cor: '',
  }
  
  const [categorias, setCategorias] = useState(['Teste']);
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

  useEffect(() => {
    const url = 'http://localhost:3000/cadastro/categoria';

    fetch(url).then(async (body)=>{
        const answer = await body.json();
        setCategorias([
          ...answer,
        ]);
    });

    /*
    setTimeout(()=> {
      setCategorias([
        ...categorias,
        {
          "id": 1,
          "nome": "Front End",
          "descrição": "ok",
          "cor": "#6bd1ff",
        },
      ]);
    }, 4 * 1000);
    */
  },[]);

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>

        <form style={{background: values.cor}} onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues({})
        }}>

          <FormField label="Nome da Categoria:" type="text" value={values.nome} name="nome" onChange={HandlerChange}/>

          <FormField label="Descrição:" type="????" value={values.descrição} name="descrição" onChange={HandlerChange}/>
          
          <FormField label="Cor:" type="color" value={values.nome} name="cor" onChange={HandlerChange}/>


        <Button>Cadastrar</Button>
        </form>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
        
        <ul>
          {categorias.map((categorias) =>{
            return (
              <li key={`{$categorias.nome}`}>
                {categorias.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;