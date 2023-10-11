import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from "../../../assets/LandingPage/deepakphoto.png"
import QuestionIconRight from "../../../assets/Inspire/QuestionIconRight.svg"
import QuestionIconleft from "../../../assets/Inspire/QuestionIconleft.svg"
import LeftArrow from "../../../assets/Inspire/LeftArrow.svg"
import RightArrow from "../../../assets/Inspire/RightArrow.svg"
import Star from "../../../assets/Inspire/Star.svg"
import styled from 'styled-components';
const WrapperSlider = styled.div`
.Slider_block{
    padding: 1.55rem 0px 1rem;
    background: #6D6D6D;;
    position: relative;
}
.Reviews_heading{
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Slider_img{
    width: 70px;
    clip-path: circle();
    background: black;
    margin: auto;
    margin-top: 2rem;
}
img{
    width: 100%;
}
.Slider_name{
    color: #DE964E;
    text-align: center;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 1rem 0px;
}
.Slider_text{
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-bottom: 4rem;
}
.slider_block{
    position: relative;
}
.QuestionIconRight{
    width: 70px;
    position: absolute;
    top: 35%;
    left: 6.5%;
}
.QuestionIconleft{
    width: 70px;
    position: absolute;
    bottom: 15%;
    right: 4%;
}
.slick-prev:before {
    display: none;
}
.slick-next:before {
    display: none;
}
.slick-arrow img{
    height: 100%;
}
.slick-prev, .slick-next{
    width: 60px;
    height: 60px;
    z-index: 1;
    top: 41%;
}
.Start1{
    width: 70px;
    position: absolute;
    top: 70%;
    left: 2%;
}
.Start2{
    width: 70px;
    position: absolute;
    top: 1%;
    right: 10%;
}
@media screen and (max-width: 1600px) and (min-width: 1301px) {
    .Slider_text {
        padding-left: 3rem;
        padding-right: 3rem;
    }
    .QuestionIconRight {
        left: 8.5%;
    }
    .QuestionIconleft {
        right: 6%;
    }
}
@media (max-width: 1199px) {
    .QuestionIconleft {
        width: 70px;
        position: absolute;
        bottom: 17%;
        right: 3%;
    }
    .Slider_text {
        font-size: 18px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

`;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
           <img src={RightArrow}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src={LeftArrow}/>
        </div>
    );
}


export default function Inspiringslider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <WrapperSlider>
            <div className='container-fluid Slider_block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='Reviews_heading'>
                                Inspiring Quotes
                            </div>
                        </div>
                        <div className='col-12'>
                            <Slider {...settings}>
                                <div style={{textAlign: "center"}}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={ProfileImage} /></div>
                                        <div className='Slider_name'>Deepak goyal</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight}/></div>
                                        <div className='Start1'><img src={Star}/></div>
                                        <div className='row' style={{justifyContent: "center"}}>
                                            <div className='col-10'>
                                                <div className='Slider_text'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. <br/> Lorem Ipsum  has been.Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been. LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star}/></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft}/></div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={ProfileImage} /></div>
                                        <div className='Slider_name'>Deepak goyal</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight}/></div>
                                        <div className='Start1'><img src={Star}/></div>
                                        <div className='row' style={{justifyContent: "center"}}>
                                            <div className='col-10 Slider_text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. <br/> Lorem Ipsum  has been.Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been. LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star}/></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft}/></div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={ProfileImage} /></div>
                                        <div className='Slider_name'>Deepak goyal</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight}/></div>
                                        <div className='Start1'><img src={Star}/></div>
                                        <div className='row' style={{justifyContent: "center"}}>
                                            <div className='col-10 Slider_text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. <br/> Lorem Ipsum  has been.Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been. LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star}/></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft}/></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperSlider>
    )
}
