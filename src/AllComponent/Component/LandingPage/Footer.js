import React from 'react'
import faceboock from "../../../assets/Fotter/faceboock.svg"
import insta from "../../../assets/Fotter/insta.svg"
import linkdin from "../../../assets/Fotter/linkdin.svg"
import InstaSocialIcon from "../../../assets/SocialIcon/InstaSocialIcon.svg"
import InstaSocialIcon1 from "../../../assets/SocialIcon/InstaSocialIcon1.svg"
import FBSocialIcon from "../../../assets/SocialIcon/download.png"
import styled from 'styled-components';
const WrapperFooter = styled.div`
.Footer_block{
  padding: 2rem 0px 1rem;
  background: #DE964E;
  position: relative;
}
.Footer{
  position: relative;
}
.Footer_heading{
  color: black;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 0.5rem;
}
.Footer_text{
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 2rem;
}
img{
  width: 100%;
}
.fotter_icon{
  width: 30px;
}
.fotter_icon_block{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fotter_devloper_name{
  text-align: end;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.fotter_devloper_name span{
  color: #FFF;
}
@media (max-width: 991px) {
  .Footer_heading {
    font-size: 34px;
  }
  .Footer_text {
    font-size: 14px;
  }
  .fotter_devloper_name {
    font-size: 13px;
  }
  .fotter_icon {
    width: 25px;
  }
}
@media (max-width: 767px) {
  .fotter_devloper_name {
    font-size: 12px;
  }
  .Footer_heading {
    font-size: 30px;
  }
  .Footer_text {
    font-size: 13px;
  }
  .Footer_block {
    padding: 1rem 0px 1rem;
  }
}
@media (max-width: 575px) {
 .Footer_heading {
    // font-size: 30px;
    font-size: 27px;
    line-height: 1.2;
  }
  .fotter_devloper_name {
    font-size: 11px;
  }
  .Footer_text {
    font-size: 14px;
    font-weight: 400;
  }
}
`;

export default function Footer() {
  return (
    <WrapperFooter>
      <div className='container-fluid Footer_block'>
        <div className='container Footer'>
          <div className='row' style={{ justifyContent: "center", alignItems: "center" }}>
            <div className='col-lg-10 col-md-12'>
              <div className='Footer_heading'>Turning Ideas into Digital Reality!</div>
              <div className='Footer_text'>
                Have a website project to create, a job opportunity, or simply want to chat about web development? I'm just a message away. Feel free to reach out for Project Collaboration, Hire me for Your Projects, Consultation on ReactJS development, or whether you just want to connect for a friendly chat.
              </div>
            </div>
            <div className='col-sm-6 col-4'>
              <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-5'>
                  <div className='fotter_icon_block'>
                    <div className='fotter_icon'>
                      <a
                        href='https://www.linkedin.com/in/deepak-goyal-26a01b14b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        target='_blank'
                      >
                        <img src={linkdin} />
                      </a>
                    </div>
                    <div className='fotter_icon'>
                      <a
                        href='https://www.instagram.com/deepak_goyal1995/?igsh=YzVkODRmOTdmMw%3D%3D'
                        target='_blank'
                      >
                        <img src={insta} />
                      </a>
                    </div>
                    <div className='fotter_icon'>
                      <a
                        href='https://github.com/goyaldeepak87'
                        target='_blank'
                      >
                        <img style={{borderRadius:'46px'}} src={FBSocialIcon} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-8' style={{ paddingLeft: "0" }}>
              <div className='fotter_devloper_name'>Nurtured with Devotion by <span> Deepak Goyal </span></div>
            </div>
          </div>
        </div>
      </div>
    </WrapperFooter>
  )
}
