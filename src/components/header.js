import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const Header = () => (
   <div
      className="bg-cover bg-center h-[500px] text-white flex items-center justify-center z-50"
      style={{
         backgroundImage: 'url(https://khan-web-prod.s3.ap-southeast-1.amazonaws.com/uploads/66d51f38-9880-4cd6-9d8f-e371b1ff2aed.jpeg)',
      }}
   >
      <Row justify="center" align="middle" style={{ height: '100%' }}>
         <Col className="text-center">
            <Title className="!text-white font-playfair">| K x T |</Title>
            <Title className="!text-white font-playfair font-bold">WEDDING</Title>
            <Title className="!text-white font-playfair italic">Invitation</Title>
         </Col>
      </Row>
   </div>
);

export default Header;
