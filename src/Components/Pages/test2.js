import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Client from "shopify-buy";
import { Component } from "react";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

export default class test2 extends Component {
  constructor() {
    super();
    this.state = {
      isfinsihed: false,
      check: "sdasd",
      productsList: [],
    };
  }

  componentDidMount() {
    const client = Client.buildClient({
      // domain: "okandada.myshopify.com",
      domain: "argento-gold-store.myshopify.com",
      storefrontAccessToken: "f586f69afe35c9465052a3d44ac6a90c",
    });

    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
      this.setState({
        isfinsihed: true,
        check: "sdadasssss",
        productsList: products,
      });
    });

    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      console.log(checkout);
    });
  }

  render() {
    var { isfinsihed, productsList } = this.state;
    console.log(productsList);
    if (isfinsihed) {
      return (
        <div>
          <ul>
            {productsList.map((product) => (
              <li>
                <a
                  href={
                    // "https://okandada.myshopify.com/products/" + product.handle
                    "https://argento-gold-store.myshopify.com/admin/products/" +
                    product.handle
                  }
                >
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h2>We are loading!</h2>;
    }
  }
}
