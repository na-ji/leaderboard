import styled from 'styled-components';
import Image from 'next/image';

import BadgeFrame from '@/../public/badges/frames/badge_ring_3.png';
import { Badge } from '@/types';
import { badgeToAssetId } from '@/features/profile/utils/badgeToAssetId';

interface BadgeProps {
  badge: Badge;
  value: number;
}

export const BadgeIcon = ({ badge }: BadgeProps): JSX.Element => (
  <S.BadgeContainer>
    <Image src={BadgeFrame} alt="frame" layout="fill" />
    {badge in badgeToAssetId && (
      <S.BadgeIconContainer>
        <S.BadgeIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/badges/achievements/Badge_${badgeToAssetId[badge]}${
              typeof badgeToAssetId[badge] === 'number' ? '_3_01' : ''
            }.png`}
            alt={badge}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              if (target.src.endsWith('_3_01.png')) {
                target.src = `/badges/achievements/Badge_${badgeToAssetId[badge]}.png`;
              }
            }}
          />
        </S.BadgeIcon>
      </S.BadgeIconContainer>
    )}
  </S.BadgeContainer>
);

const S = {
  BadgeContainer: styled.div`
    height: 40px;
    position: relative;
    width: 40px;
  `,
  BadgeIconContainer: styled.div`
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    position: absolute;
    width: 40px;
  `,
  BadgeIcon: styled.div`
    height: 20px;
    position: relative;
    width: 20px;

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  `,
};
