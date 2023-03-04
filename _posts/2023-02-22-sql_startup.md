---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: SQL Fiddleを使用して環境構築せずにSQLを学習する。

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
# author:
# multiple category is not supported
category: sql
# multiple tag entries are possible
tags: [sql, DB, 入門]
# thumbnail image for post
img: ":sql_logo.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2023-02-22 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "学習用として環境構築不要ですぐに始められるSQLの学習手法を紹介します。SQLをこれから学習したいけど、DB（データベース）ってどうやって構築したらいいの？以外にSQLは難易度としては高くはないものの学習を始める敷居が高く、なかなか手についけられない。そんな方に必見"
# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---

<!-- outline-start -->

学習用として環境構築不要ですぐに始められる SQL の学習手法を紹介します。
SQL をこれから学習したいけど、DB（データベース）ってどうやって構築したらいいの？以外に SQL は難易度としては高くはないものの
学習を始める敷居が高く、なかなか手についけられない。そんな方に必見の方法です。

<!-- outline-end -->

# 使用するツール

使用するツールはウェブで簡単にアクセスできる[SQL Fiddle](http://sqlfiddle.com/)です。
こちらにアクセスすると、以下の画面が出てくる。

左側のウインドウに DDL テーブルクリエイト文でテーブルを作成＋データをインサートする SQL を貼り付け `Build Schema` ボタンを押すと
テーブルが作成され。そのあと右側のウインドウへ select 文を入れて抽出や様々な SQL を実践的に学習することができる。
SQL パターンも`postgre、Oracle、sqllite、Mysql`などから選ぶことができ固有の関数を使用した SQL も学習可能。

http://sqlfiddle.com/

![](/assets/img/posts/SQL_Fiddle.png)

# チュートリアル

## SQL Fiddle へアクセス

以下のリンクへアクセスして SQL Fiddle を開こう
http://sqlfiddle.com/

## DDL 文を貼り付ける。

SQL Fiddle を開いたら画面の左側のウインドウへ DDL 文を貼り付け `Build Schema` ボタンを押下
今回は、チュートリアルなので執者の用意した以下 DDL を使用。

![](/assets/img/posts/SQL_Fiddle.png)

### 執者の用意した DDL 文

以下は` users``userdetails `という 2 つのテーブルを作ってテストデータを投入している。

```sql
CREATE TABLE users(
  id INT,
  name VARCHAR(10),
  age INT
  );
INSERT INTO users VALUES (1,'太郎1',11);
INSERT INTO users VALUES (2,'太郎2',12);
INSERT INTO users VALUES (3,'太郎3',13);
INSERT INTO users VALUES (4,'太郎4',14);
INSERT INTO users VALUES (5,'太郎5',15);
INSERT INTO users VALUES (6,'太郎6',16);
INSERT INTO users VALUES (7,'太郎7',17);
INSERT INTO users VALUES (8,'太郎8',18);
INSERT INTO users VALUES (9,'太郎9',19);
INSERT INTO users VALUES (10,'太郎10',20);

CREATE TABLE userdetails (
  id INT,
  occupation VARCHAR(1000),
  address  VARCHAR(1000),
  zip_code  VARCHAR(7)
);
INSERT INTO userdetails VALUES (1,'会社員11','東京都墨田区1-1-1','222-001');
INSERT INTO userdetails VALUES (2,'会社員12','東京都墨田区1-1-2','222-002');
INSERT INTO userdetails VALUES (3,'会社員13','東京都墨田区1-1-3','222-003');
INSERT INTO userdetails VALUES (4,'会社員14','東京都墨田区1-1-4','222-004');
INSERT INTO userdetails VALUES (5,'会社員15','東京都墨田区1-1-5','222-005');
INSERT INTO userdetails VALUES (6,'会社員16','東京都墨田区1-1-6','222-006');
INSERT INTO userdetails VALUES (7,'会社員17','東京都墨田区1-1-7','222-007');
INSERT INTO userdetails VALUES (8,'会社員18','東京都墨田区1-1-8','222-008');
INSERT INTO userdetails VALUES (9,'会社員19','東京都墨田区1-1-9','222-009');
INSERT INTO userdetails VALUES (10,'会社員20','東京都墨田区1-1-10','222-010');
INSERT INTO userdetails VALUES (11,'会社員21','東京都墨田区1-1-11','222-011');
INSERT INTO userdetails VALUES (12,'会社員22','東京都墨田区1-1-12','222-012');
INSERT INTO userdetails VALUES (13,'会社員23','東京都墨田区1-1-13','222-013');
INSERT INTO userdetails VALUES (14,'会社員24','東京都墨田区1-1-14','222-014');
INSERT INTO userdetails VALUES (15,'会社員25','東京都墨田区1-1-15','222-015');
INSERT INTO userdetails VALUES (16,'会社員26','東京都墨田区1-1-16','222-016');
INSERT INTO userdetails VALUES (17,'会社員27','東京都墨田区1-1-17','222-017');
INSERT INTO userdetails VALUES (18,'会社員28','東京都墨田区1-1-18','222-018');
INSERT INTO userdetails VALUES (19,'会社員29','東京都墨田区1-1-19','222-019');
INSERT INTO userdetails VALUES (20,'会社員30','東京都墨田区1-1-20','222-020');
```

### DDL 貼り付け場所

![](/assets/img/posts/SQL_Fiddle_2.png)

## ウインドウ右側へ Select 文を入力

`Build Schema` ボタンを押下すると右側のウインドウが入力可能となるので
Select、update、delete 文の SQL が実行できるようになる。
今回はチュートリアルなので執者が以下の SQL を用意した。

サンプル 1 ユーザーテーブルをセレクト

```sql
select * from users;
```

上記の SQL を貼り付けて、`Run SQL`ボタンを押下

![](/assets/img/posts/SQL_Fiddle_3.png)

## 練習用 SQL

今までで、SQL Fiddleの使い方について解説した。
今回使用したDDL用にSelectのSQLを何個か用意したのでこれらを参考に自身で様々な
SQL文のトライを参考書を読みながら実践していくと上達が早いと思う。

サンプル 1 ユーザーテーブルをセレクト

```sql
select * from users;
```

サンプル 2 ユーザー明細テーブルをセレクト

```sql
select * from userdetails;
```

サンプル 3 ユーザーテーブルと明細テーブルを結合

```sql
select
u.id,
u.name,
u.age,
ud.occupation,
ud.address,
ud.zip_code
from users as u
left join userdetails as ud on u.id=ud.id;
```

サンプル 4 年齢が 15 歳の人を抽出

```sql
select * from users
where age = 15;
```

サンプル 5 年齢が 20 歳のユーザーの住所を取得

```sql
select
u.id,
u.name,
u.age,
ud.occupation,
ud.address,
ud.zip_code
from users as u
left join userdetails as ud on u.id=ud.id
where age = 20;
```

# 終わりに

今回はSQLの学習の取っ掛かりを作るための手段を紹介してみた。慣れてきていろいろ知識が身について来ればSQLServerやMysqlの環境を自身で構築してそこで学習するのが良いだろう
まずは、取っ掛かりとして参考になれば。

# 関連記事
- [SQL Select文の基本](/posts/2023-03-04-sql_select)
