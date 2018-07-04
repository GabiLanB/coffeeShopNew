import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const about = "assets/about.png";

export default class About extends Component {
  render() {
    return (
        <div id="about">
            <Parallax bgImage={about} strength={500} className="content-section">
                <div className="content-text">
                    <div>
                        <h1>Latteccino Welcomes You!</h1>
                        <h2>The perfect place to enjoy the life and food.</h2>
                        <p>Back in the day, when our up-and-coming coffee shop was just making first rounds among numerous coffee junkies in the local area, a concept of our operations has been developed.</p>
                    </div>
                </div>
            </Parallax>
        </div>
    )
  }
}
