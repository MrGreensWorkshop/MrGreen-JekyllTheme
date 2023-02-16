---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_Examples
title: AirFlowのDAG 定義パラメータ解説編

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
# author:
# multiple category is not supported
category: AirFlow
# multiple tag entries are possible
tags: [AirFlow, Python, DAG]
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
meta_description: "AirFlow,Python"
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

AirFlow での DAG の作成時に定義するパラメータについて解説していこうと思う。
DAG は Python で AirFlow ライブラリーを使用することで簡単に DAG を記述することができる。
以下のサンプルコードでは AirFlow の'DAG'クラスを import して使用し、DAG クラスのインスタンス生成時にパラメーターを定義して DAG を生成する。

尚、本記述は AirFlow は AWS でにある MWAA で実装されている `Ver.2.0.2` を想定する。

> DAG のパラメータは AirFlow のバージョンによって若干異なるので詳細は公式ページの確認をおすすめします。
> [公式ページ](https://airflow.apache.org/docs/apache-airflow/2.0.2/_api/airflow/models/dag/index.html?highlight=dag#module-airflow.models.dag)

<!-- outline-end -->

![AirFlowDAG画面](/assets/img/posts/AirFlow_dag.png)

```py
from datetime import timedelta
from airflow import DAG

args = {
    'owner': 'airflow',

}

with DAG(
    dag_id='example_DAG',
    description=none,
    schedule_interval='0 0 * * *',
    start_date=datetime(2023, 2, 15, 0, 0, tzinfo=None),
    end_date=datetime(2025, 2, 15, 0, 0, tzinfo=None),
    default_args=args,
    params={"example_key": "example_value"},,
    concurrency=1,
    max_active_runs=3,
    dagrun_timeout=timedelta(minutes=60),
    sla_miss_callback='[user def]',
    default_view='tree',
    orientation='LR',
    catchup=False,
    on_failure_callback='[user def]',
    on_success_callback='[user def]',
    access_control={'role1': {'can_read'}, 'role2': {'can_read', 'can_edit'}},
    is_paused_upon_creation=False,
    tags=['example', 'example2'],
    params={"example_key": "example_value"},

) as dag:
```

# DAG のパラーメーター

上記サンプルで定義しているパラメーターについて解説していく。

## dag_id (str)

---

### 定義必須

DAG の ID。 英数字、ダッシュ、ドット、およびアンダースコア (すべて ASCII) のみで構成する必要があります。AirFlow の UI 上で表示される DAG 名にあたるものがこの DAG_ID となるので識別しやすい命名規則で定義するのが好ましいです。

## description (str)

---

### 定義推奨

DAG の説明。 AirFlow の UI 上に表示されるので、この部分で詳細な内容を説明することが好ましいです。（日本語使用可）

## schedule_interval (datetime.timedelta 又は dateutil.relativedelta.relativedelta 又は str that acts as a cron expression)

---

### 定義必須

DAG の実行頻度（実行周期）を定義します。この `timedelta` オブジェクトは、最新のタスク インスタンスの `execution_date` に追加され、次のスケジュールを把握します。`schedule_interval`の記述方法は複数あるため後述で説明します。私は 汎用性が高いため`cron`で定義しています。
尚 DAG をトリガー実行したい場合は`none`と定義

### `cron`での定義方法

これ以外にも`cron`だともっと複雑なスケジュールを定義できる。
`cron`の定義ついては WikiPedia を参照することをお勧めする。
WikiPedi：[cron について](https://en.wikipedia.org/wiki/Cron#CRON_expression)

| Preset     | 意味                                                  | cron        |
| ---------- | ----------------------------------------------------- | ----------- |
| `none`     | スケジュールしないで「外部トリガー」のみで DAG を実行 |             |
| `@hourly`  | 一度だけスケジュールする                              | `0 * * * *` |
| `@daily`   | 1 時間に 1 回、開始時に実行する                       | `0 0 * * *` |
| `@weekly`  | 週に一度、日曜日の朝の深夜に走る                      | `0 0 * * 0` |
| `@monthly` | 月に一度、月の最初の日の深夜に実行                    | `0 0 1 * *` |
| `@yearly`  | 年に一度、1 月<>日の深夜に開催                        | `0 0 1 1 *` |
| `@once`    | 一度だけスケジュールする                              | `0 0 1 1 *` |
| `@once`    | 一度だけスケジュールする                              |             |
| `@once`    | 一度だけスケジュールする                              |             |

## start_date (datetime.datetime)

---

### 定義必須

スケジューラが実行周期に従い DAG の実行を開始する日時を定義します。未来日を設定するとその日になるまで実行されません。※こちらは必須項目です。

## end_date (datetime.datetime)

---

### 基本的に定義不要

スケジューラが実行周期の DAG の実行を停止する日時を定義します。未来日を定義しその日をすぎると DAG が実行されなくなります。（未定義の場合 DAG は永久に動き続けます。）
対象 DAG の廃止が決まっている場合など、事前に設定しておけば手動で当日停止作業をする必要がないなどのメリットがあります。

## template_searchpath (str or list[str])

---

### 定義不要

このリスト (非相対) は、`jinja` がテンプレートを検索する path を定義します。 ただし順序が重要な点とです。 jinja/airflow には、デフォルトで DAG ファイルのパスが含まれているので、カスタムで定義する場合には DAG ファイルのパスも定義しておく必要があります。
`jinja`については別途纏めてみようと思います。

## template_undefined (jinja2.undefined)

---

## 基本的に定義不要

`jinja`のテンプレートパス`template_searchpath`した場合、テンプレート未定義型の設定をする必要がある。定義については`jinja`ライブラリーのについて確認することが好ましい。

## user_defined_macros (dict)

---

### 定義不要

`jinja` テンプレートで公開されるマクロの辞書。 たとえば、この引数に渡すと、この DAG に関連するすべての jinja テンプレートを使用できるようになります。 ここで任意のタイプのオブジェクトを渡すことができることに注意してください`.dict(foo='bar')` と dict で定義すると呼び出せる`{{ foo }}`しかし、DAG 内で定義する場合普通に変数を使えば良いので基本使用しない。

## user_defined_filters (dict)

---

### 基本的に定義不要

`jinja` テンプレートで公開されるフィルターのディクショナリ。 例 `DAG.dict(hello=lambda name: 'Hello %s' % name){{ 'world' |  hello }}`
私もこの定義について完全には内容は理解できていないので`jinja`ライブラリーのについて確認することが好ましい。

## default_args (dict)

---

### 定義推奨

DAG 内の `Operator` を初期化するときにコンストラクターのキーワードのパラメーターを設定できる。つまり、DAG 内で定義する TASK のオペレーターの引数を`dict`で定義することができるので複数の TASK を作るとき難度も同じ定義を書かなくてよくなる。尚、各オペレーターで別途パラメータを定義した場合そちらが優先される。
つまり、`Operator`で定義するパラメータのデフォルト値の設定

## params (dict)

---

### 定義任意

テンプレートでアクセスできる DAG レベルのパラメータのディクショナリで、`params` の下に`namespace`があります。 これらのパラメーターは、Task レベルでオーバーライドできるので使いまわすパラメータは定義すると便利である。

## concurrency (int)

---

### 基本定義不要

同時に実行できるタスク インスタンスの数を定義できる。
基本定期に定義不要の項目ではあるが、並列タスクが多すぎると
`executer`の`worker`を占有してしまい他の DAG の実行時間に影響する場合がある場合
同時に実行できるタスクを制限することで対策したり、AirFlow の実行環境リソース不足の
回避策としても使える。

## max_active_runs (int)

---

### 定義推奨

DAG の実行最大数を設定できる。基本的には`1`と定義しておくのが良いと思う。`1`以上の値を使う用途としては、過去のスケジュールを遡って実行する際、1 スケジュールづつ再実行すると効率が悪い場合や、実行頻度が短く、前のスケジュール DAG が実行中の時でも実行周期が来れば次のスケジュールが実行されるようにする場合`2~3`など定義しておくとよいと思う。

## dagrun_timeout (datetime.timedelta)

---

### 定義推奨

DAG の実行のタイムアウトを定義できる。想定の実行時間より時間がかかっている場合、処理を停止し直ちにアラートを出す必要がある場合定義しておくことで、リソース確保等が期待できる。

## sla_miss_callback (types.FunctionType)

---

### 定義任意

タスクが定義された SLA を満たしていない場合に呼び出されます。例）SLA タイムアウトを報告するときに呼び出す。基本的に関数名を定義すれば使用できる。
用途としては、タイムアウトした場合、webhook を使用してアラートを飛ばしたり、タイムアウトの場合の必要な処理を実行したい場合等にあらかじめ、作成した関数を実行するようにできる。

> SLA とは Service Level Agreement の略であると思われる。

## default_view (str)

---

### 定義任意

AirFlow の DAG 一覧画面で DAG を選択したときに一番最初に表示される画面を設定できる。`tree`, `graph`, `duration`, `gantt`, `landing_times`の中から文字列で定義する。定義しない場合`Tree`View が表示される。

## orientation (str)

---

### 定義任意

グラフ ビューで DAG 方向を指定できる。`LR`,`TB`,`RL`,`BT`の中から文字列で定義する。
`LR`=左から右,`TB`=上から下,`RL`=右から左,`BT`=下から上
未定義の場合 `LR`(右から左)が適応される。

## catchup (bool)

---

### 定義任意

前回実行時点まで遡って実行するかどうか。
未定義の場合`True`となり遡って実行されます。
例えば新たに DAG を作成し、DAG の`start_date`をデプロイする 2 日前に定義してデプロイして
スケジュールを有効にすると`start_date`の日付に遡って DAG が実行される。
公式でも解説しているのでわかりにくい場合にはリンクのコードサンプルを参照することを進めます。
[catchup について-AirFlow 公式](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dag-run.html#re-run-dag)

## on_failure_callback (callable)

---

### 定義任意

DAG の処理が失敗したときに呼び出される関数名を定義できる。この関数には、`context(dict)`が 1 つのパラメータとして渡されます。

## on_success_callback (callable)

---

### 定義任意

DAG の処理が成功したときに呼び出される関数名を定義できる。この関数には、`context(dict)`が 1 つのパラメータとして渡されます。

## access_control (dict)

---

### 定義任意

DAG のアクセスレベル許可を指定できる。
複数のユーザーで横断して AirFloww を使用する場合 roll 分けしておくと外部から DAG を編集されるリスクが減るというメリットがある。
例: `{'role1': {'can_read'}, 'role2': {'can_read', 'can_edit'}}`

## is_paused_upon_creation (bool or None)

---

### 定義不要

初めて作成するときに DAG を一時停止するかどうかを指定します。 DAG が既に存在する場合、このフラグは無視されます。 このオプションのパラメーターが指定されていない場合、グローバル構成設定が使用されます。
`True`で新規 DAG 作成に一時停止される。

## jinja_environment_kwargs (dict)

---

### 基本定義不要

テンプレートのレンダリングのために `Jinja` 環境に渡される追加の構成オプション
例: Jinja がテンプレート文字列から末尾の改行を削除しないようにする

```py
DAG(dag_id='my-dag',
    jinja_environment_kwargs={
        'keep_trailing_newline': True,
        # some other jinja2 Environment options here
    }
)
参照: Jinja 環境のドキュメント
```

## tags (List[str])

---

### 定義推奨

AirFlow の UI 上で DAGS をフィルタリングするのに役立つタグのリスト。
