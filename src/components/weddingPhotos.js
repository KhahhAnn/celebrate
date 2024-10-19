import React from 'react';
import { Row, Col, Typography, Image } from 'antd';

const { Title } = Typography;

const WeddingPhotos = () => (
   <div className="my-16 relative">
      <div className="flex items-center justify-center mb-4">
         <div className="border-t border-gray-300 flex-grow"></div>
         <Title level={2} className="mx-4 my-0 !text-[#4b4949] font-playfair">ẢNH CƯỚI CỦA CHÚNG TÔI</Title>
         <div className="border-t border-gray-300 flex-grow"></div>
      </div>
      <Row gutter={[16, 16]}>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/8f79bb4d-4606-4092-823b-cfaaaf4e71a1.jpeg"
               alt="photo1"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/801387d6-ae13-490c-9c94-050d1e63c92d.jpeg"
               alt="photo2"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/2a1940e6-f90c-4646-a1cb-4f97551c1b1a.jpeg"
               alt="photo3"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/56467021-edaf-4f04-be3c-7e7b37c09a4e.jpeg"
               alt="photo4"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} md={12} lg={12}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/f1657834-ce15-4992-9f59-a9a04a339eb4.jpeg"
               alt="photo5"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} md={12} lg={12}>
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/56467021-edaf-4f04-be3c-7e7b37c09a4e.jpeg"
               alt="photo6"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
      </Row>
      <div className="absolute w-72 h-72 z-10 bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 gallery-img-2">
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
            alt="flower"
            className="w-full h-auto flower"
         />
      </div>
   </div>
);

export default WeddingPhotos;
