import { FunctionComponent } from "preact";
import Header from "@components/header";

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
      }}
      class="flex flex-wrap w-full h-full bg-slate-400"
    >
      <Header title="Podcast List"></Header>
      {children}
    </div>
  );
};

export default MainLayout;
