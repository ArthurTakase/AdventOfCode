from openFile import openFile

def newElf(data: list, i: int, elf: int = 0):
    while i < len(data) and data[i] != "":
        elf += int(data[i])
        i += 1
    i += 1
    return elf, i

def main(data: list, i: int = 0, elf = []) -> None:
    while i < len(data):
        value, i = newElf(data, i)
        elf.append(value)

    elf.sort(reverse=True)
    print(f"Part 1: {elf[0]}")
    print(f"Part 2: {sum(elf[:3])}")

main(openFile("docs/day01.txt"))