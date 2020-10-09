import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Menu from './pages/MenuNavigation'
// import Navigation from './pages/PageNavigation'
import FormBook from './pages/FormBook'
import ListBooks from './pages/ListBooks'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

function App() {

  const [menus, setMenu] = useState([
    {name: 'Cadastrar Livros', slug: 'cadastrar-livros', page: 'FormBook'},
    {name: 'Cadastrar Alunos', slug: 'cadastrar-alunos', page: 'FormStudent'},
    {name: 'Cadastrar Empréstimos', slug: 'cadastrar-emprestimos', page: 'FormLends'},
    {name: 'Listar', slug: 'listar-livros', page: 'ListBooks'}
  ]);

  const [pages, setPage] = useState([
    {title: 'Cadastrar Livros', component: 'FormBook'},
    {title: 'Listar Livros', component: 'ListBooks'}
  ]);
 //<Navigation pages={pages}/>
  return (
    <div className="App">
      <Navbar />
      <Menu menus={menus}/>
      <Container>
      <FormBook />
      <ListBooks />
      </Container>
      <Footer />
    </div>
  );
}

export default App