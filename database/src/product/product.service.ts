export class ProductService {

  create(product: any) {
    return "Create Product";
  }

  findAll() {
    return "Get All Products";
  }

  findOne(id: number) {
    return `Get Product ${id}`;
  }

  update(id: number, product: any) {
    return `Update Product ${id}`;
  }

  remove(id: number) {
    return `Delete Product ${id}`;
  }

}
