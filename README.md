Left on page:
5, 17, 38, 54, 64, 82, 109, 125, 141, 151, 200, 218, 223, 236, 253, 276, 294, 307, 325, 346, 360, 373;

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

## Chapter 2

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
the pointer itself is a constant (or any other object)
int i = 5;
int *const pi = &i;

#$# low-level const
the pointer is pointing to a constant
const int i = 5;
const int *pi = &i;
we can change the pointer

const int &r = i; //constants in reference types are always low level

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
Flow control, loops, etc. Important part: exception handling (the very basics).

---
#include <stdexcept>

using std::runtime_error

runtime_error err
err.what()
---


## Chapter 6

Using keyword static makes a variable persistant thorough the execution of a program. We can define a static inside a function and it will continue to exist after the function has ended.

Separate compilation: use flag -c, create .o files. Compile .o files same as .cpp files.

#$# passing by reference
uses argument

#$# passing by value
copies argument

---
void reset(int *p) {
	*p = 0; //value of p is now 0;
	p = 0;	//pointer p is now 0, but only locally
}
---

Reference parameters that should not change should be references to const.

void foo(const string &s1, const string &s2) {};

### Passing arrays to functions
---
int arr[] = {1, 2};
void foo(int (&arr)[10]); //passing a reference to array
void foo(int *arr);	//passing pointer to array
void foo(int (*arr)[20]); //passing a pointer to a 2D array (need to specify all dimensions but first)
---

### Passing different lengths of args
If arguments are of the same type, we can pass them into a function in an initializer_list.

---
void read(initializer_list<string> ls) {
	for (initializer_list<string>::iterator i = ls.begin(); i != ls.end(); ++i) {
		cout << *i << endl;	
	}
}
---

#$# return value
Return initializes a function type.

You can return a reference or a pointer to a parameter (normal return returns a copy of an object). NEVER RETURN REFERENCE OR POINTER TO A LOCAL OBJECT!!!

Functions that return a reference, return lvalues. We can assign to these objects.

---
char &foo(string &str, string::size_type position) {
	return str[position];
}
foo(a, 1) = "A";
---

### return a pointer to an array
---
type (*function(parameters))[dimension]
int (*foo(int i))[10];	//pointer to an array of 10
---

c++11 standard allows defining a return type at declaration:
---
auto func(int i) --> int(*)[10];
---

also possible:
arr1..
arr2..
decltype(arr1) *arrPtr(int i);

#$# overloaded function
functions differentiate based on length and contents of their parameter lists.

#$# default parameters
Should be specified in header.
Can be added, not redeclared.
left 			<-> right
less default	<-> more default

#$# inline function
Expanded by compiler.

#$# constecpr functions
DEFINE these and inline functions in header files.

#$# assert
Preprocessor macro. In runtime it's evaluated only if NDEBUG is NOT defined.
---
assert(expression)	//if expression is false, terminate
---

#$# NDEBUG
Preprocessor variable, used for debugging.
---
#ifndef NDEBUG
cout << "test prints" << endl;
#endif
---

### Some useful variables
compiler:
__func__

preprocessor:
__FILE__
__LINE__
__TIME__
__DATE__

### Pointers to functions
---
bool foo(int);	//function declaration
bool (*pt)(int); 	//pointer declaration

pt = foo;
pt = &foo;	//same thing

foo(3);
pt(3);		//same thing


typedef int funcp(int, int);

void newFunction(int, funcp);
void newFunction(int, int (*funcp)(int, int));	//same thing
---

If you want to get your hands really dirty, you can try passing a class member function...
---
class CellGrid {
public:
	void iterate_grid( void (CellGrid::*)(Coords), bool print=false );
	void helper_print_cell( Coords co );
};

void CellGrid::iterate_grid( void (CellGrid::*fptr)(Coords), bool print ) {
	(this->*fptr)(Coords(j, i));	//usage				
}

void CellGrid::helper_print_cell( Coords co ) {
	cout << grid.at(co.y).at(co.x);
}

//passing the function
int main() {
	iterate_grid( &CellGrid::helper_print_cell );
	return 0;
}
---

## Chapter 7

#$# const member functions
const objects may only call const member functions
If our member function doesn't change the object, is good to define int as a pointer to const (just in case we want to call it on a const object);
member_function(this)
this is implicitly of type: ObjType *const this
we want: const ObjType *const.
how do we achieve this? -> declaration of member function has no argument this
we use the following syntax:
---
int member_functoin1() const;
int member_functoin2(int i) const { member_variable += i; }	//m.fun defined in a class body are implicitly inline.
---

---
Sales_data& Sales_data::combine(const Sales_data &rhs) {
	units_sold += rhs.units_sold;
	revenue += rhs.revenue;
	return *this; //return the whole object... actually returns a reference to that object
}
---

#$# constructor initializer list
Good practise is to always use constructor initializers. There is a difference between assigning and initializing.
assign: { a = b }	//2 steps... also some members won't have default initializers.
initialize: Con::Con(int ii): a(ii);	//1 step
---
Sales_data(const std::stirng &s): bookNo(s), units_sold(0), revenue(0) { }
---

Classes synthesize a default destructor. If we aren't using dynamic memory allocation, that will suffice. String and vector are destroyed by the synthetic destructor.

struct: default access level is public
class: default access level is private

#$# friend
Use keyword friend to allow access to private class members.  
This is NOT a declaration, we still need to declare and define the functions.
We can use friend to give a class access to private members of another class.
---
class Screen {
	friend class Window; //Window can access private members of Screen
	friend void Window::clear();	//we can also grant access to a specific function
};
---

A class can have its own local typedef.
---
private:
	typedef std::string::size_type pos;
---

#$# default constructor
Every class should have a default constructor. It's used every time an object is default or value initialized.
Default initialization of an object has no parenthesis.
Sales_data obj2;

#$# static class member
Variable or function that is bound to the class instead of his objects.
static double interest_rate;
We can't initialize a static member inside a class.
We need to define and init outside.


## Chapter 8
---
while ( cin >> word ) { ... }
//equal to
while ( !cin.fail() ) { ... }
---
Check stream object:  
* .eof();	//reaching EOF sets both eofbit and failbit
* .fail(); 	//for example if we read a char instead of expected int - recoverable
* .bad(); 	//system failure - unrecoverable
* .good();	//all bits are in a valid state
* .clear();	//set all bits to valid state

Buffer flushing:  
* << endl; 		// \n, flush
* << flush; 	// flush
* << ends;		// \0, flush

### Tieing streams
cin.tie(&cout); //argument is a pointer to stream object

### File io
File modes:
in, out, app, ate, turnc, binray
When you use ofstream, the file is opened in out mode + turncate mode (which destroys the data).  
Prevent turncation with in or app mode.

### string io
istringstream, ostringstream, stringstream

---
string line, word;
while ( getline(cin, line) ) {
	istream istr(line);
	while (istr >> word) {
		;
	}
}
---

ostringstream is useful if we are buffering output (only print out if no errors etc...).


## Chapter 8
containers

[begin, end)
[cbegin, cend)... when we are only reading

### members:  
* size_type
* (const_)iterator
* (const_)reference
* value_type	//like calling auto on a container element
---
vector<int>::size_type;
---

### initialization:  
* copy  
vector<int>(v2);  
vector<int>(v3.begin(), v3.end);  
* list  
vector<int>{1,2,3};
* seq  
vector<int>(n_elements, initializer);

array<int, 10>;	//std arrays are faster than old arrays

### member functoins:  
* .assign(); 	//check copy initialization
* .swap();		//no need for equal lengths. iterators stay glued to the same elements (you also swap the iterators)
* .push_back();
* .insert(p,t);	//insert element in front of iterator p. returns iterator pointing to the inserted element
* .emplace_back(constructor args);	//construct new element in the back of the container

### access
//these all return references to the object!
* .back();	//same as *(--(.end()));
* .front(); 	//same as *(.begin());
* [n];
* .at(n);	//safer: throws en exception

---
auto &v1 = c.back();	//gives a reference
auto v2 = c.back(); 	//gives a copy
---

### erase
* .erase(a);	//returns iterator pointing to the next element
* .erase(a, b); //range
* .pop_front(); //returns void
* .pop_back();	//returns void
* .clear();		//clears everything

Erasing elements invalidate iterators. Also adding and stuff (automatic resize can mess things up). Use iterators in the smallest scope possible. Recalculate iterators, especially the off-the-end one!  
When adding/erasing, refresh iterators using insert() and erase().

### resize
* .resize(n);
* .resize(n, val);
* .capacity();	//when size() == capacity(), reallocation occurs
* .reserver(n);

Vector is in practise faster than list, even with reallocation.  

### string operations
* substr(starting_point, count);
* s.replace(pos, len, "pattern");
* s.find("a");
* s.find_first_of("abcd"); //finds either a or b or ...
* to_string(my_int);	//or double or float or any..
* stoi("29");
* stod("asdf29", 4, 6);

### container adaptors
stack, queue, priority_queue
They are built over a sequential container. Stack and queue like to use deque, pri_que uses vector.  
Declare an empty adaptor:  
stack<int> st;
Declare and specify the underlying container:
stack<int, vector<int>> st;
Declare and define, using an existing container:
stack<int> st(my_vector);
