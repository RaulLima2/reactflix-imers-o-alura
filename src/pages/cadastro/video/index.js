import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

function CadastroVideo() {

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriaTitulo = categories.map(({titulo}) => titulo);

  const {HandlerChange, values} = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository
    .getAll()
    .then((categoriesFromServer) => {
            setCategories(categoriesFromServer);
    });
  }, []);

  console.log(categoriaTitulo);

    return (
      <PageDefault>
        <h1>Cadastro de Video</h1>
        
        <form onSubmit={(event) => {
          event.preventDefault();

          const categoriaSearch = categories.find((categories) => {
              return categories.titulo === values.categories;
          });

          videosRepository.postAllVideo({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaSearch.id,
          })
          .then(() => {
            history.push('/');
          });
        }}>

        <FormField label="Título do Vídeo:" value={values.titulo} name="titulo" onChange={HandlerChange}/>
        <FormField label="URL:" value={values.url} name="url" onChange={HandlerChange}/>
        <FormField label="Categoria:" value={values.categoria} name="categoria" onChange={HandlerChange} suggestions={categoriaTitulo}/>

        <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    );
}

export default CadastroVideo;