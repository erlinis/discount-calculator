import { createBrowserRouter } from "react-router-dom";
import {
  CreateList,
  createAction as createListAction,
} from "./app/create-list";
import {
  ListDetails,
  createItemAction,
  createListDetailLoader,
  createDeleteItemAction,
} from "./app/list-details";
import { Lists, createLoader as createListsViewLoader } from "./app/lists";
import { RootLayout } from "./app/root-layout";
import { StyleGuide } from "./app/style-guide";
import { itemsStore } from "./modules/items/items";
import { listsStore } from "./modules/lists/lists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <Lists />,
        index: true,
        loader: createListsViewLoader({ listStore: listsStore }),
      },
      {
        path: "/lists/new",
        element: <CreateList />,
        action: createListAction(listsStore),
      },
      {
        path: "/lists/:id",
        element: <ListDetails />,
        loader: createListDetailLoader({
          listStore: listsStore,
          itemStore: itemsStore,
        }),
        action: createItemAction({ itemStore: itemsStore }),
      },
      {
        path: "/lists/:id/items/:itemId",
        element: null,
        action: createDeleteItemAction({ itemsStore: itemsStore }),
      },
      {
        path: "/style-guide",
        element: <StyleGuide />,
      },
    ],
  },
]);
