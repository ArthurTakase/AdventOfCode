from openFile import openFile

def part02(battle: str) -> int:
    end = { "X": 0, "Y": 3, "Z": 6 }

    play = {
        "A": { "X": 3, "Y": 1, "Z": 2 },
        "B": { "X": 1, "Y": 2, "Z": 3 },
        "C": { "X": 2, "Y": 3, "Z": 1 }
    }
    
    return end[battle[1]] + play[battle[0]][battle[1]]

def part01(battle) -> int:
    end = { "X": 1, "Y": 2, "Z": 3 }

    play = {
        "A": { "X": 3, "Y": 6, "Z": 0 },
        "B": { "X": 0, "Y": 3, "Z": 6 },
        "C": { "X": 6, "Y": 0, "Z": 3 }
    }

    return play[battle[0]][battle[1]] + end[battle[1]]

def main(data: list) -> None:
    score: int = 0
    score2: int = 0
    for line in data:
        score += part01(line.split(" "))
        score2 += part02(line.split(" "))
    print(f"Part 1: {score}")
    print(f"Part 2: {score2}")

main(openFile("docs/day02.txt"))