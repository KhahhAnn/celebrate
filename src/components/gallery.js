import React from 'react';
import { Row, Col, Image } from 'antd';

const Gallery = () => (
   <div className="bg-white py-10 relative">
      <div className="absolute left-0 -top-4 w-72 h-72">
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
            alt="flower"
         />
      </div>
      <Row justify="center" gutter={[26, 26]} className='mt-20 !ml-20'>
         <Col xs={20} sm={5} className="flex justify-center">
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/c88c883d-5563-4599-99ca-00b10ef5eae1.jpeg"
               alt="gallery1"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={20} sm={5} className="flex justify-center">
            <Image
               src="https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/dfda078b-049f-402e-bed1-f0e03a8c4603.jpeg"
               alt="gallery2"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={20} sm={5} className="flex justify-center">
            <Image
               src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/1114f798-fd4c-488c-914f-c12acb017a4b.jpeg"
               alt="gallery3"
               className="rounded-md !h-96 object-cover"
            />
         </Col>
         <Col xs={20} sm={2} className="flex justify-center items-center">
            <div
               style={{
                  // display: 'flex',
                  // flexDirection: 'column',
                  transform: 'rotate(90deg)',
                  // transformOrigin: 'left bottom',
                  whiteSpace: 'nowrap',
               }}
            >
               <h3 className="font-playfair text-xl">
                  | Tuấn Minh | x | Tuấn Minh |
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
