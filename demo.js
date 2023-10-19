function findLowestIndex(nums){
    let min=nums [0];
    let minIndex=0;
    for (let i=0;i<nums.length;i++)
    if (nums[i]< min){
        min=nums[i];
        minIndex=i;
    }
    return minIndex
}