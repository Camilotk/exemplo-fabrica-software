import React, { useEffect, useState } from 'react';
import {Table, ButtonToolbar, ButtonGroup, Button, Container } from 'react-bootstrap'
import {FaTrash, FaEdit} from 'react-icons/fa'

const ListBooks = _ => {
    const num = 1;
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks();
    }, [num]);

    const getBooks = async () => {
        let data = [];
        const _ = await fetch('http://localhost:5000/books', {method: 'get'}).then(res => res.json().then(text => data = text))
        setBooks(data['books'])
    }

    const removeItem = (id) => {
        const newBooks = books.filter(book => book.id !== id)
        fetch(`http://localhost:5000/books/${id}`, {method: 'delete'})
        setBooks(newBooks)
    }

    const updateItem = (item) => {
        console.table(item)
    }

    return (
 
        <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Código</th>
                <th>Autor</th>
                <th>Volume</th>
                <th>Quantidade</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
           
                {(books.length > 0) ? books.map((book, index) => (
                    <tr>
                    <td>#{index+1}</td>
                    <td>{book.name || 'Desconhecido'}</td>
                    <td>{book.code || 'N/A'}</td>
                    <td>{book.author || 'Desconhecido'}</td>
                    <td>{book.volume || 'NA'}</td>
                    <td>{book.quantity || 0}</td>
                    <td>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button className="btn btn-danger ml-1 mr-1" onClick={() => removeItem(book.id)}><FaTrash /> Excluir</Button>
                                <Button className="btn btn-warning ml-1 mr-1" onClick={() => updateItem(book)}><FaEdit /> Editar</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </td>
                    </tr>
                )) : ""}
            
           
        </tbody>
        </Table>
<style jsx>
    {`
    table {
        margin-top: 50px;
    }
    `}
</style>
</div>
    )
}

export default ListBooks