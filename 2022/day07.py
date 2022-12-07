from openFile import openFile
from itertools import product

def parse(data: list, currentLocation: str = "", files = {"/" : 0}) -> int:
    for line in [i for i in data if i != "$ ls"]:
        if line == "$ cd ..":
            loc = currentLocation.split("/")
            currentLocation = "/".join(loc[:len(loc) - 2]) + "/"
        elif line.startswith("$ cd"):
            currentLocation += line.split(" ")[2] + "/" if currentLocation != "" else line.split(" ")[2]
        elif line.startswith("dir"):
            files[currentLocation + line.split(' ')[1] + "/"] = 0
        else:
            files[currentLocation] += int(line.split(" ")[0])

    for key, key2 in product(files, repeat=2):
        files[key] += files[key2] if key2.startswith(key) and key != key2 else 0

    return files

file = openFile("docs/day07.txt")
files = parse(file)

print(f"Part 1: {sum([i for i in files.values() if i <= 100000])}")
print(f"Part 2: {min([i for i in files.values() if i > abs(30000000 - (70000000 - files['/']))])}")