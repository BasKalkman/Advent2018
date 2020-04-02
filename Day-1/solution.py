data = [int(x) for x in open('./input.txt').read().splitlines()]

# Part 1
print('Part 1: ', sum(data))

# Part 2
check = set()
current_freq = 0
i = 0

while current_freq not in check:
    check.add(current_freq)
    current_freq += data[i % len(data)]
    i += 1

print('Part 2: ', current_freq)
