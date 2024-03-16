import { ComponentPropsWithoutRef } from "react";
import { Button } from "./button/Button";
import { Card, CardBody } from "./card/Card";
import { Label, TextInput } from "./forms/Forms";
import { Form } from "react-router-dom";
import { ListSchema } from "../modules/lists/lists.schema";

export function ListForm({
  list,
  ...props
}: { list?: ListSchema } & Omit<ComponentPropsWithoutRef<"form">, "encType">) {
  return (
    <>
      <Card shape="brand" className="max-w-3xl mx-auto w-full mb-8">
        <Form {...props} method="post" id="formList">
          <input type="hidden" name="id" value={list?.id} />
          <input type="hidden" name="total" value={list?.total} />
          <input type="hidden" name="createdAt" value={list?.createdAt} />

          <CardBody className="pb-5">
            <div className="pb-3">
              <Label htmlFor="name" className="">
                Name
              </Label>
              <TextInput
                id="name"
                name="name"
                type="text"
                placeholder=""
                defaultValue={list?.name}
              />
            </div>
            <div className="pb-3">
              <Label htmlFor="store" className="">
                Store
              </Label>
              <TextInput
                id="store"
                name="store"
                type="text"
                placeholder=""
                defaultValue={list?.store}
              />
            </div>
            <div className="pb-3">
              <Label htmlFor="currency" className="">
                Currency
              </Label>
              <TextInput
                id="currency"
                name="currency"
                type="text"
                placeholder=""
                defaultValue={list?.currency || "EUR"}
              />
            </div>
          </CardBody>
        </Form>
      </Card>

      <Button
        block={true}
        variant="primary"
        shape="rounded"
        type="submit"
        form="formList"
      >
        Save
      </Button>
    </>
  );
}
