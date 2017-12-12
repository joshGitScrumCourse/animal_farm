import React, {Component} from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/main.css';

export default class Carousel extends Component{

    mapImagesToSlides({ url, caption, text, id}){
        console.log(id,url);
        return (
            <div key={id} >
                <img src={url} style={{height:"50vh", width:"auto"}} alt=""/>
                <p className="legend">{caption}</p>
            </div>
        );
    }

    render(){

        let content = <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}> <img alt="" style={{height:"40vh", width:"auto"}} src={"https://fsb.zobj.net/crop.php?r=HCqYv5liBeEW3qNR4yZ-aNiieLMLIo9Zta05orSvPGJITQ7j5noFX0tnj7RYIxkx4w8725XBac8SYvelgT964APfBXiKiLz7e9uy0tmS-slkgGhmya4z08JE7XrAMpUlMvvS-0-u7d7yGDxox-eMnjElaJqBHuCbvYs8Mg"} /> <h4>Uh Oh! Panda's a bit lonely (No Images Found) </h4> </div>;
        let Pics = this.props.images.map( pic => this.mapImagesToSlides(pic));
        if(this.props.images.length > 0){
            content = <ReactCarousel showThumbs={false} dynamicHeight={true} > { Pics } </ReactCarousel>
        }

        return(
            <div>
            {content}
            </div>
        );

    }

}