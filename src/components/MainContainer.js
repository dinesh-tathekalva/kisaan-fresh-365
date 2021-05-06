import React from 'react'
import { Container } from 'reactstrap';

import './../index.css';
import CarouselSlide from "./CarouselSlide"
import NavBar from "./NavBar"
import KCard from "./KCard"
import VeggiesPortrait from '../images/VeggiesPortrait.jpeg'
import Whatsapp from '../images/Whatsapp.jpeg'
import Delivery from '../images/Delivery.jpeg'


export default function MainContainer() {
    return (
        <div>
            <Container className="sm">
                <NavBar />
                <CarouselSlide />
                <p className="text-center mt-5 mb-5 font-weight-light headingFontsize">Grocery delivery you can count on</p>
                <div class="row">
                    <div class="col-md-4">
                        <KCard image={Whatsapp} title={"Place your orders easily on Whatsapp"} content={"You can find our catalogue to place order."} subTitle={"Whatsapp number: +91 9493233615"} showBtn={true}/>
                    </div>
                    <div class="col-md-4">
                        <KCard image={VeggiesPortrait} title={"Explore our vast catalog"} content={"We deliver a great variety of vegetables and fruits directly from the fresh farms. "} showBtn={true} />
                    </div>
                    <div class="col-md-4">
                        <KCard image={Delivery} title={"Free home delivery on sameday"} content={"We will deliver to your doorstep in 3 hours in Tirupathi now."} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
