import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useParams,
} from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../components/button/Button";
import { Card, CardBody } from "../components/card/Card";
import { DiscountUnitItem } from "../components/discount-items/DiscountUnitItem";
import { DiscountWeightItem } from "../components/discount-items/DiscountWeightItem";
import { UnitItemForm } from "../components/discount-items/UnitItemForm";
import { WeightItemForm } from "../components/discount-items/WeightItemForm";
import { Header, HeaderItem } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/tabs/tabs";
import {
  calculateSaved,
  calculateTotal,
  itemFactory,
  parseItemParamSchema,
  parseItemsSchema,
} from "../modules/items/items";
import { ItemsSchema } from "../modules/items/items.schema";
import { parseList } from "../modules/lists/lists";
import { formatPrice } from "../utils/format";
import { StoreCache } from "../utils/money-clip";
import { Wrapper } from "../components/wrapper/wrapper";

export function ListDetails() {
  const { id = "" } = useParams();
  const { list, items } = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof createListDetailLoader>>
  >;

  return (
    <>
      <Header>
        <HeaderItem position="start" className="w-1/4">
          <Link className="btn" to="/">
            <Icon iconName="chevron-left" className="text-secondary" />
          </Link>
        </HeaderItem>
        <HeaderItem position="center" className="justify-center">
          <h1 className="text-secondary text-lg font-semibold overflow-ellipsis text-nowrap overflow-hidden">
            {list.name}
          </h1>
        </HeaderItem>
        <HeaderItem position="end" className="justify-end">
          <Button asChild block={false} shape="brand">
            <Link to={`/lists/${list.id}/edit`}>
              <Icon iconName="edit" />
            </Link>
          </Button>
        </HeaderItem>
      </Header>

      <Wrapper className="pb-24">
        <Card className="max-w-3xl mx-auto w-full mb-8">
          <Tabs defaultValue="unit">
            <TabsList>
              <TabsTrigger value="unit">
                <Icon iconName="units" /> Unit
              </TabsTrigger>
              <TabsTrigger value="weight">
                <Icon iconName="weigth" /> Weight
              </TabsTrigger>
            </TabsList>
            <TabsContent value="unit">
              <CardBody className="pb-5">
                <UnitItemForm />
              </CardBody>
            </TabsContent>
            <TabsContent value="weight">
              <CardBody className="pb-5">
                <WeightItemForm />
              </CardBody>
            </TabsContent>
          </Tabs>
        </Card>
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            return item.type === "unit" ? (
              <DiscountUnitItem key={item.id} discountItem={item} id={id} />
            ) : (
              <DiscountWeightItem key={item.id} discountItem={item} id={id} />
            );
          })}
        </div>
      </Wrapper>
      <article className="px-8 py-2 fixed w-full bottom-0 bg-white shadow-2xl shadow-gray-darker">
        <Wrapper className="grid grid-cols-2 auto-rows-auto">
          <span className="text-2xl font-semibold">Total:</span>
          <span className="text-end text-2xl font-semibold text-primary-600">
            {formatPrice(calculateTotal(items))}
          </span>
          <span className="text-gray-light">Total saved:</span>
          <span className="text-end text-gray-light">
            {formatPrice(calculateSaved(items))}
          </span>
        </Wrapper>
      </article>
    </>
  );
}

export function createListDetailLoader({
  listStore,
  itemStore,
}: { listStore: StoreCache; itemStore: StoreCache }) {
  return async function loader({ params }: LoaderFunctionArgs) {
    const list = await loadList(params.id, listStore);
    const items = await loadItems(params.id, itemStore);
    return { list, items };
  };
}

export function createItemAction({
  itemStore,
}: {
  itemStore: StoreCache;
}) {
  return async function action({ params, request }: LoaderFunctionArgs) {
    try {
      const itemData = Object.fromEntries(await request.formData());
      const itemParamSchema = parseItemParamSchema(itemData);
      const item = itemFactory(itemParamSchema);

      const items = await loadItems(params.id, itemStore);
      items.unshift(item);

      await itemStore.set(params.id ?? "", items);
      return { ok: true };
    } catch (error) {
      return {};
    }
  };
}

export function createDeleteItemAction({
  itemsStore,
}: { itemsStore: StoreCache }) {
  return async function action({ params }: LoaderFunctionArgs) {
    const items = await loadItems(params.id, itemsStore);
    const newItems = items.filter((item) => item.id !== params.itemId);

    itemsStore.set(params.id ?? "", newItems);

    return redirect(`/lists/${params.id}`, {});
  };
}

async function loadList(listId: string | undefined, listStore: StoreCache) {
  try {
    return parseList(await listStore.get(listId ?? ""));
  } catch (error) {
    throw new Error("Cannot get list");
  }
}

async function loadItems(
  listId: string | undefined,
  itemsStore: StoreCache
): Promise<ItemsSchema> {
  return parseItemsSchema(await itemsStore.get(listId ?? ""));
}
