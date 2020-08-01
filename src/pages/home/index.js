import React, { useEffect, useState} from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import repositories from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialDates, setInitialDates] = useState([]);
  

  useEffect(() => {
      repositories.getAllWithVideo()
      .then((categoriesWithVideo) => {
        setInitialDates(categoriesWithVideo);
      })
      .catch((err) => {
        console.log(err.message);
        });
  }, []);

  return (
    <PageDefault paddingAll={0} >

      {initialDates.length === 0 && (<div>Loading...</div>)}

      {initialDates.map((categoria, indice) => {
        if(indice === 0) {
          return (
                  <div key={categoria.id}>
                    <BannerMain
                      videoTitle={initialDates[0].videos[0].titulo}
                      url={initialDates[0].videos[0].url}
                      videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
                    /> 
                    <Carousel
                      ignoreFirstVideo
                      category={initialDates[0]}
                      />
                  </div>
          );
        }

        return (
          <Carousel key={categoria.id} category={categoria} />
        );
        })}


  </PageDefault>
  );
}

export default Home;
