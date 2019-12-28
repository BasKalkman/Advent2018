from collections import Counter

data = open("./input.txt").read().splitlines()

# Part 1
twos = []
threes = []

for str in data:
    if 2 in Counter(str).values():
        twos.append(str)
    if 3 in Counter(str).values():
        threes.append(str)

print(len(twos) * len(threes))

# PART 2
