import { BsBell, BsHouseFill, BsMessenger } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SlidebarLogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from 'react-icons/bi';
import SidebarTweetButton from './SidebarTweetButton';
import { useCurrentUser } from '@/hooks';
import { signOut } from 'next-auth/react'

const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    const item = [
        {
            label: 'Home',
            icon: BsHouseFill,
            href: '/'
        },
        {
            label: 'Notifications',
            icon: BsBell,
            href: '/notifications',
            auth: true
        },
        {
            label: 'Messages',
            icon: BsMessenger,
            href: '/messages',
            auth: true
        },
        {
            label: 'User',
            icon: FaUser,
            href: `/users/${currentUser?.id}`,
            auth: true
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
                                    auth={item.auth}
                                />
                            )
                        })
                    }
                    {
                        currentUser &&
                        <SidebarItem onClick={() => signOut()} label="Logout" icon={BiLogOut} />
                    }
                    <SidebarTweetButton />
                </div>
            </div>

        </div>
    );
}

export default Sidebar; 