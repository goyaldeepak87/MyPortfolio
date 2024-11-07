import React from 'react'
import RevRental from "../../../assets/Project/RevRental.png"
import Revrentallogo from "../../../assets/Project/Revrentallogo.svg"
import SquareBits from "../../../assets/Project/SquareBits.png"
import Squarebitslogo from "../../../assets/Project/Squarebitslogo.svg"
import Aeropath from "../../../assets/Project/Aeropath.png"
import Aeroptahlogo from "../../../assets/Project/Aeroptahlogo.png"
import ParidhanMarchentpanel from "../../../assets/Project/ParidhanMarchentpanel.png"
import RevrentalAdmin from "../../../assets/Project/RevrentalAdmin.png"
import styled from 'styled-components';
const ProjectSkills = styled.div`
.Project_block{
    padding: 2rem 0px 1.5rem;
    background: #DE964E;
    position: relative;
}
.Project_heading{
    color: black;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
}
.Project_heading > div{
    border-bottom: 3px solid black;
}
.Project_heading span{
    color: white;
}
.Project_title{
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 2.5rem;
}
img{
    width: 100%;
    height: 200px;
}
.project_card_block{
    background: rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer; 
    margin-bottom: 2rem;
    border-radius: 10px;
}
.project_card_heading{
    font-family: Poppins;
    font-size: 29px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 0.5rem 0.5rem;
}
.project_card_text{
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 0rem 0.5rem 1rem;
}
.image_block{
    position: relative;
}
.project_card_block:hover .image_hover_block{
    display:flex;
}
.image_hover_block{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0 0 0 / 74%);
    display:none;
}
.image_hover_block > div{
    padding-top: 2rem;
}
.image_hover_logo img{
    width: 90px;
    height: auto;
}
.image_hover_logo{
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: center;
}
.image_hover_heading{
    font-family: Poppins;
    font-size: 29px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: white;
}
.image_hover_text{
    text-transform: uppercase;
    text-align: center;
    color: lightgoldenrodyellow;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-top: 0.3rem;
}
.image_hover_logo.width img{
    width: 140px;
}
@media (max-width: 1199px) {
    img {
        height: 175px;
    }
}
@media (max-width: 991px) {
    img {
        height: 135px;
    }
    .Project_heading {
        font-size: 23px;
    }
    .Project_title {
        font-size: 42px;
    }
    .project_card_text {
        font-size: 12px;
    }
    .project_card_heading {
        font-size: 23px;
        padding: 0.2rem;
        padding-left: 0.5rem;
        padding-bottom: 0px;
    }
}
@media (max-width: 767px) {
    .Project_heading {
        font-size: 20px;
    }
    .Project_title {
        font-size: 36px;
        padding-bottom: 1.5rem;
    }
    .project_card_block {
        margin-bottom: 1.5rem;
    }    
    .Project_block {
        padding: 1.5rem 0px 0.5rem
    }    
}
@media (max-width: 767px) {
    img {
        height: auto;
    }
    .project_card_text {
        font-size: 13px;
        font-weight: 300;
    }
    .project_card_heading {
        font-size: 25px;
    }
}
`

export default function Project() {
    return (
        <ProjectSkills>
            <div className='container-fluid Project_block'>
                <div className='container'>
                    <div className='row' style={{ justifyContent: "center" }}>
                        <div className='col-12'>
                            <div className='Project_heading'><div>My, <span>Work</span></div></div>
                            <div className='Project_title'>Recent Projects</div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11'>
                            <a href='https://www.activaterev.com/' target="blank">
                                <div className='project_card_block'>
                                    <div className='image_block'>
                                        <div><img src={RevRental} /></div>
                                        <div className='image_hover_block'>
                                            <div>
                                                <div className='image_hover_logo'>
                                                    <img src={Revrentallogo} />
                                                    {/* <div className='image_hover_heading'>Rev Rental</div> */}
                                                </div>
                                                <div className='image_hover_text'>Woocommerce Website</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='project_card_heading'>Rev Rental</div>
                                    <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11'>
                            <a href='https://www.squarebits.com/' target="blank">
                                <div className='project_card_block'>
                                    <div className='image_block'>
                                        <div><img src={SquareBits} /></div>
                                        <div className='image_hover_block'>
                                            <div>
                                                <div className='image_hover_logo width'>
                                                    <img src={Squarebitslogo} />
                                                    {/* <div className='image_hover_heading'>Rev Rental</div> */}
                                                </div>
                                                <div className='image_hover_text'>Company Website</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='project_card_heading'>Square Bits</div>
                                    <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11'>
                            <a href='https://aero-path.com/' target="blank">
                                <div className='project_card_block'>
                                    <div className='image_block'>
                                        <div><img src={Aeropath} /></div>
                                        <div className='image_hover_block'>
                                            <div>
                                                <div className='image_hover_logo width'>
                                                    <img src={Aeroptahlogo} />
                                                    {/* <div className='image_hover_heading'>Rev Rental</div> */}
                                                </div>
                                                <div className='image_hover_text'>Service Provider Website</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='project_card_heading'>Aero Path</div>
                                    <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                                </div>
                            </a>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11'>
                            <div className='project_card_block'>
                                <div className='image_block'>
                                    <div><img src={ParidhanMarchentpanel} /></div>
                                    <div className='image_hover_block'>
                                        <div>
                                            <div className='image_hover_logo width'>
                                                <img src={Aeroptahlogo} />
                                                {/* <div className='image_hover_heading'>Rev Rental</div> */}
                                            </div>
                                            <div className='image_hover_text'>merchant panel</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='project_card_heading'>Paridhan Marchant</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11'>
                            <div className='project_card_block'>
                                <div className='image_block'>
                                    <div><img src={RevrentalAdmin} /></div>
                                    <div className='image_hover_block'>
                                        <div>
                                            <div className='image_hover_logo'>
                                                <img src={Revrentallogo} />
                                                {/* <div className='image_hover_heading'>Rev Rental</div> */}
                                            </div>
                                            <div className='image_hover_text'>Admin panel</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='project_card_heading'>Rev Dashboard</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectSkills>
    )
}
