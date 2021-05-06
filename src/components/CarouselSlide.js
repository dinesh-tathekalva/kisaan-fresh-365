import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Veggies from '../images/Veggies.jpeg'
import Fruits from '../images/Fruits.jpeg'
import Groceries from '../images/Groceries.jpeg'


const items = [
  {
    src: Veggies,
    altText: 'Vegetables',
    caption: 'We handpick your vegetables directly from the farms.',
    header: 'Handpicked Vegetables',
    key: '1'
  },
  {
    src: Fruits,
    altText: 'Fresh Fruits',
    caption: 'Freshness is our motto.',
    header: 'Fresh Fruits',
    key: '2'
  },
  {
    src: Groceries,
    altText: 'Groceries',
    caption: 'We bring anything to your doorstep.',
    header: 'Groceries',
    key: '3'
  }
];

const CarouselSlide = () => <UncontrolledCarousel items={items} />;

export default CarouselSlide;