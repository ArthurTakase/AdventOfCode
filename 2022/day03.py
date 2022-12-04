from openFile import openFile

def get_priority(letter: str) -> int:
    return ord(letter) - 38 if letter.isupper() else ord(letter) - 96

def part01(data: list, score: int = 0) -> int:
    for line in data:
        compartments = [line[:len(line)//2], line[len(line)//2:]]
        for letter in compartments[0]:
            if letter in compartments[1]:
                score += get_priority(letter)
                break
    return score

def part02(data: list, score: int = 0) -> int:
    for i in range(0, len(data), 3):
        for letter in data[i]:
            if letter in data[i+1] and letter in data[i+2]:
                score += get_priority(letter)
                break
    return score

file = openFile("docs/day03.txt")
print(f"Part 1: {part01(file)}")
print(f"Part 2: {part02(file)}")
