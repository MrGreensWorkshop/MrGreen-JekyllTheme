---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: Shellでよく使うコマンド一覧

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Mr. Green's Workshop
# multiple category is not supported
category: Linux
# multiple tag entries are possible
tags: [unix, shell, bash]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2023-02-12 08:11:06 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

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

# 基本的な操作

| コマンド | 用途                           | 詳細                 |
| -------- | ------------------------------ | -------------------- |
| cd       | ディレクトリの移動             | [詳細をみる](#cd)    |
| ls       | ディレクトリの中身を確認する   | [詳細をみる](#ll)    |
| tree     | ディレクトリ構造を確認する     | [詳細をみる](#tree)  |
| clear    | 画面をクリアする               | [詳細をみる](#clear) |
| help     | コマンドの一覧や詳細を表示する | [詳細をみる](#help)  |

<br><br>

# ファイル操作関連

| コマンド | 用途                                                   | 詳細                  |
| -------- | ------------------------------------------------------ | --------------------- |
| コマンド | オプション                                             |                       |
| cat      | ファイルの内容を確認する                               | [詳細をみる](#cat)    |
| touch    | ファイルのタイムスタンプを変更する・ファイルを作成する | [詳細をみる](#touch)  |
| vim      | ファイルの内容を編集するエディターを起動               | [詳細をみる](#vim)    |
| mv       | ファイルの移動、もしくはディレクトリ名の変更           | [詳細をみる](#mv)     |
| cp       | ファイルをコピーする                                   | [詳細をみる](#cp)     |
| mkdir    | ディレクトリを新規作成                                 | [詳細をみる](#mkdir)  |
| rm       | ファイルを削除する                                     | [詳細をみる](#rm)     |
| rmdir    | ディレクトリを削除する                                 | [詳細をみる](#rmdir)  |
| rename   | ファイルやディレクトリ名の変更                         | [詳細をみる](#rename) |

<br><br>

# ネットワーク系

| コマンド   | 用途                             | 詳細                      |
| ---------- | -------------------------------- | ------------------------- |
| ifconfig   | PCのIPアドレス等の情報を確認する | [詳細をみる](#ifconfig)   |
| ping       | 指定したIPアドレスとの通信確認   | [詳細をみる](#ping)       |
| traceroute | 通信相手までの経路確認           | [詳細をみる](#traceroute) |

<br><br>

# その他

| コマンド | 用途                                             | 詳細                 |
| -------- | ------------------------------------------------ | -------------------- |
| start    | コマンドプロンプトを別ウィンドウで開始           | [詳細をみる](#start) |
| exit     | コマンドプロンプトを閉じる                       | [詳細をみる](#exit)  |
| date     | 日付の表示、設定をする。                         | [詳細をみる](#date)  |
| chcp     | コマンドプロンプトの文字コードを確認、設定する。 | [詳細をみる](#chcp)  |

<br><br>

# コマンド使用方法
## cd
- 指定したパスに移動する
  ```sh
  cd [移動したいディレクトリーパス]
  ```
- 現在のディレクトリから一つ上位のディレクトリに移動する
  ```sh
  cd ../
  ```
- 現在のディレクトリからドライブ直下に直接移動する
  ```sh
  cd --
  ```
- 今いるディレク(HOGE1)の一つ階層が上の別のフォルダー(HOGE2)へ移動
  ``` bash
  cd ../hoge2
  ```
## ll

- フォルダーの中身を確認する。
  ``` sh
  ls
  ```

- 長いフォーマットで表示する。
  ``` sh
  ls -l
  ll
  ```
  ※llコマンドでも可能<br>
  [【Linux】llコマンド(ls -lコマンド)の表示の見方](http://ilovelovemoney.blog.fc2.com/blog-entry-112.html)

- ドットファイル（隠しファイル）を表示する。
  ``` sh
  ls -a
  ll -al
  ```

<br>

- 並べ替え関係のオプション

  | 短いオプション | 長いオプション            | 意味                                                                                                                                                                                                          |
  | -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | -t             |                           | ファイルの更新日が新しい順に表示する（「-lc」が併せて指定されている場合は「ctime」順、「-lu」が併せて指定されている場合は最終アクセス日順で表示）                                                             |
  | -S             |                           | ファイルサイズの大きい順に並べる                                                                                                                                                                              |
  | -              | --group-directories-first | 先にディレクトリの一覧を表示してからファイルを一覧表示する（「--sort=none」「-U」と併用した場合は無効）                                                                                                       |
  | -              | --sort=WORD               | 名前順の代わりに「WORD」で指定した順で並べ替える（例：「--sort=time」で更新日順。WORDが「none」は「-U」相当、「extension」は「-X」相当、「size」は「-S」相当、「time」は「-t」相当、「version」は「-v」相当） |
  | -v             |                           | 自然な数字（version）順でソートする                                                                                                                                                                           |
  | -X             |                           | 拡張子のアルファベット順にソートする                                                                                                                                                                          |
  | -r             | --reverse                 | 並び順を反転させる                                                                                                                                                                                            |
  | -U             |                           | ファイルを並べ替えず、ディレクトリに含まれている要素順で表示する                                                                                                                                              |
  | -f             |                           | ファイルを並べ替えず、ディレクトリ情報のままで表示する（「-aU」が有効になり、「--color」が無効になる）                                                                                                        |

## tree
※デフォルト状態では、treeコマンドは利用できません。


## clear
- 画面の表示内容をクリアする
  ``` sh
  clear
  ```

## help
- コマンドの一覧を表示する。
  ``` sh
  help
  ```

- コマンドの使い方を表示する。
  ``` sh
  help [コマンド名]
  ```

## cat
- ファイルの中身を確認
  ``` sh
  cat [オプション] [ファイル名]
  ```

- catコマンドでファイルの中身を連結させる
  ``` sh
  cat hoge1.txt hoge2.txt
  ```

- catコマンドの主なオプションたち
  | オプション | 説明                             |
  | ---------- | -------------------------------- |
  | -n         | 行番号を表示する                 |
  | -b         | 空白行を飛ばして行番号を表示する |
  | -A         | 非表示文字を表示する             |
  | -s         | 連続した空白行を1行にする        |
  | -E         | 各行の最後に"$"を付加する        |

## touch
- ファイル`hoge.dat`のタイムスタンプを現在にする (ファイルが存在しない場合新規作成される)
  ``` sh
  touch hoge.dat
  ```

- ファイルの新規作成 （ファイルが存在する場合タイムスタンプが現在に更新される）
  ``` sh
  touch hoge1.dat
  ```

- ファイル`hoge1.dat`のタイムスタンプを`2022年9月20日20:30`に指定する
  ``` sh
  touch -d "2022-9-20 20:30" a.dat
  ```

- ファイルを新規作成しない
  ``` sh
  touch -c [ファイル名]
  ```

- 他のファイルのタイムスタンプに合わせる
  ```
   touch -r [既存のファイル名] [変更する対象ファイル名]
  ```

- ctimeのみを現在に変更する
  ``` sh
   touch -m [対象ファイル名]
  ```

## vim
- vimの起動
  ``` sh
  vim
  ```

- 特定のファイルを開きたい場合
  ``` sh
  vim test.txt
  ```

- vimの操作方法・使い方
  冗長になるため以下別紙で解説 <br>
  [vimの使い方](リンク)

## mv
- ファイルを移動する
  ``` sh
  mv [ファイル1] [ディレクトリ]
  mv [ファイル1] [ファイル2] [ファイル3] [ディレクトリ]
  ```

- ファイル名を変更する
  ``` sh
  mv [ファイル名] [変更したいファイル名]
  ```

- mvコマンドの主なオプション

  | 短いオプション                                                                                                                                                               | 長いオプション                    | 意味                                                                           |
  |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|------------------------------------------------------------------------------|
  | -f                                                                                                                                                                    | --force                    | 移動先に同名ファイルがあっても確認せずに上書きする                                                    |
  | -i                                                                                                                                                                    | --interactive              | 上書き前に確認する                                                                    |
  | -n                                                                                                                                                                    | --no-clobber               | 既存のファイルを上書きしない                                                               |
  | -u                                                                                                                                                                    | --update                   | 移動先にある同名ファイルのタイムスタンプが同じ、または新しい場合は移動しない                                       |
  | -t ディレクトリ名                                                                                                                                                            | --target-directory=ディレクトリ名 | 「-t」で指定したディレクトリに移動する                                                         |
  | -T                                                                                                                                                                    | --no-target-directory      | 移動先（最後の引数）がディレクトリでも特別扱いしない（「cp」コマンド［応用編その1］参照）                               |
  | --strip-trailing-slashes                                                                                                                                              | 移動元ファイルの最後にあるスラッシュ（/）を取り除く |
  | -b                                                                                                                                                                    | --backup=方法                | 上書きされるファイルのバックアップを作る（「ln」コマンド参照）<br>［方法］：「numbered」または「t」の時は番号の添え字、「simple」または「never」の時は、ファイル名の末尾に「~」または「-S」オプションか環境変数で指定した文字を付けるシンプルなバックアップ（「-b」と同じ）、「existing」または「nil」の時は既にあるファイルに従う（ない場合はで「simple」と同じ） |
  | -S                                                                                                                                                                    | --suffix=接尾辞               | バックアップファイルを作る際の、ファイル名末尾に付ける文字（無指定時は、「~」1文字、または環境変数「SIMPLE_BACKUP_SUFFIX」に従う） |
  | -v                                                                                                                                                                    | --verbose                  | 経過を表示する                                                                      |

## cp
- ファイルをコピーする
  ``` sh
  cp [コピー元ファイル名] [コピー先ファイル名]
  ```

- 複数のファイルをコピーする
  ``` sh
  cp [コピー元ファイル名A]  [コピー元ファイル名B] [コピー先ディレクトリ]
  ```

- ディレクトリをコピーする
  ``` sh
  cp -r [コピー元ディレクトリ] [コピー先ディレクトリ]
  ```

- 構成情報をそのままコピーする
  ``` sh
  cp -p [コピー元ファイル名] [コピー先ファイル名]
  ```

- 使われるオプション
  | オプション | 説明                                              |
  |-------|-------------------------------------------------|
  | -a    | ファイルモード・所有者情報、属性などをできるかぎりコピーする                  |
  | -f    | コピー先ファイルに同じファイル名が合った場合、警告なしでコピーする               |
  | -i    | すでに同じファイルがある場合、ファイルの上書き確認を行う                    |
  | -p    | 元ファイルのモードや所有者情報、タイムスタンプなどをコピー先ファイルにコピー          |
  | -r    | ディレクトリをコピーする。配下にサブディレクトリがある場合は、そのディレクトリごとコピーされる |
  | -v    | コピーの詳細な情報が表示される                                 |


## mkdir

- ディレクトリーを作成する
  ``` sh
  mkdir [ディレクトリ名]
  ```

- 複数のディレクトリを作成する
  ``` sh
  mkdir [作成したいディレクトリ名A] [作成したいディレクトリ名B] [作成したいディレクトリ名C]
  ```

- 階層ディレクトリを作成する
  ``` sh
  mkdir -p [親ディレクトリ名]\[子ディレクトリ名]
  ```

- パーミッションを指定しディレクトリを作成する
    ``` sh
    mkdir -m [パーミッション指定] [ディレクトリ名]
    ```
  [パーミッション指定] = [所有ユーザ] + [所有グループ] + [その他のユーザ]
  - パーミッションの一覧
    1. Execution
    2. Write
    3. Execution + Write
    4. Read
    5. Read + Write
    6. Read + Execution
    7. Read + Write + Execution

<br>

- 使われるオプション
  | オプション | 説明                    |
  |-------|-----------------------|
  | -m    | 指定したパーミッションでディレクトリを作成 |
  | -p    | 階層ディレクトリを作成           |
  | -v    | ディレクトリ作成時に詳細を表示する     |


## rm
- ファイルを削除する
  ``` sh
  rm [ファイル名]
  ```

- すべてのファイルを削除 [ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使う
  ``` sh
  rm *
  ```

- ファイル名の一部を指定して削除 ( [ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使う)
  ``` sh
  rm hoge*.dat
  ```

- ディレクトリを削除
  ``` sh
  rm -r [ディレクトリ名]
  ```


## rmdir
- ディレクトリを削除
  ``` sh
  rmdir [ディレクトリ名]
  ```

- 親ディレクトリも削除する
  ``` sh
  rmdir -p [ディレクトリ]
  ```

- ディレクトリが空ではないときに出るエラーを表示しない
  ``` sh
  rmdir --ignore-fail-on-non-empty [ディレクトリ名]
  ```

- rmコマンドとの違い

  `mdir`コマンドは一見`rm`コ`マンドの-rオプションが付与された動作と似ているが、空ではないディレクトリに関しての動作が異なる。

  a/b/c/d/eという多重のディレクトリ構造は、`rmdir –r a`のコマンドでは削除できず、`rmdir –r a/b/c/d/e`と最後のディレクトリまで記述しなければならない。

  さらにディレクトリcの中にファイルxがある場合は、一度のコマンド入力では削除できない。

  非常に誤解しやすいのだが、`rmdir`コマンドは、フォルダをゴミ箱に捨てるようなイメージと違い、親ディレクトリからその下層のディレクトリを一度に削除できない。

  その点、空ではないディレクトリの削除は`rm`コマンドの-rオプションの方が簡単ですが

  `rm`コマンドでは一度の操作で指定したすべてのディレクトリやその中のファイルを削除してしまう。きちんと確認しないと危険でもあるコマンド

  `rmdir`は削除の対象があくまでディレクトリなので、ファイルを間違って消すことはないので動作の違いを理解して、使用するケースに合わせて適切な削除のコマンドを選択しましょう。

## rename
- ファイルの名前変更
  ``` sh
  rename [オプション] [置換前の文字列] [置換後の文字列] [該当ファイル]
  ```

- ディレクトリの名前変更
  ``` sh
  rename [オプション] [置換前の文字列] [置換後の文字列] [該当フォルダー]
  ```

- 複数のファイル・ディレクトリを一括で名前変更
  ``` sh
  rename [オプション] [置換前の文字列] [置換後の文字列] [該当ファイルA] [該当ファイルB] [該当ファイルC]
  ```

- [ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使用した複数ファイル・ディレクトリの一括名前変更(testから始まるファイルを変更する)
  ``` sh
  rename [オプション] [置換前の文字列] [置換後の文字列] test*
  ```

## ifconfig
- ネットワークの接続状況の確認
  ``` sh
    ifconfig
  ```
- アダプタの指定
  ``` sh
    ifconfig [アダプタ名]
  ```
- アダプタの無効化
  ``` sh
  ifconfig [アダプタ名]  down
  ```
- アダプタの有効化
  ``` sh
  ifconfig [アダプタ名]  up
  ```
- IPアドレスの設定
  ``` sh
  ifconfig [アダプタ名] [IPアドレス]
  ```
- すべてのアダプタを表示する
  ``` sh
  ifconfig -a
  ```
- 各アダプタの通信状況を表示する
  ``` sh
  ifconfig -s
  ```

## ping
- 導通確認
  ``` sh
  ping [接続先IPアドレスまたはホスト名]
  ```
- pingの回数を設定する
  ``` sh
  ping -c [回数] [接続先IPアドレスまたはホスト名]
  ```
- pingの間隔を設定する
  ``` sh
  ping -i [間隔] [接続先IPアドレスまたはホスト名]
  ```
- pingの試験するパケット内容を設定する
  ``` sh
  ping -p [送信したいパケット内容] [接続先IPアドレスまたはホスト名]
  ```
- pingの試験するパケットサイズを設定する
  ``` sh
  ping -s [パケットサイズ] [接続先IPアドレスまたはホスト名]
  ```
- pingの試験するTTLの数を設定する
  ``` sh
  ping -t [TTLの数] [接続先IPアドレスまたはホスト名]
  ```

## traceroute
- 特定のホストへの経路を確認する
  ``` sh
  traceroute [接続先IPアドレスまたはホスト名]
  ```

- 応答時間の個数を指定する
  ``` sh
  traceroute -q [回数] [接続先IPアドレスまたはホスト名]
  ```
- TTLの最大値を指定して実行する
  ``` sh
  traceroute -m [TTL最大値] [接続先IPアドレスまたはホスト名]
  ```
- 経路を途中から表示する
  ``` sh
  traceroute -f [表示を開始したい行数] [接続先IPアドレスまたはホスト名]
  ```

## start
- バッチファイルやアプリケーションを呼び出だす。
  ``` sh
  start [呼び出したいバッチファイル・アプリケーション名]
  ```

## exit
- ログアウトする
  ``` sh
  start [呼び出したいバッチファイル・アプリケーション名]
  ```
  exitコマンドを実行するショートカットキーは`Ctrl+D`

## date
- 日時を表示する
  ``` sh
  date
  ```
- 指定した形式で日時を取得(date -d '1 day')
  ``` sh
  date -d '1 day'
  ```
  「'1 day'」の代わりに「tomorrow」を指定しても同様の結果を得ることができます
<br><br>

- 日時を設定する
  ``` sh
  date -s [設定日時]
  ```
- 時刻をUTC（世界標準時）で扱う
  ``` sh
  date -u
  ```
- フォーマットを指定する<br>
  「+」で始まるオプションでは日付や日時を表示するフォーマットを細かく設定することができます。
  ``` sh
  date +"%Y%m%d%I%M%S"
  ```
  | 書式 | 説明                                                                 |
  |----|--------------------------------------------------------------------|
  | %Y | 西暦4桁（1970〜）                                                        |
  | %y | 西暦下2桁（00〜99）                                                       |
  | %m | 月（01〜12）                                                           |
  | %b | Jan～Dec                                                            |
  | %B | January 〜 December                                                 |
  | %d | 日（01〜31）                                                           |
  | %H | 時（00〜23）                                                           |
  | %I | 時（01〜12）                                                           |
  | %M | 分（00〜59）                                                           |
  | %S | 秒（00〜59）                                                           |
  | %s | UTCからの時刻（1970-01-01 00:00:00からの時刻）                                 |
  | %a | 曜日（Sun, Mon, Tue, Wed, Thu, Fri, Sat）                              |
  | %A | 曜日（Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday） |
  | %u | 曜日（1：月曜日 〜 7：日曜日）                                                  |

## chcp
- 現在の文字コードを確認する
  ``` sh
  chcp
  ```
- 文字コードを変更する
  ``` sh
  chcp [文字コードIdentifier]
  ```
  | Identifier | .NET Name | Additional information                  |
  |------------|-----------|-----------------------------------------|
  | 932        | shift_jis | ANSI/OEM Japanese; Japanese (Shift-JIS) |
  | 20127      | us-ascii  | US-ASCII (7-bit)                        |
  | 51932      | euc-jp    | EUC Japanese                            |
  | 65001      | utf-8     | Unicode (UTF-8)                         |
