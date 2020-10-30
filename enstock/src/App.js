import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css';
import './App.css';
import Home from './pages/homes/Home';
import AllCategories from './pages/categories/AllCategories';
import AllLocations from './pages/categories/AllLocations';
import TopPlaces from "./pages/categories/TopPlaces";
import ListingGrid from "./pages/listings/ListingGrid";
import ListingList from "./pages/listings/ListingList";
import ListMapView from "./pages/listings/ListMapView";
import ListMapView2 from "./pages/listings/ListMapView2";
import ListRightSidebar from "./pages/listings/ListRightSidebar";
import ListingDetails from "./pages/listings/ListingDetails";
import AddListing from "./pages/listings/AddListing";
import UserProfile from "./components/other/account/UserProfile";
import TopAuthors from "./pages/TopAuthors";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/dashboard/Booking";
import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
import Invoice from "./pages/dashboard/Invoice";
import About from "./pages/About";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import ListCatalogue from './pages/listings/ListCatalogue';
import ListProductDetails from './pages/listings/ListingProductDetails';
import Cart from './pages/dashboard/Cart';
import OrderSuccess from './pages/dashboard/OrderSuccess';
import AppDownload from './components/common/AppDownload';


function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-categories" component={AllCategories} />
        <Route path="/all-locations" component={AllLocations} />
        <Route path="/top-place" component={TopPlaces} />
        <Route path="/listing-grid" component={ListingGrid} />
        <Route path="/listing-list" component={ListingList} />
        <Route path="/list-product" component={ListProductDetails} />
        <Route path="/list-map-view" component={ListMapView} />
        <Route path="/list-map-view2" component={ListMapView2} />
        <Route path="/list-catalogue" component={ListCatalogue} />
        <Route path="/list-right-sidebar" component={ListRightSidebar} />
        <Route path="/listing-details" component={ListingDetails} />
        <Route path="/add-listing" component={AddListing} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/top-author" component={TopAuthors} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/booking" component={Booking} />
        <Route path="/booking-confirmation" component={BookingConfirmation} />
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/cart" component={Cart} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/recover" component={RecoverPassword} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/app-download" component={AppDownload} />
        <Route component={Error} />
      </Switch>
    </Route>
  );
}

export default App;
