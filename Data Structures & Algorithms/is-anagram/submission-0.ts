class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const count = new Map<string, number>()

        for(const char of s){
            count.set(char, (count.get(char) ?? 0) + 1)
        }

        for(const char of t){
            const frequency = count.get(char)
            if(!frequency) return false
            count.set(char, frequency - 1)
        }

        return true
    }
}
