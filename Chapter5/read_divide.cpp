#include <iostream>
#include <stdexcept>

using std::cin;
using std::cout;
using std::endl;
using std::runtime_error;

int main (int argc, char **argv) {
    cout << "Enter 2 numbers:" << endl;
    int a, b;
    cin >> a >> b;

    try {
        if (b == 0)
            throw runtime_error("This won't do!");
    } catch (runtime_error err) {
        cout << "Error is: " << err.what() << endl;
        b = 1;
    }

    cout << "numbers: " << a << ", " << b << endl;

    double c;
    c = static_cast<double>(a) / b;

    cout << a << "/" << b << "=" << c << endl;

    return 0;
}
