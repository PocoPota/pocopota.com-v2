import { UNSPLASH_ACCESS_KEY, UNSPLASH_API_URL } from "$env/static/private";
import fs from 'fs/promises';
import path from "path";

// 背景画像の取得
export async function load({ fetch }) {

  let img_data = {};

  try{
    const img_request_url = `${UNSPLASH_API_URL}/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&orientation=landscape`;
    const img_response = await fetch(img_request_url);
    if (!img_response.ok) {
      throw new Error(`Failed to fetch: ${img_response.status}`);
    }
    img_data = await img_response.json();
  }catch(e){
    try{
      const filePath = path.resolve('static/datas/default-background-image.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      img_data = data;
    }catch(e){
      img_data = {'error': true, 'message': e.message};
    }
  }

  return {
    img_data
  };
}