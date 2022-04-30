import { useIntl } from 'react-intl';

import { Button } from '@/components/button';
import { ChevronIcon } from '@/components/ChevronIcon';
import { agGridTranslations } from '@/features/leaderboard/lang';
import { useLeaderboardPaginationContext } from '@/features/leaderboard/components/LeaderbordPaginationContext';

interface LeaderboardPaginationProps {
  className?: string;
}

export const LeaderboardPagination = ({ className }: LeaderboardPaginationProps): JSX.Element => {
  const intl = useIntl();

  const { currentPage, gridApi, totalPage } = useLeaderboardPaginationContext();

  return (
    <nav
      className={`flex items-center text-secondary ${className || ''}`}
      role="navigation"
      aria-label="Leaderboard Pagination"
    >
      <div className="text-grey-70 mr-2.5">{intl.formatMessage(agGridTranslations.page)}</div>
      <Button disabled={true} className="mr-2.5">
        {currentPage + 1}
      </Button>
      <div className="text-grey-70 mr-2.5">
        {intl.formatMessage(agGridTranslations.of)} {totalPage}
      </div>
      <Button
        disabled={currentPage === 0}
        onClick={() => gridApi?.paginationGoToPreviousPage()}
        className="mr-1.5"
        aria-label={intl.formatMessage(agGridTranslations.previousPage)}
      >
        <ChevronIcon className="inline !rotate-[90deg]" />
      </Button>
      <Button
        disabled={currentPage + 1 === totalPage}
        onClick={() => gridApi?.paginationGoToNextPage()}
        aria-label={intl.formatMessage(agGridTranslations.nextPage)}
      >
        <ChevronIcon className="inline !rotate-[270deg]" />
      </Button>
    </nav>
  );
};
