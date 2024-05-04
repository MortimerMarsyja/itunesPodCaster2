import { FunctionComponent } from "preact";

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
      }}
      class="flex flex-wrap w-full h-full bg-slate-400"
    >
      {children}
    </div>
  );
};

export default MainLayout;
