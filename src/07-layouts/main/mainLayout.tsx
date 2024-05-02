import { FunctionComponent } from "preact";

const MainLayout: FunctionComponent = ({ children }) => {
  //todo: define styles after choosing library
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
