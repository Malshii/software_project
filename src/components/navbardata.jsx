import React from 'react';

import * as  icons from 'react-icons/ai';


export const RecisideBarData = [
  
  
   
    {
        tab_name:'All Request',
        redirect_path:'/all_Request',
        icon:<icons.AiOutlineSolution/>,
        cName:'nav-text'
    },
    {
        tab_name:'Inbox',
        redirect_path:'/inbox',
        icon:<icons.AiOutlineAliwangwang/>,
        cName:'nav-text'
    },

    {
        tab_name:'Upload Lab Reports',
        redirect_path:'/uploadlabreport',
        icon:<icons.AiOutlineUpload/>,
        cName:'nav-text'
    },

    {
        tab_name:'Documents',
        redirect_path:'/documents',
        icon:<icons.AiOutlineReconciliation/>,
        cName:'nav-text'
    },

    {
        tab_name:'Recycle Bin',
        redirect_path:'/recycle_bin',
        icon:<icons.AiOutlineRest/>,
        cName:'nav-text'
    },

    {
        tab_name:'Starred',
        redirect_path:'/starred',
        icon:<icons.AiOutlineStar/>,
        cName:'nav-text'
    }
    
]

export default RecisideBarData;
