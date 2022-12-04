from openFile import openFile

def to_list(line: str):
    sections = line.split(",")
    a1 = sections[0].split("-")
    a2 = sections[1].split("-")

    return list(range(int(a1[0]), int(a1[1])+1)), list(range(int(a2[0]), int(a2[1])+1))

def main(data: list, sup: int, nb_overlap: int = 0) -> int:
    for line in data:
        l1, l2 = to_list(line)
        nb_overlap += 1 if len(set(l1).intersection(l2)) > sup else 0
    return nb_overlap

file = openFile("docs/day04.txt")
print(f"Part 1: {main(file, 1)}")
print(f"Part 2: {main(file, 0)}")
