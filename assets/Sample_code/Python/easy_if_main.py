import math

r: int
ren: str


def circle_Area(R: int, range: str):
    result: str

    if R > 10:
        print('計算失敗')
        result = '入力された値が小さすぎて計算できません。' \
            + '\n入力された値:' \
            + str(R) + '\n10より大きい数を入力してください。'

    else:
        print('計算成功')
        result = str((math.pi*R)**2) + range

    return result


def test():

    r = 25
    ren = 'cm'
    print(circle_Area(r, ren))

    r = 10
    ren = 'mm'
    print(circle_Area(r, ren))

if __name__ == '__main__':
    test()
