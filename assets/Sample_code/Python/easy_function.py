import math

r: int
ren: str


def circle_Area(R: int, range: str):

    return str((math.pi*R)**2) + range


r = 25
ren = 'cm'
print(circle_Area(r, ren))

r = 10
ren = 'mm'
print(circle_Area(r, ren))
