import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './MainSlider.css';

const content = [
	{
		title: 'Cafea prajita natural',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Discover',
		image: 'assets/natural-carousel.jpg'
	},
	{
		title: 'Masini cafea',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Buy now',
		image: 'assets/machine-carousel.jpg'
	},
	{
		title: 'Service',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Contact',
		image: 'assets/services-carousel.jpg'
    }
]
    
    class MainSlider extends Component {
        render() {
            return(
                <div>
                   <Slider className="slider-wrapper" id="home" autoplay={2000}>
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <Button outline color="secondary" className="button-slide">{item.button}</Button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            );
        }
    
    }
    
    export default MainSlider;