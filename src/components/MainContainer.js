import React from 'react'
import { Container, Row } from 'reactstrap';
import CarouselSlide from "./CarouselSlide"
import NavBar from "./NavBar"
// import CardDecks from "./CardDecks"
import KCard from "./KCard"


import './../index.css';

import VeggiesPortrait from '../images/VeggiesPortrait.jpeg'
import Whatsapp from '../images/Whatsapp.jpeg'
import Delivery from '../images/Delivery.jpeg'


export default function MainContainer() {
    return (
        <div>
            <Container className="sm">
                <NavBar />
                <CarouselSlide />
                <p className="text-center mt-5 font-weight-light headingFontsize">Grocery delivery you can count on</p>
                {/* <CardDecks /> */}
                <Row className="mt-5" xs="3">
                    {/* <col>
                        <KCard image={VeggiesPortrait} />
                    </col> */}
                    <KCard image={Whatsapp} title={"Place your orders easily"} content={"You can place your order on the Whatsapp."}/>
                    <KCard image={VeggiesPortrait} title={"Explore our vast catalogue"} content={"Pick your vegetables from our vast catalogue."}/>
                    <KCard image={Delivery} title={"Delivery on sameday"} content={"We will deliver to your doorstep in 3 hours."}/>
                    {/* <col>
                        <KCard image={Whatsapp} />
                    </col>
                    <col>
                        <KCard image={Delivery} />
                    </col> */}
                </Row>
            </Container>
        </div>
    )
}
