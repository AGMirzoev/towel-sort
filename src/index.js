// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    function matrixSort() {
        if (matrix && matrix.length > 0) {
            for (let i = 0; i < matrix.length; i++) {
                if (i % 2 === 0) {
                    result = result.concat(matrix[i]);
                } else {
                    result = result.concat(matrix[i].slice().reverse());
                }
            }
        }
    }

    matrixSort();
    return result;
};
