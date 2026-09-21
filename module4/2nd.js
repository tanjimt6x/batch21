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
