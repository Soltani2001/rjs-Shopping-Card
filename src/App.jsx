import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailesPage from "./pages/DetailesPage"
import Checkout from "./pages/Checkout"
import PageNotFound from "./pages/404"
import ProductsProvider from "./context/ProductContext"
import CartProvider from "./context/CartContext"
import Layout from "./assets/layout/Layout"

function App() {
  
  return (
    <>
    <CartProvider>
    <ProductsProvider>
    <Layout>
    <Routes>
      <Route path="/" element={< Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailesPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </Layout>
    </ProductsProvider>
    </CartProvider> 
    </>
  )
}

export default App
