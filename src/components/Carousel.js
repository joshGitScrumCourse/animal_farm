import React, {Component} from 'react';
import {Carousel as ReactCarousel} from 'react-responsive-carousel';

import SadPanda from './SadPanda';

import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/main.css';

export default class Carousel extends Component {

    mapImagesToSlides({url, caption, text, id}) {
        return (
            <div key={id}>
                <img src={url} style={{height: "50vh", width: "auto"}} alt=""/>
                <p className="legend">{caption}{"\n"}{text}</p>
            </div>
        );
    }

    render() {

        let content = <SadPanda text="Uh Oh! Panda's a bit lonely (No Images Found)"/>;

        if (this.props.images.length > 0) {
            content = <ReactCarousel showThumbs={false} dynamicHeight={true}>
                { this.props.images.map(pic => this.mapImagesToSlides(pic)) }
            </ReactCarousel>;
        }

        return (
            <div>
                {content}
            </div>
        );

    }

}