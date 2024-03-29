import React from 'react'
import html from "../../../assets/Skils/html.svg"
import css3 from "../../../assets/Skils/css3.svg"
import bootstrap from "../../../assets/Skils/bootstrap.svg"
import javascript from "../../../assets/Skils/javascript-logo.webp"
import react from "../../../assets/Skils/react.svg"
import redux from "../../../assets/Skils/redux.svg"
import nextjs from "../../../assets/Skils/nextjs-icon.svg"
import vscod from "../../../assets/Skils/vscod.svg"
import webDevelopment from "../../../assets/Skils/webDevelopment.svg"
import nodejs from "../../../assets/Skils/nodejs-icon-svgrepo-com.svg"
import mongodb from "../../../assets/Skils/mongodb.svg"
import git from "../../../assets/Skils/git.svg"
import styled from 'styled-components';
const WrapperSkills = styled.div`
.Skills_block{
    padding: 1.5rem 0px 3.5rem;
    background: #F9F9F9;
    position: relative;
}
.mobile_view{
    display:none !important;
}
img{
    width: 100%;
    padding: 1.4rem 1rem 1rem 1rem;
}
.Skills_heading{
    color: rgb(222, 150, 78);
    text-align: center;
    font-family: Poppins;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Skills_card_block{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -14px;
    margin-top: 1.5rem;
}
.Skills_card{
    display: grid;
    margin: 12px;
    text-align: center;
}
.Skills_card > div{
    width: 103px;
    height: 103px;
    background: #80808024;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 3px 0px gray;
}
.Skills_card4 img{
    padding: 0px;
    width: 120%;
    padding-top: 0.5rem;
}
.Skills_card3 img{
    width: 85%;
}
.Skills_card6 img{
    width: 90%;
    padding: 1rem;
}
.Skills_card7 img , .Skills_card8 img{
    padding: 1rem;
}
.Skills_card8{
    margin-left: 10px;
}
@media screen and (max-width: 1600px) and (min-width: 1400px) {
    .Skills_card {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
}
@media (max-width: 1199px) {
    .Skills_card > div {
        width: 96px;
        height: 96px;
    }
}
@media (max-width: 991px) {
    .Skills_heading {
        font-size: 44px;
    }
    .Skills_card {
        margin: 5px;
    }
    .Skills_card > div {
        width: 80px;
        height: 80px;
        margin: auto;
    }
}
@media (max-width: 767px) {
    .Skills_card > div {
        width: 65px;
        height: 65px;
    }
    .Skills_card6 img {
        padding: 0.6rem;
    }
    img {
        width: 100%;
        padding: 0.7rem 0.6rem 0.6rem;
    }
    .Skills_card4 img {
        padding: 0.2rem 0px 0px;
        width: 125%;
    }
    .Skills_card3 img {
        padding: 0.6rem 0.6rem 0.6rem;
    }
    .Skills_card7 img, .Skills_card8 img {
        padding: 0.6rem;
    }
    .Skills_heading {
        font-size: 38px;
    }
    .Skills_block {
        padding: 1rem 0px 2.5rem;
        position: relative;
    }
    .Skills_card {
        margin-bottom: 0.5rem;
    }
}
@media (max-width: 575px) {
    .Skills_card > div {
        width: 50px;
        height: 50px;
        margin-bottom: 0.2rem;
    }
    img {
        width: 100%;
        padding: 0.5rem 0.3rem 0.3rem;
    }
    .Skills_card7 img, .Skills_card8 img {
        padding: 0.4rem;
    }
    .Skills_card3 img {
        padding: 0.4rem;
    }
    .Skills_card6 img {
        padding: 0.4rem;
    }
    .Skills_card {
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .mobile_view{
        display:block !important;
    }
    .web_view{
        display:none;
    }
    .Skills_heading {
        font-size: 35px;
    }
    .Skills_card_block {
        margin: 0.5rem -12px -14px;
    }
    .Skills_block {
        padding: 0.5rem 0px 2.5rem;
    }
}

`;

export default function Skills() {
    return (
        <WrapperSkills>
            <div className='container-fluid Skills_block'>
                <div className='container'>
                    <div className='row https://timmyomahony.com/' style={{ justifyContent: "space-around" }}>
                        <div className='col-12'>
                            <div className='Skills_heading'><div>My, <span>Skills</span></div></div>
                            {/* <div className='Service_title'>WHAT I DO</div> */}
                        </div>
                    </div>
                    <div className='Skills_card_block'>
                        <div className='Skills_card'><div className='Skills_card1'><img src={html} /></div>html-5</div>
                        <div className='Skills_card'><div className='Skills_card2'><img src={css3} /></div>Css</div>
                        <div className='Skills_card'><div className='Skills_card3'><img src={bootstrap} /></div>Bootstrap</div>
                        <div className='Skills_card'><div className='Skills_card4'><img src={javascript} /></div>Javascript</div>
                        <div className='Skills_card'><div className='Skills_card5'><img src={react} /></div>React js</div>
                        <div className='Skills_card'><div className='Skills_card6'><img src={redux} /></div>Redux</div>
                        <div className='Skills_card'><div className='Skills_card7'><img src={nextjs} /></div>Next js</div>
                        <div className='Skills_card'><div className='Skills_card9'><img src={vscod} /></div>VS Code</div>
                        <div className='Skills_card web_view'><div className='Skills_card8'><img src={webDevelopment} /></div>WebDevelopment</div>
                        <div className='Skills_card'><div className='Skills_card7'><img src={nodejs} /></div>Node js</div>
                        <div className='Skills_card'><div className='Skills_card7'><img src={mongodb} /></div>Mongodb</div>
                        <div className='Skills_card'><div className='Skills_card7'><img src={git} /></div>Git</div>
                        <div className='Skills_card mobile_view'><div className='Skills_card8'><img src={webDevelopment} /></div>WebDevelopment</div>
                    </div>
                </div>
            </div>
        </WrapperSkills>
    )
}
