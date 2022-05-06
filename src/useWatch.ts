import { TFieldsValue } from "./types";

export function useWatch<T extends TFieldsValue>(field: T) {
  const watch = (name: keyof T) => {

  }

  return {
    watch
  }
}
