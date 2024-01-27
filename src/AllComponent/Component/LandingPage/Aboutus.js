import React from 'react'
import pitchDote from "../../../assets/LandingPage/pitchDote.svg"
import linePitchDote from "../../../assets/LandingPage/linePitchDote.svg"
import blackDote from "../../../assets/LandingPage/blackDote.svg"
import Path1 from "../../../assets/LandingPage/Path1.svg"
import styled from 'styled-components';
const WrapperBanner = styled.div`
.Aboutus_block{
    padding: 2rem 0px 3rem;
    background: #F9F9F9;
    position: relative;
}
.Aboutus{
    position: relative;
}
.Aboutus_heading{
    color: black;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
}
.Aboutus_heading > div{
    border-bottom: 3px solid black;
}
.Aboutus_heading span{
    color: #DE964E;
}
.Aboutus_title{
    color: #DE964E;
    text-align: center;
    font-family: Poppins;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Aboutus_text{
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.pitchDote{
    position: absolute;
    left: 12px;
    width: 100px;
    top: 45px;
}
.blackDote{
    position: absolute;
    right: 88px;
    width: 100px;
    top: 210px;
}
.linePitchDote1{
    position: absolute;
    right: 60px;
    width: 80px;
    top: -5px;
}
.linePitchDote2{
    position: absolute;
    left: 40px;
    width: 80px;
    bottom: -5px;
}
.Path1{
    position: absolute;
    left: -58px;
    width: 40px;
    bottom: 18px;
    transform: rotate(90deg);
}
img{
    width: 100%;
}
.button{
    width: 170px;
    background: black;
    color: #de964e;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 27px;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: auto;
    margin-top: 1.5rem;
    position: relative;
    cursor: pointer;
}
.button:after{
    content: "";
    position: absolute;
    width: 108%;
    height: 125%;
    z-index: 1;
    border: 2px solid #de964e;
    border-radius: 27px;
}
@media (max-width: 1199px) {
    .blackDote {
        right: 18px;
    }
}
@media (max-width: 991px) {
    .Aboutus_heading {
        font-size: 23px;
    }
    .Aboutus_title {
        font-size: 44px;
    }
    .pitchDote {
        width: 75px;
    }
    .Aboutus_text {
        font-size: 17px;
        padding-top: 1.5rem;
    }
    .linePitchDote1 {
        width: 70px;
    }   
    .blackDote {
        right: 12px;
        width: 75px;
        top: 260px;
    } 
}
@media (max-width: 767px) {
    .Aboutus_heading {
        font-size: 20px;
    }
    .Aboutus_title {
        font-size: 38px;
    }
    .Aboutus_block {
        padding: 1.5rem 0px 2rem;
    }
    .Aboutus_text {
        font-size: 15px;
        padding-bottom: 1.5rem;
    }
    .pitchDote {
        width: 55px;
        top: 55px;
    }
    .linePitchDote1 {
        width: 55px;
    }
    .linePitchDote2 {
        left: 40px;
        width: 60px;
        bottom: -10px;
    }
    .blackDote {
        right: 12px;
        width: 55px;
        top: 230px;
    }
    .button {
        width: 149px;
        height: 35px;
        display: flex;
        font-size: 16px;
        margin: 1rem auto auto;
    }
    .Path1 {
        left: -8px;
        width: 30px;
        bottom: 28px;
    }
}
@media (max-width: 575px) {
    .Aboutus_heading {
        font-size: 19px;
    }
    .Aboutus_title {
        font-size: 35px;
    }
    .Aboutus_block {
        padding: 1rem 0px 2rem;
    }
    .Aboutus_text {
        font-size: 14px;
        padding-top: 0.7rem;
        padding-bottom: 1rem;
    }
    .linePitchDote1 {
        width: 45px;
        top: -5px;
    }
    .pitchDote {
        width: 45px;
        top: 45px;
    }
    .blackDote {
        right: 12px;
        width: 45px;
        top: 230px;
    }
    .linePitchDote2 {
        left: 40px;
        width: 50px;
        bottom: 0px;
    }
    .button {
        width: 130px;
        height: 33px;
        font-size: 14px;
    }
    .Path1 {
        left: -3px;
        width: 22px;
        bottom: 19px;
    }
}
`

export default function Aboutus() {
    return (
        <WrapperBanner>
            <div className='container-fluid Aboutus_block'>
                <div className='container Aboutus'>
                    <div className='pitchDote'><img src={pitchDote} /></div>
                    <div className='row' style={{ justifyContent: "center" }}>
                        <div className='col-xl-8 col-lg-9'>
                            <div className='Aboutus_heading'><div>About, <span>Myself</span></div></div>
                            <div className='Aboutus_title'>WHAT I DO</div>
                            <div className='Aboutus_text' style={{ position: "relative" }}>
                                <div className='linePitchDote1'><img src={linePitchDote} /></div>
                                I am a dedicated MERN web developer, proficient in MongoDB, Express.js, React.js, and Node.js. Specializing in crafting dynamic and responsive web applications, I blend technical expertise with creative problem-solving to deliver seamless user experiences. My passion lies in staying at the forefront of technology trends, ensuring my projects are innovative and up-to-date. With a commitment to clean and efficient code, I strive to contribute to the evolving landscape of web development.
                                <div className='linePitchDote2'><img src={linePitchDote} /></div>
                                <div className='Path1'><img src={Path1} /></div>
                            </div>
                            <div className='button'>Chat with me</div>
                        </div>
                    </div>
                    <div className='blackDote'><img src={blackDote} /></div>
                </div>
            </div>
        </WrapperBanner>
    )
}
