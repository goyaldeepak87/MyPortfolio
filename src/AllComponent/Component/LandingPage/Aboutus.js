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
`

export default function Aboutus() {
    return (
        <WrapperBanner>
            <div className='container-fluid Aboutus_block'>
                <div className='container Aboutus'>
                    <div className='pitchDote'><img src={pitchDote} /></div>
                    <div className='row' style={{ justifyContent: "center" }}>
                        <div className='col-8'>
                            <div className='Aboutus_heading'><div>About, <span>Myself</span></div></div>
                            <div className='Aboutus_title'>WHAT I DO</div>
                            <div className='Aboutus_text' style={{ position: "relative" }}>
                            <div className='linePitchDote1'><img src={linePitchDote} /></div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been.Lorem
                                Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been.
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
