import { FunctionComponent } from "preact";

export type HeaderProps = {
  title: string;
};

const Header: FunctionComponent<{ title: HeaderProps }> = ({
  title,
  children,
}) => {
  return (
    <div class="flex justify-center">
      <h1 class="m-3">{title}</h1>
      {children}
    </div>
  );
};

export default Header;
