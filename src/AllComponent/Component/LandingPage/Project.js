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
.Reviews_title{
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
`

export default function Project() {
    return (
        <ProjectSkills>
            <div className='container-fluid Project_block'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='Project_heading'><div>My, <span>Work</span></div></div>
                            <div className='Reviews_title'>Recent Projects</div>
                        </div>
                        <div className='col-4'>
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
                        </div>
                        <div className='col-4'>
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
                                <div className='project_card_heading'>Rev Rental</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                        <div className='col-4'>
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
                                <div className='project_card_heading'>Rev Rental</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                        <div className='col-4'>
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
                                <div className='project_card_heading'>Rev Rental</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                        <div className='col-4'>
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
                                <div className='project_card_heading'>Rev Rental</div>
                                <div className='project_card_text'>At Backstage we help experiential marketing agencies wow their clients with cutting edge event-tech and digital brand activations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectSkills>
    )
}
