from openFile import openFile
from typing import List

class Monkey():
    def __init__(self, items, operator, operand, divisor, true_monkey, false_monkey):
        self.items = items
        self.operator = operator
        self.operand = -1 if operand == 'old' else int(operand)
        self.divisor = divisor
        self.true_monkey = true_monkey
        self.false_monkey = false_monkey
        self.inspections = 0
        self.lcm = 0

    def checkItems(self, monkeys, part1):
        self.inspections += len(self.items)
        true_monkeys = monkeys[self.true_monkey].items
        false_monkeys = monkeys[self.false_monkey].items
        while len(self.items):
            current_item = self.items.pop(0)
            if self.operator == '+': current_item += self.operand
            else: current_item *= current_item if self.operand == -1 else self.operand
            current_item = current_item // 3 if part1 else current_item % self.lcm
            if (current_item % self.divisor) == 0: true_monkeys.append(current_item)
            else: false_monkeys.append(current_item)

def parse_data(data: List[str]) -> List[Monkey]:
    groups = []
    temp = []
    for line in data:
        if line == '':
            if len(temp):
                groups.append(temp)
                temp = []
        else: temp.append(line)
    if len(temp): groups.append(temp)

    monkeys = []
    divisors = []
    for monkey in groups:
        items = [int(x) for x in monkey[1].replace(',', ' ').split()[2:]]
        ops = monkey[2].split()
        divisor = int(monkey[3].split()[3])
        divisors.append(divisor)
        monkeys.append(Monkey(items, ops[4], ops[5], divisor, int(monkey[4].split()[5]), int(monkey[5].split()[5]))) 

    lcm = 1
    for div in divisors: lcm *= div
    for monkey in monkeys: monkey.lcm = lcm
    
    return monkeys

def solve(cycles, monkeys, part1):
    for _ in range(cycles): 
        for monkey in monkeys: monkey.checkItems(monkeys, part1)
    inspections = sorted([monkey.inspections for monkey in monkeys], reverse=True)
    return inspections[0] * inspections[1]

p1 = solve(20, parse_data(openFile('docs/day11.txt')), True)
p2 = solve(10000, parse_data(openFile('docs/day11.txt')), False)
print(f'Part 1: {p1}\nPart 2: {p2}')
