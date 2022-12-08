from openFile import openFile
from itertools import product

class Tree():
    def __init__(self, value):
        self.visible = False
        self.scenicScore = 0
        self.value = value

def look_from_side(forest, reversed, vertical):
    for i in range(len(forest)):
        height: int = -1
        for j in range(len(forest[i])) if not reversed else range(len(forest[i]) -1, 0, -1):
            tree = forest[i][j] if not vertical else forest[j][i]
            if tree.value > height:
                tree.visible = True
                height = tree.value

def look_from_tree(forest, i, j, nx, ny):
    x, y, nb_trees = i + 1 * nx, j + 1 * ny, 0

    while x != len(forest) and y != len(forest[0]) and x != -1 and y != -1:
        if forest[i][j].value <= forest[x][y].value:
            nb_trees += 1
            break
        nb_trees += 1
        x += 1 * nx
        y += 1 * ny
    return nb_trees

def main(data: list) -> int:
    forest = [[Tree(int(i)) for i in list(line)] for line in data]
    look_from_side(forest, False, False)
    look_from_side(forest, True, False)
    look_from_side(forest, False, True)
    look_from_side(forest, True, True)

    for x, y in product(range(len(forest)), repeat=2):
        forest[x][y].scenicScore = look_from_tree(forest, x, y, 1, 0) * look_from_tree(forest, x, y, 0, 1) * look_from_tree(forest, x, y, -1, 0) * look_from_tree(forest, x, y, 0, -1)

    print(f"Part 1: {sum([1 if forest[i][j].visible else 0 for i, j in product(range(len(forest)), repeat=2)])}")
    print(f"Part 2: {max([max([tree.scenicScore for tree in line]) for line in forest])}")

main( openFile("docs/day08.txt"))