export async function load({ fetch, params }) {
  const { slug } = params;
  return {slug};
}