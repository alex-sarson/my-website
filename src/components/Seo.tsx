import {Helmet} from 'react-helmet';
import Me from '../images/me.png';

interface SeoProps {
  title: string;
  description: string;
  ogImage?: string;
  slug?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, ogImage = Me, slug}) => {
  const siteUrl = slug ? 'https://alexsarson.dev/' + slug : 'https://alexsarson.dev/';
  return (
    <Helmet>
      <title>{`Alex Sarson | ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`Alex Sarson | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={`Alex Sarson | ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default Seo;