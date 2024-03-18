import { Link } from "react-router-dom";
import { Button } from "../components/button/Button";
import { Card, CardBody } from "../components/card/Card";
import { Label, TextInput } from "../components/forms/Forms";
import { Header, HeaderItem } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import { SeparatorRound } from "../components/separator/Separator";

export function StyleGuide() {
  return (
    <>
      <Header>
        <HeaderItem position="center">
          <h1 className="text-xl font-semibold">My list</h1>
        </HeaderItem>
        <HeaderItem position="end">
          <Button block={false} shape="brand">
            <Icon iconName="plus" />
          </Button>
        </HeaderItem>
      </Header>
      <Card shape="brand" className="max-w-3xl mx-auto w-full">
        <CardBody className="pb-0">
          <h2 className="font-semibold">You do not have any discount lists</h2>
          <p>Go hunt for discounts and create your first listing right away.</p>
          <Label htmlFor="field" className="">
            Name
          </Label>
          <TextInput
            id="field"
            type="text"
            placeholder="Search for discounts"
          />
        </CardBody>
        <SeparatorRound />
        <CardBody className="pt-0">
          <Button asChild block={false}>
            <Link
              className="btn btn-primary"
              to="lists/new"
              unstable_viewTransition
            >
              Create new list
            </Link>
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
