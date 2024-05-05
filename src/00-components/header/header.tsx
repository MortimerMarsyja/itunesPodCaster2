import { FunctionComponent } from "preact";

const Header: FunctionComponent<{ title: string }> = ({ title, children }) => {
  return (
    <div class="flex justify-start p-2 shadow-md w-full">
      <h3 class="ml-3 text-blue-400">{title}</h3>
      {children}
    </div>
  );
};

export default Header;
