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
      domain: "abcstorexzy.myshopify.com",
      storefrontAccessToken: "fbcf4074a7fa618e9117864b59654e48",
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
                    "https://abcstorexzy.myshopify.com/products/" +
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
