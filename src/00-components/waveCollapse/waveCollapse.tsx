import { FunctionComponent } from "preact";
// import useGlobalSignal from "@hooks/use-global-signal";
import store from "@store/store";
const count = store("count");

const WaveCollapse: FunctionComponent = () => {
  return <div class="card">{count.value}</div>;
};

export default WaveCollapse;
