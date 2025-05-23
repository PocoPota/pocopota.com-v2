import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_API_URL, CONTENTFUL_ENV_ID, CONTENTFUL_SPACE_ID, ZENN_RSS_URL, HATENA_RSS_URL, BLOG_RSS_URL } from "$env/static/private";
import xml2js from 'xml2js';

export async function load({ fetch }) {

  let works_data = {};
  let rss_data = {};

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

  }catch(e){
    works_data = {'error': true, 'message': e.message};
  }

  // RSS
  try{
    // Zenn
    const zenn_request_url = ZENN_RSS_URL;
    const zenn_response = await fetch(zenn_request_url);
    // Hatena
    const hatena_request_url = HATENA_RSS_URL;
    const hatena_response = await fetch(hatena_request_url);
    // Blog
    const blog_request_url = BLOG_RSS_URL;
    const blog_response = await fetch(blog_request_url);
    // Check response
    if(!zenn_response.ok || !hatena_response.ok || !blog_response.ok){
      throw new Error(`Failed to fetch: ${zenn_response.status} ${hatena_response.status} ${blog_response.status}`);
    }
    rss_data = {
      zenn: await zenn_response.text(),
      hatena: await hatena_response.text(),
      blog: await blog_response.text()
    };
  }
  catch(e){
    rss_data = {'error': true, 'message': e.message};
  }

  // RSS xml to json
  try{
    const parser = new xml2js.Parser({ explicitArray: false, trim: true });
    rss_data.zenn = await parser.parseStringPromise(rss_data.zenn);
    rss_data.hatena = await parser.parseStringPromise(rss_data.hatena);
    rss_data.blog = await parser.parseStringPromise(rss_data.blog);
  }
  catch(e){
    rss_data = {'error': true, 'message': e.message};
  }

  return {
    works_data, rss_data
  };
}