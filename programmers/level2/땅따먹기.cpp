#include <iostream>
#include <vector>
using namespace std;

int solution(vector<vector<int>> land)
{
    const int ROW = land.size();
    const int COLUMN = land[0].size();
    vector<vector<int>> dp(ROW, vector<int>(COLUMN, 0));
    pair<int, int> firstMax(0, 0);
    pair<int, int> secondMax(0, 0);
    int answer = 0;
    
    for(int j = 0; j < COLUMN; j++) {
        if(firstMax.first < land[0][j]) {
            secondMax.first = firstMax.first;
            secondMax.second = firstMax.second;
            firstMax.first = land[0][j];
            firstMax.second = j;
        } else if(secondMax.first < land[0][j]) {
            secondMax.first = land[0][j];
            secondMax.second = j;
        }
        dp[0][j] = land[0][j];
    }
    
    for(int i = 1; i < ROW; i++) {
        for(int j = 0; j < COLUMN; j++) {
            if(firstMax.second != j) {
                dp[i][j] = firstMax.first + land[i][j];
            } else {
                dp[i][j] = secondMax.first + land[i][j];
            }
        }
        
        firstMax.first = 0;
        firstMax.second = 0;
        secondMax.first = 0;
        secondMax.second = 0;
        
        for(int j = 0; j < COLUMN; j++) {
            if(firstMax.first < dp[i][j]) {
                secondMax.first = firstMax.first;
                secondMax.second = firstMax.second;
                firstMax.first = dp[i][j];
                firstMax.second = j;
            } else if(secondMax.first < dp[i][j]) {
                secondMax.first = dp[i][j];
                secondMax.second = j;
            }
        }
    }

    return firstMax.first;
}