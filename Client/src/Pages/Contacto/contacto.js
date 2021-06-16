import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contactostyle.css';
import MapaImg from '../../Components/Images/mapa.png';

function Contacto() {
	return (
		<div class="container">
			<div class="CONTACTFORM">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicName">
						<h3>Nombre:</h3>
						<Form.Control type="className" placeholder="Nombre" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formMail">
						<h3>Email:</h3>
						<Form.Control type="email" placeholder="Email" />
					</Form.Group>

					<Form.Group className="mb-4" controlId="Textarea1">
						<h3>Consulta:</h3>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>

					<Button variant="primary" type="submit">
						Enviar
					</Button>
				</Form>
				<h2>“Son tus decisiones, no tus condiciones, las que determinan tu destino.”</h2>
			</div>
			<div class="MAP">
				<img alt="somevalue" className="mapImg" src={MapaImg} />
			</div>
			<div class="CONTACTEXT">
				<h3>Dirección</h3>
				<p> Calle Montes Urales 425 Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX</p>
				<h3>Contacto</h3>
				<p>
					{' '}
					Mail: contacto@procapital.com.mx
					<br></br>
					Telefono: 55.23.30.36.69
				</p>
			</div>
		</div>
	);
}

export default Contacto;
