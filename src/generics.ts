//generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3, 4]);
const stgArray = concatArray<string[]>(["luan", "goku"],["vegeta"]);
console.log(numArray);
console.log(stgArray);