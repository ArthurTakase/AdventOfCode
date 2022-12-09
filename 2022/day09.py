from openFile import openFile

def new_tail(x, y, zx, zy):
    xdiff, ydiff = abs(x-zx), abs(y-zy)

    if xdiff == 2 and ydiff == 2:
        if zx > x:
            return (zx - 1, zy - 1) if zy > y else (zx - 1, zy + 1)
        elif zx < x:
            return (zx + 1, zy - 1) if zy > y else (zx + 1, zy + 1)
    if xdiff == 2:
        return (zx - 1, zy) if zx > x else (zx + 1, zy)
    if ydiff == 2:
        return (zx, zy - 1) if zy > y else (zx, zy + 1)
    return (x, y)

def main(data: list, size: int) -> int:
    visited = set()
    knots = [(0,0) for _ in range(size)]
    move = { "L": (-1, 0), "R": (1, 0), "U": (0, 1), "D": (0, -1) }

    for l in data:
        dir, dist = l.strip().split()
        for _ in range(int(dist)):
            knots[0] = (knots[0][0] + move[dir][0], knots[0][1] + move[dir][1])
            for i in range(1, len(knots)):
                knots[i] = new_tail(knots[i][0], knots[i][1], knots[i-1][0],knots[i-1][1])
            visited.add(knots[-1])
    return len(visited)

file = openFile("docs/day09.txt")
print(f"Part 1: {main(file, 2)}")
print(f"Part 2: {main(file, 10)}")