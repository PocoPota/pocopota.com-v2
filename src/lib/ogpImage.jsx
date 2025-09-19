import React from 'react'
import satori from 'satori'
import sharp from 'sharp'
import fs from 'fs'

export const generateOgpImage = async (title) => {
  // フォントデータを読み込み（失敗時はフォールバック）
  let fontData = undefined
  try {
    fontData = fs.readFileSync('./fonts/NotoSansJP-Bold.ttf')
  } catch (e) {
    // フォント読込に失敗しても画像生成は継続
    fontData = undefined
  }

  // タイトルの動的フォントサイズ（長い場合は自動縮小）
  const len = (title || '').length
  let titleSize = 84
  if (len > 26) titleSize = 72
  if (len > 40) titleSize = 60
  if (len > 56) titleSize = 48
  if (len > 72) titleSize = 42

  // JSX から画像を生成する
  const svg = await satori(
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        // 明るい基調へ（黒背景上でもコントラスト確保）
        backgroundImage:
          'linear-gradient(135deg, #f9fbff 0%, #eef4fb 50%, #f9fbff 100%)',
        color: '#0c1721',
      }}
    >

      {/* 余白とインナー枠線（ガラス感） */}
      <div
        style={{
          padding: 44,
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          // カラーフレーム（縁色）：より濃いトーン
          backgroundImage:
            'linear-gradient(135deg, #6aa0d8 0%, #3d77b6 50%, #2e65a3 100%)',
          // 外枠の角丸をなくす
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        {/* 縁エフェクト: 斜めストライプのハイライト（薄く） */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 0,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 6px, rgba(255,255,255,0.0) 6px, rgba(255,255,255,0.0) 14px)',
          }}
        />
        {/* 縁エフェクト: ソフトグロス（左上にかかる柔らかい光） */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 0,
            backgroundImage:
              'radial-gradient(800px 420px at 18% 18%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 36%, rgba(255,255,255,0.0) 60%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            borderRadius: 24,
            border: '1px solid rgba(9,21,37,0.08)',
            // 内側カードは明るい面（ホワイト）
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 40,
            zIndex: 1,
          }}
        >
          {/* カード内の追加エフェクト・バッジ類は削除 */}

          {/* タイトル */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              marginBottom: 24,
              maxWidth: 980,
            }}
          >
            <div
              style={{
                position: 'relative',
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: -0.25,
                color: '#0c1721',
              }}
            >
              {title}
            </div>
          </div>

          {/* 下部情報行：左=アバター+サイト名、右=ドメイン */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://avatars.githubusercontent.com/u/71576988?s=400&u=537401b609177776f1af1475484d025f24431b11&v=4"
                width={88}
                height={88}
                style={{ borderRadius: 9999, marginRight: 18, border: '2px solid rgba(9,21,37,0.10)' }}
              />
              <div style={{ fontSize: 36, color: '#0c1721' }}>PocoPota</div>
            </div>
            <div style={{ fontSize: 28, color: 'rgba(12,23,33,0.85)', letterSpacing: 0.5 }}>pocopota.com</div>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [
            {
              name: 'Noto Sans JP',
              data: fontData,
              style: 'normal',
              weight: 700,
            },
          ]
        : [],
    },
  )

  // SVG から PNG 形式に変換する
  const png = await sharp(Buffer.from(svg)).png().toBuffer()

  return png
}
