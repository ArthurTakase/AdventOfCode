from openFile import openFile

def newElf(data: list, i: int):
    elf = 0
    while i < len(data):
        if data[i] == "":
            break
        elf += int(data[i])
        i += 1
    i += 1
    return elf, i

def main(data: list) -> None:
    i: int = 0
    j: int = 0
    elf = {}
    while i < len(data):
        elf[j], i = newElf(data, i)
        j += 1

    one: int = max(elf.values())
    del elf[max(elf, key=elf.get)]
    two: int = max(elf.values())
    del elf[max(elf, key=elf.get)]
    three: int = max(elf.values())

    print(f"Part 1: {one}")
    print(f"Part 2: {one + two + three}")


main(openFile("docs/day01.txt"))