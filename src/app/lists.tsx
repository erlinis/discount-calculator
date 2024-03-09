import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ListEmptyState } from "../components/ListEmptyState";
import { Listing } from "../components/Listing";
import { Button } from "../components/button/Button";
import { Header, HeaderItem } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import { Wrapper } from "../components/wrapper/wrapper";
import { parseListAll } from "../modules/lists/lists";
import { StoreCache } from "../utils/money-clip";

export function Lists() {
  const data = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof createLoader>>
  >;
  const isEmpty = Array.isArray(data) && data.length === 0;

  return (
    <>
      <Header>
        <HeaderItem position="center" className="justify-center">
          <h1 className="text-xl font-semibold">My list</h1>
        </HeaderItem>

        {!isEmpty ? (
          <>
            <HeaderItem position="end" className="justify-end">
              <Button asChild block={true} shape="brand">
                <Link className="btn btn-primary" to="lists/new">
                  <Icon iconName="plus" />
                </Link>
              </Button>
            </HeaderItem>
          </>
        ) : null}
      </Header>

      <Wrapper>
        {isEmpty ? <ListEmptyState /> : <Listing data={data} />}
      </Wrapper>
    </>
  );
}

export function createLoader({ listStore }: { listStore: StoreCache }) {
  return async function loader(_: LoaderFunctionArgs) {
    try {
      const lists = await listStore.getAll();
      const parsedLists = parseListAll(Object.values(lists));

      return parsedLists;
    } catch (error) {
      throw new Error("Error loading lists");
    }
  };
}
