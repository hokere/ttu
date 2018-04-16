def rotate(input, shift):
    output = ''
    for char in input:
        if char.isalpha():
            c = ord(char) + shift

            if (char.isupper() and c > ord('Z')) or (char.islower() and c > ord('z')):
                c -= 26
            elif (char.isupper() and c < ord('A')) or (char.islower() and c < ord('a')):
                c += 26

            output += chr(c)
        else:
            output += char
    return output

def encrypt(input, shift):
    return rotate(input, shift)

def decrypt(input, shift):
    return rotate(input, -shift)
