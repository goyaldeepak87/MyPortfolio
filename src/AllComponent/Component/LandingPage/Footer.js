import React from 'react'
import faceboock from "../../../assets/Fotter/faceboock.svg"
import insta from "../../../assets/Fotter/insta.svg"
import linkdin from "../../../assets/Fotter/linkdin.svg"
import styled from 'styled-components';
const WrapperFooter = styled.div`
.Footer_block{
  padding: 1.5rem 0px 1rem;
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
  font-size: 60px;
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
`;

export default function Footer() {
  return (
    <WrapperFooter>
      <div className='container-fluid Footer_block'>
        <div className='container Footer'>
          <div className='row' style={{ justifyContent: "center" }}>
            <div className='col-10'>
              <div className='Footer_heading'>Offer a Friendly Hello</div>
              <div className='Footer_text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been. LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-3'>
                  <div className='fotter_icon_block'>
                    <div className='fotter_icon'><img src={linkdin}/></div>
                    <div className='fotter_icon'><img src={insta}/></div>
                    <div className='fotter_icon'><img src={faceboock}/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='fotter_devloper_name'>Nurtured with Devotion by <span> Deepak Goyal </span></div>
            </div>
          </div>
        </div>
      </div>
    </WrapperFooter>
  )
}
