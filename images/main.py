import signal
import random
from flag import flag


def handler():
    exit()

signal.signal(signal.SIGALRM, handler)
signal.alarm(60)

print("hurry you have 60 seconds only to answer")

for _ in range(30):
    x, y = random.randint(1,10000), random.randint(1, 10000)

    operation = random.choice("*+-")
    expression = f"{x} {operation} {y}"

    print(expression)

    ans = int(input())

    if ans != eval(expression):
        raise Exception()

print(flag)
