import { parse } from 'valibot'
import { ListSchema, listSchema } from './lists.schema'
import { getConfiguredCache } from '../../utils/money-clip'

export const parseList = (data: unknown): ListSchema => {
  return parse(listSchema, data)
}

export const listsStore = getConfiguredCache({
  version: 1,
  maxAge: Infinity,
  dbName: 'discount-calculator',
  storeName: 'lists',
})
