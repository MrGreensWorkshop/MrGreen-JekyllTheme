---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: Examples

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Mr. Green's Workshop
# multiple category is not supported
category: jekyll
# multiple tag entries are possible
tags: [jekyll, sample, example post]
# thumbnail image for post
img: ":post_pic1.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-02-10 08:11:06 +0900

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

ここではよく使われるコマンドのみを列挙する。
詳しい情報や、その他の情報は公式のリファレンスを参照 <br>
[Windows のコマンド](https://learn.microsoft.com/ja-jp/windows-server/administration/windows-commands/windows-commands)

# 基本的な操作
| コマンド | 用途                           | 詳細                |
| -------- | ------------------------------ | ------------------- |
| cd       | ディレクトリの移動             | [詳細をみる](#cd)   |
| dir      | ディレクトリの中身を確認する   | [詳細をみる](#dir)  |
| tree     | ディレクトリ構造を確認する     | [詳細をみる](#tree) |
| cls      | 画面をクリアする               | [詳細をみる](#cls)  |
| help     | コマンドの一覧や詳細を表示する | [詳細をみる](#help) |

<br><br>

# ファイル操作関連
| コマンド | 用途                                         | 詳細                  |
| -------- | -------------------------------------------- | --------------------- |
| コマンド | オプション                                   |                       |
| type     | ファイルの内容を確認する                     | [詳細をみる](#type)   |
| move     | ファイルの移動、もしくはディレクトリ名の変更 | [詳細をみる](#move)   |
| copy     | ファイルをコピーする                         | [詳細をみる](#copy)   |
| xcopy    | ファイルやディレクトリをコピーする           | [詳細をみる](#xcopy)  |
| mkdir    | ディレクトリを新規作成                       | [詳細をみる](#mkdir)  |
| del      | ファイルを削除する                           | [詳細をみる](#del)    |
| rmdir    | ディレクトリを削除する                       | [詳細をみる](#rmdir)  |
| rename   | ファイルやディレクトリ名の変更               | [詳細をみる](#rename) |

<br><br>

# ネットワーク系
| コマンド | 用途                                                 | 詳細                    |
| -------- | ---------------------------------------------------- | ----------------------- |
| ipconfig | PCのIPアドレス等の情報を確認する                     | [詳細をみる](#ipconfig) |
| nslookup | ウェブサイトのドメイン名からIPアドレスを取得(逆も可) | [詳細をみる](#nslookup) |
| ping     | 指定したIPアドレスとの通信確認                       | [詳細をみる](#ping)     |
| tracert  | 通信相手までの経路確認                               | [詳細をみる](#tracert)  |

<br><br>

# その他

| コマンド | 用途                                             | 詳細                 |
| -------- | ------------------------------------------------ | -------------------- |
| start    | コマンドプロンプトを別ウィンドウで開始           | [詳細をみる](#start) |
| exit     | コマンドプロンプトを閉じる                       | [詳細をみる](#exit)  |
| date     | 日付の表示、設定をする。                         | [詳細をみる](#date)  |
| time     | 時刻の表示、設定をする。                         | [詳細をみる](#time)  |
| chcp     | コマンドプロンプトの文字コードを確認、設定する。 | [詳細をみる](#chcp)  |

<br><br>

# コマンド使用使用方法

各コマンドのオプションは組み合わせて使える。
ここでは基本的に単一のオプションコマンドの説明をしているが
必要に応じて組み合わせて使ってみよう。

## cd
- 指定したパスに移動する
  ``` bat
  cd [移動したいディレクトリーパス]
  ```
- 現在のディレクトリから一つ上位のディレクトリに移動する
  ``` bat
  cd ..
  ```
- 現在のディレクトリからドライブ直下に直接移動する
  ``` bat
  cd \
  ```
- 今いるディレク(HOGE1)の一つ階層が上の別のフォルダー(HOGE2)へ移動
  ``` bat
  cd ..\hoge2
  ```

## dir
- 現在いるディレクトリーのファイルとサブディレクトリの一覧
  ``` bat
  dir
  ```
- 現在いるディレクトリーのhogeフォルダーの中のファイルとサブディレクトリの一覧
  ``` bat
  dir hoge
  ```
- 指定したディレクトリーの中のファイルとサブディレクトリの一覧
  ``` bat
  dir [パス]
  ```

- 指定した属性のファイルを表示する
  ``` bat
  dir /a:[属性]
  ```
  > 属性一覧<br>
    d : ディレクトリ<br>
    r : 読み取り専用<br>
    h : 隠しファイル<br>
    a : アーカイブ<br>
    s : システム ファイル<br>
    i : 非インデックス対象ファイル<br>
    l : 再解析ポイント<br>
    \- : その属性以外 (`-D` =  ディレクトリ以外)

- 表示形式を変更して表示する<br>
  ファイル名またはディレクトリ名だけを表示
  ``` bat
  dir /b
  ```

  ワイド形式で表示
  ``` bat
  dir /w
  ```

  ファイル名またはディレクトリ名を縦方向にワイド形式で表示
  ``` bat
  dir /d
  ```

- 並べ替え表示
  ``` bat
  DIR /O:[ソート順]
  ```
  >ソート一覧<br>
    N : 名前順 (アルファベット)<br>
    S : サイズ順 (小さい方から)<br>
    E : 拡張子順 (アルファベット)<br>
    D : 日時順 (古い方から)<br>
    G : グループ (ディレクトリから)<br>
    \- : 降順<br>

- サブディレクトリに含まれるファイルやディレクトリも表示
  ``` bat
  dir /s
  ```

## tree
TREE コマンドの引数としてディレクトリ構造を表示したいパスを指定します。パスは相対パスでも絶対パスでも指定できます。
- TREEで表示する。
  ``` bat
  tree
  ```
- パスを指定してディレクトリ構造を表示する
  ``` bat
  tree [パス]
  ```
- ディレクトリに含まれるファイル名も表示
  ``` bat
  tree /f
  ```
- ツリー構造をASCII文字を使って表示する ※[ASCII文字とは](https://e-words.jp/w/ASCII%E6%96%87%E5%AD%97.html#:~:text=ASCII%E6%96%87%E5%AD%97%20%E3%81%A8%E3%81%AF%E3%80%81%20%E6%96%87%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89%20%E3%81%AE%E6%A8%99%E6%BA%96%E8%A6%8F%E6%A0%BC%E3%81%A8%E3%81%97%E3%81%A6%E5%BA%83%E3%81%8F%E6%99%AE%E5%8F%8A%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%8C%20ASCII%20%E3%80%8D%EF%BC%88American%20Standard,Code%20for%20Information%20Interchange%E3%80%81%E3%82%A2%E3%82%B9%E3%82%AD%E3%83%BC%EF%BC%89%E3%81%AB%E5%90%AB%E3%81%BE%E3%82%8C%E3%82%8B%E6%96%87%E5%AD%97%E3%81%AE%E3%81%93%E3%81%A8%E3%80%82%20%E3%81%84%E3%82%8F%E3%82%86%E3%82%8B%E5%8D%8A%E8%A7%92%E3%81%AE%E8%8B%B1%E5%AD%97%EF%BC%88a%EF%BD%9Ez%E3%80%81A%EF%BD%9EZ%EF%BC%89%E3%82%84%E3%82%A2%E3%83%A9%E3%83%93%E3%82%A2%E6%95%B0%E5%AD%97%EF%BC%880%EF%BD%9E9%EF%BC%89%E3%80%81%E8%A8%98%E5%8F%B7%E3%80%81%E7%A9%BA%E7%99%BD%E6%96%87%E5%AD%97%E3%80%81%20%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97%20%E3%81%AA%E3%81%A9128%E6%96%87%E5%AD%97%E3%81%8C%E8%A6%8F%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B%E3%80%82)
  ``` bat
  tree /a
  ```
## cls
- 画面の表示内容をクリアする
  ``` bat
  cls
  ```


### help

- 主要なコマンドについての簡易ヘルプを表示する
  ``` bat
  help
  ```

- コマンドのヘルプを表示する。
  ``` bat
  help [コマンド]
  ```

## type
- ファイルの内容を表示する
  ``` bat
  type [内容を見たいパス]\[ファイル名]
  ```

- 複数のファイルの内容を表示する(デイレクリーが異なる場合それぞれパスも記載)
  - ファイル名を指定
    ``` bat
    type ファイルA.txt ファイルB.txt ファイルC.txt
    ```
  - [ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使う
    ``` bat
    type ファイル*.txt
    ```

- ファイルの内容を並び変える
  - 昇順
    ``` bat
    type ファイル.txt | sort
    ```

  - 降順
    ``` bat
    type ファイル.txt | sort \r
    ```

  - 並び替えのための判定文字を2文字めにずらす
    ``` bat
    type ファイルA.txt  | sort \+2
    ```
- 複数のファイルを一つのファイルにまとめる。

  - ファイル名指定
    ``` bat
    type ファイルA.txt ファイルB.txt ファイルC.txt > ファイルD.txt
    ```
  - [ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使用
    ``` bat
    type ファイルB.txt > ファイルD.txt
    ```

## move
- 1つのファイルを移動する
  ``` bat
  move [移動したいファイル名] [移動しいたいパス]

- 複数のファイルを移動する（[ワイルドカード](https://www.javadrive.jp/command/ini/index7.html#section1)を使用）
  ``` bat
  move *.[移動したいファイルの拡張子]  [移動しいたいパス]
  ```


- ディレクトリー名を変更する
  ``` bat
  move [変更するディレクトリー名] [変更したいディレクトリー名]
  ```

- ファイル名を変更する
  ``` bat
  move [ファイル名を変更したいファイル名] [変更するファイル名]
  ```


## copy
- 1つのファイルをコピーする
  ``` bat
  copy [コピー元ファイル名] [コピー先のファイル名]
  ```

- 複数のファイルをコピーする
  ``` bat
  copy *.[コピー元の拡張子] [コピー先のディレクトリーパス]
  ```

- ディレクトリに含まれるファイルをまとめてコピーする
  ``` bat
  copy *.[コピー元のディレクトリパス] [コピー先のディレクトリーパス]
  ```

- 複数のファイルを1つのファイルにまとめる
  ``` bat
  copy ファイルAtxt+ファイルB.txt [コピー先のファイル名]
  ```

## mkdir
- ディレクトリーを作成する
    ``` bat
     mkdir [ディレクトリ名]
    ```
- パーミッションを指定しディレクトリを作成する
    ``` bat
    mkdir \m [パーミッション指定] [ディレクトリ名]
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

- エラーを表示せず記述したディレクトリが存在しなければ作成する

  親ディレクトリが存在しなくてもエラーメッセージを表示せずに親ディレクトリと子ディレクトリを作成する。
  ``` bat
  mkdir \p [親ディレクトリ名]\[子ディレクトリ名]
  ```

## del
- ファイルを削除する
  ``` bat
  del [削除するファイル名]
  ```

- 現在いるフォルダにあるファイルを全て削除
  ``` bat
  del *
  ```

- あるフォルダ内のすべてのファイルを削除
  ``` bat
  del .\[削除したいファイルのあるフォルダ]\*
  ```

- 特定のファイルだけを削除する
  ```
  del *.[拡張子]
  ```

- サブフォルダのファイルを削除する
  ``` bat
  del /s [ファイル名]
  ```

- サブフォルダも含むすべてのtxtファイルを削除
  ``` bat
  del /s *.txt
  ```

## rmdir
- ディレクトリを削除
  ``` bat
  rmdir [ディレクトリ名]
  ```
- 親ディレクトリも削除する
  ``` bat
  rmdir \p [親ディレクトリ名]\[子ディレクトリ]
  ```

## rename
- ファイルやフォルダの名前を変更
  ``` bat
  rename [変更前のファイル・フォルダ名] [変更後のファイル・フォルダ名]
  ```

- ファイル名はそのままで拡張子だけ変更する
  ``` bat
  rename [ファイル名].[変更前の拡張子] *.[変更後の拡張子]
  ```

- 別のフォルダ内のファイル名を変更する
  ``` bat
  rename [変更前のパス付きファイル名] [変更後のファイル名]
  ```
- 複数のファイルの拡張子を一気に変更する
  ``` bat
  rename *.[変更前の拡張子] *.[変更後の拡張子]
  ```

- 複数のファイル名の共通部分を一括で変更する
  ``` bat
  rename [変更前の共通部分]*.[拡張子] [変更後の共通部分]*.[拡張子]
  ```

## ipconfig
- ルーターや自分のパソコンのIPアドレスを調べる
  ``` bat
  ipconfig
  ```
- ルーターからのIPアドレスを一時的に解放
  ``` bat
  ipconfig /release
  ```

- IPアドレスを再取得
  ``` bat
  ipconfig /renew
  ```
- MACアドレスなど詳細な情報を取得
  ``` bat
  ipconfig /all
  ```

## nslookup
- IPアドレスからドメイン名を確認
  ``` bat
  nslookup [IPアドレス]
  ```

- ドメイン名からIPアドレスを確認
  ``` bat
  nslookup [ドメイン名]
  ```
- ネームサーバーとIPアドレスを取得
  ``` bat
  nslookup -type=ns [ドメイン名]
  ```

- メールサーバーとIPアドレスが表示されます
  ``` bat
  nslookup -type=mx [ドメイン名]
  ```

- SOAレコードを取得
  ``` bat
  nslookup -type=soa xxx.co.jp
  ```

## ping
- 通信が確立しているかどうか調べる
  ``` bat
  ping [IPアドレス]
  ```

## tracert
- 通信が確立しているかルーティングの途中で経由したホスト（ルータ）を逐一表示する
  ``` bat
  tracert [IPアドレス]
  ```

## start
- 別のウィンドウでコマンドを実行する
  ``` bat
  START ["タイトル"] [/D パス] [/I] [/MIN] [/MAX] [/SEPARATE | /SHARED]
  [/LOW | /NORMAL | /HIGH | /REALTIME | /ABOVENORMAL | /BELOWNORMAL]
  [/NODE <NUMA ノード>] [/AFFINITY <16 進数の関係マスク>] [/WAIT] [/B]
  [コマンド/プログラム] [パラメーター]
  ```
## exit
- EXIT コマンドはコマンドプロンプトを終了or実行しているバッチファイルを終了
  ``` bat
  EXIT [/B] [終了コード]
  ```
## date
- システムに設定されている日付を出力する
  ``` bat
  date /t
  echo %date%
  ```

- システムの日付を変更する
  ``` bat
  date [yy-mm-dd]
  ```

## time
- 現在時刻を取得
  ``` bat
  time /t
  echo %time%
  ```

- システムの時間を変更
  ``` bat
  time [時]:[分]:[秒].[コンマ秒]
  ```
## chcp
- 現在の文字コードを確認する
  ```
  chcp
  ```
- 文字コードを変更する(文字コードを変更する)
  ``` bat
  chcp 65001
  ```

  [文字コード一覧](https://learn.microsoft.com/en-us/windows/win32/intl/code-page-identifiers)
