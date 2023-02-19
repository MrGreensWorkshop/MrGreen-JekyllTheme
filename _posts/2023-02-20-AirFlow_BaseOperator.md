---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: AirflowのOperatorの基本

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
date: 2023-02-20 00:00:00 +0900

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
meta_description: "Airflowで様々なオペレーターを使いこなすためには、ほぼすべてのオペレーターで継承しているBaseOperatorについて理解する必要がある。"
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

Airflow で様々なオペレーターを使いこなすためには、ほぼすべてのオペレーターで継承している`BaseOperator`について理解する必要がある。
そこで今回は`Operator`の Class 構成も交えながら解説していこうと思う。

尚、本記述は AirFlow は AWS にある MWAA で実装されている `Ver.2.0.2` を想定する。

> DAG の各種`Operator`は AirFlow のバージョンによって若干異なるので詳細は公式ページの確認をおすすめします。
> [公式ページ](https://airflow.apache.org/docs/apache-airflow/stable/howto/operator/external_task_sensor.html#externaltasksensor)

<!-- outline-end -->

# 各 Operator と BaseOperator

各 `Operator`は基本的に`BaseOperator`クラスを継承している。
例として`BashOperator` クラス定義を覗いてみる。

```py
import os
import signal
from subprocess import PIPE, STDOUT, Popen
from tempfile import TemporaryDirectory, gettempdir
from typing import Dict, Optional

from airflow.exceptions import AirflowException
from airflow.models import BaseOperator
from airflow.utils.decorators import apply_defaults
from airflow.utils.operator_helpers import context_to_airflow_vars


class BashOperator(BaseOperator):
    r"""
    Execute a Bash script, command or set of commands.

    .. seealso::
        For more information on how to use this operator, take a look at the guide:
        :ref:`howto/operator:BashOperator`
....

```

上記のクラス定義のコードを見てもわかる通り`BashOperator`は`BaseOperator`を継承している。このように AirFlow で使われている各`Operator`は`BaseOperator`を継承して実装されている。

継承しているということは、`BaseOperator`のパラメーター定義を理解しておくことで、様々な場面での
パラーメーター定義について応用を効かせて実装することが可能になる。

![](/assets/img/posts/AirFlow_Operator.svg)

Base

# BaseOperator のパラメーター

上記サンプルで定義しているパラメーターについて解説していく。

## 0task_id (str)

### 定義必須

タスクの一意で意味のある ID

## owner (str)

### 定義推奨

タスクの所有者。(例:ユーザー/人/チーム/ロール名)所有権を明確にしておくことを勧めます。

## email (str | Iterable[str] | None) –

### 定義任意

電子メールアラートで使用される「宛先」電子メールアドレス。これは、 単一の電子メールまたは複数の電子メール。複数のアドレスを コンマまたはセミコロンで区切られた文字列、または文字列のリストを渡します。

## email_on_retry (bool)

### 定義任意

タスクが再試行されるときに電子メールアラートを送信する必要があるかどうか定義できる

## email_on_failure (bool) – Indicates whether email alerts should be sent when a task failed

### 定義任意

タスクが失敗した場合、電子メール アラートを送信する必要があるかどうか定義できる

retries (int | None)

### 定義任意

タスクの失敗前に実行する必要がある再試行回数

## retry_delay (timedelta | float)

### 定義任意

再試行間のするまでの待機時間を定義できます。秒として設定でき、デフォルトは `timedelta(seconds=300)`(5 分）です。
つまり、タスクの失敗前に実行する必要がある再試行する場合、5 分後に再試行します。

## retry_exponential_backoff (bool)

### 定義任意

再試行遅延時に指数バックオフ アルゴリズムを使用して、再試行間の待機時間を徐々に長くします。(遅延は秒に変換されます)
一定間隔で再試行する場合は不要。

## max_retry_delay (timedelta | float | None)

### 定義任意

再試行間の最大遅延間隔`.timedelta float timedelta` で定義できる。
`retry_exponential_backoff`を設定した場合はセットで定義しておいたほうが良い。

start_date (datetime | None)

### 基本定義不要

最初のタスク インスタンス を日付を定義します。
基本的には定義不要で DAG 内の特定の Task のみ時間をずらして実行したい場合などに使用する。
動的に定義することも可能だが、外部タスクとの依存関係定義で沼ってしまうので固定値を推奨したい。
固定値を定義する場合の使い方としては、Task を追加しても特定の日付までは追加した Task を実行したく
ない場合に使用できるが、当日デプロイすることが基本だと思うのであまり使用用途はないと思う。

どうしても特定の Task だけ起動時間を遅らせるのであれば`external_task_sensor`などで外部タスクを監視させ
Dummy オペレータを使用し時間をずらしたりする方がよい。
あくまで`start_date`をいじると インスタンス 日時が変わるので DAG の依存関係などへの影響が大きい。

詳細については、別途 `start_date について'で解説したいと思う。

## end_date (datetime | None)

### 基本定義不要

定義すると この日付を超えて Task は実行されません。
しかし基本的に当日デプロイすることが基本だと思うのであまり使用用途はないと思う。

## depends_on_past (bool)

### 基本定義不要

`True` に設定すると、前のインスタンスが成功したかスキップされた場合にのみ、タスク インスタンスが順番に実行されます。
そのため、前回の Task が失敗している場合に今回の Task を実行してしまうと不都合が発生する場合`True`にすることで前回の実行が
成功又はスキップしていない限り実行されません。

## wait_for_downstream (bool)

### 基本定義不要

`True` に設定すると、タスク X のインスタンスは、タスク X の前のインスタンスのすぐ下流にあるタスクが正常に終了するか、実行前にスキップされるまで待機します。
これは、タスク X の異なるインスタンスが同じアセットを変更し、このアセットがタスク X の下流のタスクによって使用される場合に役立ちます。
また、前のタスク インスタンスのすぐ下流のタスクのみが待機されることに注意してください。 さらに下流のタスクのステータスは無視されます。

## dag (DAG | None)

Task がアタッチされている DAG への参照

## priority_weight (int)

### 定義任意

他のタスクに対するこのタスクの優先順位の重み。 これにより、エグゼキューターは、物事がバックアップされたときに、他のタスクよりも優先度の高いタスクをトリガーできます。
より重要なタスクには、priority_weight をより大きな数値に設定します。
特に並列する Task が多い中でより時間の長い Task にたいして大きい数字を定義すると Task 処理順序による処理遅延が減る。

## weight_rule (str)

## 定義任意

タスクの有効な総優先度の設定を行う。合計値が高いほど優先的にスケジューリングされます。
オプションは`{ downstream | upstream | absolute }` の 3 つがあり、デフォルトは `downstream` である。`downstream`に設定されていると後続 Task に設定されている`priority_weight`を全体的に見た Task の優先度が評価されます。`upstream`に設定されると上流の Task に設定されている`priority_weight`の合計で優先度が評価されます。
`absolute`に設定するとその Task 単体の`priority_weight`の合計で優先度が評価されます。これのメリットとしては、非常に大きな DAG の場合、タスク作成プロセスが大幅に
高速化されます。単純な処理を並列で大量にタスクを動かす場合には`absolute`が良いだろう。
オプションは、文字列として設定するか、静的クラス `airflow.utils.WeightRule` で定義された定数を使用して設定できます。

## queue (str)
### 定義不要
このジョブを実行するとき、どのキューをターゲットにするか定義できる。
このパラーメーターについては公式でも詳しく解説していおらず、後日調査をしておこうと思う。

## pool (str | None)
### 定義不要
このタスクが実行される`slot pool `を指定できる。
`slot pool `は、特定のタスクの同時実行を制限する方法です。
このパラーメーターについては公式でも詳しく解説していおらず、後日調査をしておこうと思う。

## pool_slots (int) –
### 定義不要

このタスクが使用する`pool slots`の数 (>= 1) 1 未満の値は使用できません。
このパラーメーターについては公式でも詳しく解説していおらず、後日調査をしておこうと思う。

## sla (timedelta | None)
### 定義不要
ジョブが成功すると予想される時間を設定します。
これは、期間が終了した後の `timedelta` を表すことに注意してください。
たとえば、SLA を 1 時間に設定した場合、2016-01-01 00:00 のインスタンスがまだ成功していない場合、
スケジューラは 2016-01-02 01:00 直後に電子メールを送信します。
スケジューラは、SLA のあるジョブに特別な注意を払い、SLA ミスのアラート メールを送信します。 SLA ミスも、後で参照できるようにデータベースに記録されます。 同じ SLA 時間を共有するすべてのタスクが 1 つのメールにまとめられ、その時間の直後に送信されます。 SLA 通知は、タスク インスタンスごとに 1 回だけ送信されます。
例) `sla = timedelta(minutes=60)`


## execution_timeout (timedelta | None)
### 定義任意 
Taskのタイムアウト時間を定義する。タイムアウトするとTaskは失敗となる。
基本的にはDAG側でタイムアウトを定義するのが一般的ではあるが、個別にタイムアウトを設定したい場合はここで定義するとよい。

## on_failure_callback (TaskStateChangeCallback | None)
### 定義任意
Taskが失敗したときに呼び出される関数名を定義することができる。
コンテキスト ディクショナリが単一のパラメータとしてこの関数に渡されます。 コンテキストには、タスクインスタンスに関連するオブジェクトへの参照が含まれており、API の`macros section`に記載されています。
使用例でいういうと、error内容をbashのlogに出力させたり。webhookを利用して、外部サービスへ情報を連携したりが可能である。
執者は後者でSlackへアラートを飛ばすといったことを行ったことがある。
Slackへアラートを飛ばす方法については別の機会に解説したいと思う。

## on_execute_callback (TaskStateChangeCallback | None)
### 定義任意
Taskが実行されるときに呼び出される関数名を定義することができる。
`on_failure_callback`と同様にコンテキスト ディクショナリーが単一のパラメーターとして渡される。

## on_retry_callback (TaskStateChangeCallback | None)
### 定義任意
Taskが再実行されるときに呼び出される関数名を定義することができる。
`on_failure_callback`と同様にコンテキスト ディクショナリーが単一のパラメーターとして渡される。


## on_success_callback (TaskStateChangeCallback | None)
### 定義任意
Taskが成功ときに呼び出される関数名を定義することができる。
`on_failure_callback`と同様にコンテキスト ディクショナリーが単一のパラメーターとして渡される。

## pre_execute (TaskPreExecuteHook | None) –
### 定義不要
Taskを実行する直前に呼び出される関数名を定義することができる。
`on_failure_callback`と同様にコンテキスト ディクショナリーが単一のパラメーターとして渡される。
この関数で例外を発生させると、Taskの実行をす防ぐことができるのでチェック用の関数を組み込んだりすることも可能。
※実験的な昨日パラメータなので使用は避けたほうがよい。

## post_execute (TaskPostExecuteHook | None) 
### 定義不要
Taskを実行直後に呼び出される関数名を定義することができる。
`on_failure_callback`と同様にコンテキスト ディクショナリーが単一のパラメーター（実行結果含む）として渡される。
, receiving a context dictionary and task result; raising an exception will prevent the task from succeeding.

※実験的な昨日パラメータなので使用は避けたほうがよい。

This is an experimental feature.

trigger_rule (str) – defines the rule by which dependencies are applied for the task to get triggered. Options are: default is . Options can be set as string or using the constants defined in the static class { all_success | all_failed | all_done | all_skipped | one_success | one_done | one_failed | none_failed | none_failed_min_one_success | none_skipped | always}all_successairflow.utils.TriggerRule

resources (dict[str, Any] | None) – A map of resource parameter names (the argument names of the Resources constructor) to their values.

run_as_user (str | None) – unix username to impersonate while running the task

max_active_tis_per_dag (int | None) – When set, a task will be able to limit the concurrent runs across execution_dates.

executor_config (dict | None) –

Additional task-level configuration parameters that are interpreted by a specific executor. Parameters are namespaced by the name of executor.

Example: to run this task in a specific docker container through the KubernetesExecutor

MyOperator(...,
executor_config={
"KubernetesExecutor":
{"image": "myCustomDockerImage"}
}
)
do_xcom_push (bool) – if True, an XCom is pushed containing the Operator’s result

task_group (TaskGroup | None) – The TaskGroup to which the task should belong. This is typically provided when not using a TaskGroup as a context manager.

doc (str | None) – Add documentation or notes to your Task objects that is visible in Task Instance details View in the Webserver

doc_md (str | None) – Add documentation (in Markdown format) or notes to your Task objects that is visible in Task Instance details View in the Webserver

doc_rst (str | None) – Add documentation (in RST format) or notes to your Task objects that is visible in Task Instance details View in the Webserver

doc_json (str | None) – Add documentation (in JSON format) or notes to your Task objects that is visible in Task Instance details View in the Webserver

doc_yaml (str | None) – Add documentation (in YAML format) or notes to your Task objects that is visible in Task Instance details View in the Webserver

# BaseOperator の関数

# 終わりに

今回は`BaseOperator`について解説しました。`BaseOperator`を理解しておくことで様々な場面に対応できるようになると思うので是非習得してもらいたい。

# 関連記事

DAG 定義のパラメーターについてや概要はこちらから

- [AirFlow の DAG パラメータ解説](/_posts/2023-02-17-AirFlow_DAG.md)
- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)
- [AirFlow の DAG の基本的な作成方法](/_posts/2023-02-18-AirFlow_Operator_bashOperator.md)
- [Airflow で DAG 間の依存関係を定義する](/_posts/2023-02-19-AirFlow_Operator_external_task_sensor.md)

AirFlow の環境構築方法（インストール方法）はこちらから

- [AirFlow の概要について](/_posts/2023-02-12-AirFlow_introduction.md)

# 参照

- [baseoperator-AirFlow 公式](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/baseoperator/index.html#airflow.models.baseoperator.BaseOperatorLink)
- [external_task_sensor-AirFlow 公式](https://airflow.apache.org/docs/apache-airflow/2.0.2/_api/airflow/sensors/external_task_sensor/index.html)
