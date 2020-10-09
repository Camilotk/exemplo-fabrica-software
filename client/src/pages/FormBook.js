import axios from 'axios'
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const FormBook = _ => {
    
    async function onSubmit(values, actions) {
        const {
            name,
            code,
            author,
            volume,
            quantity
        } = values;
        const livros = await fetch('http://localhost:5000/books', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                code,
                author,
                volume,
                quantity
            })
        }).then(res => res.json().then(text => console.log(text)))
    }
    
    return (
        <div>
            <h3>Gestão de Livros</h3>
            <Formik
            onSubmit={(values, {resetForm}) => { onSubmit(values); resetForm(); window.location.reload(false);}}
            validateOnMount
            initialValues={{
              name: '',
              code: '',
              author: '',
             volume: '',
             quantity: 0
            }}
            render={({ values, errors, touched, resetForm }) => (
                <Form>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Nome:</label>
                    <div class="col-sm-9">
                    <Field name="name" type="text" className="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Código:</label>
                    <div class="col-sm-9">
                    <Field name="code" type="text" className="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Autor:</label>
                    <div class="col-sm-9">
                    <Field name="author" type="text" className="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Volume:</label>
                    <div class="col-sm-9">
                    <Field name="volume" type="text" className="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-sm-3 col-form-label">Quantidade em Estoque:</label>
                    <div class="col-sm-9">
                    <Field name="quantity" type="number" className="form-control" min="0"/>
                    </div>
                </div>
                <ButtonToolbar>
                <ButtonGroup>
                <Button variant="danger" className="ml-2 mw-50 form-button" onClick={()=> resetForm()}>Limpar</Button></ButtonGroup>
                <ButtonGroup>
                <Button variant="success" className="ml-2 mw-50 form-button" type="submit">Cadastrar</Button></ButtonGroup>
                </ButtonToolbar>
            </Form>
            )}
            />
           <style jsx>
               {`
               h3 {
                   text-align: center;
                   text-transform: uppercase;
                   margin-top: 20px;
                   margin-bottom: 20px;
               }
               .form-button {
                   width: 150px;
               }
                .btn-toolbar {
                    display: flex;
                    justify-content: center;
                }
               `}
           </style>
        </div>
    )
}

export default FormBook