#include "car.h"

using namespace std;

void Car::to_string() const {
	cout << "car:" << endl;
	cout << "\tn_kilometers: " << n_kilometers << endl;
	cout << "\tbrand: " << brand << endl;
	//++n_kilometers; 	//produces an error;
}

void set_n_kilometers(Car &c, int km) {
	c.n_kilometers = km;
}

int main() {
	//Car c1(); //wrong!
	Car c1;
	Car c2("mercedes");

	c1.to_string();
	set_n_kilometers(c1, 50);
	c1.to_string();
	c2.to_string();

	return 0;
}