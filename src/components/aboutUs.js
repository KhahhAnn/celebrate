import React from 'react';
import { Row, Col, Image } from 'antd';
import { ABOUT_US_TEXT } from '../utils/stringUtils'; // Import văn bản từ utils

const AboutUs = () => (
   <div style={{ backgroundColor: "#e8e8e3", padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>
         {ABOUT_US_TEXT.title}
      </h2>

      {/* Phần về chú rể */}
      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <div style={{ padding: '20px', minHeight: '200px', position: "relative", zIndex: 20 }} className='about-container-mb'>
               <div style={{ direction: 'rtl', textAlign: 'right' }}>
                  <p className='font-fira text-xl text-about-desc-mb' style={{ wordWrap: 'break-word' }}>
                     {ABOUT_US_TEXT.groomDescription}
                  </p>
               </div>
            </div>
            <div className='absolute w-56 h-72 top-0 bg-white z-0 right-0 font-playfair w-56-mb'>
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }} className='about-title-mb'>
                  {ABOUT_US_TEXT.groomTitle}
               </p>
            </div>
         </Col>
         <Col xs={24} sm={24} md={12} lg={6} xl={5} className='about-us-img'>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/eb9d59e0-1133-47e9-926c-898d68a010d0.jpeg"
               alt="Groom"
               className='!w-96 h-32'
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
      </Row>

      {/* Phần về cô dâu */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px', paddingBottom: "40px" }} className='top-mobile'>
         <Col xs={24} sm={24} md={12} lg={6} xl={5} className='about-us-img'>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/eb9d59e0-1133-47e9-926c-898d68a010d0.jpeg"
               alt="Bride"
               className='!w-96 h-32'
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <div style={{ padding: '20px', minHeight: '200px', position: "relative", zIndex: 20 }} className='about-container-mb'>
               <div style={{ wordWrap: 'break-word' }} className='about-container-mb'>
                  <p className='font-fira text-xl text-about-desc-mb'>
                     {ABOUT_US_TEXT.brideDescription}
                  </p>
               </div>
               <div className="absolute -right-72 top-28 w-72 h-72 z-10 flower gallery-img-2">
                  <img
                     src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
                     alt="flower"
                     style={{ width: '100%', height: 'auto' }}
                  />
               </div>
            </div>
            <div className='absolute w-56 h-72 top-0 bg-white z-0 font-playfair w-56-mb'>
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }} className='about-title-mb'>
                  {ABOUT_US_TEXT.brideTitle}
               </p>
            </div>
         </Col>
      </Row>
   </div>
);

export default AboutUs;
