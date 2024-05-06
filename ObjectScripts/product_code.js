function parsePartCode(partcode) {
    const list = partcode.split(":")
    console.log(list)
    return { //object literal
        supplierCode: list[0],
        productNumber: list[1],
        size: list[2],
    }
}

let partCode1 = "XYZ:1234:L";
let part1 = parsePartCode(partCode1);
console.log(" Supplier: " + part1.supplierCode);
console.log(" Product Number: " + part1.productNumber);
console.log(" Size: " + part1.size);


