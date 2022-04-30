import { GridApi } from '@ag-grid-community/core';
import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

export interface Pagination {
  currentPage: number;
  totalPage: number;
}

interface PaginationContextInterface extends Pagination {
  gridApi: GridApi | null;
  setGridApi?: Dispatch<SetStateAction<GridApi | null>>;
  setPagination?: Dispatch<SetStateAction<Pagination>>;
}

export const LeaderboardPaginationContext = createContext<PaginationContextInterface | null>({
  currentPage: 0,
  totalPage: 0,
  gridApi: null,
});

export const LeaderboardPaginationContextProvider: FC = ({ children }) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [currentPagination, setPagination] = useState<Pagination>(() => ({ currentPage: 0, totalPage: 1 }));

  return (
    <LeaderboardPaginationContext.Provider value={{ ...currentPagination, gridApi, setPagination, setGridApi }}>
      {children}
    </LeaderboardPaginationContext.Provider>
  );
};

export const useLeaderboardPaginationContext = (): Required<PaginationContextInterface> => {
  const context = useContext(LeaderboardPaginationContext);

  if (!context || !context.setGridApi || !context.setPagination) {
    throw new Error('useLeaderboardPaginationContext must be used inside LeaderboardPaginationContextProvider');
  }

  return context as Required<PaginationContextInterface>;
};
