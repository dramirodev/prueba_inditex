import { PageContainer, Title } from "../../ui";
import { Link, useNavigation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: Readonly<LayoutProps>) {
  const navigation = useNavigation();
  return (
    <PageContainer>
      <header>
        <Title>
          <Link to="/">Podcaster</Link>
        </Title>{" "}
        {navigation.state === "loading" && "Loading..."}
      </header>
      <PageContainer>{children}</PageContainer>
    </PageContainer>
  );
}
