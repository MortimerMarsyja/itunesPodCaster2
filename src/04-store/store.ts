import { Signal, signal } from "@preact/signals";

type iOption = {
  name: string;
  value: string;
};

function itemStore<T>(value: T) {
  const itemSignal = signal(value);
  return itemSignal;
}

const globalStore = <T extends Object>(obj: T) => {
  const store: { [K in keyof T]: Signal<T[K]> } = {} as any;
  Object.entries(obj).forEach(([key, value]) => {
    store[key as keyof T] = itemStore(value);
  });

  // store obj {key: signal}
  function findSignal<K extends keyof T>(key: K) {
    return store[key];
  }

  return findSignal;
};

type iStore = {
  count: number;
  options: iOption[];
};

const store = globalStore<iStore>({
  count: 0,
  options: [],
});

export default store;
