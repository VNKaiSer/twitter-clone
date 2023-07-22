import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useUsers = (userdId: string) => {
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR(userdId ? `/api/users/${userdId}` : null, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    };
}

export default useUsers;