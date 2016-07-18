#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(){
	string str("this is a string");

	str += ".";
	cout << str << endl;

	//c11
	/*
	for(char c : str){
		cout << " -> " << c << endl;
	}
	*/

	string::iterator begit = str.begin(), endit = str.end();
	for(string::iterator it = begit; it != endit; ++it){
		*it = toupper(*it);
	}
	cout << str << endl;

	vector<double> vec(10, 2);
	for(vector<double>::iterator it = vec.begin(); it != vec.end(); ++it){
		cout << *it << endl;
	}

	return 0; 
}