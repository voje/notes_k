#ifndef _MY_CAR_
#define _MY_CAR_

#include <iostream>

class Car {
	friend void set_n_kilometers(Car&, int);
private:
	int n_kilometers;
	std::string brand;
public:
	Car() = default;	//default initialization
	Car(std::string): n_kilometers(42), brand("toyota") { };	//using initializer list
	int get_n_kilometers() const { return n_kilometers; };
	void increment_n_kilometers() { ++n_kilometers; };
	void to_string() const;	//object (this) that the function uses is const
};

#endif