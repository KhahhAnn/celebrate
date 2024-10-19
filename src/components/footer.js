import React from 'react';
import { Layout } from 'antd';
import {INVITATION_TEXT} from "../utils/stringUtils"

const { Footer } = Layout;

const FooterComponent = () => (
   <Footer className="text-center bg-gray-100 py-4">
      © 2024 {INVITATION_TEXT.groomName} & {INVITATION_TEXT.brideName}
   </Footer>
);

export default FooterComponent;
