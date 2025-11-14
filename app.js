// --- Task 1: Sum and Average ---
console.log("=== Task 1 ===");

const numbers = [15, 22, 10, 5, 30];

// sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length;

console.log("Array:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);


// --- Task 2: Product Object ---
console.log("=== Task 2 ===");

const product = {
    productName: "MacBook Pro M3",
    memory: "18GB RAM",
    isAvailableAt: ["Rustaveli Ave #12", "Chavchavadze Ave #5", "Tsereteli Ave #110"]
};

const result =
    `${product.productName} with ${product.memory} memory is available at ${product.isAvailableAt[0]}.`;

console.log(result);


// --- Task 3: Books Array ---
console.log("=== Task 3 ===");

const books = [
    { title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", yearPublished: 1200 },
    { title: "დიდოსტატის მარჯვენა", author: "კონსტანტინე გამსახურდია", yearPublished: 1939 },
    { title: "80 დღე დედამიწის გარშემო", author: "ჟიულ ვერნი", yearPublished: 1873 }
];

console.log(books);
