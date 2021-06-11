import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { BrowserRouter as Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Client from "shopify-buy";
import { Component } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// export default function SimpleSelect() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

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
      domain: "okandada.myshopify.com",
      storefrontAccessToken: "6ecf9f92e7a9925d555671493c2b364f",
    });

    client.product.fetchAll().then((products) => {
      // Do something with the products
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
                    "https://okandada.myshopify.com/products/" + product.handle
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
