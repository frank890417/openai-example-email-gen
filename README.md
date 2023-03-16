# GPT-4 電子郵件生成器

這個專案是一個基於 Node.js 和 OpenAI GPT-4 API 的電子郵件生成器。用戶可以通過簡單地輸入主題、收件人和語言來生成專業的電子郵件。

## 開始使用

1. 確保已安裝 [Node.js](https://nodejs.org/)。
2. 克隆此專案到本地：
```
git clone https://github.com/yourusername/gpt-4-email-generator.git
```
3. 進入專案目錄：
```
cd gpt-4-email-generator
```
4. 安裝依賴：
```
npm install
```
5. 創建一個名為 `.env` 的檔案，並在其中添加你的 OpenAI API 密鑰：
```
OPENAI_API_KEY=your_api_key_here
```
6. 啟動應用：
```
npm start
```

7. 在瀏覽器中訪問 [http://localhost:3000](http://localhost:3000) 以使用電子郵件生成器。

## 功能

- 使用者可以輸入寄件人、收件人、主題和語言。
- 基於所選語言，生成具有台灣商業信件語調或專業風格的電子郵件。
- 生成的電子郵件會顯示在網頁上。
