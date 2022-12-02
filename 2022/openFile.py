from typing import List

def openFile(file: str) -> List[str]:
    data = []

    with open(file, "r") as f:
        for line in f:
            data.append(line.rstrip())
    
    return data
    