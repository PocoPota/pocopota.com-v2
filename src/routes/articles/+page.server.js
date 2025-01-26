import { VITE_BLOG_RSS_URL, VITE_HATENA_RSS_URL, VITE_ZENN_RSS_URL } from "$env/static/private";
import xml2js from 'xml2js';

export async function load({ fetch }) {

  let rss_data = {};

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

    const parser = new xml2js.Parser({ explicitArray: false, trim: true });
    rss_data.zenn = await parser.parseStringPromise(rss_data.zenn);
    rss_data.hatena = await parser.parseStringPromise(rss_data.hatena);
    rss_data.blog = await parser.parseStringPromise(rss_data.blog);

    return {
      rss_data
    };
  }
  catch(e){
    return {'error': true, 'message': e.message};
  }
}