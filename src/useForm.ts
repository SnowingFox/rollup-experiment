import {TFieldsValue, UseFormReturn} from "./types";

export function useForm<T extends TFieldsValue>(FieldsValue: T): UseFormReturn<T> {
  const register = (name: string, value: keyof T) => {}

  return {
    register
  }
}

export class Foo extends Error{
  constructor(props: any) {
    super(props);
  }
}
