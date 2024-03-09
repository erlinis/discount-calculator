import { ActionFunction, Link, redirect } from "react-router-dom";
import { toast } from "sonner";
import { ListForm } from "../components/ListForm";
import { Header, HeaderItem } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import { parseList } from "../modules/lists/lists";
import { StoreCache } from "../utils/money-clip";
import { uniqueId } from "../utils/utils";

export function CreateList() {
  return (
    <>
      <Header>
        <HeaderItem position="start">
          <Link className="btn" to="/">
            <Icon iconName="chevron-left" className="text-secondary" />
          </Link>
        </HeaderItem>
        <HeaderItem position="center" className="justify-center">
          <h1 className="text-secondary text-xl font-semibold">New list</h1>
        </HeaderItem>
      </Header>

      <div className="max-w-3xl mx-auto w-full px-8">
        <ListForm />
      </div>
    </>
  );
}

export function createAction(store: StoreCache): ActionFunction {
  return async ({ request }) => {
    try {
      const formData = await request.formData();
      const fieldsValue = Object.fromEntries(formData);

      const listId = uniqueId();

      const data = parseList({
        ...fieldsValue,
        id: listId,
        createdAt: new Date().toISOString(),
      });
      store.set(listId, data);

      toast.success("List created");

      return redirect("/");
    } catch (error) {
      toast.error("Error saving list");
      return null;
    }
  };
}
