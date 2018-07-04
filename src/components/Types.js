import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Types.css';

class Types extends Component {
    render() {
        return(
            <div id="types">
                <Row>
                    <Col xs="12" sm="4">
                        <h2>Coffe to go</h2>
                        <img src="assets/products3.jpg" class="img-fluid" alt="img"/>
                    </Col>
                    <Col xs="12" sm="4">
                        <h2>Home Coffee</h2>
                        <img src="assets/products2.jpg" class="img-fluid" alt="img" />
                    </Col>
                    <Col xs="12" sm="4">
                        <h2>Nice taste</h2>
                        <img src="assets/products1.jpg" class="img-fluid" alt="img" />
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Types;