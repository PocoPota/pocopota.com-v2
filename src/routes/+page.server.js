import { VITE_ANSPLASH_ACCESS_KEY, VITE_ANSPLASH_API_URL } from "$env/static/private";

export async function load({ fetch }) {
  const request_url = `${VITE_ANSPLASH_API_URL}/photos/random?client_id=${VITE_ANSPLASH_ACCESS_KEY}&orientation=landscape`;
  const response = await fetch(request_url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  const data = await response.json();
  return {
    data
  };
}