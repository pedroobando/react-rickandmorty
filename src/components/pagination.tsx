import { FC } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { SetURLSearchParams } from 'react-router';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationParams: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <>
      {totalPages > 1 ? (
        <Pagination>
          <PaginationContent>
            <PaginationItem onClick={() => onPageChange(currentPage - 1)}>
              <PaginationPrevious />
            </PaginationItem>

            {}

            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem onClick={() => onPageChange(currentPage + 1)}>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : (
        <span></span>
      )}
    </>
  );
};

interface PaginationParamHookProps {
  totalPages: number;
  setSearchParams: SetURLSearchParams;
}

export const usePaginationParam = ({ totalPages, setSearchParams }: PaginationParamHookProps) => {
  // const [activePage, setActivePage] = useState<number>(1);
  // const [arrayPage, setArrayPage] = useState<{ context: string; active: boolean }[]>([]);

  // [true,true,true,true,true,true,true]

  // TODO: Esto pensarlo mejor manana
  // useEffect(() => {
  //   if (totalPages < 3) {
  //     setArrayPage([{ context: 'previous' }, '1', '2', 'next']);
  //     return;
  //   }
  //   if (activePage === 1) {
  //     setArrayPage([true, '1', '2', '3', 'next']);
  //   } else if (activePage === totalPages) {
  //     setArrayPage(['previous', '...', `${totalPages - 2}`, `${totalPages - 1}`, `${totalPages}`]);
  //   } else if (activePage > 1 && activePage < totalPages) {
  //     setArrayPage(['previous', `${activePage - 1}`, `${activePage}`, `${activePage + 1}`, 'next']);
  //   } else {
  //     setArrayPage(['previous-', '1', '2', '-next']);
  //   }
  // }, [activePage]);

  const onPageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('page', `${!page ? 1 : page}`);
      // setActivePage(Number(newParams.get('page')) || 1);
      return newParams;
    });
  };

  return { onPageChange };
};
