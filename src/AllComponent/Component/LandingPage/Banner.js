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
import FBSocialIcon from "../../../assets/SocialIcon/FBSocialIcon.svg"
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
`;
export default function Banner() {
    return (
        <WrapperBanner>
            <div className='container-fluid banner'>
                <div className='container'>
                    <div className='row' style={{ height: "100%", alignItems: "center" }}>
                        <div className='col-6'>
                            <div className='banner_content_block'>
                                <div className='banner_heading'>
                                    Hello, <span className='banner_heading_italic'>My Name is</span><br /> <span className='banner_subheading'>DEEPAK GOYAL</span>
                                </div>
                                <div className='banner_titel'>
                                    FRONTEND <br /> WEB DEVELOPER
                                </div>
                                <div className='banner_text'>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been.
                                </div>
                                <div className='social_icon_block'>
                                    <div className='social_icon'><img src={InstaSocialIcon}/></div>
                                    <div className='social_icon'><img src={InstaSocialIcon1}/></div>
                                    <div className='social_icon'><img src={FBSocialIcon}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6' style={{ position: "relative" }}>
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
