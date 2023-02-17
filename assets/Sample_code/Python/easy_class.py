import datetime as dt


class Person_Class:
    '''
    パーソンクラス
    人の情報を操作することができる。

    member_variable
    ---------
    p_name: str
        氏名
    p_age: int
        年齢
    p_birth: str
        生年月日
    p_address: str
        住所
    '''

    def __init__(self, p_name, p_birth, p_address):  # コンストラクタ

        self.p_name: str = p_name
        self.p_birth: str = p_birth
        self.p_address: str = p_address
        self.p_age: int = int(self.set_age())

    def set_age(self):
        '''
        誕生日から年齢を算出する関数

        parameter
        -------
        self
            コンストラクタのパラーメータ
        return
        set_age: int
            誕生日から換算した年齢を返す。
        -------

        '''
        # フォーマット
        birth_fmt = dt.datetime.strptime(self.p_birth, '%Y-%m-%d')
        now_date = dt.datetime.strptime(str(dt.date.today()), '%Y-%m-%d')


        # 年齢のベースを作成
        age_base = now_date.year-birth_fmt.year
        if now_date > dt.datetime(now_date.year, birth_fmt.month, birth_fmt.day, birth_fmt.hour, birth_fmt.minute, birth_fmt.second):
            age = age_base
        else:
            age = age_base + 1

        return age
