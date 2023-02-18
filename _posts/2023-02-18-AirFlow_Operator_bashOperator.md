---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: AirFlowのDAGの基本的な作成方法

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
# author:
# multiple category is not supported
category: AirFlow
# multiple tag entries are possible
tags: [AirFlow, Python, DAG, Operator]
# thumbnail image for post
img: ":AirFlow_logo.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2023-02-17 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "AirFlowのDAGの中複数のTaskを定義して処理を組み込むことができる。タスクを定義するにはAirFlowのオペレータを
使用することで簡単に定義することができる。"
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

AirFlow の DAG の中複数の Task を定義して処理を組み込むことができる。タスクを定義するには AirFlow のオペレータを
使用することで簡単に定義することができる。ここでは`BashOperator`と`DummyOperator`を利用して DAG を作成する手順を解説していく。
尚、本記述は AirFlow は AWS にある MWAA で実装されている `Ver.2.0.2` を想定する。

> DAG の各種`Operator`は AirFlow のバージョンによって若干異なるので詳細は公式ページの確認をおすすめします。
> [公式ページ](https://airflow.apache.org/docs/apache-airflow/2.0.2/_api/airflow/models/dag/index.html?highlight=dag#module-airflow.models.dag)

<!-- outline-end -->

## DAG ファイルの作成

まず DAG を作成するには任意の名前で`python`ファイルを作成する。
DAG ファイルは AirFlow の DAG フォルダーに配置する。

![AirFlow_DAGの置き場所](/assets/img/posts/2023-02-18-AirFlow_Operator_bashOperator.png)

## DAG の定義

DAG ファイルを作成したら、ソースコードを記述していく、まずは import ブロックを記述して最低限の`import`の宣言を行う。

```py
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.dummy import DummyOperator
from datetime import timedelta, datetime
```

その後 DAG の各パラメータの定義を行う。今回は`run_this`と`run_this_last`の Task を定義して
`>>` ビットシフト演算子で依存関係を定義する。

```py
# args Operatorで使用するパラメーターのデフォルト値を定義する
# *dictで定義すること。
# 今回はownerのみを定義
args = {
    'owner': 'airflow',
}

# DAGの定義フォーマット
dag = DAG(
    dag_id='example_DAG',  # DAGのID名
    description='DAGのサンプル',  # DAGの説明
    default_args=args,  # Operatorのデフォルト
    schedule_interval='10 10 * * *',  # 実行スケジュール cron形式で定義 毎日10時10分に実行
    start_date=datetime(2023, 2, 15, 0, 0, tzinfo=None),  # daterime形式で記述 2023-2-15 00:00に以降にスケジュールが有効
    dagrun_timeout=timedelta(minutes=60),  # DAGの実行タイムアウト時間をtimedeltaで定義 60分でタイムアウト
    tags=['example', 'example2'],  # TAG名を定義 listで定義して複数設定可能
    params={"example_key": "example_value"},  # Operatorで使用する Taskのパラメータをdict型で定義
)
```

## Task の定義

DAG の定義が終われば次に Task の定義をしていく。今回は`BashOperator`と`DummyOperator`を使用して Task を定義する。

```py
with dag(
    # [START howto_operator_bash]
    run_this = BashOperator(
        task_id='run_this',  # Task_IDを定義
        bash_command='echo 1',  # BashOperatorで実行するコマンドを記述

    )
    # [END howto_operator_bash]

    run_this_last = DummyOperator(
        task_id='run_this_last',  # Task_IDを定義
    )
)
# Task_IDの依存関係を`>>`で定義
run_this >> run_this_last
```

このように DAG を定義して AirFlow を起動すると以下のように AirFlow の UI 画面で、DAG がインポートされる。
![AirFlow_UI画面](/assets/img/posts/2023-02-18-AirFlow_Operator_bashOperato_dug_ui.png)

AirFlow からインポートされた DAG のコードも確認することができる。
![AirFlow_UI画面2](/assets/img/posts/2023-02-18-AirFlow_Operator_bashOperato_dug_ui_2.png)

## 最後に

今回は基本的な DAG の作成方法について解説してきたが、次回は Task 定義で使用している。Operator について解説していく。

## 参照

DAG 定義のパラメーターについてや概要はこちらから

- [AirFlow の DAG パラメータ解説](/_posts/2023-02-17-AirFlow_DAG.md)
- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)

AirFlow の環境構築方法（インストール方法）はこちらから

- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)
