from caesar import decrypt

shift = 5

with open('ciphertext.txt', 'r') as myfile:
    filecontents = myfile.read()

print("caesar decrypt with key %d" % (shift))
print("Input")
print("--------------------")
print(filecontents)

print("\nDecrypted output")
print("--------------------")
print(decrypt(filecontents, shift))
