import React from 'react';
/**
 * BrowserRouter => Faz o roteamento entre as páginas
 * Switch => Garante que apenas uma rota seja chamada ao mesmo tempo
 * Route =>
 */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

/**
 * Function component
 */
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
