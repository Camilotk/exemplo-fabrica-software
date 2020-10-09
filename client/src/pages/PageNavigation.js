import FormBook from './FormBook'
import ListBooks from './ListBooks'
import React from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Navigation = ({pages}) => {
  return (
    <div>
      <Router>
      <Switch>
        {/* pages.map(page => (
          <Route path={page.path}>
            <div>{page.component}</div>
          </Route>
        ))*/}
        <Route path='cadastrar-livros'>
            <FormBook/>
          </Route>
          <Route path='listar-livros'>
            <ListBooks />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default Navigation