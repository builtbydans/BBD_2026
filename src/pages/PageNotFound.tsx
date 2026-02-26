import Container from "@/components/layout/Container";

const PageNotFound = () => {
  return (
    <section className="py-32">
      <Container>
        <h1 className="text-4xl font-semibold">
          404 — You have ventured too far
        </h1>
        <br />
        <p className="text-muted-foreground">
          There’s a popular myth that “404” came from a room at CERN where the
          web was invented — supposedly room 404 didn’t exist. That’s not true.
          The real reason is simpler: HTTP status codes are grouped by category.
          1xx → informational 2xx → success 3xx → redirects 4xx → client errors
          5xx → server errors 404 just means: 4 = client error 04 = specific
          error type (Not Found) No mystery room. Just clean protocol design.
        </p>
      </Container>
    </section>
  );
};

export default PageNotFound;
