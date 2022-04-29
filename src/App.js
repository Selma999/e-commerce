import "./App.css";

import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import Loader from "./components/Loader";

import "react-toastify/dist/ReactToastify.css";

const Page404 = lazy(() => import("./Screens/Error404"));
const HomePage = lazy(() => import("./Screens/HomePage"));
const LoginPage = lazy(() => import("./Screens/LoginPage"));
const Catalog = lazy(() => import("./Screens/Catalog"));
const Clothing = lazy(() => import("./Screens/Clothing"));
const Shoes = lazy(() => import("./Screens/Shoes"));
const CheckoutPage = lazy(() => import("./Screens/CheckoutPage"));
const CartPage = lazy(() => import("./Screens/CartPage"));
const ProductDetails = lazy(() => import("./Screens/ProductDetails"));
const Categories = lazy(() => import("./Screens/Categories"));
const Purchased = lazy(() => import("./Screens/Purchased"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<Loader />}>
              <LoginPage />
            </React.Suspense>
          }
        />
        <Route
          path="/checkout"
          element={
            <React.Suspense fallback={<Loader />}>
              <CheckoutPage />
            </React.Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<Loader />}>
              <CartPage />
            </React.Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <React.Suspense fallback={<Loader />}>
              <Catalog />
            </React.Suspense>
          }
        />
        <Route
          path="/catalog/clothing"
          element={
            <React.Suspense fallback={<Loader />}>
              <Clothing />
            </React.Suspense>
          }
        />
        <Route
          path="/catalog/shoes"
          element={
            <React.Suspense fallback={<Loader />}>
              <Shoes />
            </React.Suspense>
          }
        />
        <Route
          path="/catalog/clothing/product-details/:productId"
          element={
            <React.Suspense fallback={<Loader />}>
              <ProductDetails />
            </React.Suspense>
          }
        />
        <Route
          path="/catalog/categories/:label"
          element={
            <React.Suspense fallback={<Loader />}>
              <Categories />
            </React.Suspense>
          }
        />
        <Route
          path="/cart/purchased"
          element={
            <React.Suspense fallback={<Loader />}>
              <Purchased />
            </React.Suspense>
          }
        />
      </Routes>
      <ToastContainer
        autoClose={3500}
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
      />
    </>
  );
}

export default App;
