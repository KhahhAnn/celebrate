import React from 'react';
import { Typography, Row, Col, Image } from 'antd';

const { Title, Paragraph } = Typography;

const QRCode = () => (
   <div className="my-16 bg-[#f5f5f5] p-8">
      <Title level={2} className="text-center mb-4 text-[#4b4949] font-playfair">HỘP MỪNG CƯỚI</Title>
      <Paragraph className="text-center mb-8 text-[#4b4949]">
         Thật vui vì được gặp và đón tiếp các bạn trong<br />
         một dịp đặc biệt như đám cưới của chúng tôi!♥
      </Paragraph>
      <Row gutter={32} justify="center">
         <Col xs={24} sm={12}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
               <Title level={3} className="mb-4 font-playfair">Đến cô dâu</Title>
               <Image
                  src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/b2b6a1ac-5eda-4cd6-8424-b39d523ad8bc.image-copied-8a65cbfd-848b-49b1-8764-733676bbbe5a"
                  alt="QR Code Cô dâu"
                  className="mb-4"
                  width={200}
                  height={200}
               />
               <Paragraph className="mb-1 text-xl font-playfair">Khánh An</Paragraph>
               <Paragraph className="mb-1 text-xl font-playfair">758493844</Paragraph>
               <Paragraph className="text-xl font-playfair">Techcombank</Paragraph>
            </div>
         </Col>
         <Col xs={24} sm={12}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
               <Title level={3} className="mb-4 font-playfair">Đến chú rể</Title>
               <Image
                  src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/b2b6a1ac-5eda-4cd6-8424-b39d523ad8bc.image-copied-8a65cbfd-848b-49b1-8764-733676bbbe5a"
                  alt="QR Code Chú rể"
                  className="mb-4"
                  width={200}
                  height={200}
               />
               <Paragraph className="mb-1 text-xl font-playfair">Khánh An</Paragraph>
               <Paragraph className="mb-1 text-xl font-playfair">758493844</Paragraph>
               <Paragraph className="text-xl font-playfair">Techcombank</Paragraph>
            </div>
         </Col>
      </Row>
   </div>
);

export default QRCode;