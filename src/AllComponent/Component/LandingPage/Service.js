import React from 'react'
import whiteDote from "../../../assets/LandingPage/whiteDote.svg"
import WhitePath from "../../../assets/LandingPage/WhitePath.svg"
import BlackPath from "../../../assets/LandingPage/BlackPath.svg"
import styled from 'styled-components';
const WrapperService = styled.div`
.Service_block{
    padding: 2rem 0px 4.5rem;
    padding-bottom: 4rem;
    background: #DE964E;
    position: relative;
}
img{
    width: 100%;
}
.Service_heading{
    color: black;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
}
.Service_heading > div{
    border-bottom: 3px solid black;
}
.Service_heading span{
    color: #FFF;
}
.Service_title{
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Service_card_block{
    background: rgba(0, 0, 0, 0.50);
    color: white;
    padding: 1.2rem 1rem;
    border-radius: 15px;
    position: relative;
    z-index: 1;
    margin-top: 3rem;
}
.Service_card_heading{
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Service_card_title{
    color: #FFF50D;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 0.7rem;
}
.Service_card_whiteDote{
    position: absolute;
    width: 23%;
    right: -11%;
    bottom: -9%;
}
.Service_card_text{
    padding-bottom: 1rem;
}
.Service_card_whiteDote1{
    position: absolute;
    top: -95px;
    width: 32%;
    left: -23%;
}
.Service_card_whiteDote2{
    right: 30%;
    position: absolute;
    top: -95px;
    width: 32%;
}
.Service_card_WhitePath{
    right: -14%;
    position: absolute;
    top: 21px;
    width: 5%;
}
.Service_card_BlackPath{
    left: -14%;
    position: absolute;
    bottom: -11%;
    width: 27%;
}
@media screen and (max-width: 1600px) and (min-width: 1400px) {
    .Service_card_whiteDote1 {
        position: absolute;
        top: -108px;
    }
    .Service_card_whiteDote2 {
        top: -109px;
    }
}
@media (max-width: 1199px) {
    .Service_card_whiteDote2 {
        right: 19%;
        top: -82px;
        width: 27%;
    }
    .Service_card_whiteDote {
        width: 19%;
    }
    .Service_card_whiteDote1 {
        top: -78px;
        width: 27%;
        left: -18%;
    }
}
@media (max-width: 991px) {
    .Service_heading {
        font-size: 23px;
    }
    .Service_title{
        font-size: 44px;
    }
    .Service_card_title {
        font-size: 18px;
        padding-bottom: 0.5rem;
    }
    .Service_card_heading {
        font-size: 28px;
    }
    .Service_card_text{
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        padding-bottom: 0.7rem;
    }
    .Service_block > div > div{
        justify-content: space-evenly;
    }
    .Service_card_whiteDote {
        width: 26%;
    }
    .Service_card_whiteDote2 {
        right: 35%;
        top: -56px;
        width: 28%;
    }
    .Service_card_whiteDote1 {
        top: -56px;
        width: 28%;
        left: -18%;
    }
    .Service_card_WhitePath {
        width: 12px;
    }
    .Service_card_BlackPath {
        width: 60px;
    }
}
@media (max-width: 767px) {
    .Service_card_heading {
        font-size: 23px;
    }
    .Service_card_title {
        font-size: 17px;
        padding-bottom: 0.5rem;
    }
    .Service_card_text {
        font-size: 14px;
        padding-bottom: 0rem;
    }
    .Service_card_whiteDote {
        width: 21%;
        right: -7%;
        bottom: -8%;
    }
    .Service_card_whiteDote1 {
        top: -38px;
        width: 22%;
        left: -8%;
    }
    .Service_card_whiteDote2 {
        right: 44%;
        top: -42px;
        width: 22%;
    }
    .Service_card_block {
        margin-top: 2.5rem;
    }
    .Service_heading {
        font-size: 20px;
    }
    .Service_title {
        font-size: 38px;
    }
    .Service_block {
        padding: 1.5rem 0px 3rem;
    }
    .Service_card_WhitePath {
        width: 10px;
        right: -9%;
    }
    .Service_card_BlackPath {
        width: 55px;
        left: -4%;
    }
}
@media (max-width: 575px) {
    .Service_heading {
        font-size: 19px;
    }
    .Service_title {
        font-size: 35px;
    }
    .Service_block {
        padding: 1rem 12px 2.5rem;
    }
    .Service_card_whiteDote {
        width: 50px;
        right: -5%;
        bottom: -8%;
    }
    .Service_card_whiteDote1 {
        top: -31px;
        width: 47px;
        left: -4.5%;
    }
    .Service_card_WhitePath {
        width: 8px;
        right: -5%;
        top: -7px;
    }
    .Service_card_whiteDote2 {
        right: 90%;
        top: -24px;
        width: 47px;
    }
    .Service_card_block {
        margin-top: 2rem;
    }
    .Service_card_BlackPath {
        width: 43px;
        left: -9%;
        transform: rotate(90deg);
        bottom: 3%;
    }
    .Service_block > div > div > div:nth-child(2) .Service_card_block{
        margin-top: 1rem;
    }
    .Service_card_title {
        font-size: 20px;
        padding-bottom: 0.2rem;
    }
    .Service_card_heading {
        font-size: 25px;
    }
    .Service_card_text {
        font-size: 13px;
    }
}
`;
export default function Service() {
    return (
        <WrapperService>
            <div className='container-fluid Service_block'>
                <div className='container'>
                    <div className='row' style={{ justifyContent: "space-around" }}>
                        <div className='col-12'>
                            <div className='Service_heading'><div>My, <span>Myself</span></div></div>
                            <div className='Service_title'>WHAT I DO</div>
                        </div>
                        <div className='col-xl-4 col-lg-5 col-md-5 col-sm-6'>
                            <div style={{ position: "relative" }}>
                                <div className='Service_card_block'>
                                    <div className='Service_card_heading'>Web Design</div>
                                    <div className='Service_card_title'>Web App Development</div>
                                    <div className='Service_card_text'>I specialize in developing custom web apps using ReactJS, ensuring they are responsive, high-performing, and user-friendly. Whether it's a dynamic e-commerce platform, a data-driven dashboard, or a real-time chat application, I can design and build it from the ground up</div>
                                    <div className='Service_card_BlackPath'><img src={BlackPath} /></div>
                                </div>
                                <div className='Service_card_whiteDote1'><img src={whiteDote} /></div>
                                <div className='Service_card_whiteDote'><img src={whiteDote} /></div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5 col-md-5 col-sm-6'>
                            <div style={{ position: "relative" }}>
                                <div className='Service_card_block'>
                                    <div className='Service_card_heading'>Web Design</div>
                                    <div className='Service_card_title'>MERN development</div>
                                    <div className='Service_card_text'>I provide MERN web development services, excelling in MongoDB, Express.js, React.js, and Node.js. Specializing in dynamic and responsive applications, I deliver user-centric solutions, ensuring optimal performance and seamless integration of front-end and back-end functionalities for diverse client needs.</div>
                                    <div className='Service_card_WhitePath'><img src={WhitePath} /></div>
                                </div>                                
                                <div className='Service_card_whiteDote2'><img src={whiteDote} /></div>
                                <div className='Service_card_whiteDote'><img src={whiteDote} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperService>
    )
}
