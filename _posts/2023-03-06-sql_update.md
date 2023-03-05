---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: SQL Update文の基本

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
date: 2023-03-06 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "データベースやSQLを勉強する上でまず習得する必要のあるUpdate文 DBやSQLの参考書とは少し違った視点で解説していこうと思う。"
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

データベースや SQL を勉強する上でまず習得する必要のある Update 文 DB や SQL の参考書とは少し違った視点で解説していこうと思う。
まずは Update 文に使われるステートメントから順に解説していく。

<!-- outline-end -->

前提として今回は汎用的な部分のみ解説するのであまり DB に依存する箇所については解説しないでおく。
また、今回はよく使うステートメントのみ解説となるので、他にもステートメントがあるということに留意してください。

# ステートメント

SQL では様々なステートメントを使用することでデータを纏めたり抽出したり様々なことをすることができる。
このステートメントはよく ○○ 句という言い方で現場では表現されることがある。

# Update 文の基本

Update 文の基本の形は`Update`と`Set`のステートメントで構成されている。
その基本の形に様々なステートメントを追加で付与することで様々な条件でデータを抽出することができる。

まずは、基本の形から解説していく。`Update`の後ろには更新したいテーブル名を記述する。
次に`Set`を記述し更新するカラム名と値を記述していく。

以下のサンプルではテーブルの全レコードに対して更新を行う SQL

```sql
Update [テーブル名] Set [カラム1] = '更新したい値', [カラム2] = '更新したい値';
```

> ワンポイント：
>
> 1.  上記のサンプルに半角スペースがあることに注目しましょう。
> 2.  SQL の終わりには`;`をつける癖をつけましょう。SQL の Editer によっては自動で付与してくれますが、どこの現場でもそつなくできるように SQL の終わりには`;`が必要だということを覚えておきましょう。

# 対象のレコードを更新する。

Select 文の基本の形に`Where`ステートメントを追加してデータを抽出できる。

例えば`user`テーブルに以下のようなレコードがあるとき、名前カラムの値が`太郎`と一致するデータを更新する SQL です。
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
Update user
Set 都道府県 = '茨城'　
Where 名前 = '太郎';
```

結果
| ID | 名前 | 都道府県 | 年齢 |
| --- | ---- | -------- | ---- |
| 1 | 太郎 | 茨城 | 10 |
| 2 | 紀子 | 東京 | 12 |
| 3 | 海斗 | 東京 | 13 |
| 4 | 花子 | 千葉 | 14 |

> ワンポイント:
>
> 1.  SQL が冗長くなる場合は改行することで可読性が高まる。フォーマッターツールを使用するときれいにできるのでフォーマッターを利用することもお勧めする。
> 2.  Where 句で入れる条件が文字列の時は`'`（シングルコーテーション）で囲って値を入れよう。条件が数字の場合には`'`は不要

# ステートメントの記述順序

複数のステートメントを使用する場合、記述する順序がある。
`Update`>`Set`>`Where`

# 現場での実践において

`Update`は実際の現場での作業ではとても慎重に行う必要がある。
執者がよくやる手法としては、以下のような手順で行っているこのように作業をすれば万が一更新した結果が想定と異なっていても
`rollback`できるからだ。問題なければ`commit`して終了となる。重要な点は更新する前にトランザクションを開始する点。
トランザクションについては事項で解説する。

1. テーブルバックアップ
2. 更新する対象を select
3. トランザクションを開始
4. Update を実行
5. 更新後の対象を Select
6. 問題なければ commit

# トランザクションとは

トランザクション（英：transaction）とは、一連の処理をひとまとめにしたものです。
てトランザクションを終了するときは、一連の処理を「確定させるのか（コミット）」「破棄するのか（ロールバック）」の命令を実行しトランザクションを終了します。

トランザクション管理していない場合、実行した SQL は登録または更新した時点で確定します。

例えば「在庫テーブル」への更新は成功したが、「注文テーブル」への登録に失敗した場合、「注文テーブル」に購入者情報が登録されていないにもかかわらず「在庫テーブル」の在庫が減っているという一貫性のないデータになってしまいます。

トランザクション管理することで、このような問題を解決することができます。
また、手作業では、トランザクションを切ってから作業すれば誤った作業をしても、ロールバックができるので安心して作業を進めることができる。

# 終わりに

今回は Update 文の基本のステートメントについて解説しました。
特に実践での注意点について、記述している参考書などあまり見ないので、この点も
身に着けておくと実践に役立ちそうです。

# 関連記事

- [SQL Fiddle を使用して環境構築せずに SQL を学習する。](/posts/2023-02-22-sql_startup)
- [Select 文の基本](/posts/2023-03-04-sql_select)
