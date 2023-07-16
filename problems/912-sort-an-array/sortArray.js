/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
    const merge = (arr, L, M, R) => {
        const left = arr.slice(L, M + 1);
        const right = arr.slice(M + 1, R + 1);
        let i = L;
        let j = 0;
        let k = 0;
        while (j < left.length && k < right.length) {
            if (left[j] <= right[k]) {
                arr[i] = left[j];
                j += 1;
            } else {
                arr[i] = right[k];
                k += 1;
            }
            i += 1;
        }
        while (j < left.length) {
            nums[i] = left[j];
            j += 1;
            i += 1;
        }
        while (k < right.length) {
            nums[i] = right[k];
            k += 1;
            i += 1;
        }
    };

    const mergeSort = (arr, l, r) => {
        const mid = l + Math.floor((r - l) / 2);

        if (l === r) {
            return arr;
        }
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
        return arr;
    };

    return mergeSort(nums, 0, nums.length - 1);
};

module.exports = { sortArray };
