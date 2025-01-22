import { VITE_UNSPLASH_ACCESS_KEY, VITE_UNSPLASH_API_URL, VITE_CONTENTFUL_ACCESS_TOKEN, VITE_CONTENTFUL_API_URL, VITE_CONTENTFUL_ENV_ID, VITE_CONTENTFUL_SPACE_ID, VITE_ZENN_RSS_URL, VITE_HATENA_RSS_URL, VITE_BLOG_RSS_URL } from "$env/static/private";
import xml2js from 'xml2js';

export async function load({ fetch }) {

  let img_data = {};
  let works_data = {};
  let rss_data = {};

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

  // RSS
  try{
    // Zenn
    const zenn_request_url = VITE_ZENN_RSS_URL;
    const zenn_response = await fetch(zenn_request_url);
    // Hatena
    const hatena_request_url = VITE_HATENA_RSS_URL;
    const hatena_response = await fetch(hatena_request_url);
    // Blog
    const blog_request_url = VITE_BLOG_RSS_URL;
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
    img_data, works_data, rss_data
  };
}