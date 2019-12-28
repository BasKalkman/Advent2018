data = [int(x) for x in open('./input.txt').read().splitlines()]
# PART 1
print('Part 1: ', sum(data))

# PART 2
freqs = set()
current_freq = 0
i = 0

while current_freq not in freqs:
    freqs.add(current_freq)
    current_freq += data[i % len(data)]
    i += 1

print('Part 2: ', current_freq)
