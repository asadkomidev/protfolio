import Container from "./container";

export function PageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="py-12 sm:py-48">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-5xl ">
          {title}
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}
