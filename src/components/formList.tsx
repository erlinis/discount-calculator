import { ComponentPropsWithoutRef } from 'react'
import { Button } from '../components/button/Button'
import { Card, CardBody } from '../components/card/Card'
import { Label, TextInput } from '../components/forms/Forms'
import { Form } from 'react-router-dom'

export function FormList(props: Omit<ComponentPropsWithoutRef<'form'>, 'encType'>) {
  return (
    <>
      <Card shape="brand" className="max-w-3xl mx-auto w-full mb-8">
        <Form {...props} method="post" id="formList">
          <CardBody className="pb-5">
            <div className="pb-3">
              <Label htmlFor="name" className="">
                Name
              </Label>
              <TextInput id="name" name="name" type="text" placeholder="" />
            </div>
            <div className="pb-3">
              <Label htmlFor="store" className="">
                Store
              </Label>
              <TextInput id="store" name="store" type="text" placeholder="" />
            </div>
            <div className="pb-3">
              <Label htmlFor="currency" className="">
                Currency
              </Label>
              <TextInput id="currency" name="currency" type="text" placeholder="" />
            </div>
          </CardBody>
        </Form>
      </Card>

      <Button block={true} variant="primary" type="submit" form="formList">
        Save
      </Button>
    </>
  )
}
