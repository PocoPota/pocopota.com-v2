import { VITE_UNSPLASH_ACCESS_KEY, VITE_UNSPLASH_API_URL } from "$env/static/private";

// 背景画像の取得
export async function load({ fetch }) {

  let img_data = {};

  try{
    const img_request_url = `${VITE_UNSPLASH_API_URL}/photos/random?client_id=${VITE_UNSPLASH_ACCESS_KEY}&orientation=landscape`;
    const img_response = await fetch(img_request_url);
    if (!img_response.ok) {
      throw new Error(`Failed to fetch: ${img_response.status}`);
    }
    img_data = await img_response.json();
  }catch(e){
    img_data = {'error': true, 'message': e.message};
  }

  return {
    img_data
  };
}