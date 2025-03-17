---
title: 如何新增SSH Key 至 Github 
sidebar_position: 10
sidebar_label: 如何新增SSH Key 至 Github 
description: 
tags: [article, Github]
authors: H.J
---

## 如何新增SSH Key 至 Github 

### 安裝 Git
首先，確保你的 Mac 上已經安裝了 Git。通常近幾年的 Mac 系統都有內建，你可以在終端（Terminal）中執行以下命令來檢查 Git 是否已安裝：

git --version
如果 Git 沒有安裝，你可以使用 Homebrew 安裝它：

brew install git
如果你還沒有安裝 Homebrew（Mac的套件管理器），可以透過在終端機上執行以下命令來安裝它：

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

### 設定 Git 的使用者名稱和電子郵件
在終端中，使用以下命令設定你的 Git 使用者名稱和電子郵件地址。 這些資訊將用於你的提交記錄：

git config --global user.name "你的名字"
git config --global user.email "你的郵件地址"
將 “你的名字” 和 “你的郵件地址” 換成你在 GitHub 上的使用者名稱和電子郵件地址。

### 產生 SSH 密鑰

執行以下命令產生一個新的 SSH 密鑰，用於 GitHub：

ssh-keygen -t rsa -b 4096 -C “你的郵件地址”
請按照提示進行操作。 你可以設定密碼或直接按 Enter 鍵留空（不設定密碼）。 這將在 ~/.ssh 目錄下產生 id_rsa（私鑰）和 id_rsa.pub（公鑰）檔案。

### 將 SSH 密鑰新增至 ssh-agent
首先，啟動 ssh-agent：

eval "$(ssh-agent -s)"
接著加入你的私鑰到 ssh-agent：

ssh-add -K ~/.ssh/id_rsa

### 將 SSH 公鑰加入 GitHub

打開 ~/.ssh/id_rsa.pub 文件，並複製其內容。 你可以使用以下指令直接金鑰複製到剪貼簿。

cat ~/.ssh/id_rsa.pub | pbcopy
 

到 GitHub 網站登錄到你的帳戶後台。
前往設置（Settings）> SSH 和 GPG keys。
點擊 “New SSH key” 或 “Add SSH key”。
在 “Title” 欄位中輸入一個標籤，例如 “我的 Macbook Pro”。
在 “Key” 文字方塊中貼上你的公鑰。

點選 “Add SSH key” 儲存。
完成這些步驟後，你的 Mac 應該已經成功設定了 Git 和 SSH 密鑰，可以安全地連接到 GitHub 進行代碼的推送和拉取操作。



參考：
https://make9.tw/wp-shorthand/other/%E5%9C%A8-mac-%E4%B8%8A%E8%A8%AD%E5%AE%9A%E9%80%A3%E6%8E%A5-github-%E7%9A%84-ssh-%E9%87%91%E9%91%B0/
