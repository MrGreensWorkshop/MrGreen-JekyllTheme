i: int = 1
myarry: list = ['おはよう', 'こんにちわ', 'さようなら', 'おやすみなさい', '以上']

for myelement in myarry:  # for 変数 in イテラブルオブジェクト:
    print(f'{i}回目:{myelement}')
    i += 1  # インクリメント
