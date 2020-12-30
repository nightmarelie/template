import { FC, HTMLProps } from 'react';

// type for testing purpose
type TestProps = {
  testID?: string;
};

type FormField<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Element: FC<any>;
  name: T;
} & TestProps &
  HTMLProps<HTMLInputElement | HTMLSelectElement>;

interface RowField<T> {
  Element?: undefined;
  data: Array<FormField<T>>;
}

type Elementable = {
  Element?: unknown;
};

function isRowField<T>(obj: Elementable): obj is RowField<T> {
  return obj.Element == undefined;
}

function isFormField<T>(obj: Elementable): obj is FormField<T> {
  return obj.Element !== undefined;
}

export type { FormField, RowField };
export { isRowField, isFormField };
