import React from 'react';
import { Typography, Form, Input, Button, Select } from 'antd';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const WeddingRSVP = () => {
   const [form] = Form.useForm();

   const onFinish = (values) => {
      console.log('Form values:', values);
      // Xử lý gửi form ở đây
   };

   return (
      <div className="my-16 px-4 max-w-3xl mx-auto">
         <div className="flex items-center justify-center mb-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <Title level={2} className="mx-4 my-0 !text-[#4b4949] font-playfair">BẠN SẼ THAM DỰ CHỨ?</Title>
            <div className="border-t border-gray-300 flex-grow"></div>
         </div>
         <Paragraph className="text-center mb-8 text-[#4b4949]">
            Đám cưới của chúng tôi sẽ trọn vẹn hơn khi có thêm<br />
            lời chúc phúc và sự hiện diện của các bạn. Xin hãy<br />
            xác nhận sự có mặt của mình để chúng tôi chuẩn bị<br />
            đón tiếp một cách chu đáo nhất nhé! Trân trọng!
         </Paragraph>
         <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item name="name" label="Họ tên" rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
               <Input placeholder="Họ tên" />
            </Form.Item>
            <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}>
               <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item name="wishes" label="Gửi những lời chúc tốt đẹp nhất">
               <TextArea rows={4} placeholder="Lời chúc" />
            </Form.Item>
            <Form.Item name="attendance" label="Bạn sẽ tham gia chứ ?" rules={[{ required: true, message: 'Vui lòng chọn' }]}>
               <Select placeholder="Chọn">
                  <Select.Option value="yes">Có, tôi sẽ tham dự</Select.Option>
                  <Select.Option value="no">Rất tiếc, tôi không thể tham dự</Select.Option>
               </Select>
            </Form.Item>
            <Form.Item>
               <Button type="primary" htmlType="submit" className="bg-[#4b4949] hover:bg-[#333] w-full">
                  Phản Hồi
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default WeddingRSVP;