import React from 'react';
import { Typography, Form, Input, Button, Select } from 'antd';
import { RSVP_TEXT } from '../utils/stringUtils'; // Import text từ utils

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const WeddingRSVP = () => {
   const [form] = Form.useForm();

   const onFinish = (values) => {
      console.log('Form values:', values);
      // Chuyển đổi giá trị attend từ "yes" / "no" thành true / false
      const updatedValues = {
         ...values,
         attend: values.attend === 'yes', // Chuyển đổi giá trị
      };
      console.log('Updated Form values:', updatedValues);
   };

   return (
      <div className="my-16 px-4 max-w-3xl mx-auto form-container-mb">
         <div className="flex items-center justify-center mb-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <Title level={2} className="mx-4 my-0 !text-[#4b4949] font-playfair">
               {RSVP_TEXT.title}
            </Title>
            <div className="border-t border-gray-300 flex-grow"></div>
         </div>
         <Paragraph className="text-center mb-8 text-[#4b4949]">
            {RSVP_TEXT.paragraph}
         </Paragraph>
         <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
               name="name"
               label={RSVP_TEXT.nameLabel}
               rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
            >
               <Input placeholder={RSVP_TEXT.nameLabel} />
            </Form.Item>
            <Form.Item
               name="phoneNumber"
               label={RSVP_TEXT.phoneLabel}
               rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                  { pattern: /^[0-9]{10,12}$/, message: 'Số điện thoại không hợp lệ (10-12 số)' } 
               ]}
            >
               <Input placeholder={RSVP_TEXT.phoneLabel} />
            </Form.Item>
            <Form.Item name="wish" label={RSVP_TEXT.wishesLabel}>
               <TextArea rows={4} placeholder={RSVP_TEXT.wishesLabel} />
            </Form.Item>
            <Form.Item
               name="attend"
               label={RSVP_TEXT.attendanceLabel}
               rules={[{ required: true, message: 'Vui lòng chọn' }]}
            >
               <Select placeholder="Chọn">
                  <Select.Option value="yes">{RSVP_TEXT.attendanceOptions.yes}</Select.Option>
                  <Select.Option value="no">{RSVP_TEXT.attendanceOptions.no}</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item
               style={{ display: "none" }}
               name="cdcr"
               label="CDCR"
               rules={[{ required: true, message: 'Vui lòng nhập CDCR' }]}
            >
               <Input defaultValue="CD" placeholder="CDCR" disabled /> 
            </Form.Item>
            <Form.Item>
               <Button type="primary" htmlType="submit" className="bg-[#4b4949] hover:bg-[#333] w-full">
                  {RSVP_TEXT.submitButton}
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default WeddingRSVP;
