
from math import sqrt
import time

DEBUG = 0
if DEBUG:
    log = print
else:
    log = lambda *args: None

def debug_func(func):
    def wrapper(*args, **kwds):
        log(f"enter {func.__name__}(" +
            "".join([str(e) for e in args]) + "):")
        out = func(*args, **kwds)
        log(f"exit  {func.__name__}(" +
            "".join([str(e) for e in args]) +
            "): " + str(out))

def lcs(a, b, cache=None):
    if cache == None:
        cache = dict()
    log(f'enter lcs("{a}", "{b}"):')

    la, lb = len(a), len(b)
    if (la, lb) in cache:
        return cache[la, lb]
    elif la == 0 or lb == 0:
        return set()

    s = set()
    if a[-1] == b[-1]:
        c = a[-1]
        _s = lcs(a[:-1], b[:-1], cache)
        if _s:
            for e in _s:
                s.add(e + c)
        else:
            s.add(c)
    else:
        s1 = lcs(a[:-1], b, cache)
        s2 = lcs(a, b[:-1], cache)

        l1 = len(next(iter(s1))) if s1 else 0
        l2 = len(next(iter(s2))) if s2 else 0

        if l1 == l2:
            s = s1 | s2
        elif l1 > l2:
            s = s1
        else:
            s = s2

    cache[la, lb] = s
    log(f'exit  lcs("{a}", "{b}"):', s)
    return s

def lcsN(mat, cache=None):
    if cache == None:
        cache = dict()
    lengths = tuple(len(a) for a in mat)
    if lengths in cache:
        return cache[lengths]
    elif any(map(lambda a: a == 0, lengths)):
        return set()
    if isinstance(mat, map):
        mat = list(mat)

    s = set()
    if all(map(lambda a: a[-1] == mat[0][-1], mat)):
        c = mat[0][-1]
        _s = lcsN(map(lambda a: a[:-1], mat), cache)
        if _s:
            for e in _s:
                s.add(e + c)
        else:
            s.add(c)
    else:
        _m = mat[:] # deep copy not required, no element is changed
        _s = []
        _l = []
        for i in range(len(mat)):
            _m[i] = _m[i][:-1]
            if i > 0: _m[i-1] = mat[i-1]
            out = lcsN(_m, cache)
            _s.append(out)
            _l.append(len(next(iter(out))) if out else 0)

        maxL = max(_l)
        for i in range(len(_l)):
            if _l[i] == maxL:
                print(i, s)
                s |= _s[i]

    cache[lengths] = s
    return s


def testN():
    n = 5000
    running = True
    while running:
        a = ["a" * n] * 3
        begin = time.time()
        lcsN(a)
        end = time.time()
        if end - begin > 60:
            n *= 0.75
        elif end - begin < 30:
            n *= 2
        else:
            running = False
    print(f"n: {n}")


if __name__ == "__main__":
    def TEST(a, b, count=[1]):
        if not isinstance(a, str): a = "".join(a)
        if not isinstance(b, str): b = "".join(b)

        out = lcs(a, b)
        print(f"case {count[0]}: lcs({a}, {b}: ", end="")
        if len(out) < 5:
            print(out)
        else:
            print(f"({len(out)} output hidden)")
        count[0] += 1

    alphabet = "abcdefghjiklmnopqrstuvwxyz12345678"
    sqrt_len = int(sqrt(len(alphabet)))

    TEST(alphabet, alphabet)

    l = [c for c in (alphabet[::2] + alphabet[1::2])]
    TEST(alphabet, l)

    l = [i[1] + i[0] for i in zip(alphabet[::2], alphabet[1::2])]
    TEST(alphabet, l)

    l = []
    for i in range(sqrt_len+1):
        for j in range(sqrt_len-1, -1, -1):
            k = j + i * sqrt_len
            if k >= len(alphabet): continue
            l.append(alphabet[k])
    TEST(alphabet, l)




