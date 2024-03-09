import { createBrowserRouter } from "react-router-dom";
import {
  ListCreate,
  createAction as createListAction,
} from "./app/list-create";
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
import {
  ListEdit,
  createListEditAction,
  createListEditLoader,
} from "./app/list-edit";

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
        element: <ListCreate />,
        action: createListAction(listsStore),
      },
      {
        path: "/lists/:id/edit",
        element: <ListEdit />,
        loader: createListEditLoader(listsStore),
        action: createListEditAction(listsStore),
      },
      {
        path: "/lists/:id",
        element: <ListDetails />,
        loader: createListDetailLoader({
          listStore: listsStore,
          itemsStore: itemsStore,
        }),
        action: createItemAction({
          itemsStore: itemsStore,
          listStore: listsStore,
        }),
      },
      {
        path: "/lists/:id/items/:itemId",
        element: null,
        action: createDeleteItemAction({
          itemsStore: itemsStore,
          listStore: listsStore,
        }),
      },
      {
        path: "/style-guide",
        element: <StyleGuide />,
      },
    ],
  },
]);
