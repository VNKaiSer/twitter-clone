import { format } from "date-fns";
import { useMemo } from "react";
import { useCurrentUser, useUser } from "@/hooks";

interface UserBioProps {
    userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
    const { data: fetchedUser } = useUser(userId);
    const { data: currentUser } = useCurrentUser();
    const createdAt = useMemo(() => {
        if (!fetchedUser?.createdAt)
            return null;
        return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
    }, [fetchedUser?.createdAt]);
    return (
        <>
        </>
    )
}