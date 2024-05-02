import { Signal, signal } from "@preact/signals";

type iOption = {
  name: string;
  value: string;
};

function itemStore<T>(value: T) {
  const itemSignal = signal(value);
  const extractSignal = () => itemSignal;
  return {
    extractSignal,
  };
}

const globalStore = <T extends Object>(obj: T) => {
  const store: { [K in keyof T]: Signal<T[K]> } = {} as any;
  Object.entries(obj).forEach(([key, value]) => {
    store[key as keyof T] = itemStore(value).extractSignal();
  });

  const findSignal = <K extends keyof T>(key: K): Signal<T[K]> => {
    const keyAsString = String(key);
    const signal = store[key];
    if (!signal) throw new Error(`Signal not found for key: ${keyAsString}`);
    return signal;
  };

  return { findSignal };
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
