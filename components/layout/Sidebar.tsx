import { BsBell, BsHouseFill, BsMessenger } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SlidebarLogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from 'react-icons/bi';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
    const item = [
        {
            label: 'Home',
            icon: BsHouseFill,
            href: '/home'
        },
        {
            label: 'Notifications',
            icon: BsBell,
            href: '/notifications'
        },
        {
            label: 'Messages',
            icon: BsMessenger,
            href: '/messages'
        },
        {
            label: 'User',
            icon: FaUser,
            href: '/user'
        }
    ]
    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                    {
                        item.map((item, index) => {
                            return (
                                <SidebarItem
                                    key={index}
                                    label={item.label}
                                    icon={item.icon}
                                    href={item.href}
                                />
                            )
                        })
                    }
                    <SidebarItem onClick={() => { }} label="Logout" icon={BiLogOut} />
                    <SidebarTweetButton />
                </div>
            </div>

        </div>
    );
}

export default Sidebar; 