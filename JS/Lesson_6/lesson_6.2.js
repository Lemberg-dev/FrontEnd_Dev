function min(){
    let n = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++)
        if (arguments[i] < n) n = arguments[i];
    return n;
}

min(-8, 258, 200, 935, 8000,15, 9256);
