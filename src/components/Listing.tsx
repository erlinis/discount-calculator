import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card/Card";
import { Icon } from "./icon/Icon";
import { ListSchema } from "../modules/lists/lists.schema";
import { Separator } from "./separator/Separator";

export function Listing({ data }: { data: Array<ListSchema> }) {
  return (
    <>
      <div className="flex flex-col content-center max-w-3xl mx-auto w-full mt-2 p-6 text-center">
        <Card shape="brand" className="w-full py-3">
          {data.map((list, index) => (
            <Fragment key={list.id}>
              <Link
                to={`/lists/${list.id}`}
                className="flex justify-between w-full py-1 pl-3 pr-3 gap-2"
              >
                <div className="flex-1 grid grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-1">
                  <div className="flex justify-start items-center text-xs text-primary gap-1">
                    <Icon iconName="store" className="shrink-0" />
                    <span className="overflow-ellipsis text-base text-nowrap overflow-hidden">
                      {list.store}
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <span className="text-secondary-500 text-xs">
                      {new Date(list.createdAt).toLocaleDateString("de-DE")}
                    </span>
                  </div>

                  <div className="flex justify-start">
                    <span className="text-secondary font-semibold overflow-ellipsis text-nowrap overflow-hidden">
                      {list.name}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-primary font-semibold">55 €</span>
                  </div>
                </div>
                <div className="self-center">
                  <Icon
                    iconName="chevron-right"
                    className="text-secondary translate-x-1"
                  />
                </div>
              </Link>
              {index < data.length - 1 ? (
                <Separator className="mx-4 my-2" />
              ) : null}
            </Fragment>
          ))}
        </Card>
      </div>
    </>
  );
}
