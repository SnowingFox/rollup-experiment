declare type UseFormReturn<T extends Record<any, string>> = {
    register: (name: string, value: keyof T) => any;
};
declare type TFieldsValue = Record<string, any>;

declare function useForm<T extends TFieldsValue>(FieldsValue: T): UseFormReturn<T>;
declare class Foo extends Error {
    constructor(props: any);
}

declare function useWatch<T extends TFieldsValue>(field: T): {
    watch: (name: keyof T) => void;
};

export { Foo, useForm, useWatch };
