import { effect, signal } from "@preact/signals";
import { signalsGlobalDict } from "@store/store";

function initSignal(
  inputSignalType: typeof signalsGlobalDict,
  name: keyof typeof signalsGlobalDict
) {
  if (!inputSignalType[name]) {
    throw new Error(`Signal ${name} not found`);
  }
  if (inputSignalType[name].value) {
    return signal(inputSignalType[name].value);
  }
}

function updateSignal<T extends keyof typeof signalsGlobalDict>(
  signalName: T,
  value: (typeof signalsGlobalDict)[T]["value"]
) {
  if (!signalsGlobalDict[signalName]) {
    throw new Error(`Signal ${signalName} not found`);
  }
  signalsGlobalDict[signalName].value = value;
}

const signalValue = (key: keyof typeof signalsGlobalDict) => {
  return signalsGlobalDict[key].value;
};

const globalStore = () => {
  const globalState = signalsGlobalDict;

  return {
    globalState,
    updateSignal,
    signalValue,
  };
};

export default globalStore;
