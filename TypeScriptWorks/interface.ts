interface Product {
  id: number;
  name: string;
  unitPrice: number;
}

interface ProductTwo {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  console.log(product.name + "saved");
}

function saveTwo(product: ProductTwo) {
  console.log(product.name + "saved");
}

save({ id: 1, name: "Laptop", unitPrice: 10 });
saveTwo({ id: 2, name: "Mouse", unitPrice: 11 });

interface PersonService {
  save();
}

class CustomerService implements PersonService {
  save() {}
}
