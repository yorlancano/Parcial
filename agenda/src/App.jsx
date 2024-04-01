import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

function App() {
  const [contactos, setContactos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [imagen, setImagen] = useState('');

  useEffect(() => {
    obtenerContactos();
  }, []);

  const obtenerContactos = async () => {
    try {
      const respuesta = await axios.get('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project');
      setContactos(respuesta.data);
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  };

  const agregarContacto = async () => {
    try {
      const respuesta = await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', {
        names: nombre,
        telephone: telefono,
        image: imagen
      });
      console.log('Contacto agregado:', respuesta.data);
      obtenerContactos(); // Actualiza la lista de contactos después de agregar uno nuevo
      // Limpia los campos del formulario
      setNombre('');
      setTelefono('');
      setImagen('');
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Agenda Telefónica</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imagen URL</Form.Label>
              <Form.Control type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={agregarContacto}>Agregar Contacto</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Lista de Contactos</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contacto, indice) => (
                <tr key={indice}>
                  <td>{indice + 1}</td>
                  <td>{contacto.names}</td>
                  <td>{contacto.telephone}</td>
                  <td><img src={contacto.image} alt="Imagen de contacto" style={{ width: '50px', height: '50px' }} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
