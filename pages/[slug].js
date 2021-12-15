
export const getStaticPaths = async () => ({
  paths: ['/page1', '/page2'],
  fallback: 'blocking',
});
  
export async function getStaticProps({ params }) {
  const { slug } = params;
  const date = new Date().toISOString().split('T')[1];
  return {
    props: { slug, date },
    revalidate: 2,
  };
}

export default function Page({ slug, date }) {
  return (
    <div>
      <h1>{slug}</h1>
      <p>Generated at <em>{date}</em></p>
    </div>
  );
}
