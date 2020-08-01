import React, {useState, useEffect} from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';



function CadastroCategoria() {
  const valuesCategoria = {
    nome: '',
    descrição: '',
    cor: '',
  }

  const { HandlerChange, values, clearForm} = useForm(valuesCategoria);
  
  const [categorias, setCategorias] = useState(['Teste']);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://raulflix.herokuapp.com/categoria';

    fetch(url).then(async (answerServer)=>{
        const answer = await answerServer.json();
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

          clearForm({})
        }}>

          <FormField label="Nome da Categoria:" type="text" value={values.nome} name="nome" onChange={HandlerChange}/>

          <FormField label="Descrição:" type="textarea" value={values.descrição} name="descrição" onChange={HandlerChange}/>
          
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
              <li key={`{$categorias.titulo}`}>
                {categorias.titulo}
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