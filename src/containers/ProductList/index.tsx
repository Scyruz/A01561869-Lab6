import React from "react";
import ProductView from "../../components/ProductView";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

interface ListState {
  products: Product[];
}

class ProductList extends React.Component<{}, ListState> {
  state = {
    products: [] as Product[],
  };

  render() {
    var productsList: any[] = [];
    this.state.products.forEach((product) => {
      productsList.push(<ProductView product={product} />);
    });
    return productsList;
  }

  componentDidMount() {
    ProductService.getAll()
      .then((response) => {
        const products = response.data;
        console.log(products);
        this.setState({ products });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ProductList;