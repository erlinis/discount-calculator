import { createBrowserRouter } from 'react-router-dom'
import { CreateList, createAction as createListAction } from './app/createList'
import { Lists } from './app/lists'
import { RootLayout } from './app/rootLayout'
import { listsStore } from './modules/lists/lists'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Lists />,
        index: true,
      },
      {
        path: '/lists/new',
        element: <CreateList />,
        action: createListAction(listsStore),
      },
    ],
  },
])
