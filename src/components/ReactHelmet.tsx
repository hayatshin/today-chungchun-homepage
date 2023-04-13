import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
}

function ReactHelmet({ title }: HelmetProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | 오늘도청춘</title>
    </Helmet>
  );
}

export default ReactHelmet;
