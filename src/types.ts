export type UseFormReturn<T extends Record<any, string>> = {
  register: (name: string, value: keyof T) => any
}

export type TFieldsValue = Record<string, any>
