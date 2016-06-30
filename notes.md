Left on page:
5, 17, 38, 54, 64, 82, 109, 125, 141, 151

Document structure
 ( for easier search )

## header1
### header2
#$# new definition (concepts, etc.)
---
code
---
!!! you've been doing this wrong

## Chapter 1

#$# return value
We can access it with
$ echo $?

#$# GNU compiler
$ g++ -o prog1 prog1.cpp 
add -Wall for warnings

#$# Windows visualStudio compiler
C:\Users\me\Programs\> c1 /EHsc prog1.cpp
add /W4 for warnings

#$# <<
output operator takes 2 arguments: left and right. It returns left.
((cout << a) << b) << endl
(cout << b) << endl
cout << endl
cout

#$# >>
input operator also returns the lefthand operand
(cin >> v1) >> v2 //data stored in v1
cin >> v2	//next input stored in v2
cin

#$# endl
endl adds newline and flushes the buffer of the receifing machine (it prints out the message).

#$# ::
scope operator

#$# while
int value;
while (std::cin >> value)
	//do stuff
	//std::cin is an istream object, that returns false, if it reads an end-of-file or if it encounters an invalid input
	//end of file from command line: (UNIX: Ctrl+d, Windows, Ctrl+z)

## Chapter2

#$# definition
allocates space for a new variable. Also declares. Optionally intializes.
int i;

 xxx definition ~ declaration + initialization //NOPE !!

#$# declaration
introducint a new variable name
extern int i;

#$# initialization
assigning a value to an object
int i = 1;
int i; i = 1;

copy initializatoin (both are equal):
string s1 = "asdf";
string s2("asdf");

### Compound types

#### References
References are not objects, they don't have an address.
Reference is bound to its initializer object. Reference needs to be initialized.
int i = 10, &j = i;

#### Pointers
While a reference is NOT an object, a pointer is. (doesn't need to be initialized at definition)

#$# base type
int i = 1024, *p = &i, &r = i;

note that int is a base type, * and & are type modifiers. (int* p is misleading, use int *p)

#$# reference to pointer
int i = 42;
int *p;
int *&r = p; //r references to p. r is a pointer
r = &i;
*r = 0; // i = 0

#$# const
const qualifier defines a constant variable (value can't be changed). Needs to be initialized at declaration.
const int i = 512;

const is LOCAL TO THE FILE. At compile time, constants are replaced with their values.
If we want to use the same constant across multiple files, we need to define the constant in each file(nope). Or we can use extern.

file 1 (initialization):
extern const int buff = 512;
file 2 (use constant from file 1):
extern const int buff;

#$# top-level const
the pointer itself is a constant
int i = 5;
int *const pi = &i;

#$# low-level const
the pointer is pointing to a constant
const int i = 5;
const int *pi = &i;

#$# constexpr
expressions, evaluated at compile time
careful:
const int *p = nullptr; //pointer to const int
constexpr int *q = nullptr; //const pointer to int;

#$# typedef
it's a type alias
typedef double asdf, *p //asdf is a synonym for double, *p is a synonym for double*

### Defining our own data structures
(class)

struct Test_struct {
	int a;
	double b;
} test, *ts;

---
//same thing, better practise:
struct Test_struct {
	int a;
	double b;
};	//class definition

Test_struct test, *ts; //object definition
---

Preprocessor (runs before the compiler):
#include ...replace with ocntents of a header
Header guards use preprocessor variables(use uppercase), which can be defined (#define) or not defined.
#ifdef, #ifndef, #endif


## Chapter 3

### Namespaces using declaration
'using' declaration:
using std::cin;

!!! headers should not include using declarations

### library string type
---
#include <string>
using std::string;

some operations:
---
is >> s; read from is into s
getline(is, s); //read line from input is into s, up to the first \n... while(getline(is, s)) { ... };
s.empty(); //true if s is empty
s.size(); //returns string::size_type, not int !!! ... a.size() < -1; will be true
s1 = s2 + ", " + s3 + ', ' + "\n"; //at least one operand to each + operator must be a string type
s1 = (s2 + ", ") + s3 + ', ' + "\n"; //at least one operand to each + operator must be a string type
s1 += s2;
s1 == s2; //true if they contain the same characters  (case sensitive)
s1 <, <=, >, >= s2; dictionary ordering
---

Libraries: c uses name.h, c++ uses cname (type.h, ctype). When using c++, use cname instead of name.h if possible.
The cname libraries include names in std namespace.

#$# range for
for(declaration : expression)
	//do stuff
}
//expression is a sequence, declaration is the variable we're using. On each iteration declaration is initialized from the hext element in expression sequence.
//if we want to change expression, we need to use &declaration

#$# subscript
string a = "banana";
a[2]; //2 is a string::size_type; empty[] or out of range are undefined

### library vector type (vector is a template, not a type)
---
#include <vector>sdf
using std::vector;
---

A vector is a class template. The compiler will instantiate our template based on the info we supply:
vector<int> a;

---
vector<int> ivec(10);	//all zeros
vector<int> ivec(10, 2);	//all twos
---

C++ vectors grow a lot more efficiently than if we defined their size before running.

vector<ing>::size_type;

v1 == v2;
v1 <, ..., v2;

v.push_back(item);

### iterators
Container classes in std use iterators.
.begin(); //1st element, returns iterator or const_iterator
.end();	//one past the last element

If the container is empty, .begin() == .end().

---
*iter //returns a reference to the element iter is pointing to
iter->member //same as (*iter).member
++iter //increment
---

It's a good habit to use iterators instead of subscripts and to use != instad of <. That way you can be sure the code will work on any container.

---
vector<int>::iterator it;		//iterator for rw
string::iterator it;
vector<int>::const_iterator it;	//iterator that can read but not write elements. mandatory if the container is const
---

### array

array dimension must be a constant expression

initialization:
cannot do this: int a2[] = a1;
cannot do this: a2 = a1;
if you want the elements to initialize, use: int arr[10] = {};

declarations (read the name from inside out):
int *parr[10]; //array of 10 pointers;
int &rarr[10]; //error, references are NOT objects
int (*parr)[10]; //pointer to array of 10 ints;
int (&rarr)[10]; //reference to array of 10 ints;
int *(&rarr)[10]; //reference to array of 10 pointers;

#$# size_t
machine specific type that is large enough to hold any object in memory, use it for iteration instead of int
It can hold the size of the largest possible array.

the lines below are the same:
---
int *parr = &arr[0];
int *parr = arr;
---
also:
---
begin(arr);
end(arr); //pointer to last+1 element
---

similar iteration as with vector and string
---
int arr[10] = {};
for(int *i = arr; i<&arr[10]; ++i){
	cout << cout *i << endl;
}
---

C-strings are arrays of char, terminated with \0. We can transform a library string type into c-string type using:
const char *cstring = cppstring.c_str();

## Chapter 4

#$# expression
one or more operands + maybe operator -> result (simplest possible is a literal/variable, that returns its value)
Old C style: lvalue expressions can stand on the left side of the assignment, rvalu expressions cannot.
In c++, things are different.
Lvalue yields object or function.
When we use an object as a rvalue, we use it's contents, when we use an object as a lvalue, we use it's identity(location in memory).
When can use lvalue in place of rvalue but not vice versa.

#$# lvalue expression
Returns an object.

#$# rvalue expression
Returns a temporary value or an object near the end of its lifespan.

#$# operand
#$# operator: unary, binary, ternary, function call(unlimited num. of operands)
#$# overloaded operator

### Order of evaluation
The following expression has UNDEFINED behavior, because cout doesn't guarantee order of evaluation.
---
int i = 0;
cout << i << ", " << ++i << endl; //depends on compiler (0, 1 or 1, 1... or something else)
---

#$# order of evaluation -> only guaranteed for AND OR ?: ,
#$# precedence a+b*c -> a+(b*c)
#$# associativity a + b + c -> (a+b)+c in case of left associativity

### Increment, decrement
---
int i, j;
i = j = 0;
j = ++i;	//j = 1, i = 1 ... prefix notation opeares and returns changed value
j = i++;	//j = 1, i = 2 ... postfix notation saves a copy of the value, operates, then returns the copy
---

#$# casting
(int) a ... old style. don't use
---
int a = 5;
static_cast<double>(a)/3;	//still don't use casting -> c++ is statically typed
---

## Chapter 5








