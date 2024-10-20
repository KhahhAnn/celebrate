import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const QRCode = () => (
   <div className="my-16 bg-[#f5f5f5] p-8">
      <Title level={2} className="text-center mb-4 text-[#4b4949] font-playfair">ĐỊA CHỈ CỤ THỂ TRÊN BẢN ĐỒ:</Title>
      <Paragraph className="text-center mb-8 text-[#4b4949]">
         Thật vui vì được gặp và đón tiếp các bạn trong<br />
         một dịp đặc biệt như đám cưới của chúng tôi!♥
      </Paragraph>
      <Row justify="center" className='map-container'>
         <Col xs={24} sm={20} md={18} lg={16} className='map-mb'>
            <div className="overflow-hidden rounded-lg shadow-md map-mb">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.0477484454947!2d106.62511690233231!3d20.73623168696942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a750010af1a43%3A0x312d12fc1a3335cf!2zQ-G7lW5nIGNow6BvIHRow7RuIFh1w6JuIENoaeG6v25n!5e1!3m2!1svi!2s!4v1729324948271!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </Col>
      </Row>
   </div>
);

export default QRCode;
