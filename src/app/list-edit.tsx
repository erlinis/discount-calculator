import {
  ActionFunctionArgs,
  Form,
  Link,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { ListForm } from "../components/ListForm";
import { Header, HeaderItem } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import { parseList } from "../modules/lists/lists";
import { StoreCache } from "../utils/money-clip";
import { Button } from "../components/button/Button";

export function ListEdit() {
  const { list } = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof createListEditLoader>>
  >;
  return (
    <>
      <Header>
        <HeaderItem position="start">
          <Button variant="link" asChild>
            <Link to="/" unstable_viewTransition>
              <Icon iconName="chevron-left" />
            </Link>
          </Button>
        </HeaderItem>
        <HeaderItem position="center">
          <h1 className="text-secondary text-xl font-semibold">Edit list</h1>
        </HeaderItem>
        {list ? (
          <>
            <HeaderItem position="end">
              <Form
                id="formDeleteList"
                method="post"
                action={`/lists/${list.id}/delete`}
              >
                <input type="hidden" name="id" value={list.id} />
                <Button
                  key="delete"
                  type="submit"
                  variant="none"
                  value="delete"
                  form="formDeleteList"
                >
                  <Icon iconName="bin" />
                </Button>
              </Form>
            </HeaderItem>
          </>
        ) : null}
      </Header>

      <div className="max-w-3xl mx-auto w-full px-8">
        <ListForm list={list} />
      </div>
    </>
  );
}

export function createListEditLoader(listsStore: StoreCache) {
  return async ({ params }: ActionFunctionArgs) => {
    const list = await loadList(params.id, listsStore);
    return { list };
  };
}

async function loadList(listId: string | undefined, listStore: StoreCache) {
  try {
    return parseList(await listStore.get(listId ?? ""));
  } catch (error) {
    throw new Error("Cannot get list");
  }
}

export function createListEditAction(listsStore: StoreCache) {
  return async ({ request, params }: ActionFunctionArgs) => {
    try {
      const formData = await request.formData();
      const fieldsValue = Object.fromEntries(formData);
      console.log(fieldsValue);

      const editedList = parseList(fieldsValue);

      listsStore.set(params.id ?? "", editedList);
      return redirect(`/lists/${params.id}`);
    } catch (error) {
      throw new Error("Cannot edit list");
    }
  };
}
