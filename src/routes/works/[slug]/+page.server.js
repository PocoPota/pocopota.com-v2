import { VITE_CONTENTFUL_ACCESS_TOKEN, VITE_CONTENTFUL_API_URL, VITE_CONTENTFUL_ENV_ID, VITE_CONTENTFUL_SPACE_ID } from "$env/static/private";

export async function load({ fetch, params }) {
  const { slug } = params;

  // システムIDとアイテムIDを紐づけを作成
  let works_data = {};
  const works_request_url = `${VITE_CONTENTFUL_API_URL}/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENV_ID}/entries?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`;
  const works_response = await fetch(works_request_url);
  if (!works_response.ok) {
    throw new Error(`Failed to fetch: ${works_response.status}`);
  }
  works_data = await works_response.json();

  let ids_list = {};
  works_data.items.forEach((item) => {
    ids_list[item.fields.id] = item.sys.id;
  });

  // slugの変換
  const system_id = ids_list[slug];

  // 作品データ取得
  const item_request_url = `${VITE_CONTENTFUL_API_URL}/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENV_ID}/entries/${system_id}?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`;
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

  // コメントの改行処理
  let comments = item_data.fields.comments;
  item_data.fields.comments = comments.split("\n");

  // 日付のフォーマット
  let date = item_data.fields.date;
  date = new Date(date);
  date = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
  item_data.fields.date = date;

  return {item_data};
}