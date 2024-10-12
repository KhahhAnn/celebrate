import React from 'react';
import { Row, Col, Image } from 'antd';

const AboutUs = () => (
   <div style={{ backgroundColor: "#e8e8e3" }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', paddingTop: "20px" }}>VỀ CHÚNG TÔI</h2>
      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col span={10}>
            <div style={{ padding: '20px', minHeight: '200px', position: "relative", zIndex: 20 }}>
               <div className='min-w-[38rem]' style={{ direction: 'rtl', textAlign: 'right' }}>
                  <p className='font-fira text-xl'>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                     make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.
                  </p>
               </div>
            </div>
            <div className='absolute w-56 h-72 top-0 bg-white z-0 right-0 font-playfair'>
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }}>Về chú rể</p>
            </div>
         </Col>
         <Col span={5}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/eb9d59e0-1133-47e9-926c-898d68a010d0.jpeg"
               alt="Couple"
               className='!w-96 h-32'
               style={{ borderRadius: '8px' }}
            />
         </Col>
      </Row>
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px', paddingBottom: "40px" }}>
         <Col span={5}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/eb9d59e0-1133-47e9-926c-898d68a010d0.jpeg"
               alt="Couple"
               className='!w-96 h-32'
               style={{ borderRadius: '8px' }}
            />
         </Col>
         <Col span={10}>
            <div style={{ padding: '20px', minHeight: '200px', position: "relative", zIndex: 20 }}>
               <div className='min-w-[38rem]'>
                  <p className='font-fira text-xl'>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                     make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.
                  </p>
               </div>
               <div className="absolute -right-72 top-28 w-72 h-72 z-10">
                  <img
                     src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
                     alt="flower"
                  />
               </div>
            </div>
            <div className='absolute w-56 h-72 top-0 bg-white z-0 font-playfair'>
               <p style={{ bottom: 10, right: 10, fontWeight: 'bold', position: "absolute", fontSize: "24px" }}>Về chú rể</p>
            </div>
         </Col>
      </Row>
   </div>
);

export default AboutUs;