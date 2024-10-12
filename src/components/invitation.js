import React from 'react';
import { Card } from 'antd';

const Invitation = () => (
   <Card bordered={false} className="relative bg-white shadow-lg p-8 mx-auto font-playfair">
      <img
         src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/074b139e-022a-4675-9448-05e3ab3cacfe.png"
         alt="Flower Decoration"
         className="absolute top-0 right-0 w-32 h-auto"
         style={{ opacity: 0.7 }}
      />
      <div className="text-center">
         <h1 className="text-4xl font-bold mt-4 text-[#4b4949]">TUẤN MINH <span className='font-qwitcher italic mr-2'> and </span>  TUẤN MINH</h1>
         <p className="text-xl mt-2">ĐƯỢC TỔ CHỨC VÀO</p>
         <div className="flex justify-center items-center mt-4">
            <div className="text-right pr-4" style={{ borderRight: '1px solid #000', marginRight: '20px' }}>
               <p style={{ fontSize: '14px' }}>17 GIỜ 00</p>
               <p style={{ fontSize: '18px', fontWeight: 'bold' }}>CHỦ NHẬT</p>
            </div>
            <div className="text-center" style={{ margin: '0 20px' }}>
               <p style={{ fontSize: '48px', fontWeight: 'bold' }}>09</p>
            </div>
            <div className="text-left pl-4" style={{ borderLeft: '1px solid #000', marginLeft: '20px' }}>
               <p style={{ fontSize: '14px' }}>THÁNG 4</p>
               <p style={{ fontSize: '18px', fontWeight: 'bold' }}>NĂM 2024</p>
            </div>
         </div>
         <p className="mt-4">TẦNG 3 - SẢNH ROMA</p>
         <p>NHÀ HÀNG TIỆC CƯỚI HOÀNG GIA</p>
         <p>Số 39/74 Nguyễn Thị Định, Nhân Chính, Thanh Xuân, Hà Nội</p>
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/31e52723-6768-4928-9f26-3331975b5bf9.png"
            alt="Rings"
            className="max-w-32 h-32 left-[46%] mt-4 absolute"
         />
         <div className="flex justify-around text-sm mt-12">
            <div>
               <p>NHÀ TRAI</p>
               <p>ÔNG LƯU THẾ TÂN</p>
               <p>BÀ CAO THỊ HỒNG</p>
            </div>
            <div>
               <p>NHÀ GÁI</p>
               <p>ÔNG PHẠM ĐÌNH TRUNG</p>
               <p>BÀ BÙI HỒNG YẾN</p>
            </div>
         </div>
         <div className="flex justify-center items-center mt-12">
            <p>DRESSCODE</p>
            <div className="flex ml-2">
               <div className="w-8 h-8 bg-black rounded-full mx-1"></div>
               <div className="w-8 h-8 bg-red-500 rounded-full mx-1"></div>
               <div className="w-8 h-8 bg-gray-300 rounded-full mx-1"></div>
            </div>
         </div>
      </div>
   </Card>
);

export default Invitation;