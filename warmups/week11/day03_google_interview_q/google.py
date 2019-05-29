# Adrian's Solution

def number_checker( arr, num ):
  for x in arr:
    for y in arr:
      if x + y == num:
        return True
  return False

print number_checker([3,5,1,4], 6)
