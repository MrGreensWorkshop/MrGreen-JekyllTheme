--サンプル1 ユーザーテーブルをセレクト
select * from users;

--サンプル2 ユーザー明細テーブルをセレクト
select * from userdetails;

--サンプル3 ユーザーテーブルと明細テーブルを結合
select
u.id,
u.name,
u.age,
ud.occupation,
ud.address,
ud.zip_code
from users as u
left join userdetails as ud on u.id=ud.id;

-- サンプル4 年齢が15歳の人を抽出
select * from users
where age = 15;


-- サンプル5 年齢が20歳のユーザーの住所を取得
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
