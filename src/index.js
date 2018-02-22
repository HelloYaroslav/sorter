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
        console.log("UNsorted array", this.toArray());
        console.log("takes indices from test -", indices);
        indices.sort(this.setComparator());
        var NeedtoSortArr = [];
        console.log("sorted", indices);

        for (var i = 0; i < indices.length; i++) {
            NeedtoSortArr[i] = this.arr[indices[i]];

        }
        console.log("nedd to sort elem -", NeedtoSortArr)
        NeedtoSortArr.sort(this.setComparator());
        console.log("sorted needed elements", NeedtoSortArr);
        for (i = 0; i < indices.length; i++)
            this.arr[indices[i]] = NeedtoSortArr[i];
        console.log("sorted array", this.toArray());

        // your implementation

    }

    setComparator(compareFunction) {

            return function isort(a, b) {
                if (a > b) return 1;
                if (a < b) return -1;

            }

        }
        // your implementation
}




module.exports = Sorter;