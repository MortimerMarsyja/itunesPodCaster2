import { FunctionComponent } from "preact";
import store from "@store/store";
const count = store("count");

const TriggerHappy: FunctionComponent = ({ children }) => {
  return (
    <div class="card">
      <button
        onClick={() => {
          count.value += 1;
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default TriggerHappy;
