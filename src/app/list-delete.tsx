import { LoaderFunctionArgs, redirect } from "react-router";
import { StoreCache } from "../utils/money-clip";

export function createListDeleteAction({
  itemsStore,
  listStore,
}: {
  itemsStore: StoreCache;
  listStore: StoreCache;
}) {
  return async function action({ params }: LoaderFunctionArgs) {
    console.log("delete... ", params);

    try {
      await Promise.all([
        itemsStore.del(params.id ?? ""),
        listStore.del(params.id ?? ""),
      ]);

      return redirect("/");
    } catch (error) {
      throw new Error("Cannot delete list");
    }
  };
}
