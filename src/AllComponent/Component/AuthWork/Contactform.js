import React from 'react'
import Adress from "../../../assets/Contact/Adress.svg"
import Email from "../../../assets/Contact/Email.svg"
import Phone from "../../../assets/Contact/Phone.svg"
import MobileAdress from "../../../assets/Contact/MobileAdress.svg"
import MobileEmail from "../../../assets/Contact/MobileEmail.svg"
import MobilePhone from "../../../assets/Contact/MobilePhone.svg"
import styled from 'styled-components';
const WrapperContactform = styled.div`
.mobile_res_icon{
  display:none;
}
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
@media (max-width: 991px) {
  .Contactform_title {
    font-size: 48px;
  }
  .Contactform_heading {
    font-size: 23px;
  }
  .contact_feild_block {
    font-size: 16px;
  }
  .Contactform > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1){
    padding-right: 4px;
  }
  .Contactform > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(2){
    padding-left: 4px;
  }
  input {
    height: 30px;
    border-radius: 13px;
    font-size: 15px;
    padding: 4px 15px;
  }
  .contact_feild_block >div:nth-child(1){
    padding-bottom: 5px;
  }
  textarea {
    height: 100px;
  }
  .button {
    font-size: 17px;
    width: 120px;
  }
  .Contact_icon_block {
    display: inline-flex;
    width: 100%;
  }
  .Contact_icon {
    width: 67px;
  }
  .Contact_icon_block >div:nth-child(2){
    width: 69%;
  }
  .Contact_icon_text {
    font-size: 13px;
  }
}
@media (max-width: 767px) {
  .web_res_icon{
    display:none;
  }
  .mobile_res_icon{
    display:block;
  }
  .Contact_icon_block {
    display: block;
    text-align: center;
  }
  .Contact_icon {
    margin-right: 0rem;
    margin: auto;
  }
  .Contact_icon_block > div:nth-child(2) {
    width: 100%;
  }
  .mbile_res_contact_block{
    display: flex;
  }
  .mbile_res_contact_block > div:nth-child(1){
    width: 65%;
  }
  .mbile_res_contact_block > div:nth-child(3){
    width: 35%;
  }
  .Contact_icon {
    width: 50px;
  }
  .Contactform_heading {
    font-size: 20px;
  }
  .Contactform_title {
    font-size: 42px;
  }
  .Contactform_block {
    padding: 1.5rem 0px 2.5rem;
  }
  .button {
    font-size: 16px;
    width: 110px;
    height: 35px;
  }
  .contact_feild_block {
    padding-bottom: 0.5rem;
  }
}
@media (max-width: 575px) {
  .Contactform_title {
    font-size: 31px;
  }
  .Contactform_heading {
    font-size: 19px;
  }
  .Contact_icon {
    width: 60px;
    margin-right: 1rem;
  }
  .web_res_icon {
    display: block;
  }
  .mobile_res_icon {
    display: none;
  }
  .Contact_icon_block {
    display: inline-flex;
  }
  .mbile_res_contact_block {
    display: block;
  }
  .Contact_icon_block > div:nth-child(2) {
    width: 100%;
    flex: 1;
  }
  .mbile_res_contact_block > div:nth-child(3) {
    width: 100%;
  }
  .mbile_res_contact_block > div:nth-child(1) {
    width: 100%;
  }
  .Contact_icon_block {
    text-align: left;
  }
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
            <div className='col-lg-4 col-md-5 mbile_res_contact_block'>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img className="web_res_icon" src={Adress} /> <img className="mobile_res_icon" src={MobileAdress} /></div>
                <div>
                  <div className='Contact_icon_heading'>Adress</div>
                  <div className='Contact_icon_text'>Jodhpur, Rajasthan, india, 342001</div>
                </div>
              </div>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img className="web_res_icon" src={Email} /> <img className="mobile_res_icon" src={MobilePhone} /></div>
                <div>
                  <a href="mailto:goyaldeepak871@gmail.com" target="_blank" style={{ color: `white` }}>
                    <div className='Contact_icon_heading'>Email</div>
                    <div className='Contact_icon_text'>goyaldeepak871@gmail.com</div>
                  </a>
                </div>
              </div>
              <div className='Contact_icon_block'>
                <div className='Contact_icon'><img className="web_res_icon" src={Phone} /> <img className="mobile_res_icon" src={MobilePhone} /></div>
                <div>
                  <a href="tel:+91 7014165483" target="_blank" style={{ color: `white` }}>
                    <div className='Contact_icon_heading'>Phone No.</div>
                    <div className='Contact_icon_text'>7014165483</div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-8 col-md-7'>
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
