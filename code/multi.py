
import hashlib
import multiprocessing as mp

X = "ManChingChiu"
Y = "17051909D"

hX = hashlib.sha256(bytes(X, "utf-8"))
hY = hashlib.sha256(bytes(Y, "utf-8"))

hX6 = hX.copy().digest()[:6]

def func(q):
    """
    how to further optimize depends on which
    operation takes the most time
    """
    suffix = q.get()
    if not suffix: return (False, None)
    h = hY.copy()
    h.update(suffix)
    h = h.digest() # here?
    if h[:6] == hX6: # or here
        return (True, suffix)
    else:
        return (False, suffix)
    
def main():
    manager = mp.Manager()
    
    q = manager.Queue(256)
    for b in [bytes([i]) for i in range(256)]:
        q.put(b)
    
    found = False
    results = []
    with mp.Pool(processes=8) as pool:
        for i in range(256):
            results.append(pool.apply_async(func, (q,)))
        while not found:
            success, suffix = results.pop(0).get()
            if success:
                found = suffix
            elif suffix:
                print(f"{suffix} failed, adding one more byte")
                for b in [suffix + bytes([i]) for i in range(256)]:
                    q.put(b)
                    results.append(pool.apply_async(func, (q,)))
    print(f"X = {X}")
    print(f"Y' = {Y}{found.decode('utf-8')}")
          
  
if __name__ == "__main__":
    main()

"""
import hashlib

def hashno(X, i):
    return hashlib.sha256(bytes((X + str(i)), encoding= 'utf-8')).hexdigest()[:12]

def main():
    X = "ManChingChiu"
    Y = "17051909D"
    hashtableX = [hashno(X, None)]
    hashtableY = [hashno(Y,None)]
    i = 0
    print("plz wait a long long time")
    while True:
        tempX = hashno(X, i)
        tempY = hashno(Y, i)
        if tempX in hashtableY:
            index = hashtableY.index(tempX)
            break
        elif tempY in hashtableX:
            index = hashtableX.index(tempY)
            break
        else:
            hashtableX.append(tempX)
            hashtableY.append(tempY)
            i += 1
    if tempX in hashtableY:
        print(tempX, hashtableY[index])
        print(X+str(i), " ", Y+str(index-1))
    elif tempY in hashtableX:
        print(hashtableX[index], tempY)
        print(X+str(index-1), " ", Y+str(i))
    

if __name__ == "__main__":
    main()

#hashlib.sha256(bytes((X + str(i)), encoding= 'utf-8')).hexdigest()[:12]
#hashlib.sha256(bytes((Y + str(i)), encoding= 'utf-8')).hexdigest()[:12]

"""