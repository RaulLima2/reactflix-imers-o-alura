import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';


const Error404 = () => ((<div>Error 404</div>));

ReactDOM.render(
   <BrowserRouter>
    <Switch>
      <Route path="/" component={home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Error404} />
    </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);