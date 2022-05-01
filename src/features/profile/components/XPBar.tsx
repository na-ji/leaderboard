import { FormattedMessage } from 'react-intl';

import { ProgressBar } from '@/features/profile/components/ProgressBar';
import { Trainer } from '@/types';

const XPRequirements: Record<number, { needed: number; total: number }> = {
  1: { needed: 1000, total: 0 },
  2: { needed: 2000, total: 1000 },
  3: { needed: 3000, total: 3000 },
  4: { needed: 4000, total: 6000 },
  5: { needed: 5000, total: 10000 },
  6: { needed: 6000, total: 15000 },
  7: { needed: 7000, total: 21000 },
  8: { needed: 8000, total: 28000 },
  9: { needed: 9000, total: 36000 },
  10: { needed: 10000, total: 45000 },
  11: { needed: 10000, total: 55000 },
  12: { needed: 10000, total: 65000 },
  13: { needed: 10000, total: 75000 },
  14: { needed: 15000, total: 85000 },
  15: { needed: 20000, total: 100000 },
  16: { needed: 20000, total: 120000 },
  17: { needed: 20000, total: 140000 },
  18: { needed: 25000, total: 160000 },
  19: { needed: 25000, total: 185000 },
  20: { needed: 50000, total: 210000 },
  21: { needed: 75000, total: 260000 },
  22: { needed: 100000, total: 335000 },
  23: { needed: 125000, total: 435000 },
  24: { needed: 150000, total: 560000 },
  25: { needed: 190000, total: 710000 },
  26: { needed: 200000, total: 900000 },
  27: { needed: 250000, total: 1100000 },
  28: { needed: 300000, total: 1350000 },
  29: { needed: 350000, total: 1650000 },
  30: { needed: 500000, total: 2000000 },
  31: { needed: 500000, total: 2500000 },
  32: { needed: 750000, total: 3000000 },
  33: { needed: 1000000, total: 3750000 },
  34: { needed: 1250000, total: 4750000 },
  35: { needed: 1500000, total: 6000000 },
  36: { needed: 2000000, total: 7500000 },
  37: { needed: 2500000, total: 9500000 },
  38: { needed: 3000000, total: 12000000 },
  39: { needed: 5000000, total: 15000000 },
  40: { needed: 6000000, total: 20000000 },
  41: { needed: 7500000, total: 26000000 },
  42: { needed: 9000000, total: 33500000 },
  43: { needed: 11000000, total: 42500000 },
  44: { needed: 13000000, total: 53500000 },
  45: { needed: 15500000, total: 66500000 },
  46: { needed: 18000000, total: 82000000 },
  47: { needed: 21000000, total: 100000000 },
  48: { needed: 25000000, total: 121000000 },
  49: { needed: 30000000, total: 146000000 },
  50: { needed: 0, total: 176000000 },
};

export const XPBar = ({ trainer }: { trainer: Trainer }): JSX.Element | null => {
  const requiredXP = XPRequirements[trainer.level].needed;
  const levelProgression = trainer.level === 50 ? 100 : trainer.xp - XPRequirements[trainer.level].total;
  const levelPercent = trainer.level === 50 ? 100 : Math.min(100, (levelProgression / requiredXP) * 100);

  return (
    <>
      <div className="flex justify-between my-2.5 lg:my-4 text-secondary text-grey-70 lg:title-3">
        <div>
          <FormattedMessage
            defaultMessage="Level: {level}"
            id="profile.level"
            description="Level line in the profile page"
            values={{ level: trainer.level }}
          />
        </div>
        {trainer.level !== 50 && (
          <div>
            <FormattedMessage
              defaultMessage="{levelProgression, number} / {requiredXP, number} XP"
              id="profile.level_progression"
              description="Level progression sub line in the profile page"
              values={{ levelProgression, requiredXP }}
            />
          </div>
        )}
      </div>
      <ProgressBar value={levelPercent} />
    </>
  );
};
