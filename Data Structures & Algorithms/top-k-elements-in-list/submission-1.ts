class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>
        for(const num of nums){
            const current = frequency.get(num) || 0
            frequency.set(num, current + 1)
        }

        const buckets: number[][] = []
        for(let i = 0; i <= nums.length; i++){
            buckets.push([])
        }

        for(const [num,count] of frequency){
            buckets[count].push(num)
        }

        const result: number[] = []

        for(let count = buckets.length - 1; count >= 0; count--){
            for(const num of buckets[count]){
                result.push(num)

                if(result.length === k){
                    return result
                }
            }
        }

        return result
    }
    
}
