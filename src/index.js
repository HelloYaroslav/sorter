class Sorter {
    constructor() {
        this.arr = [];

    }

    add(element) {
        // your implementation
        //  var arr = [];
        this.arr.push(element);
        // console.log(arr);
    }

    at(index) {
        // your implementation
        return this.arr[index];
    }

    get length() {
        // your implementation
        return this.arr.length;


    }
    toArray() {
        // your implementation
        return this.arr;
    }

    sort(indices) {
        indices.sort(this.setComparator());
        var NeedtoSortArr = [];


        for (var i = 0; i < indices.length; i++) {
            NeedtoSortArr[i] = this.arr[indices[i]];
        }

        NeedtoSortArr.sort(this.setComparator());

        for (i = 0; i < indices.length; i++)
            this.arr[indices[i]] = NeedtoSortArr[i];


        // your implementation

    }

    setComparator(compareFunction) {

        if (typeof(this.arr[0]) == "object")
            return function isort(a, b) {
                if (a.age > b.age) return 1;
                if (a.age < b.age) return -1;

            }
        else
            return function isort(a, b) {
                    if (a > b) return 1;
                    if (a < b) return -1;

                }
                // your implementation
    }

}


module.exports = Sorter;