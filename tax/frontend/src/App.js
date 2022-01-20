import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
// import Itr from "./screens/Itr";
// import Gst from "./screens/Gst";
// import ProductScreen from "./screens/ProductScreen";
// import SigninScreen from "./screens/SigninScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import UploadDataScreens from "./screens/UploadDataScreens";
// import PaymentMethodScreen from "./screens/PaymentMethodScreen";
// import PlaceOrderScreens from "./screens/PlaceOrderScreens";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          {/* <Route path="/product/:id" component={ProductScreen} /> */}
          {/* <Route path="/Itr" component={Itr} /> */}
          {/* <Route path="/Gst" component={Gst} /> */}
          {/* <Route path="/register" component={RegisterScreen} /> */}
          {/* <Route path="/signin" component={SigninScreen} /> */}
          {/* <Route path="/upload" component={UploadDataScreens}></Route> */}
          {/* <Route path="/payment" component={PaymentMethodScreen}></Route> */}
          {/* <Route path="/placeorder" component={PlaceOrderScreens}></Route> */}
          <Route exact path="/" component={Homescreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
