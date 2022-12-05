from openFile import openFile

data = [
    ["N", "C", "R", "T", "M", "Z", "P"],
    ["D", "N", "T", "S", "B", "Z"],
    ["M", "H", "Q", "R", "F", "C", "T", "G"],
    ["G", "R", "Z"],
    ["Z", "N", "R", "H"],
    ["F", "F", "S", "W", "P", "Z", "L", "D"],
    ["W", "D", "Z", "R", "C", "G", "M"],
    ["S", "J", "F", "L", "H", "W", "Z", "Q"],
    ["S", "Q", "P", "W", "N"]
]

def parse(line: str):
    s = line.split(" ")
    return int(s[1]), int(s[3]) - 1, int(s[5]) - 1

def main(txt: list, reverse: bool) -> str:
    for line in txt:
        n, f, t = parse(line)
        data[t].extend(data[f][-n:][::-1] if reverse else data[f][-n:])
        data[f] = data[f][:-n]
    return "".join(data[i][-1] for i in range(len(data)))

file = openFile("docs/day05.txt")
# print(f"Part 1: {main(file, True)}")
print(f"Part 2: {main(file, False)}")
