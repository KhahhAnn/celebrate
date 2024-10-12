import React from 'react';
import { Row, Col, Image } from 'antd';

const Story = () => (
   <div style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', paddingTop: "20px" }}>CÂU CHUYỆN TÌNH YÊU</h2>
      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col span={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }}>How we first met?</h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  [30.01.2017]
               </p>
            </div>
            <p className='font-fira text-xl text-right'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged.
            </p>
         </Col>
         <Col span={12} style={{ paddingRight: '20px' }}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/b4e8c37f-87aa-473b-b44b-7f27687f9175.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
      </Row>

      {/* Second Row */}
      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col span={10}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/4360f07a-bf87-4ec1-b2b1-a87355e65973.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col span={12} style={{ paddingLeft: '20px' }}>
            <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }}>How we first met?</h2>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
               [30.01.2017]
            </p>
            <p className='font-fira text-xl' style={{ lineHeight: '1.5' }}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged.
            </p>
         </Col>
      </Row>

      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col span={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '24px' }}>How we first met?</h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  [30.01.2017]
               </p>
            </div>
            <p className='font-fira text-xl text-right'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
               make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
               remaining essentially unchanged.
            </p>
         </Col>
         <Col span={12} style={{ paddingRight: '20px' }}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/3c11479f-ed20-4cb8-904c-007ebf08a674.jpeg"
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
            <p style={{ marginTop: '20px', fontStyle: 'italic', textAlign: 'center', fontSize: '14px' }}>How we first met? <br /> (30.01.2017)</p>
         </Col>
      </Row>
   </div>
);

export default Story;