import React from 'react';
import { Row, Col, Image } from 'antd';
import { ABOUT_US_TEXT } from '../utils/stringUtils'; 
import Dsc09168 from "../assets/DSC09168.jpg"
import Dsc08528 from "../assets/DSC08528.jpg"


const AboutUs = () => (
   <div style={{ backgroundColor: "#e8e8e3", padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '60px', marginBottom: '40px' }}>
         {ABOUT_US_TEXT.title}
      </h2>

      {/* Phần về chú rể */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{marginRight: "-256px"}}>
         <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <div style={{ paddingLeft: '455px', minHeight: '200px', position: "relative", zIndex: 20  }} className='about-container-mb'>
               <div style={{ direction: 'rtl', textAlign: 'right', maxWidth: "256px", paddingBottom: "88px", paddingTop: "20px" }}>
                  <p className='text-2xl text-about-desc-mb font-timeNewRoman' style={{ wordWrap: 'break-word' }}>
                     {ABOUT_US_TEXT.groomDescription}
                  </p>
               </div>
            </div>
            <div className='absolute w-[18rem] h-[24rem] bg-white z-0 right-0 font-playfair w-56-mb top-0 h-mb' >
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }} className='about-title-mb'>
                  {ABOUT_US_TEXT.groomTitle}
               </p>
            </div>
         </Col>
         <Col xs={24} sm={24} md={12} lg={6} xl={5} className='about-us-img'>
            <Image
               src={Dsc09168}
               alt="Groom"
               className='!w-96 h-32'
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
      </Row>

      {/* Phần về cô dâu */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px', paddingBottom: "40px", marginLeft: "-256px" }} className='top-mobile'>
         <Col xs={24} sm={24} md={12} lg={6} xl={5} className='about-us-img'>
            <Image
               src={Dsc08528}
               alt="Bride"
               className='!w-96 h-32'
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <div style={{ padding: '20px', minHeight: '200px', position: "relative", zIndex: 20 }} className='about-container-mb'>
               <div style={{ wordWrap: 'break-word', maxWidth: "360px" }} className='about-container-mb'>
                  <p className='text-2xl text-about-desc-mb font-timeNewRoman'>
                     {ABOUT_US_TEXT.brideDescription}
                  </p>
               </div>
               <div className="absolute right-[-24rem] top-[14rem] w-72 h-72 z-10 flower gallery-img-2">
                  <img
                     src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
                     alt="flower"
                     style={{ width: '100%', height: 'auto', transform: 'rotate(120deg)'  }}
                  />
               </div>
            </div>
            <div className='absolute w-[26rem] h-[26rem] top-0 bg-white z-0 font-playfair w-56-mb h-mb'>
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }} className='about-title-mb'>
                  {ABOUT_US_TEXT.brideTitle}
               </p>
            </div>
         </Col>
      </Row>
   </div>
);

export default AboutUs;
