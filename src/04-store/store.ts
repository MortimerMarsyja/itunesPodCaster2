//todo: extract this into a small global state signals library

import { Signal, signal } from "@preact/signals";
import { iEntries } from "@definitions/iEntries";

function itemStore<T>(value: T) {
  const itemSignal = signal(value);
  return itemSignal;
}

const globalStore = <T extends Object>(obj: T) => {
  const store: { [K in keyof T]: Signal<T[K]> } = {} as any;
  Object.entries(obj).forEach(([key, value]) => {
    store[key as keyof T] = itemStore(value);
  });

  function findSignal<K extends keyof T>(key: K) {
    return store[key];
  }

  return findSignal;
};

type iStore = {
  entries: iEntries[];
};

const store = globalStore<iStore>({
  entries: [],
});

export default store;
