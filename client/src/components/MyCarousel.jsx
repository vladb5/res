import React from 'react'
import {Carousel, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyCarousel(){
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="First slide"
                        style={{height:680,width:750,objectFit:"cover"}}
                        />
                    <Carousel.Caption>
                        <h3 style = {{color: "yellowgreen"}}>Все о сквозных технология</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Second slide"
                        style={{height: 600,width:750,objectFit:"cover"}}
                        />
                    <Carousel.Caption>
                        <h3 style={{color:"yellowgreen"}}>Искусственный интелект</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
            <img
                className="d-block w-100"
                src=""
                alt="Third slide"
                style={{height:680,width:750,objectFit:"cover"}}
                />
            <Carousel.Caption>
                <h3 style={{color:"yellowgreen"}}>Роботехника</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    )
}
export default MyCarousel