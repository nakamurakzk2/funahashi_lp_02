# Design System & Vibe Direction

## 1. Color Palette (Tailwind Config)
このLPは「歴史ある鉄道の重厚感」と「クリエイティブなワクワク感」を両立させる配色です。
以下のカラーをTailwindの`tailwind.config.js`に必ず設定して使用してください。

- **Primary (Forest Green):** `#00552E`
  - 用途: ヘッダー、フッター、セクション見出しの背景。画面の骨格。
- **Background (Natural White):** `#F9F9F9`
  - 用途: サイト全体のベース背景。純白ではなく、レトロな雰囲気を出す。
- **Accent (Yamabuki Yellow):** `#ECAE0F`
  - 用途: CTAボタン（購入ボタン）、強調アイコン。
  - 意図: 警戒色かつ視認性が高い。緑の補色としてクリックを誘発する。
- **Text (Dark Green):** `#003311`
  - 用途: 本文テキスト。黒(#000000)は使用禁止。
  - 意図: 限りなく黒に近い緑で、知的な統一感を出す。

## 2. Typography
「伝統」と「現代」の融合を表現するフォントペアリングを採用してください。

- **Headings (見出し):** "Zen Old Mincho" (Google Fonts)
  - 明朝体を使用し、鉄道の歴史と「一生モノの体験」という重みを表現。
- **Body (本文):** "Noto Sans JP" (Google Fonts)
  - 可読性を重視したゴシック体。ウェイトは400と700を使用。

## 3. UI & Animation (Framer Motion)
ユーザーがスクロールするごとに物語が進む演出を入れてください。

- **Scroll Reveal:** 各セクションのコンテンツは、スクロールに合わせて下からふわっと浮き上がる（Fade Up）。
- **Parallax:** ヒーローエリアや背景の線路/車両の画像には、緩やかなパララックス効果を適用。
- **Hover Effects:** ボタン（Accent Color）は、ホバー時に少し浮き上がり、輝度を上げる。
- **Layout:** "Breathable Layout". 余白（Padding/Margin）は大きめに取り、高級感を持たせる。