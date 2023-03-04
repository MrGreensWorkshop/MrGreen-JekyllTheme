---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: SQL Select文の基本

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
date: 2023-03-04 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "データベースやSQLを勉強する上でまず習得する必要のあるSelect文 DBやSQLの参考書とは少し違った視点で解説していこうと思う。"
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

データベースや SQL を勉強する上でまず習得する必要のある Select 文 DB や SQL の参考書とは少し違った視点で解説していこうと思う。
まずは Select 文に使われるステートメントから順に解説していく。

<!-- outline-end -->

前提として今回は汎用的な部分のみ解説するのであまり DB に依存する箇所については解説しないでおく。
また、今回はよく使うステートメントのみ解説となるので、他にもステートメントがあるということに留意してください。

# ステートメント

SQL では様々なステートメントを使用することでデータを纏めたり抽出したり様々なことをすることができる。
このステートメントはよく ○○ 句という言い方で現場では表現されることがある。

# Select 文の基本

Select 文の基本の形は`Select`と`From`のステートメントで構成されている。
その基本の形に様々なステートメントを追加で付与することで様々な条件でデータを抽出することができる。

まずは、基本の形から解説していく。`Select`の後ろには出力したいカラム名を列挙していく、区切り文字は`,`なので注意しよう。
カラムの列挙が終わったら次に`From`を記述してそのあとテーブル名を記述し SQL の終わりには`;`を記載しよう。

```sql
Select [1つ目のカラム名], [2つ目のカラム名], [3つ目のカラム名], From [テーブル名];
```

> ワンポイント：
>
> 1.  上記のサンプルに半角スペースがあることに注目しましょう。
> 2.  SQL の終わりには`;`をつける癖をつけましょう。SQL の Editer によっては自動で付与してくれますが、どこの現場でもそつなくできるように SQL の終わりには`;`が必要だということを覚えておきましょう。

# 対象のレコードを抽出する。

Select 文の基本の形に`Where`ステートメントを追加してデータを抽出できる。

例えば`user`テーブルに以下のようなレコードがあるとき、名前カラムの値が`太郎`と一致するデータを抽出する SQL です。
今回は条件の比較演算子に`=`を使っているが他の演算子を使用することでまた違った抽出も可能になる。
演算子については今回は割愛する。

テーブルデータ
| ID | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 1 | 太郎 | 千葉 | 10 |
| 2 | 紀子 | 東京 | 12 |
| 3 | 海斗 | 東京 | 13 |
| 4 | 花子 | 千葉 | 14 |

SQL

```sql
Select
  ID,
  名前,
  都道府県,
From user
Where 名前 = '太郎';
```

結果
| ID | 名前 | 都道府県 |
| --- | ---- | -------- |
| 1 | 太郎 | 千葉 |

> ワンポイント:
>
> 1.  SQL が冗長くなる場合は改行することで可読性が高まる。フォーマッターツールを使用するときれいにできるのでフォーマッターを利用することもお勧めする。
> 2.  Where 句で入れる条件が文字列の時は`'`（シングルコーテーション）で囲って値を入れよう。条件が数字の場合には`'`は不要

# レコードを纏める。

`Group by`ステートメントを使用するとカラムを指定して、重複するレコードを纏めることができる。

例えば`user`テーブルに以下のようなレコードがあるとき、レコードの都道府県の一覧を取得したいとする。

テーブルデータ
| ID  | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 1   | 太郎 | 千葉     | 10   |
| 2   | 紀子 | 東京     | 12   |
| 3   | 海斗 | 東京     | 13   |
| 4   | 花子 | 千葉     | 14   |

この時`Group by`を使わない場合、以下のような SQL となり

```sql
Select 都道府県 from user;
```

出力は下記の通りとなり同じ値のレコードが重複してしまう。

| 都道府県 |
| -------- |
| 千葉     |
| 東京     |
| 東京     |
| 千葉     |

このような時`Gropu by`を使用すると

```sql
Select 都道府県, Count(*) as `数` from user Group by 都道府県;
```

出力は同じ値で纏められる。
さらに`Count`関数をして纏めたグループで実際にあったレコードの数をカウントしている。

| 都道府県 | 数  |
| -------- | --- |
| 千葉     | 2   |
| 東京     | 2   |

> ワンポイント:
>
> 1.  `Group by`の後にしてする。カラムは`,`区切りで複数指定可能。
> 2.  `Group by`を使用すると Group by で指定していないカラム(集計関数などは覗く)は`Select`で指定できないので注意しよう。

# レコードを並び変えて表示する。

`Order by`ステートメントを使用することで、任意のカラムの値で並べ替えることができる。

例えば`user`テーブルに以下のようなレコードがあるとき、`ID`カラムの値を降順に並べ替えれ出力している。

テーブルデータ
| ID  | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 1   | 太郎 | 千葉     | 10   |
| 2   | 紀子 | 東京     | 12   |
| 3   | 海斗 | 東京     | 13   |
| 4   | 花子 | 千葉     | 14   |

この時`Group by`を使わない場合、以下のような SQL となり

```sql
Select ID, 名前, 都道府県, 年齢 from user Order by ID desc ;
```

結果
| ID | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 4 | 花子 | 千葉 | 14 |
| 3 | 海斗 | 東京 | 13 |
| 2 | 紀子 | 東京 | 12 |
| 1 | 太郎 | 千葉 | 10 |

# 出力するレコード数を制限する
`limit`ステートメントを使用するを出力することができる。
実際の実践の場ではDBの中にはとても大量のデータが入っているので誤って大量のデータが出力される
SQLを実行してしまうと、他の人がDBを使えなくなったりしてしまうことがあるので
Select 文には`limit`を入れるようにしたほうが良い。

以下の例は、出力を1レコードに制限している。

```sql
Select ID, 名前, 都道府県, 年齢 from user Order by ID desc limit 1 ;
```

結果
| ID | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 4 | 花子 | 千葉 | 14 |

# ステートメントの記述順序
複数のステートメントを使用する場合、記述する順序がある。

`Select`>`From`>`Where`>`Group by`>`Order by`>`Limit`


# 終わりに

今回はSelect文の基本のステートメントについて解説しました。
次回はテーブル結合についても解説しようと思う。

# 関連記事

- [SQL Fiddleを使用して環境構築せずにSQLを学習する。](/posts/2023-02-22-sql_startup)
