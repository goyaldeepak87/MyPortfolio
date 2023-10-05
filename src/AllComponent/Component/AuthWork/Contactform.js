import React from 'react'
import Adress from "../../../assets/Contact/Adress.svg"
import Email from "../../../assets/Contact/Email.svg"
import Phone from "../../../assets/Contact/Phone.svg"
import styled from 'styled-components';
const WrapperContactform = styled.div`
.Contactform_block{
  padding: 2rem 0px 3rem;
  background: #F9F9F9;
  position: relative;
}
.Contactform{
  position: relative;
}
.Contactform_heading{
  color: black;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
}
.Contactform_heading > div{
  border-bottom: 3px solid black;
}
.Contactform_heading span{
  color: #DE964E;
}
.Contactform_title{
  color: #DE964E;
  text-align: center;
  font-family: Poppins;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 1rem;
}
img{
  width: 100%;
}
.Contact_icon{
  width: 100px;
  margin-right: 1rem;
}
.Contact_icon_block{
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}
input{
  width: 100%;
  height: 35px;
  border-radius: 15px;
  border: 1px solid lightgray;
  border-color: gray;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 5px 15px;
}
textarea {
  width: 100%;
  height: 120px;
  resize: none;
  border-radius: 15px;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 5px 15px;
}
.contact_feild_block{
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 1rem;
}
.button {
  width: 130px;
  background: black;
  color: rgb(222, 150, 78);
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 27px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 1.5rem auto auto;
  position: relative;
  margin: inherit;
  margin-top: 0.3rem;
  cursor: pointer;
}
.button::after {
  content: "";
  position: absolute;
  width: 108%;
  height: 125%;
  z-index: 1;
  border: 2px solid rgb(222, 150, 78);
  border-radius: 27px;
}
.Contact_icon_heading{
  color: #000;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.Contact_icon_text{
  color: #DE964E;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
`;


export default function Contactform() {
  return (
    <WrapperContactform>
      <div className='container-fluid Contactform_block'>
        <div className='container Contactform'>
          <div className='row' style={{ justifyContent: "center" }}>
            <div className='col-12'>
              <div className='Contactform_heading'><div>Let’s, <span>Talk Ideas</span></div></div>
              <div className='Contactform_title'>Send me a message!</div>
            </div>
            <div className='col-4'>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img src={Adress} /></div>
                <div>
                  <div className='Contact_icon_heading'>Adress</div>
                  <div className='Contact_icon_text'>Jodhpur, Rajasthan, india, 342001</div>
                </div>
              </div>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img src={Email} /></div>
                <div>
                  <div className='Contact_icon_heading'>Email</div>
                  <div className='Contact_icon_text'>goyaldeepak871@gmail.com</div>
                </div>
              </div>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img src={Phone} /></div>
                <div>
                  <div className='Contact_icon_heading'>Phone No.</div>
                  <div className='Contact_icon_text'>7014165483</div>
                </div>
              </div>
            </div>
            <div className='col-8'>
              <div className='row'>
                <div className='col-6'>
                  <div className='contact_feild_block'>
                    <div>Your Full Name</div>
                    <input type='text' />
                  </div>
                </div>
                <div className='col-6'>
                  <div className='contact_feild_block'>
                    <div>Your Email Adress</div>
                    <input type='text' />
                  </div>
                </div>
              </div>
              <div className='contact_feild_block'>
                <div>Your Message</div>
                <textarea type='text' />
              </div>
              <div class="button">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContactform>
  )
}
