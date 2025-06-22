
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'; import { Layout } from './components/ui/layout';
import { ProductPage } from './components/features/page/product-page';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="category/:categoryName" element={<ProductPage />} />
            <Route path="category/:categoryName/:categoryId" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
