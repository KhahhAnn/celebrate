import React from 'react';
import { Row, Col, Image } from 'antd';
import { STORY_TEXT } from '../utils/stringUtils';
import cungdi from "../assets/Cungdi.jpg"
import story1 from "../assets/story1.jpg"
import story2 from "../assets/z5947709955912_6330192bc63e0e7ca544b66b494e0a5e.jpg"
import story3 from "../assets/z5947711457462_2f9539e0d817b15b471cdecbc55ea4f5.jpg"


// 
// Dsc00104, DSC00554, DSC00285
// Dsc00021

const Story = () => (
   <div style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px', paddingTop: "20px" }}>
         {STORY_TEXT.title}
      </h2>

      <Row justify="center" align="middle" gutter={[16, 16]}>
         <Col xs={24} md={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '35px' }} className='about-title-mb font-timeNewRoman'>
                  {STORY_TEXT.sectionTitle}!
               </h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  {STORY_TEXT.date}
               </p>
            </div>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               Bắt đầu từ 1 chiếc vẫy tay trước, Kiên và Trinh gặp nhau, để trò chuyện và tìm hiểu nhau.
            </p>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               - "Anh vốn định chào Trinh trước, mà Trinh lại chào anh trước."
            </p><p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               - "Nhưng anh giậm giờ lắm!"
            </p>
         </Col>
         <Col xs={24} md={12} style={{ paddingRight: '20px' }}>
            <Image
               src={story1}
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto', maxHeight: "600px" }}
            />
         </Col>
      </Row>

      {/* Second Row */}
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }}>
         <Col xs={24} md={10}>
            <Image
               src={story2}
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col xs={24} md={12} style={{ paddingLeft: '20px' }}>
            <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '35px' }} className='about-title-mb font-timeNewRoman'>
               {STORY_TEXT.sectionTitle2}
            </h2>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }} >
               {STORY_TEXT.date2}
            </p>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               - Kiên hay trêu Trinh là: "Cái lúc anh đi học Giải tích em vẫn đeo khăn quàng đỏ ý nhở".
            </p>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               - Trinh nói: "Anh hơn em có 4 tuổi thôi đấy, với cả năm sau anh vẫn học lại Giải tích cơ mà!".
            </p>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb' >
               Dù có chút khoảng cách thế hệ, họ vẫn thấy nhiều điểm chung, sau khi Kiên có bằng lái xe thì ngỏ lời yêu, trộm vía lúc ấy vừa hay Trinh cũng bằng lòng.
            </p>
         </Col>
      </Row>

      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }} >
         <Col xs={24} md={10}>
            <div className='text-right'>
               <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '35px' }} className='about-title-mb font-timeNewRoman'>
                  {STORY_TEXT.sectionTitle3}
               </h2>
               <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
                  {STORY_TEXT.date3}
               </p>
            </div>
            <p className='font-timeNewRoman text-xl text-left text-about-desc-mb'>
               {STORY_TEXT.description3}
            </p>
         </Col>
         <Col xs={24} md={12} style={{ paddingRight: '20px' }}>
            <Image
               src={cungdi}
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto', maxWidth: "700px" }}
            />
         </Col>
      </Row>

      <Row justify="center" align="middle" gutter={[16, 16]} style={{ marginTop: '40px' }}>
         <Col xs={24} md={10}>
            <Image
               src={story3}
               alt="About Us"
               style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
         </Col>
         <Col xs={24} md={12} style={{ paddingLeft: '20px' }}>
            <h2 style={{ margin: '0', fontWeight: 'bold', fontSize: '35px' }} className='about-title-mb font-timeNewRoman'>
               {STORY_TEXT.sectionTitle4}!
            </h2>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '14px', marginBottom: '20px' }}>
               {STORY_TEXT.date4}
            </p>
            <p className='text-xl text-about-desc-mb font-timeNewRoman' style={{ lineHeight: '1.5' }}>
               {STORY_TEXT.description4}
            </p>
         </Col>
      </Row>
   </div>
);

export default Story;
