import { FC } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CharacterCardSkeleton: FC = () => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <article key={index} className="relative max-w-sm rounded overflow-hidden">
            <Skeleton className="w-full h-48 rounded" />
            <div className="px-4 py-2">
              <Skeleton className="h-4 w-3/4 mb-2 rounded" />
              <Skeleton className="h-3 w-1/2 mb-1 rounded" />
              <Skeleton className="h-3 w-1/3 rounded" />
            </div>
          </article>
        ))}
      </section>
      <footer className="mt-4">
        <div className="flex justify-center items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
      </footer>
    </>
  );
};

export default CharacterCardSkeleton;
