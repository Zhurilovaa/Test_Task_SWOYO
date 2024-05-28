#!/usr/bin/env python3
# import random
# import sys, json
# print ("Content-type: application/json")
# print
# size_list = random.randint(1, 25)
# result = {'message': size_list}
# response={'Price':54,'Cost':'99'}
# print(json.JSONEncoder().encode(result))
# # print(result)
import sys, json
import random
print("Access-Control-Allow-Origin: *")
print("Access-Control-Allow-Methods: POST, GET, OPTIONS")
size_list = random.randint(3, 25)
result = {'success':'true','size_list':size_list}

# myjson = json.load(sys.stdin)
# Do something with 'myjson' object

print ('Content-Type: application/json\n\n')
print (json.dumps(result))    # or "json.dump(result, sys.stdout)"
