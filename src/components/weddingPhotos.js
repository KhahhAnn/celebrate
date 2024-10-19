import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import DSC00021 from "../assets/DSC00021.jpg"
import dsc00499 from "../assets/DSC09674.jpg"
import dsc00526 from "../assets/DSC00526.jpg"
import Dsc09193 from "../assets/DSC09193.jpg"
import DSC00024 from "../assets/DSC00024.jpg"
import dsc09361 from "../assets/DSC09361.jpg"

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
               src={DSC00021}
               alt="photo1"
               className="rounded-lg w-full h-full object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src={dsc00499}
               alt="photo2"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src={dsc00526}
               alt="photo3"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <Image
               src={Dsc09193}
               alt="photo4"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} md={12} lg={12}>
            <Image
               src={DSC00024}
               alt="photo5"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
         <Col xs={24} md={12} lg={12}>
            <Image
               src={dsc09361}
               alt="photo6"
               className="rounded-lg w-full h-auto object-cover"
            />
         </Col>
      </Row>
      <div className="absolute w-72 h-72 z-10 bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 gallery-img-2">
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
            alt="flower"
            className="w-full h-auto flower hidden"
         />
      </div>
   </div>
);

export default WeddingPhotos;
