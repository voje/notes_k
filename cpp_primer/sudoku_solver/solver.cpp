#include <iostream>
#include <cassert>
#include <cstdlib>

using namespace std;

void print_grid(int (&)[9][9]);

void next_field(int &row, int &col) {
	++col;
	if (col == 9) {
		++row;
		col = 0;
	}
}

bool field_checked(const int (&arr)[9][9], const int row, const int col) {
	int val = arr[row][col];
	for (int i = 0; i < 9; i++) {
		if (i != row && arr[i][col] == val)
			return false;
		if (i != col && arr[row][i] == val)
			return false;
	}
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			int row1 = row / 3;
			row1 = row1 * 3 + i;
			int col1 = col / 3;
			col1 = col1 * 3 + j;
			if (row == row1 && col == col1)
				continue;
			if (val == arr[row1][col1])
				return false;
		}
	}
	return true;
}

bool solve(int (&arr)[9][9], int row = 0, int col = -1) {
	next_field(row, col);
	if ( row == 9 ) {
		return true;
	}
	if ( arr[row][col] != 0 ) {
		return solve(arr, row, col);
	}
	assert( arr[row][col] == 0 );
	bool found_solution = false;
	for (int i = 1; i <= 9 && !found_solution; i++) {
		arr[row][col] = i;
		if ( field_checked(arr, row, col) ) {
			found_solution = found_solution || solve(arr, row, col);
		}
	}
	if (!found_solution)
		arr[row][col] = 0;
	return found_solution;
}

void print_grid(int (&arr)[9][9]) {
	cout << "grid:" << endl;
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			cout << arr[i][j] << " ";
		}
		cout << endl;
	}
}

int main() {
	int grid[9][9] = {
		{8, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 0, 3, 6, 0, 0, 0, 0, 0},
		{0, 7, 0, 0, 9, 0, 2, 0, 0},
		{0, 5, 0, 0, 0, 7, 0, 0, 0},
		{0, 0, 0, 0, 4, 5, 7, 0, 0},
		{0, 0, 0, 1, 0, 0, 0, 3, 0},
		{0, 0, 1, 0, 0, 0, 0, 6, 8},
		{0, 0, 8, 5, 0, 0, 0, 1, 0},
		{0, 9, 0, 0, 0, 0, 4, 0, 0}
	};

	int grid1[9][9] = {0, 8, 0, 1, 0, 5, 7, 4, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 9, 0, 6, 2, 7, 3, 0, 0, 7, 0, 0, 9, 5, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 2, 9, 8, 4, 0, 0, 0, 7, 0, 5, 0, 0, 6, 2, 0, 0, 4, 2, 0, 0, 3, 0, 0, 5, 0, 0, 0, 1, 0, 0, 8, 4, 0, 0, 2};

	decltype(grid) (&used_grid) = grid;

	bool solved = solve(used_grid);
	cout << ((solved) ? "Success!" : "Failure!") << endl;
	print_grid(used_grid);

	return 0;
}