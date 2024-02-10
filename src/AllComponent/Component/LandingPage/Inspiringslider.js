import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from "../../../assets/LandingPage/deepakphoto.png"
import stevejobs from "../../../assets/Inspire/steve-jobs.jpg"
import billgates from "../../../assets/Inspire/bill-gates.jpg"
import linustorvalds from "../../../assets/Inspire/linus-torvalds.jpg"
import QuestionIconRight from "../../../assets/Inspire/QuestionIconRight.svg"
import QuestionIconleft from "../../../assets/Inspire/QuestionIconleft.svg"
import LeftArrow from "../../../assets/Inspire/LeftArrow.svg"
import RightArrow from "../../../assets/Inspire/RightArrow.svg"
import Star from "../../../assets/Inspire/Star.svg"
import styled from 'styled-components';
const WrapperSlider = styled.div`
.mobile_view_slider{
    display: none
}
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
@media (max-width: 991px) {
    .Reviews_heading {
        font-size: 42px;
    }
    .Slider_text {
        font-size: 14px;
    }
    .QuestionIconleft {
        width: 50px;
    }
    .QuestionIconRight {
        width: 50px;
        top: 39%;
        left: 4.5%;
    }
    .slick-prev, .slick-next {
        width: 45px;
        height: 45px;
        top: 35%;
    }    
    .Start2 {
        width: 55px;
        top: -3%;
    }
    .Start1 {
        width: 55px;
    }    
    .Slider_name {
        font-size: 24px;
        padding: 0.5rem 0px;
    }
}
@media (max-width: 767px) {
    .Reviews_heading {
        font-size: 38px;
    }
    .Slider_text {
        font-size: 13px;
        padding-bottom: 2rem;
    }
    .Slider_img {
        width: 60px;
        margin: 1.5rem auto auto;
    }
    .Slider_name {
        font-size: 21px;
        padding: 0.25rem 0px;
    }
    .slick-prev, .slick-next {
        width: 30px;
        height: 30px;
        top: 27%;
    }
    .QuestionIconleft {
        width: 38px;
        bottom: 11%;
        right: 0%;
    }
    .QuestionIconRight {
        width: 38px;
        top: 30%;
        left: 1%;
    }
    .Start2 {
        width: 50px;
    }
    .Start1 {
        width: 45px;
        top: 79%
    }
    .Slider_block {
        padding: 1.5rem 0px 2.5rem;
    }
}

@media (max-width: 575px) {
    .slick-prev, .slick-next {
        display: none !important;
    }
    .mobile_view_slider{
        display: block;
    }
    .web_view_slider{
        display: none;
    }
    .QuestionIconRight {
        width: 30px;
        top: 34%;
        left: 2%;
    }
    .QuestionIconleft {
        width: 30px;
    }
    .Start2 {
        width: 35px;
        top: 12%;
    }
    .Start1 {
        width: 35px;
        top: 82%;
    }
    .Slider_text {
        font-size: 13px;
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
            <img src={RightArrow} />
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
            <img src={LeftArrow} />
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
                                <div style={{ textAlign: "center" }}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={stevejobs} /></div>
                                        <div className='Slider_name'>Steve Jobs</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight} /></div>
                                        <div className='Start1'><img src={Star} /></div>
                                        <div className='row' style={{ justifyContent: "center" }}>
                                            <div className='col-md-10  col-sm-12 Slider_text'>
                                                <div className='web_view_slider'>
                                                    Your time is limited, so don't waste it living <br />
                                                    someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. Have the courage to follow your heart and intuition. Stay hungry. Stay foolish
                                                </div>
                                                <div className='mobile_view_slider'>
                                                    Your time is limited, so don't waste it living <br />
                                                    someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking. Have the courage to follow your heart and intuition. Stay hungry. Stay foolish
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star} /></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft} /></div>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={billgates} /></div>
                                        <div className='Slider_name'>Bill Gates</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight} /></div>
                                        <div className='Start1'><img src={Star} /></div>
                                        <div className='row' style={{ justifyContent: "center" }}>
                                            <div className='col-md-10  col-sm-12 Slider_text'>
                                                <div className='web_view_slider'>
                                                    Don't compare yourself with anyone in this world. If you <br /> do so, you are
                                                    insulting yourself. It's fine to celebrate success, but it is more important to heed the lessons of failure. Success is a lousy teacher
                                                </div>
                                                <div className='mobile_view_slider'>
                                                    Don't compare yourself with anyone in this world. If you <br /> do so, you are
                                                    insulting yourself. It's fine to celebrate success, but it is more important to heed the lessons of failure. Success is a lousy teacher
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star} /></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft} /></div>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <div className='slider_block'>
                                        <div className='Slider_img'><img src={linustorvalds} /></div>
                                        <div className='Slider_name'>Linus Torvalds</div>
                                        <div className='QuestionIconRight'><img src={QuestionIconRight} /></div>
                                        <div className='Start1'><img src={Star} /></div>
                                        <div className='row' style={{ justifyContent: "center" }}>
                                            <div className='col-md-10  col-sm-12 Slider_text'>
                                                <div className='web_view_slider'>
                                                    I am not out to destroy Microsoft. That will just be a <br /> completely
                                                    unintentional side effect." - Linus Torvalds. "I'm a really unpleasant person when I'm not being polite." Linus, the creator of Linux, has a pragmatic and sometimes humorous perspective on technology and his role in its development.
                                                </div>
                                                <div className='mobile_view_slider'>
                                                    I am not out to destroy Microsoft. That will just be a <br /> completely
                                                    unintentional side effect." - Linus Torvalds. "I'm a really unpleasant person when I'm not being polite." Linus, the creator of Linux, has a pragmatic and sometimes humorous perspective on technology and his role in its development.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Start2'><img src={Star} /></div>
                                        <div className='QuestionIconleft'><img src={QuestionIconleft} /></div>
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
