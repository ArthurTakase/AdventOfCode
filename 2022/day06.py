from openFile import openFile

def main(txt: list, size: int) -> int:
    for i in range(len(txt)):
        if len(set(txt[i:i + size])) == i + size:
            return i + size

file = openFile("docs/day06ex.txt")
print(f"Part 1: {main(list(file[0]), 4)}")
print(f"Part 2: {main(list(file[0]), 14)}")