import { Link } from 'react-router-dom';
import { Card, CardBody } from '../components/card/Card';
import { Button } from '../components/button/Button';
import { TextInput } from '../components/forms/Forms';
import { Header, HeaderItem } from '../components/header/Header';

export function Lists() {
  return (
    <>
      <Header>
        <HeaderItem position="center" className="justify-center">
          <h1 className="text-xl font-semibold">My list</h1>
        </HeaderItem>
      </Header>
      <Card>
        <CardBody className="card-body">
          <h2 className="font-semibold">You do not have any discount lists</h2>
          <p>Go hunt for discounts and create your first listing right away.</p>
          <TextInput type="text" placeholder="Search for discounts" />
          <Button asChild>
            <Link className="btn btn-primary" to="lists/new">
              Create new list
            </Link>
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
