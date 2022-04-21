import { useState } from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

function App() {
  // Модалка для добавления товара
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Модалка для изменения товара
  const [editModal, setEditModal] = useState(false);
  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);

  // состояние для общего массива с продуктами
  const [products, setProducts] = useState([]);
  console.log(products);

  // функция для добавления нового продукта
  const handleProduct = (newObj) => {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  };

  // функция для удаления
  const deleteProduct = (id) => {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  // состояние для изменяемого обьекта
  const [editProduct, setEditProduct] = useState({});

  // функция для поиска редактируемого элемента
  const handleEdit = (id) => {
    let obj = products.filter((item) => item.id === id);
    handleEditShow();
    setEditProduct(obj[0]);
  };

  // функция для сохранения отредактированного элемента
  const handleSave = (obj) => {
    let newProducts = products.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setProducts(newProducts);
    handleEditClose();
  };

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        handleClose={handleClose}
        show={show}
        handleProduct={handleProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        handleEdit={handleEdit}
      />

      {editModal && (
        <EditProduct
          editModal={editModal}
          handleEditClose={handleEditClose}
          handleSave={handleSave}
          editProduct={editProduct}
        />
      )}
    </>
  );
}

export default App;
