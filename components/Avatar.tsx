import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";

import { useUser } from "@/hooks";

interface AvarProps {
    userId: string,
    isLarge?: boolean,
    hasBorder?: boolean,
}

const Avatar: React.FC<AvarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const { data: fetchedUser } = useUser(userId);
    const router = useRouter();

    const onClick = useCallback((event: any) => {
        event.stopPropagation();

        const url = `/users/${userId}`
        router.push(url);
    }, [router, userId])
    return (
        <div
            className={
                `
                ${hasBorder ? 'border-4 border-black' : ''}}
                ${isLarge ? 'h-32' : 'h-12'}
                ${isLarge ? 'w-32' : 'w-12'}
                rounded-full
                hover:opacity-90
                transition
                cursor-pointer
                relative
            `}
        >

            <Image
                fill
                style={{
                    borderRadius: '100%',
                    objectFit: 'cover'
                }}
                alt="avatar"
                onClick={onClick}
                src={fetchedUser?.avatar || '/images/default-avatar.png'}
            />

        </div>
    );
}

export default Avatar;