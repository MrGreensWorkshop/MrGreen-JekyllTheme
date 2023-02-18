---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title:AirflowでDAG間の依存関係を定義する

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
comments_disable: true

# publish date
date: 2023-02-19 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "AirflowでDAG間の依存関係を定義するには external_task_sensor を使用して観測しているDAGが終了したら後続のTaskを実行させることができる"
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

Airflow で DAG 間の依存関係を定義するには `external_task_sensor` を使用して観測している DAG が終了したら後続の Task を実行させることができる。
実際には Airflow で DAG 同士の依存関係を定義する方法は 2 つある。1 つは `TriggerDagRunOperator` を使う方法と、 `ExternalTaskSensor` を使う方法だ。
今回は`external_task_sensor`について詳しく解説していこうと思う。

尚、本記述は AirFlow は AWS にある MWAA で実装されている `Ver.2.0.2` を想定する。

> DAG の各種`Operator`は AirFlow のバージョンによって若干異なるので詳細は公式ページの確認をおすすめします。
> [公式ページ](https://airflow.apache.org/docs/apache-airflow/stable/howto/operator/external_task_sensor.html#externaltasksensor)

<!-- outline-end -->

# external_task_sensor の定義

`external_task_sensor`は別の DAG または別の DAG 内のタスクが完了するまで待機します。
`external_task_sensor`は[`BaseOperator`](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/baseoperator/index.html#airflow.models.baseoperator.BaseOperatorLink)を継承しているので通常の Operator と同様に定義できる。
`BaseOperator`のパラメータについては別で解説していこうと思う。

```py
from airflow.sensors.external_task import ExternalTaskSensor

Check_Task = ExternalTaskSensor(
    task_id="Check_Task",
    external_dag_id=external_dag_id,  # チェックするDAGのID
    external_task_id=external_task_id,  # チェックするTaskのID
    execution_delta=timedelta(minute=10),  # チェックするDAGとの実行時間差
    timeout=600,  # タイムアウトの時間10分
    allowed_states=["success"], # 成功判定するステータス
    failed_states=["failed", "skipped"], エラー判定するステータス
    check_existence=True,
)

```

[サンプルファイル](/assets/Sample_code/Python/A_simple_ExternalTaskSensor.py)

# external_task_sensor のパラメーター

上記サンプルで定義しているパラメーターについて解説していく。

#### 定義必須

## task_id(str)

### 定義必須

`BaseOperator`から継承したパラメータ
Task_id を定義する。

## external_dag_id (str)

### 定義必須

クリアする必要がある依存タスクを含む dag_id。

## external_task_id (str)

### 定義必須

クリアする必要がある依存タスクの task_id。

## allowed_states (反復可能)

### 定義任意

許可された状態の反復可能、デフォルトは['success']

## failed_states (反復可能)

### 定義任意

失敗または許可されていない状態の反復可能、デフォルトは None

## execution_delta (Optional[datetime.timedelta])

### 定義任意

前回の実行との時差 既定値は、現在のタスクまたは DAG と同じ execution_date です。 昨日の場合は、`[positive!]` `datetime.timedelta(days=1)` を使用します。いずれも`execution_delta`または e`xecution_date_fn`を渡すことができます。ただし両方ではありません。

## execution_date_fn (オプション[呼び出し可能])

### 定義任意

現在の実行日を最初の日付として受け取る関数 位置指定引数と、オプションで任意の数のキーワード引数を コンテキストディクショナリであり、クエリに必要な実行日を返します。 `execution_delta`または`execution_date_fn`のいずれかを外部タスクセンサーに渡すことができます。 しかし、両方ではありません。

check_existence (bool) -- 外部タスクが存在するかどうかを確認するには True に設定します ( external_task_id が None でない) か、待機する DAG が存在するかどうかを確認します ( external_task_id なし)、外部タスクの場合はすぐに待機を停止します または DAG が存在しません (既定値: False)

# execution_deltaの定義で注意する点
 `execution_delta ([datetime.timedelta])`のパラメーター定義する際に気を付けないといけない。
 執者も`execution_delta`では一度はまった経験があるので備忘録のため解説しておく。
 `execution_delta`で設定する値はDAGクリアする必要のあるDAGの`{{execution date}}`の時間になるように定義する必要があります。
例えば`DAG_A`が10時00分実行で`DAG_B`が11時00分実行で`DAB_A`のクリアを定義しないといけない場合、`execution_delta=timedelta(minute=60)`となる
つまり、チェックするDAGとの実行時間差を設定する必要がある。この時時間差はぴったりに定義しないと`external_task_sensor`がうまく動作しないので注意が必要です。


# 終わりに

今回は`external_task_sensor`についてまとめてみた。
特にDAG間の依存関係をすることは実践ではよくあることので使い方をマスターしておこう。

# 関連記事
DAG 定義のパラメーターについてや概要はこちらから

- [AirFlow の DAG パラメータ解説](/_posts/2023-02-17-AirFlow_DAG.md)
- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)
- [AirFlowのDAGの基本的な作成方法](/_posts/2023-02-18-AirFlow_Operator_bashOperator.md)

AirFlow の環境構築方法（インストール方法）はこちらから

- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)


# 参照
- [baseoperator-AirFlow公式](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/baseoperator/index.html#airflow.models.baseoperator.BaseOperatorLink)
- [external_task_sensor-AirFlow公式](https://airflow.apache.org/docs/apache-airflow/2.0.2/_api/airflow/sensors/external_task_sensor/index.html)
