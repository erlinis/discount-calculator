export const uniqueId: () => string = () => {
  return globalThis.crypto.randomUUID() as string
}
