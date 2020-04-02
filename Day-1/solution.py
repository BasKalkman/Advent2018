data = [int(x) for x in open('./input.txt').read().splitlines()]
<<<<<<< HEAD

# Part 1
print('Part 1: ', sum(data))

# Part 2
check = set()
current_freq = 0
i = 0

while current_freq not in check:
    check.add(current_freq)
=======
# PART 1
print('Part 1: ', sum(data))

# PART 2
freqs = set()
current_freq = 0
i = 0

while current_freq not in freqs:
    freqs.add(current_freq)
>>>>>>> bd3fceeba71a64ae2980a42185059441cdf311c9
    current_freq += data[i % len(data)]
    i += 1

print('Part 2: ', current_freq)
