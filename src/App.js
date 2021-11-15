import { Header, Footer } from './components/index'; 
import Home from './pages/Home';
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Auth from "./pages/Auth";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import CheckOut from "./pages/CheckOut";
import ComingSoon from "./pages/ComingSoon";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import OrderCompleted from "./pages/OrderCompleted";
import ShippingAndReturnS from "./pages/ShippingAndReturns";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import StoreLocator from "./pages/StoreLocator";
import Products from "./pages/Products";
import Account from "./pages/Account";
 
function App() {
  return (
    <>
    <Header />
      <Home />
      {/* <About />
      <Blog />
      <BlogPost />
      <CheckOut />
      <ContactUs />
      <Faq />
      <OrderCompleted />
      <ShippingAndReturnS />
      <Shop />
      <ShoppingCart />
      <StoreLocator />
      <Products />
      <Account />

      <Page404 />
      <ComingSoon /> */}
      <Footer />
    </>
  );
}

export default App;
