import React from 'react';
import { Row, Col, Image } from 'antd';
import { GALLERY_TEXT } from '../utils/stringUtils';
import Dsc08779 from "../assets/DSC08779.jpg"
import dsc09281 from "../assets/DSC09281.jpg"
import dsc09733 from "../assets/DSC09733.jpg"

const Gallery = () => (
   <div className="bg-white py-10 relative">
      <div className="absolute -left-10 top-0 w-72 h-72 flower">
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/309a99d7-fe06-404b-a69a-dc6f5d62f95f.png"
            alt="flower"
            style={{ opacity: 0.7, transform: 'rotate(-80deg)' }}
         />
      </div>
      <Row justify="center" gutter={[26, 26]} className='mt-20' style={{marginRight: "-235px"}}>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-1">
            <Image
               src={Dsc08779}
               alt="gallery1"
               className="rounded-md !w-96 !h-[25rem] object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-2">
            <Image
               src={dsc09281}
               alt="gallery2"
               className="rounded-md !w-96 !h-[25rem] object-cover"
            />
         </Col>
         <Col xs={24} sm={12} md={8} lg={5} className="flex justify-center gallery-img-3">
            <Image
               src={dsc09733}
               alt="gallery3"
               className="rounded-md !w-96 !h-[25rem] object-cover"
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
         </Col>
      </Row>
   </div>
);

export default Gallery;
