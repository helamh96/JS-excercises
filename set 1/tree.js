function printTree(tree){
    let branch = [tree];
    let foo = [];
    while (branch.length !== 0){
        for (b of branch){
            for (nb in b){
                console.log(nb);
                if (Boolean(b[nb])){
                    foo.push(b[nb]);
                }
            }
        }
        branch = foo.slice();
        foo =[];   
    }
}

let tree1 = {'A':{'a':{'aa': {}},'b':{'ba':{}, 'bb':{}},'c':{'ca':{}, 'cb':{'cab':{}}}}};

printTree(tree1);
