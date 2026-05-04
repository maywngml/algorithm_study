#include<vector>
#include<map>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> prevNums;
        vector<int> result;
        int length = nums.size();

        for(int i = 0; i < length; i++) {
            int curNum = nums[i];
            int checkNum = target - curNum;

            if(prevNums.find(checkNum) != prevNums.end()) {
                result.insert(result.end(), {prevNums[checkNum], i});
                break;
            }

            prevNums.insert({curNum, i});
        }

        return result;
    }
};