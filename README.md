# Trash Talker

利用 Express.js、Bootstrap、Handlebars 所製作的網站，在這份專案中會了解到如何設定路由、製作 Handlebars Controllers樣板系統、Get, Post 方式顯示動態資料及Handlebars 的迴圈應用等技巧。

![trashTalker](https://github.com/chris1085/AC-trashTalker/blob/main/trashTalker.jpg)

## Installation

```bash
#移動並創建本地資料夾
mkdir -p /installation/path && cd /installation/path

#從GitHub複製專案至本地資料夾
git clone https://github.com/chris1085/AC-trashTalker.git
cd AC-trashTalker

#從package.json中安裝express、express-handlebars等套件
npm install

#可能需要安裝eslint standard及nodemon
npm i -D eslint eslint-config-standard
npm i -g nodemon

#確認nodemon版本並測試專案
nodemon -v
nodemon app.js
```

## Features

- Bootstrap RWD
- 使用 Express.js、Handlebars 製作網站及路由設定
- 把 JSON 資料帶入 Handlebars 樣板中動態呈現
- 用 Math.random Array index的方式產生隨機幹話

## Tools

- Express - 應用程式框架
- Handlebars - web 模板系統
- Bootstrap - 開源前端框架

## Contribute

感謝[Alpha Camp](https://tw.alphacamp.co/)提供此次專案素材及資源
