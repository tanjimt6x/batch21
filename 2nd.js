<<<<<<< HEAD
function largest(p, q, o){
    if (p >= q && p >= o) {
        return p;
    } else if (q >= p && q >= o) {
        return q;
    } else {
        return o;
    }
}

console.log(largest(19, 49, 99));
=======
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}


console.log(factorial(7));  // 5040
>>>>>>> 393dd9733e08b3cd2ee6ba66844446271197e513
