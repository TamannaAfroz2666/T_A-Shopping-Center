import React from 'react';
import  './About.css';
import Carousel from 'react-bootstrap/Carousel';
const About = () => {
  return (
    <div className='parent-class'> 
        <Carousel>
            <Carousel.Item>
            <img
                className="pictures d-block w-100"
                src= "/images/image1.jpg"
                alt="First slide"
            />
            <Carousel.Caption className='caption'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className=" pictures d-block w-100 "
                src="/images/images3.jpg"
                alt="Second slide"
            />

            <Carousel.Caption className='caption'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className=" pictures d-block w-100 "
                src="/images/image2.jpg"
                alt="Third slide"
            />

            <Carousel.Caption className='caption'>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>

    

  )
}

export default About