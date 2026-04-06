#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// 첫번째 풀이
void backtracking(int currentNum, string expressions, int N) {
    if(currentNum == N) {
        string erasedExpressions = expressions;
        string prevNum = "";
        char prevExp = '+';
        
        erasedExpressions.erase(remove(erasedExpressions.begin(), erasedExpressions.end(), ' '), erasedExpressions.end());
        
        int total = 0, size = erasedExpressions.size();

        for(int i = 0; i < size; i++) {
            const char curExp = erasedExpressions[i];

            if(curExp == '+' || curExp == '-') {
                if(prevExp == '+') {
                    total += stoi(prevNum);
                } else {
                    total -= stoi(prevNum);
                }
                prevNum = "";
                prevExp = curExp;
            } else {
                prevNum += curExp;
            }
        }

        if(prevExp == '+') {
            total += stoi(prevNum);
        } else {
            total -= stoi(prevNum);
        }

        if(total == 0) {
            cout << expressions << '\n';
        }
        
        return;
    }

    int nextNum = currentNum + 1;

    backtracking(nextNum, expressions + " " + to_string(nextNum), N);
    backtracking(nextNum, expressions + "+" + to_string(nextNum), N);
    backtracking(nextNum, expressions + "-" + to_string(nextNum), N);
}

// 두번째 풀이
void backtracking(int num, int total, int prev, string expr, int N) {
    if(num == N) {
        if(total == 0) {
            cout << expr << "\n";
        }
        return;
    }

    int next = num + 1;

    int newPrev;
    // 여기가 핵심!
    // prev로 숫자 다루기
    // 10 곱해서 더하거나 빼면 돼 아웅!!!!! 이 생각을 못했다
    if(prev >= 0) {
        newPrev = prev * 10 + next;
    } else {
        newPrev = prev * 10 - next;
    }

    backtracking(next, total - prev + newPrev, newPrev, expr + " " + to_string(next), N);
    backtracking(next, total + next, next, expr + "+" + to_string(next), N);
    backtracking(next, total - next, -next, expr + "-" + to_string(next), N);
}

int main() {
    int K;

    cin >> K;

    while(K--) {
        int N;
        cin >> N;

        backtracking(1, "1", N);
        cout << "\n";
    }

    return 0;
}
