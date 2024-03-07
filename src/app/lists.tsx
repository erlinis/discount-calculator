import { Link } from 'react-router-dom'
import { Button } from '../components/button/Button'
import { Card, CardBody } from '../components/card/Card'
import { Header, HeaderItem } from '../components/header/Header'
import { Icon } from '../components/icon/Icon'

export function Lists() {
  return (
    <>
      <Header>
        <HeaderItem position="center" className="justify-center">
          <h1 className="text-xl font-semibold">My list</h1>
        </HeaderItem>
      </Header>

      <div className="flex flex-col justify-center content-center items-center max-w-3xl mx-auto w-full px-8 text-center">
        <div className="-mt-12">
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
  )
}
