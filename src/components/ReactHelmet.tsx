import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
}

function ReactHelmet({ title }: HelmetProps) {
  return (
    <Helmet>
      <title>{title} | 청춘온</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
      />
      <meta
        name="description"
        content="청춘을 켜다, 청춘이 오다. 치매 예방 글쓰기 앱 플랫폼, 청춘온"
      />
    </Helmet>
  );
}

export default ReactHelmet;
