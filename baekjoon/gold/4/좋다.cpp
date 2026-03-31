#include <iostream>
#include <map>
#include <vector>
#include <algorithm>

using namespace std;

// 처음에는 탐색 중인 숫자의 앞부분만 봤으나
// 음수가 있기 때문에 현재 숫자를 제외한 바깥 부분을 다 확인해야됨
// 시간복잡도: O(N^2)
// 공간복잡도: O(N)
int main() {
    int N, result = 0;

    cin >> N;

    vector<int> numbers(N);

    for(int i = 0; i < N; i++) {
        cin >> numbers[i];
    }

    sort(numbers.begin(), numbers.end());

    for(int i = 0; i < N; i++) {
        int currentNum = numbers[i];
        int leftIndex = 0, rightIndex = N - 1;
        bool good = false;

        while(true) {
            if(leftIndex == i) {
                leftIndex++;
            }
            if(rightIndex == i) {
                rightIndex--;
            }
            if(leftIndex >= rightIndex) {
                break;
            }

            int leftNum = numbers[leftIndex];
            int rightNum = numbers[rightIndex];
            int total = leftNum + rightNum;
            
            if(total == currentNum) {
                good = true;
                break;
            } else if(total > currentNum) {
                rightIndex--;
            } else {
                leftIndex++;
            }
        }

        if(good) {
            result++;
        }
    }

    cout << result;

    return 0;
}
