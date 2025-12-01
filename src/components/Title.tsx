const Title: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <title>{`Alex Sarson | ${pageTitle}`}</title>
  );
};

export default Title;