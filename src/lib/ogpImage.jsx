import React from 'react'
import satori from 'satori'
import sharp from 'sharp'
import fs from 'fs'

export const generateOgpImage = async (title) => {
  // フォントデータを読み込む
  const font = fs.readFileSync('./fonts/NotoSansJP-Bold.ttf')
  // JSX から画像を生成する
  const svg = await satori(
    <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: 'white',
      fontWeight: 600,
      padding: 48,
      border: '48px solid #43759d',
    }}
  >
    <div style={{ color: 'black', fontSize: 64, maxWidth: 1000 }}>{title}</div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ color: 'black', fontSize: 48, display: 'flex', alignItems: 'center' }}>
        <img
          src="https://avatars.githubusercontent.com/u/71576988?s=400&u=537401b609177776f1af1475484d025f24431b11&v=4"
          width={88}
          height={88}
          style={{ borderRadius: 9999, marginRight: 24 }}
        />
        PocoPota
      </div>
    </div>
  </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: font,
          style: 'normal',
        },
      ],
    },
  )

  // SVG から PNG 形式に変換する
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return png
}