#!/usr/bin/env python3
import sys, json
import random
print("Access-Control-Allow-Origin: *")
print("Access-Control-Allow-Methods: POST, GET, OPTIONS")
size_list = random.randint(3, 25)
result = {'success':'true','size_list':size_list}

print ('Content-Type: application/json\n\n')
print (json.dumps(result))    # or "json.dump(result, sys.stdout)"
