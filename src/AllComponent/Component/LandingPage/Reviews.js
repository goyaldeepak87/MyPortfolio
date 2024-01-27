import React from 'react'
import styled from 'styled-components';
const WrapperReviews = styled.div`
.Reviews_block{
    padding: 2rem 0px 3rem;
    background: #F9F9F9;
    position: relative;
}
.Reviews{
    position: relative;
}
.Reviews_heading{
    color: black;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
}
.Reviews_heading > div{
    border-bottom: 3px solid black;
}
.Reviews_heading span{
    color: #DE964E;
}
.Reviews_title{
    color: #DE964E;
    text-align: center;
    font-family: Poppins;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Reviews_col1{
    border-right: 4px solid black;
    height: 100%;
    padding-right: 24px;
    text-align: right;
}
.Reviews_col1_heading{
    color: #DE964E;
    text-align: right;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Reviews_col1_title{
    color: black;
    text-align: right;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.Reviews_col2{
    color: #000;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
@media (max-width: 991px) {
    .Reviews_heading {
        font-size: 23px;
    }
    .Reviews_title {
        font-size: 42px;
        padding-bottom: 1rem;
    }
    .Reviews_col2 {
        font-size: 14px;
        font-weight: 300;
    }
    .Reviews_col1_title {
        font-size: 23px;
        font-weight: 600;
    }
    .Reviews_col1_heading {
        font-size: 22px;
        font-weight: 600;
    }
}
@media (max-width: 767px) {
    .Reviews > div > div:nth-child(2){
        padding-right: 0;
    }
    .Reviews_col1 {
        padding-right: 11px;
        border-right: 2px solid black;
    }
    .Reviews_col1_title {
        font-size: 19px;
    }
    .Reviews_col2 {
        font-size: 13px;
    }
    .Reviews_title {
        font-size: 37px;
    }
    .Reviews_heading {
        font-size: 20px;
    }
}    
@media (max-width: 767px) {
    .Reviews_block {
        padding: 1.5rem 0px 2rem;
    }
}
@media (max-width: 575px) {
    .Reviews_heading {
        font-size: 19px;
    }
    .Reviews_title {
        font-size: 34px;
    }
    .Reviews_col1_heading {
        font-size: 28px;
        font-weight: 700;
        line-height: 22px;
        text-align: left;
    }
    .Reviews_col1_title {
        font-size: 19px;
        text-align: left;
    }
    .Reviews_col2 {
        font-size: 14px;
        font-weight: 400;
        padding-top: 0.5rem;
    }
    .Reviews_block {
        padding: 1rem 0px 2rem;
    }
    .Reviews > div > div:nth-child(2) {
        padding-right: 12px;
    }
    .Reviews_col1 {
        padding-right: 0px;
        border-right: 0px solid black;
    }
}
`;

export default function Reviews() {
    return (
        <WrapperReviews>
            <div className='container-fluid Reviews_block'>
                <div className='container Reviews'>
                    <div className='row' style={{ justifyContent: "center" }}>
                        <div className='col-12'>
                            <div className='Reviews_heading'><div>My, <span>Reviews</span></div></div>
                            <div className='Reviews_title'>TESTIMONIALS</div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='Reviews_col1'>
                                <div className='Reviews_col1_heading'>E-Commerce</div>
                                <div className='Reviews_col1_title'>fresh and Green</div>
                            </div>
                        </div>
                        <div className='col-sm-8'>
                            <div className='Reviews_col2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of  the printing and typesetting industry. Lorem Ipsum has been. LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperReviews>
    )
}
