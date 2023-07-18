---
title:  MarkDown 筆記
sidebar_position: 3
sidebar_label:  MarkDown 筆記
description: MarkDown 語法也要筆記一下
tags: [article, docusaurus]
authors: H.J
---


# MarkDown 筆記

## Code blocks

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Syntax highlighting

```js
console.log('Every repo must come with a mascot.');
```


## Admonitions

:::note Title

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


## Headings  

## Level 2 title

### Level 3 title

#### Level 4 title



Photo by <a href="https://unsplash.com/@harlimarten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Harli  Marten</a> on <a href="https://unsplash.com/s/photos/sea?orientation=landscape&license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
![Example banner](./../assets/docusaurus-asset-example-banner.png) 

[Download this docx using Markdown](./../assets/docusaurus-asset-example.docx)


```javascript title="實際模樣" showLineNumbers {2,4-5}
---
title: 編輯文章
sidebar_position: 10
sidebar_label: 編輯文章
description: 網站上線後，開始產出內容，編輯文章。
tags: [article, docusaurus]
---
```


:::note
這是備註
:::  
:::tip
這是提示
:::  
:::info
這是信息
:::  
:::caution
這是警告
:::  
:::danger
這是危險
:::

