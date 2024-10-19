import React from 'react';
import { Card } from 'antd';
import { INVITATION_TEXT } from '../utils/stringUtils';

const Invitation = () => (
   <Card bordered={false} className="relative bg-white shadow-lg p-6 mx-auto font-playfair max-w-3xl invitation-container-mb" style={{boxShadow: 'none'}}>
      <img
         src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/074b139e-022a-4675-9448-05e3ab3cacfe.png"
         alt="Flower Decoration"
         className="absolute w-72 h-72 flower top-[580px] right-[-55%] invitation--flower-mb"
         style={{ opacity: 0.7, transform: 'rotate(120deg)' }}
         />
      <div className="text-center">
         <h1 className="text-9xl md:text-[70px] font-bold mt-4 text-[#4b4949] invitation-text-h1">
            {INVITATION_TEXT.brideName} <span className='font-leJourScript italic mr-2 text-[50px] and-text-mb' style={{fontWeight: "100", margin: "0 20px"}}>and</span> {INVITATION_TEXT.groomName} 
         </h1>
         <p className="text-lg text-lg-mobile md:text-[30px] font-timeNewRoman mt-8">{INVITATION_TEXT.ceremonyText}</p>
         <div className="flex justify-center items-center mt-4 flex-wrap">
            <div className="text-right pr-4 border-r border-black mr-4">
               <p className="text-sm font-timeNewRoman !text-[30px] mb-5 and-text-mb">{INVITATION_TEXT.timeHour}</p>
               <p className="text-lg text-lg-mobile font-bold font-timeNewRoman !text-[40px] and-text-mb">{INVITATION_TEXT.dayOfWeek}</p>
            </div>
            <div className="text-center mx-4">
               <p className="text-8xl font-bold font-timeNewRoman text-[150px] day-text-mb">{INVITATION_TEXT.day}</p>
            </div>
            <div className="text-left pl-4 border-l border-black ml-4">
               <p className="text-sm font-timeNewRoman !text-[30px] mb-5 and-text-mb">{INVITATION_TEXT.month}</p>
               <p className="text-lg text-lg-mobile font-bold font-timeNewRoman !text-[40px] and-text-mb">{INVITATION_TEXT.year}</p>
            </div>
         </div>
         <p className='font-mb-5 text-[25px] font-timeNewRomanItalic and-text-mb'>{INVITATION_TEXT.text}</p>
         <p className='mt-4 font-timeNewRoman text-[20px]'>{INVITATION_TEXT.venueName}</p>
         <p className="font-timeNewRoman text-[20px]">{INVITATION_TEXT.venueFloor}</p>
         <p className='font-timeNewRoman text-[20px]'>{INVITATION_TEXT.venueAddress}</p>
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/31e52723-6768-4928-9f26-3331975b5bf9.png"
            alt="Rings"
            className="max-w-[120px] h-auto left-[42%] mt-4 absolute ring-mb font-timeNewRoman"
         />
         <div className="flex justify-around text-sm mt-12 parents-container-mb font-timeNewRoman">
            <div className='font-timeNewRoman'>
               <p className='text-[20px]'>NHÀ TRAI</p>
               <p className='font-bold text-[20px]  mt-4'>{INVITATION_TEXT.groomParents.father}</p>
               <p className='font-bold text-[20px]  mt-4'>{INVITATION_TEXT.groomParents.mother}</p>
            </div>
            <div>
               <p className='text-[20px]'>NHÀ GÁI</p>
               <p className='font-bold text-[20px]  mt-4'>{INVITATION_TEXT.brideParents.father}</p>
               <p className='font-bold text-[20px]  mt-4'>{INVITATION_TEXT.brideParents.mother}</p>
            </div>
         </div>
         <div className="flex justify-center items-center mt-12">
            <p className='text-[20px] font-timeNewRoman'>{INVITATION_TEXT.dressCode}</p>
            <div className="flex ml-2">
               <div className="w-10 h-10 bg-[#909090] rounded-full mx-1"></div>
               <div className="w-10 h-10 bg-[#B1CAE9] rounded-full mx-1"></div>
               <div className="w-10 h-10 bg-[#F2ABB3] rounded-full mx-1"></div>
            </div>
         </div>
      </div>
   </Card>
);

export default Invitation;
