import React from 'react';

import * as  icons from 'react-icons/ai';


export const ReciSideBarData = [
    {
        tab_name:'All Appointment',
        redirect_path:'/all_Appointment',
        icon:<icons.AiOutlineSolution/>,
        cName:'nav-text'
    },
    {
        tab_name:'Online Booking',
        redirect_path:'/online_Booking',
        icon:<icons.AiOutlineAliwangwang/>,
        cName:'nav-text'
    },

    {
        tab_name:'Physical Booking',
        redirect_path:'/physical_Booking',
        icon:<icons.AiOutlineUpload/>,
        cName:'nav-text'
    },

    {
        tab_name:'Refund Request',
        redirect_path:'/refund_Request',
        icon:<icons.AiOutlineReconciliation/>,
        cName:'nav-text'
    }
    
]

export default ReciSideBarData;
