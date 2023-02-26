---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: DockerでAirFlow学習環境構築

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author: Mr. Green's Workshop
# multiple category is not supported
category: AirFlow
# multiple tag entries are possible
tags: [AirFlow, Docker, Python]
# thumbnail image for post
img: ":AirFlow_logo.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2023-02-12 08:11:06 +0900

# seo
# if not specified, date will be used.
meta_modify_date: 2023-01-01 00:00:00 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "Docker で AirFlow 学習環境をローカル構築構築する方法を解説。AirFlowをインストールして使用したい方は必見。前提環境 OS:windowsミドルウェア:Docker"
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

Docker で AirFlow 学習環境をローカル構築構築する方法を解説。
まず、AirFlowを自身の環境で使用するためには`python`と`Docker`が
必要なのでそれらのインストールからそれぞれ説明していきます。

# 前提環境

OS:windows
ミドルウェア:Docker

<!-- outline-end -->

# 学習環境構築

## python のインストール

- python のインストール方法については[こちら](2023-02-12-python_Beginner.md)を参照

## docker で AirFlow 環境を構築

1. docker をインストールする。インストールファイルは[こちら](https://www.docker.com/products/docker-desktop/)からダウンロードできる。
2. インストールが終わったら PC を再起動
3. 任意の場所に Docer の実行領域（ディレクトリ）を作る
   <br>![](/assets/img/posts/docker_mkdir.png)
4. Docker 実行の yaml ファイルを作成する。

   docker-compose.yaml

   ```yaml
   version: "3"
   services:
     web:
       image: apache/airflow:2.0.2
       container_name: airflow
       ports:
         - 8080:8080
       volumes:
         - ./opt/airflow:/opt/airflow
       command: db init # Use fist time only
       # command: webserver # Using with docker-compose up after exec `db init`
       # command: >
       # bash -c "airflow webserver -p 8080 -D && airflow scheduler -D"
   ```

5. PowerShell を起動して先ほど作成した docker の実行環境へ移動する。

   ![](/assets/img/posts/docker_PowerShell_cd.png)

6. 以下のコマンドで Docker コンテナーを起動して AirFlow 用の DB を初期化する。
   <br>最初に作成した yaml ファイルの最後に`command: db init`とあるが
   これは AirFlow のイメージを使用してデフォルトで設定されている SqlLite を初期化している。

   ```docker
   docker-compose up
   ```

   実行すると以下のような結果が返ってくる。

   ```
   Creating network "docker-airflow_default" with the default driver
   Creating airflow ... done
   Attaching to airflow
   airflow | DB: sqlite:////opt/airflow/airflow.db
   airflow | [2021-01-03 13:54:08,533] {db.py:678} INFO - Creating tables
   airflow | INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
   airflow | INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
   airflow | INFO  [alembic.runtime.migration] Running upgrade  -> e3a246e0dc1, current schema
   airflow | INFO  [alembic.runtime.migration] Running upgrade e3a246e0dc1 -> 15037123a2f, create is_encrypted
   ...(中略)...
   airflow | [2021-01-03 13:54:15,779] {manager.py:727} WARNING - No user yet created, use flask fab command to do it.
   airflow | [2021-01-03 13:54:25,468] {migration.py:517} INFO - Running upgrade 2c6edca13270 -> 61ec73d9401f, Add description field to connection
   airflow | [2021-01-03 13:54:25,497] {migration.py:517} INFO - Running upgrade 61ec73d9401f -> 64a7d6477aae, fix description field in connection to be text
   airflow | [2021-01-03 13:54:25,512] {migration.py:517} INFO - Running upgrade 64a7d6477aae -> e959f08ac86c, Change field in DagCode to MEDIUMTEXT for MySql
   airflow | [2021-01-03 13:54:26,502] {dagbag.py:440} INFO - Filling up the DagBag from /opt/airflow/dags
   airflow | Initialization done
   airflow exited with code 0
   ```

   `Initialization done`が表示されていれば OK
   初期化処理なので初期化完了後は Docker コンテナーは自動で停止します。

7. yaml ファイルを更新する。
   <br>最初に作成した yaml ファイルの`command: db init` をコメントアウト<br>代わりに `command: webserver` をアンコメントする。

   ```yaml
   version: "3"
   services:
     web:
       image: apache/airflow:2.0.2
       container_name: airflow
       ports:
         - 8080:8080
       volumes:
         - ./opt/airflow:/opt/airflow
       # command: db init # Use fist time only
       command: webserver # Using with docker-compose up after exec `db init`
       # command: >
       # bash -c "airflow webserver -p 8080 -D && airflow scheduler -D"
   ```

8. Apache Airflow の起動する
   <br>yaml の更新が終わったら Docker コンテナーを再起動します。
   <br>'-d'デタッチド・モードで起動しているので注意。

   ```docker
   docker-compose up -d
   ```

9. 起動確認
   <br>docer が無事起動できているか確認する。

   ```
   docker-compose ps
   ```

   正常に起動していれば、State が Up になっているはず。

   ```
   NAME                IMAGE                  COMMAND                  SERVICE             CREATED             STATUS              PORTS
   airflow             apache/airflow:2.0.2   "/usr/bin/dumb-init …"   web                 4 seconds ago       Up 3 seconds        0.0.0.0:8080->8080/tcp
   ```

   コンテナーが起動していることを確認したら、Web ブラウザで http://localhost:8080 にアクセスし、Apache Airflow のログイン画面が表示されることを確認します。
   ![](/assets/img/posts/docker_AirFlow_login.png)<br>
   今の状態だとログインユーザーを作成していないのでログインできない

10. 管理者アカウントの作成
    <br>Airflow の管理者アカウントは、Airflow の CLI (コマンドラインインタフェース) から作成することができるようになっています。
    <br>そのため、起動した Docker コンテナー内で Airflow の CLI を実行し、ユーザーを作成します。

    PowerShell で Docker コンテナーの ID を確認

    ```bash
    docker ps
    ```

    実行結果例

    ```
    CONTAINER ID   IMAGE                  COMMAND                  CREATED         STATUS         PORTS                    NAMES
    6e4d2cd8fe02   apache/airflow:2.0.2   "/usr/bin/dumb-init …"   7 minutes ago   Up 7 minutes   0.0.0.0:8080->8080/tcp   airflow
    ```

    上の例では、`6e4d2cd8fe02` がコンテナーの ID なので、この ID 使用して Airflow のコンテナーの Bash セッションを開始する。

    ```bash
    docker exec -it 6e4d2cd8fe02 bash
    ```

    Bash セッションを開始したら、以下の CLI コマンドを実行し、新規にユーザーを作成する。
    <br>ID や 名前、E-mail の情報は、任意で書き換えてください。

    ```bash
    airflow users create \
    --username tsubaki \
    --firstname morimoto \
    --lastname tsubaki \
    --role Admin \
    --email hogehoge@gmail.com
    ```

    実行すると、作成するユーザーのパスワード入力を求められるので任意のパスワードを設定する。
    任意のパスワードを設定します。
    入力が問題なければ、以下のような結果が返ってくればユーザー作成は完了。

    ```bash
    Password:
    Repeat for confirmation:
    Admin user tsubaki created
    ```

11. AirFlow にログイン
    <br>再度 http://localhost:8080 へアクセスし、作成したユーザーでログインする。
    ![](/assets/img/posts/docker_AirFlow_login2.png)
    ただし、Airflow の Web サーバーは起動しますが、DAG ファイルを認識しタスクを実行するスケジューラーは起動していない。

12. スケジューラーも起動するように yaml を更新する。

    ```yaml
    version: "3"

    services:
    web:
    image: apache/airflow:2.0.0
    container_name: airflow
    ports:
      - 8080:8080
    volumes:
      - ./opt/airflow:/opt/airflow
    # command: db init # Use fist time only
    # command: webserver # Using with docker-compose up after exec `db init`
    command: >
      bash -c "airflow webserver -p 8080 -D && airflow scheduler -D"
    ```

13. 一度コンテナを再起動して AirFlow にログイン
    <br>まず、以下コマンドでコンテナを停止

    ```
    docker-compose down
    ```

    そうしたら再度コンテナを起動

    ```
    docker-compose up -d
    ```

    起動できているかを以下コマンドで確認して起動できていれば再度 Web ブラウザで http://localhost:8080 にアクセスしログイン

    ```
    docker-compose ps
    ```

    これでスケジューラーも起動するようになった。
    <br>次回からは　`docker-compose start -d`で起動
    <br>起動後 http://localhost:8080 でブラウザを起動
    <br>終了するときは`docker-compose stop`

14. 最後に
    環境構築としては完了だが最後に今後必要になるフォルダを作っておこう。

    ```
    dags_folder          | /opt/airflow/dags
    plugins_folder       | /opt/airflow/plugins
    base_log_folder      | /opt/airflow/logs
    ```

    ![](/assets/img/posts/docker_mkdir_dags.png)

# トラブルシューティング

コンテナを立ち上げても AirFlow の画面が起動しない場合、以下の手順を試す。

1. docker-compose down でコンテナを削除
2. .\opt\airflow 配下の`airflow-webserver.err`・`airflow-webserver.log`・`airflow-webserver.out`・`airflow-webserver-monitor.pid`を削除
3. `docker-compose up -d`でコンテナを再作成
4. AirFlow の画面が起動するか確認する。


## 参考
- [AirFlowの概要について](/posts/2023-02-12-AirFlow_introduction)
- [AirFlowをローカルで構築する方法](/posts/2023-02-12-AirFlow_built_environment)
