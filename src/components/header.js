import React from 'react';
import { Row, Col, Typography } from 'antd';
import { INVITATION, NAME, WEDDING } from '../utils/stringUtils';
import Dsc00638 from "../assets/DSC00638.jpg"

const { Title } = Typography;

const Header = () => (
   <div
      className="bg-cover bg-center h-[500px] text-white flex items-center justify-center z-50"
      style={{
         backgroundImage: `url(${Dsc00638})`,
      }}
   >
      <Row justify="center" align="middle" style={{ height: '100%' }}>
         <Col className="text-center">
            <Title className="!text-white font-playfair text-3xl md:text-5xl lg:text-6xl">
               {NAME}
            </Title>
            <Title className="!text-white font-playfair font-bold text-3xl md:text-5xl lg:text-6xl">
               {WEDDING}
            </Title>
            <Title className="!text-white font-leJourScript italic text-xl md:text-3xl lg:text-4xl">
               {INVITATION}
            </Title>
         </Col>
      </Row>
   </div>
);

export default Header;
