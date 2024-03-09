import { Link } from "react-router-dom";
import { Button } from "./button/Button";
import { Card, CardBody } from "./card/Card";
import { Icon } from "./icon/Icon";

export function ListEmptyState() {
  return (
    <>
      <div className="flex flex-col px-8 justify-center items-center text-center">
        <div className="mt-20">
          <Icon iconName="store" className="text-secondary text-[90px] mb-5" />

          <Card shape="brand" className="max-w-3xl mx-auto w-full">
            <CardBody className="pb-5">
              <h2 className="pb-3 text-secondary text-lg font-semibold">
                You do not have any discount lists
              </h2>
              <p className="text-third font-medium">
                Go hunt for discounts and create your first listing right away.
              </p>
            </CardBody>

            <CardBody className="pt-0">
              <Button asChild block={true}>
                <Link className="btn btn-primary" to="lists/new">
                  Create new list
                </Link>
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
