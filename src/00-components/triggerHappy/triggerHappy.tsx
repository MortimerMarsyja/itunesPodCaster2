import { FunctionComponent } from "preact";
import store from "@store/store";
// import globalStore from "@store/globalStore";
const count = store.findSignal("count");

const TriggerHappy: FunctionComponent = ({ children }) => {
  return (
    <div class="card">
      <button
        onClick={() => {
          if (typeof count.value !== "number") return;
          count.value += 1;
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default TriggerHappy;
