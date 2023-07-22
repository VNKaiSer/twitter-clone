import { IconType } from "react-icons";
interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}


const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick }) => {
    return (
        <div className="flex flex-row items-center">
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