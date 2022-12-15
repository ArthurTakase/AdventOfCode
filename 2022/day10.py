from openFile import openFile
from textwrap import wrap

def choose_char(i, x): return '#' if x == i or x + 1 == i or x + 2 == i else '.'

def main(data: list, cycles: list = [], strengths: list = [], x: int = 1, crt: str = '') -> int:
    for line in data:
        if 'noop' in line: cycles.append(0)
        elif 'addx' in line: cycles.extend([0, int(line.strip().split()[1])])

    for i, v in enumerate(cycles, start = 1):
        crt += choose_char(i % 40, x)
        if i in [20, 60, 100, 140, 180, 220]: strengths.append(i * x)
        x += v
    
    return strengths, crt

strengths, crt = main(openFile("docs/day10.txt"))
drawing = "\n".join([row for row in wrap(crt, width=40)])
print(f"Part 1: {sum(strengths)} Part 2:\n{drawing}")