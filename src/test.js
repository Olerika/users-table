function createIntervals(data) {
    // generate Array of Intervals out of Array of Integers.
    var interval = [];
    for ( var i=data.length-1; i >= 0; i-- ){
        console.log(i);
        if ((data[i] - data[i - 1]) === 1) {
            interval.push(data[i]);
            // interval[data.length-1] = (interval.push([data.length-1,data[i]]))
        }
    }
    console.log(interval);
    //return [];
}


createIntervals([1, 2, 3, 4, 5, 7, 8, 12])
