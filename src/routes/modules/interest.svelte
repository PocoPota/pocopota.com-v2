<div class="interest-container">
  <div class="interest-box">
    <div>主な興味</div>
    <ul>
      <li>Webフロントエンド</li>
      <li>UI/UX・アクセシビリティ</li>
      <li>情報整理・構造化</li>
    </ul>
  </div>

  <div class="interest-box">
    <div>その他関心</div>
    <ul>
      <li>デザイン・タイポグラフィ</li>
      <li>NLP・RAG・生成AI</li>
      <li>生成AI×専門領域の応用</li>
      <li>データベース / Webセキュリティ</li>
    </ul>
  </div>
</div>

<style lang="scss">
  .interest-container {
    display: flex;
    flex-direction: row;
    gap: 30px;

    .interest-box {
      width: 450px;
      display: inline-block;
      vertical-align: top;

      &:first-child {
        text-align: right;
      }

      div {
        font-size: 1.2em;
        font-weight: bold;
      }

      ul {
        padding: 0;
        list-style: none;
      }
    }
  }
</style>
