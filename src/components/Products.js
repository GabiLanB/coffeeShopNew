import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './Products.css';

class Products extends Component {
    render() {
        return(
            <div id="products">
                <h2 className="text-center">Our Products</h2>
                <Row>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod1.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Grinders</CardTitle>
                                <CardSubtitle>$5.00 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod2.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Ness</CardTitle>
                                <CardSubtitle>$5.00 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod3.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Qualita Oro</CardTitle>
                                <CardSubtitle>$7.00 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod4.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Qualita Oro</CardTitle>
                                <CardSubtitle>$4.50 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod5.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>OOEMP</CardTitle>
                                <CardSubtitle>$3.00 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm={{ size: 'auto', offset: 1 }}>
                        <Card body className="text-center">
                            <CardImg top src="assets/produse/prod6.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Brava</CardTitle>
                                <CardSubtitle>$5.50 </CardSubtitle>
                                <Button color="danger" className="btn-block">Detalii</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
               
            </div>
        );
    }

}

export default Products;