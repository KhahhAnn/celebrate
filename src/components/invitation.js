import React from 'react';
import { Card } from 'antd';
import { INVITATION_TEXT } from '../utils/stringUtils';

const Invitation = () => (
   <Card bordered={false} className="relative bg-white shadow-lg p-6 mx-auto font-playfair max-w-3xl invitation-container-mb">
      <img
         src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/074b139e-022a-4675-9448-05e3ab3cacfe.png"
         alt="Flower Decoration"
         className="absolute top-0 right-0 w-24 h-auto sm:w-32 flower"
         style={{ opacity: 0.7 }}
      />
      <div className="text-center">
         <h1 className="text-3xl md:text-4xl font-bold mt-4 text-[#4b4949] invitation-text-h1">
            {INVITATION_TEXT.groomName} <span className='font-qwitcher italic mr-2'>and</span> {INVITATION_TEXT.brideName}
         </h1>
         <p className="text-lg text-lg-mobile md:text-xl mt-2">{INVITATION_TEXT.ceremonyText}</p>
         <div className="flex justify-center items-center mt-4 flex-wrap">
            <div className="text-right pr-4 border-r border-black mr-4">
               <p className="text-sm">{INVITATION_TEXT.timeHour}</p>
               <p className="text-lg text-lg-mobile font-bold">{INVITATION_TEXT.dayOfWeek}</p>
            </div>
            <div className="text-center mx-4">
               <p className="text-4xl font-bold">{INVITATION_TEXT.day}</p>
            </div>
            <div className="text-left pl-4 border-l border-black ml-4">
               <p className="text-sm">{INVITATION_TEXT.month}</p>
               <p className="text-lg text-lg-mobile font-bold">{INVITATION_TEXT.year}</p>
            </div>
         </div>
         <p className="mt-4">{INVITATION_TEXT.venueFloor}</p>
         <p>{INVITATION_TEXT.venueName}</p>
         <p>{INVITATION_TEXT.venueAddress}</p>
         <img
            src="https://khan-web-dev.s3.ap-southeast-1.amazonaws.com/uploads/31e52723-6768-4928-9f26-3331975b5bf9.png"
            alt="Rings"
            className="max-w-[120px] h-auto left-[46%] mt-4 absolute ring-mb"
         />
         <div className="flex justify-around text-sm mt-12 parents-container-mb">
            <div>
               <p>NHÀ TRAI</p>
               <p>{INVITATION_TEXT.groomParents.father}</p>
               <p>{INVITATION_TEXT.groomParents.mother}</p>
            </div>
            <div>
               <p>NHÀ GÁI</p>
               <p>{INVITATION_TEXT.brideParents.father}</p>
               <p>{INVITATION_TEXT.brideParents.mother}</p>
            </div>
         </div>
         <div className="flex justify-center items-center mt-12">
            <p>{INVITATION_TEXT.dressCode}</p>
            <div className="flex ml-2">
               <div className="w-6 h-6 bg-[#909090] rounded-full mx-1"></div>
               <div className="w-6 h-6 bg-[#B1CAE9] rounded-full mx-1"></div>
               <div className="w-6 h-6 bg-[#F2ABB3] rounded-full mx-1"></div>
            </div>
         </div>
      </div>
   </Card>
);

export default Invitation;
