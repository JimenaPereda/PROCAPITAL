import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import './serviciostyle.css';
import nominaImg from '../../Components/Images/flujo.png';
import cashImg from '../../Components/Images/loan.png';
import optiImg from '../../Components/Images/investment.png';

function Servicios() {
	return (
		<div class="containerService">
			<div class="CARD1">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={nominaImg} />
					<Card.Body>
						<Card.Title>
							<h2>Estrategias de administración</h2>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div class="CARD2">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={cashImg} />
					<Card.Body>
						<Card.Title>
							<h2>iCash <br></br> Prestamos a empleados</h2>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<Button variant="primary">Conoce Más ✚</Button>
					</Card.Body>
				</Card>
			</div>
			<div class="CARD3">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={optiImg} />
					<Card.Body>
						<Card.Title>
							<h2>OPTIMAXX by Allianz<br></br>Portafolios de ahorro e inversión </h2>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<Button variant="primary">Conoce Más ✚</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Servicios;
