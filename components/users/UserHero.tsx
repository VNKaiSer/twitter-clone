import Image from "next/image";
import { useUser } from "@/hooks";
import { Avatar } from "@/components";
interface UserHeroProps {
    userId: string;
}
const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
    const { data: fetchedUser } = useUser(userId);

    return (
        <>
            <div className="bg-neutral-700 h-44 relative">
                {fetchedUser?.coverImage && (
                    <Image
                        fill
                        style={{
                            // borderRadius: '100%',
                            objectFit: 'cover'
                        }}
                        alt="Cover image"
                        src={fetchedUser.coverImage}
                    />
                )}
                <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>


            </div>
        </>
    );
}

export default UserHero;