# Isogram Finder

An isogram is a word which has no repeating characters anywhere in the word. For example the word "isogram" is an isogram, however the string "is isogram", is not as there are two i's and two s's.

- There must be no repeating letters anywhere in the string.

- The strings are case insensitive. Different Cases letters are still counted.

```
isIsogram("Dermatoglyphics") //, true );
isIsogram("isogram") //, true );
isIsogram("aba") //, false, "same chars may not be adjacent" );
isIsogram("moOse") //, false, "same chars may not be same case" );
isIsogram("isIsogram") //, false );
isIsogram("") //, true, "an empty string is a valid isogram" );
```

Write a program in your language of choice that when given a string will detect is the string is or is not an isogram.
