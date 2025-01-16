import { VITE_UNSPLASH_ACCESS_KEY, VITE_UNSPLASH_API_URL, VITE_CONTENTFUL_ACCESS_TOKEN, VITE_CONTENTFUL_API_URL, VITE_CONTENTFUL_ENV_ID, VITE_CONTENTFUL_SPACE_ID } from "$env/static/private";

export async function load({ fetch }) {

  let img_data = {};
  let works_data = {};

  // UNSPLASH
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

  // contentful
  try{
    const works_request_url = `${VITE_CONTENTFUL_API_URL}/spaces/${VITE_CONTENTFUL_SPACE_ID}/environments/${VITE_CONTENTFUL_ENV_ID}/entries?access_token=${VITE_CONTENTFUL_ACCESS_TOKEN}`;
    const works_response = await fetch(works_request_url);
    if (!works_response.ok) {
      throw new Error(`Failed to fetch: ${works_response.status}`);
    }
    works_data = await works_response.json();
  }catch(e){
    works_data = {'error': true, 'message': e.message};
  }

  return {
    img_data, works_data
  };
}