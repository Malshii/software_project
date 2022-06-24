import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HelpIcon from '@mui/icons-material/Help';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

export const menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];

export const patient_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,        
    },
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },
    { name: 'History', to: '/rating', icon: <WorkHistoryIcon /> },
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];

export const doctor_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];
export const administrator_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];

export const labAssistant_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];

export const receptionist_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '/rating', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '/rating', icon: <StarIcon /> },
];


export default menu_config;
