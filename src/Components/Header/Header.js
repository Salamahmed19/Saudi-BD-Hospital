import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="bg-color">
            <Carousel className="container" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block img-size"
            src="https://media.newyorker.com/photos/5d39f796aa092500087a7489/master/pass/Topol-DoctorUnion.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We have good doctors community</h3>
            <p>We are dedicated to providing you with high-quality and comprehensive care. Below is a list of telephone numbers for our wide range of departments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-size"
            src="https://images.everydayhealth.com/images/what-doctors-and-specialists-treat-skin-cancer-722x406.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>We have more specialist</h3>
            <p>We have too many specialists and too few primary care doctors because specialists are highly valued by medical institutions, even though primary.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-size"
            src="https://labblog.uofmhealth.org/sites/lab/files/2016-11/UMH_L_SOCIALMD%401x.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>We give good treatment</h3>
            <p>Talk to the doctor if you have any questions about treatments. Help the sick person get ... Keep your kitchen and other shared spaces well ventilated.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};
export default Header;