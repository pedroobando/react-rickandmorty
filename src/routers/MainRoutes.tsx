import { CharactersPage, CharactersSelected } from '@/rickandmorty';

import { lazy, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const AppNTF = lazy(() => import('@/layouts/main/views/MainLayout'));

const MainRoutes = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          Component: AppNTF,
          // errorElement: <ErrorPage />,
          children: [
            {
              path: '/rickandmorty/card',
              Component: () => <CharactersPage />,
            },
            {
              path: '/rickandmorty/list',
              Component: () => <CharactersSelected />,
            },
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
};

export default MainRoutes;
