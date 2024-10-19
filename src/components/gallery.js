import React from 'react';
import { Row, Col, Image } from 'antd';
import { GALLERY_TEXT } from '../utils/stringUtils';

const Gallery = () => (
   <div className="bg-white py-10 relative">
      <div className="absolute left-0 -top-4 w-72 h-72 flower">
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
            alt="flower"
         />
      </div>
      <Row justify="center" gutter={[26, 26]} className='mt-20'>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-1">
            <Image
               src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/1114f798-fd4c-488c-914f-c12acb017a4b.jpeg"
               alt="gallery1"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-2">
            <Image
               src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/1114f798-fd4c-488c-914f-c12acb017a4b.jpeg"
               alt="gallery2"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-3">
            <Image
               src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/1114f798-fd4c-488c-914f-c12acb017a4b.jpeg"
               alt="gallery3"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={24} sm={24} md={8} lg={2} className="flex justify-center items-center gallery-text">
            <div
               style={{
                  transform: 'rotate(90deg)',
                  whiteSpace: 'nowrap',
               }}
            >
               <h3 className="font-playfair text-xl">
                  {GALLERY_TEXT.galleryTitle}
               </h3>
            </div>
            <div
               style={{
                  width: '2px',
                  height: '50px', 
                  backgroundColor: '#000', 
                  marginTop: '10px', 
               }}
            />
         </Col>
      </Row>
   </div>
);

export default Gallery;
