function solution(v) {
    var x = 0;
    var y = 0;
    
    if(v[0][0] != v[1][0] && v[0][0] != v[2][0]) {
        x = v[0][0];
    }
    
    else if(v[1][0] != v[0][0] && v[1][0] != v[2][0]) {
        x = v[1][0];
    }
    
    else if(v[2][0] != v[0][0] && v[2][0] != v[1][0]) {
        x = v[2][0];
    }
    
    if(v[0][1] != v[1][1] && v[0][1] != v[2][1]) {
        y = v[0][1];
    }
    
    else if(v[1][1] != v[0][1] && v[1][1] != v[2][1]) {
        y = v[1][1];
    }
    
    else if(v[2][1] != v[0][1] && v[2][1] != v[0][1]) {
        y = v[2][1];
    }
    
    return [x, y]
}