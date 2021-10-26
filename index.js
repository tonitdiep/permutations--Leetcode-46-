// Leetcode #46 permutations
//Constraints: 
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//code-along https://www.youtube.com/watch?v=4FdPoW4Qzb4
 nums = [1,2,3]
 var permute = function(nums) {
  //global result
    const result = [];
    
    //dfs recursive helper 
    const dfs= (i, nums) => {
        //base case
        if (i === nums.length) {

            result.push(nums.slice());
               
            return;

        }
        //dfs recursive case
        for(let j = i; j < nums.length; j++){
            [nums[i], nums[j]] = [nums[j], nums[i]];

            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];

        }
    }
        dfs(0, nums);
        return result;
}
   