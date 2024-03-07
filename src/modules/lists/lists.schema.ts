import { object, string, union, literal, Output } from 'valibot'

const currencies = union([literal('USD'), literal('EUR'), literal('GBP')])

export const listSchema = object({
  id: string(),
  name: string(),
  store: string(),
  currency: currencies,
})

export type ListSchema = Output<typeof listSchema>
