import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from "../../../assets/LandingPage/deepakphoto.png"
import whiteDote from "../../../assets/LandingPage/whiteDote.svg"
import blackDote from "../../../assets/LandingPage/blackDote.svg"
import Path1 from "../../../assets/LandingPage/Path1.svg"
import Path2 from "../../../assets/LandingPage/Path2.svg"
import Path3 from "../../../assets/LandingPage/Path3.svg"
import InstaSocialIcon from "../../../assets/SocialIcon/InstaSocialIcon.svg"
import InstaSocialIcon1 from "../../../assets/SocialIcon/InstaSocialIcon1.svg"
import FBSocialIcon from "../../../assets/SocialIcon/download.png"
import styled from 'styled-components';
const WrapperBanner = styled.div`
.banner{
    background: linear-gradient(90deg, rgb(0, 0, 0) 62%, rgb(222, 150, 78) 28%);
    height: 100vh;
    color: white;
    min-height: 600px;
    position: relative;
    padding-top: 78px;
}
.banner > div{
    height: 100%;
    background: linear-gradient(90deg, rgb(0, 0, 0) 69%, rgb(222, 150, 78) 31%);
}
.user_profile_block img{
    width: 100%;
    background: #000000;
    z-index: 1;
}
.user_profile_block{
    position: absolute;
    right: 11%;
    top: -19px;
    height: 100%;
    display: flex;
    align-items: center;
}
.user_profile_block > div{
    height: 390px;
    width: 68%;
    display: flex;
    align-items: center;
    padding-top: 78px;
    position: relative;
}
.pic_background_line{
    border: 1.5px solid white;
    width: 100%;
    height: 292px;
    position: absolute;
    top: 29%;
    left: 27px;
    z-index: 0;
}
.banner_dote1{
    position: absolute;
    z-index: 1;
    top: 8%;
    left: -60px;
    width: 120px;
}
.banner_dote2{
    position: absolute;
    z-index: 0;
    right: -87px;
    width: 120px;
    bottom: 8%;
}
.banner_dote2 img , .banner_Path1 img, .banner_Path2 img{
    background: transparent;
}
.banner_Path1{
    position: absolute;
    z-index: 0;
    right: -102px;
    width: 35px;
    bottom: 51%;
}
.banner_Path2{
    position: absolute;
    z-index: 1;
    top: 50%;
    left: -30px;
    width: 47px;
}
.banner_Path3{
    position: absolute;
    bottom: 10%;
    z-index: 1;
    left: -115px;
    width: 32px;
}
.banner_heading{
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.banner_heading_italic{
    color: #DE964E;
    font-family: Poppins;
    font-size: 38px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}
.banner_subheading{
    font-family: Poppins;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-bottom: 5px solid;
}
.banner_titel{
    color: #DE964E;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    margin-top: 2rem;
    margin-bottom: 4px;
}
.banner_text{
    color: #FFF;
    font-family: Poppins;
    font-size: 21px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.banner_content_block{
    padding-right: 3rem;
}
.social_icon_block{
    display: flex;
    align-items: center;
    margin-top: 1rem;
}
.social_icon{
    width: 35px;
    margin-right: 1.5rem;
}
.social_icon img{
    width: 100%;
}
@media screen and (max-width: 10000px) and (min-width: 1400px) {
    .user_profile_block {
        position: absolute;
        right: 20%;
    }
}
@media (max-width: 1199px) {
    .banner {
        height: 70vh;
        min-height: 650px;
    }
    .user_profile_block {
        right: -2%;
    }
}
@media (max-width: 991px) {
    .banner_heading_italic {
        font-size: 30px;
    }
    .banner_heading {
        font-size: 30px;
    }
    .banner_subheading {
        font-size: 35px;
    }
    .banner_titel {
        font-size: 35px;
        line-height: 40px;
        margin-top: 1.5rem;
        margin-bottom: 5px;
    }
    .banner_text {
        font-size: 15px;
    }
    .user_profile_block > div >img {
        width: 80%;
    }
    .banner {
        height: 50vh;
        min-height: 500px;
    }
    .pic_background_line {
        width: 82%;
        height: 165px;
        top: 42%;
        left: 8px;
    }
    .banner_dote1 {
        top: 28%;
        left: -37px;
        width: 75px;
    }
    .banner_dote2 {
        right: -11px;
        width: 75px;
        bottom: 20%;
    }
    .user_profile_block {
        top: -35px;
    }
    .banner_Path2 {
        top: 52%;
        left: -23px;
        width: 36px;
    }
    .banner_Path3 {
        bottom: 20%;
        left: -57px;
        width: 27px;
    }
    .banner_Path1 {
        right: -55px;
        width: 30px;
        bottom: 50%;
    }
    .social_icon {
        width: 25px;
    }
}

@media (max-width: 767px) {
    .banner > div {
        background: linear-gradient(90deg, rgb(0, 0, 0) 75%, rgb(222, 150, 78) 31%);
    }
    .user_profile_block > div {
        width: 62%;
    }
    .user_profile_block > div {
        width: 75%;
    }
    .user_profile_block {
        right: -2%;
        left: 34px;
    }
    .pic_background_line {
        width: 80%;
        height: 114px;
        top: 48%;
    }    
    .banner_dote2 {
        right: -5px;
        width: 60px;
        bottom: 28%;
    }
    .banner_dote1 {
        top: 36%;
        left: -31px;
        width: 60px;
    }
    .banner_Path1 {
        right: -29px;
        width: 22px;
        bottom: 48%;
    }
    .banner_Path3 {
        bottom: 23%;
        left: -53px;
        width: 22px;
    }
    .banner_Path2 {
        top: 55%;
        left: -20px;
        width: 29px;
    }
    .banner_content_block {
        padding-right: 1rem;
    }
    .banner_titel {
        font-size: 29px;
        line-height: 35px;
    }
    .banner_subheading {
        font-size: 27px;
    }
    .banner_heading {
        font-size: 25px;
    }
    .banner_heading_italic {
        font-size: 25px;
    }
    .banner {
        min-height: 430px;
    }
    .banner_text {
        font-size: 13px;
    }
}
@media (max-width: 575px) {
    .banner {
        background: linear-gradient(rgb(0, 0, 0) 59%, rgb(222, 150, 78) 40%);
        min-height: 589px;
        padding-left: 0;
    }
    .banner > div {
        background: transparent;
    }
    .banner_content_block {
        padding-right: 0rem;
        top: auto;
        right: auto;
        left: auto;
        padding-bottom: 21px;
    }
    .user_profile_block {
        position: relative;
        display:block;
        right: 0px;
        left: 0px;
        top: 0px;
        padding-top: 50px;
        padding-bottom: 45px;
    }
    .user_profile_block > div {
        height: auto;
        width: 180px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding-top: 0px;
        position: relative;
        margin: auto;
        justify-content: center;
    }
    .banner_heading {
        font-size: 24px;
    }
    .banner_heading_italic {
        font-size: 24px;
    }
    .banner_subheading {
        font-size: 26px;
    }
    .banner_titel {
        font-size: 29px;
        line-height: 35px;
        margin-top: 1rem;
    }
    .banner > div > div{
        align-items: initial !important;
        height: auto !important;
    }
    .pic_background_line {
        width: 82%;
        height: 135px;
        top: 15%;
        left: 25px;
    }
    .banner_dote1 {
        top: -13%;
        left: -10px;
        width: 60px;
    }
    .banner_dote2 {
        right: -12px;
        width: 55px;
        bottom: 7%;
    }
    .banner_dote1 img{
        background: transparent;
    }
    .banner_Path3 img{
        background: transparent;
    }
    .banner_Path2 {
        left: 1px;
    }
    .banner_Path1 {
        bottom: 66%;
    }
}
`;
export default function Banner() {
    return (
        <WrapperBanner>
            <div className='container-fluid banner'>
                <div className='container'>
                    <div className='row' style={{ height: "100%", alignItems: "center" }}>
                        <div className='col-lg-6 col-md-7 col-sm-7'>
                            <div className='banner_content_block'>
                                <div className='banner_heading'>
                                    Hi, <span className='banner_heading_italic'> There! I’m</span><br /> <span className='banner_subheading'>DEEPAK GOYAL</span>
                                </div>
                                <div className='banner_titel'>
                                    MERN <br /> WEB DEVELOPER
                                </div>
                                <div className='banner_text'>
                                    MERN web developer excelling in MongoDB, Express.js, React.js, Node.js. Committed to crafting seamless, responsive applications
                                </div>
                                <div className='social_icon_block'>
                                    <div className='social_icon'>
                                        <a
                                            href='https://www.linkedin.com/in/deepak-goyal-26a01b14b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                                            target='_blank'
                                        >
                                            <img src={InstaSocialIcon} />
                                        </a>
                                    </div>
                                    <div className='social_icon'>
                                        <a
                                            href='https://www.instagram.com/deepak_goyal1995/?igsh=YzVkODRmOTdmMw%3D%3D'
                                            target='_blank'
                                        >
                                            <img src={InstaSocialIcon1} />
                                        </a>
                                    </div>
                                    <div className='social_icon'>
                                        <a
                                            href='https://github.com/goyaldeepak87'
                                            target='_blank'
                                        >
                                            <img style={{ borderRadius: "5px" }} src={FBSocialIcon} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5 col-sm-5' style={{ position: "relative" }}>
                            <div className='user_profile_block'>
                                <div>
                                    <div className='banner_dote1'><img src={whiteDote} /></div>
                                    <div className='banner_Path2'><img src={Path2} /></div>
                                    <div className='banner_Path3'><img src={Path3} /></div>
                                    <img src={ProfileImage} />
                                    <div className='pic_background_line'></div>
                                    <div className='banner_dote2'><img src={blackDote} /></div>
                                    <div className='banner_Path1'><img src={Path1} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperBanner>
    )
}
