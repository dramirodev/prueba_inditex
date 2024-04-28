import { PageContainer, Title } from "../../ui";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <PageContainer>
      <header>
        <Title>Podcaster</Title>
      </header>
      <PageContainer>{children}</PageContainer>
    </PageContainer>
  );
}
