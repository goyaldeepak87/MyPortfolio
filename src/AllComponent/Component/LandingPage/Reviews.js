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
                        <div className='col-4'>
                            <div className='Reviews_col1'>
                                <div className='Reviews_col1_heading'>E-Commerce</div>
                                <div className='Reviews_col1_title'>fresh and Green</div>
                            </div>
                        </div>
                        <div className='col-8'>
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
