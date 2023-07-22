import { useRouter } from "next/router";

import { Header, UserHero } from "@/components";
import { useUser } from "@/hooks";
import { ClipLoader } from "react-spinners";
const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;
    const { data: fetchedUser, isLoading } = useUser(userId as string);
    if (isLoading || !fetchedUser)
        return (
            <div className="
                flex
                justify-center
                h-full
            ">
                <ClipLoader color="ligtblue" size={80} />
            </div>
        )
    return (
        <>
            <Header showBackArrow label={`${fetchedUser?.name}`} />
            <UserHero userId={userId as string} />
        </>
    );
}

export default UserView;