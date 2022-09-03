import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
}

function ReactHelmet({ title }: HelmetProps) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | 청춘온</title>
      <meta name="og:title" content={title} />
      <meta name="og:image" content="../assets/ch_icon.jpg" />
      <meta name="description" content="치매 예방 글쓰기 앱 플랫폼, 청춘온" />
    </Helmet>
  );
}

export default ReactHelmet;
