import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import Image from 'next/image';
import { AudioPlayerContext } from '../../provider/audio-player';
import { AudioCard } from '../audio-card';
import { IAudiobookData } from '../../models/audify';

interface PlayCardProps {
    data: IAudiobookData;
    className?: string;
    onPurchase: (tokenId: number, quantity?: number) => void;
}

const PlayCard: FC<PlayCardProps> = ({ data, className = '', onPurchase }) => {
    const router = useRouter();
    const { setAudiobookData, setIsVisible } = useContext<any>(AudioPlayerContext);

    const handlePlay = () => {
        setAudiobookData(data);
        setIsVisible(true);
    };

    const handleName = (id: string) => {
        router.push('/owned/' + id);
    };

    return (
        <AudioCard
            {...data}
            isShowPriceEnable={false}
            className={className}
            nameHandle={handleName}
            buttonName="Play"
            buttonHandle={handlePlay}
        />
    );
};

export default PlayCard;