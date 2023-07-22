import { IconType } from "react-icons";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useCurrentUser, useLoginModal } from "@/hooks";

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
    auth?: boolean;
}


const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,
    auth
}) => {
    const { data: currentUser } = useCurrentUser();
    const router = useRouter();
    const loginModal = useLoginModal();
    const handleClick = useCallback(() => {
        if (onClick) {
            return onClick();
        }
        if (auth && !currentUser) {
            loginModal.onOpen();
        }
        else if (href)
            router.push(href)
    }, [router, onClick, href, auth, currentUser, loginModal])

    return (
        <div
            onClick={handleClick}
            className="flex flex-row items-center">
            <div className="
                rounded-full
                h-14
                w-14
                p-4
                flex 
                items-center
                justify-center
                hover:bg-slate-300
                cursor-pointer
                transition
                lg:hidden">
                <Icon size={28} color="white" />
            </div>
            <div className="
                relative 
                hidden
                lg:flex
                items-center
                gap-4
                p-4
                rounded-full
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
            ">
                <Icon size={24} color="white" />
                <p className="hiden lg:block text-white text-xl">{label}</p>

            </div>
        </div>
    );
}

export default SidebarItem;