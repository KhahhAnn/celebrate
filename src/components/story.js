import React from 'react';
import { Row, Col, Image } from 'antd';
import { STORY_TEXT } from '../utils/stringUtils'; // Import text từ utils

const Story = () => (
   <div style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', paddingTop: "20px" }}>
         {STORY_TEXT.title}
      </h2>
      
      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col xs={24} md={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }} className='about-title-mb'>
                  {STORY_TEXT.sectionTitle}
               </h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  {STORY_TEXT.date}
               </p>
            </div>
            <p className='font-fira text-xl text-right text-about-desc-mb'>
               {STORY_TEXT.description}
            </p>
         </Col>
         <Col xs={24} md={12} style={{ paddingRight: '20px' }}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/b4e8c37f-87aa-473b-b44b-7f27687f9175.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
      </Row>

      {/* Second Row */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }}>
         <Col xs={24} md={10}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/4360f07a-bf87-4ec1-b2b1-a87355e65973.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col xs={24} md={12} style={{ paddingLeft: '20px' }}>
            <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }} className='about-title-mb'>
               {STORY_TEXT.sectionTitle2}
            </h2>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
               {STORY_TEXT.date}
            </p>
            <p className='font-fira text-xl text-about-desc-mb' style={{ lineHeight: '1.5' }}>
               {STORY_TEXT.description2}
            </p>
         </Col>
      </Row>

      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }} >
         <Col xs={24} md={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }} className='about-title-mb'>
                  {STORY_TEXT.sectionTitle3}
               </h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  {STORY_TEXT.date}
               </p>
            </div>
            <p className='font-fira text-xl text-right text-about-desc-mb'>
               {STORY_TEXT.description3}
            </p>
         </Col>
         <Col xs={24} md={12} style={{ paddingRight: '20px' }}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/3c11479f-ed20-4cb8-904c-007ebf08a674.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
            <p style={{ marginTop: '20px', fontStyle: 'italic', textAlign: 'center', fontSize: '14px' }}>
               {STORY_TEXT.sectionTitle} <br /> ({STORY_TEXT.date})
            </p>
         </Col>
      </Row>
   </div>
);

export default Story;
