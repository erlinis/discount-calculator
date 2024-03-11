import { createBrowserRouter } from "react-router-dom";
import {
  ListCreate,
  createAction as createListAction,
} from "./app/list-create";
import {
  ListDetails,
  createDeleteItemAction,
  createItemAction,
  createListDetailLoader,
} from "./app/list-details";
import {
  ListEdit,
  // createListDeletetAction,
  createListEditAction,
  createListEditLoader,
} from "./app/list-edit";
import { Lists, createLoader as createListsViewLoader } from "./app/lists";
import { RootLayout } from "./app/root-layout";
import { StyleGuide } from "./app/style-guide";
import { itemsStore } from "./modules/items/items";
import { listsStore } from "./modules/lists/lists";
import { createListDeleteAction } from "./app/list-delete";

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
        path: "/lists/:id/delete",
        element: null,
        action: createListDeleteAction({
          listStore: listsStore,
          itemsStore: itemsStore,
        }),
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
