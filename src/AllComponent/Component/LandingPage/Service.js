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
                        <div className='col-4'>
                            <div style={{ position: "relative" }}>
                                <div className='Service_card_block'>
                                    <div className='Service_card_heading'>Web Design</div>
                                    <div className='Service_card_title'>front and development</div>
                                    <div className='Service_card_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                    <div className='Service_card_BlackPath'><img src={BlackPath} /></div>
                                </div>
                                <div className='Service_card_whiteDote1'><img src={whiteDote} /></div>
                                <div className='Service_card_whiteDote'><img src={whiteDote} /></div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div style={{ position: "relative" }}>
                                <div className='Service_card_block'>
                                    <div className='Service_card_heading'>Web Design</div>
                                    <div className='Service_card_title'>front and development</div>
                                    <div className='Service_card_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
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
