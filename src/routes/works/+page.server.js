import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_API_URL, CONTENTFUL_ENV_ID, CONTENTFUL_SPACE_ID } from "$env/static/private";


export async function load({ fetch }) {

  let works_data = {};

  // contentful
  try{
    const works_request_url = `${CONTENTFUL_API_URL}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`;
    const works_response = await fetch(works_request_url);
    if (!works_response.ok) {
      throw new Error(`Failed to fetch: ${works_response.status}`);
    }
    works_data = await works_response.json();

    // サムネ画像の取得
    const works_num = works_data.items.length;
    for (let i = 0; i < works_num; i++) {
      const thumbnail_id = works_data.items[i].fields.thumbnail.sys.id;
      const thumbnail_request_url = `${CONTENTFUL_API_URL}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV_ID}/assets/${thumbnail_id}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;
      const thumbnail_response = await fetch(thumbnail_request_url);
      if (!thumbnail_response.ok) {
        throw new Error(`Failed to fetch: ${thumbnail_response.status}`);
      }
      works_data.items[i].fields.thumbnail = await thumbnail_response.json();
    }

    return{
      works_data
    }
  }
  catch(e){
    return {'error': true, 'message': e.message};
  }
}