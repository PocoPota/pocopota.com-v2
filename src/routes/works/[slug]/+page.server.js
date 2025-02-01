import { VITE_CONTENTFUL_ACCESS_TOKEN, VITE_CONTENTFUL_API_URL, VITE_CONTENTFUL_ENV_ID, VITE_CONTENTFUL_SPACE_ID } from "$env/static/private";

export async function load({ fetch, params }) {
  const { slug } = params;

  // 作品データ取得
  const item_request_url = `${VITE_CONTENTFUL_API_URL}/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENV_ID}/entries/${slug}?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`;
  const item_response = await fetch(item_request_url);
  if (!item_response.ok) {
    throw new Error(`Failed to fetch: ${item_response.status}`);
  }
  const item_data = await item_response.json();

  // サムネ画像の取得
  const thumbnail_id = item_data.fields.thumbnail.sys.id;
  const thumbnail_request_url = `${VITE_CONTENTFUL_API_URL}/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENV_ID}/assets/${thumbnail_id}?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`;
  const thumbnail_response = await fetch(thumbnail_request_url);
  if (!thumbnail_response.ok) {
    throw new Error(`Failed to fetch: ${thumbnail_response.status}`);
  }
  item_data.fields.thumbnail = await thumbnail_response.json();

  return {item_data};
}