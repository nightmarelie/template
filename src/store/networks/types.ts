import { Network } from 'services/networks';
import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';

// actions
const ROOT = 'networks';
const LIST_ACTION = `${ROOT}/list`;
const ONE_ACTION = `${ROOT}/one`;

// adapter
const EntityAdapter = createEntityAdapter<Network>();

// state
export type State = {
  isLoading: boolean;
  error: null | string;
  meta: Meta;
} & EntityState<Network>;

// types
type Meta = {
  count: number;
  total: number;
  page: number;
  pageCount: number;
};

export type ListResponse = {
  data: Array<Network>;
  count: number;
  total: number;
  page: number;
  pageCount: number;
};

export type OneResponse = Network;

export type OnePayload = {
  id: number;
};

export {
  EntityAdapter,
  // actions
  ROOT,
  LIST_ACTION,
  ONE_ACTION,
};
