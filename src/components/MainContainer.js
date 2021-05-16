import React from 'react'
import { Container } from 'reactstrap';

import './../index.css';
import CarouselSlide from "./CarouselSlide"
import NavBar from "./NavBar"
import KCard from "./KCard"
import VeggiesPortrait from '../images/VeggiesPortrait.jpeg'
import Whatsapp from '../images/Whatsapp.jpeg'
import Delivery from '../images/Delivery.jpeg'
import data from '../data.js'
// import ItemList from './ItemList';
// import { Button } from 'reactstrap';

export default function MainContainer() {
    console.log(data.vegetables);
    return (
        <div>
            <Container className="sm mb-5">
                <NavBar />
                <CarouselSlide />
                <p className="text-center mt-5 mb-5 font-weight-light headingFontsize">Grocery delivery you can count on</p>
                <div className="row">
                    <div className="col-md-4">
                        <KCard image={Whatsapp} title={"Place your orders easily on Whatsapp"} content={"You can find our catalogue to place order."} subTitle={"Whatsapp number: +91 9493233615"} showBtn={true} />
                    </div>
                    <div className="col-md-4">
                        <KCard image={VeggiesPortrait} title={"Explore our vast catalog"} content={"We deliver a great variety of vegetables and fruits directly from the fresh farms. "} showBtn={true} />
                    </div>
                    <div className="col-md-4">
                        <KCard image={Delivery} title={"Free home delivery on sameday"} content={"We will deliver to your doorstep in 3 hours in Tirupathi now."} />
                    </div>
                </div>

                {/* <p className="mt-5 mb-5 font-weight-light headingFontsize">Start adding your items to the order below</p> */}
                {/* <CategoryList /> */}
                {/* <Container className="d-flex">
                    <div className="mb-5 mr-3 position">
                        <Button outline color="primary" className="margin ">Vegetables </Button>
                        <Button outline color="primary" className="margin ">Fruits </Button>
                        <Button outline color="primary" className="margin ">Groceries </Button>
                        <Button outline color="primary" className="margin ">Other </ Button>
                    </div>
                    <div className="row ml-3">
                        {data.items.map((veggie, id) => {
                            return (<div className="col-lg-3 text-center mb-4" key={veggie.id}>
                                <ItemList title={veggie.name} image={veggie.imageUrl} />
                            </div>)
                        })}
                    </div>
                </Container> */}

            </Container>
            {/* <Container className="d-flex">
                <div className="mb-5 mr-3 position d-flex flex-column">
                    <Button outline color="primary" className="margin ">Vegetables </Button>
                    <Button outline color="primary" className="margin ">Fruits </Button>
                    <Button outline color="primary" className="margin ">Groceries </Button>
                    <Button outline color="primary" className="margin ">Other </ Button>
                </div>
                <div className="row ml-3">
                    {data.items.map((veggie, id) => {
                        return (<div className="col-lg-3 text-center mb-4" key={veggie.id}>
                            <ItemList title={veggie.name} image={veggie.imageUrl} />
                        </div>)
                    })}
                </div>
            </Container> */}


        </div>
    )
}
