import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { add, list, remove, update } from './api/product'
import { listct } from './api/category'
import About from './pages/About'
import Dashboard from './pages/admin/Dashboard'
import ProductManager from './pages/admin/ProductManager'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductDetail from './pages/ProductDetail'
import ProductPage from './pages/ProductPage'
import { ProductType } from './types/product';
import { ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signup from './pages/Signup' 
import Signin from './pages/Signin'
import PrivateRouter from './components/PrivateRouter'
import Cart from './pages/cart'
import {CategoryType} from './types/category'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
      const getProducts = async () => {
          const { data } = await list();
          setProducts(data);
      }
      const getCategory = async () => {
        const { data } = await listct();
        setCategory(data);
      }
      getCategory();
      getProducts();
  }, []);

  const onHandleRemove = async (id: string) => {
    try {
      const { data } = await remove(id);
      if(data){
        toast.success("Xoa thanh cong");
      }  
    } catch (error) {
    }
  }
  const onHandleAdd = async (product: ProductType) => {
     try {
        const { data } = await add(product);
        if(data){
          toast.success("Them thanh cong");
        }  
     } catch (error) {
       
     }
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
       const { data } = await update(product);
       if(data){
         toast.success("Sua thanh cong");
       }  
    } catch (error) {
      
    }
 }
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage product={products} category={category} />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" >
              <Route index element={<ProductPage products={products}/>} />
              <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path="products">
              <Route index  element={<ProductManager products={products} onRemove={onHandleRemove}/>}/>
              <Route path="add" element={<ProductAdd name="" onAdd={onHandleAdd}/>}/>
              <Route path=":id/edit" element={<ProductEdit name="" onUpdate={onHandleUpdate}/>}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
