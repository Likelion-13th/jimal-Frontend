import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";
import axios from 'axios';
import { useCookies } from 'react-cookie';

const New=()=>{
    const [products, setProducts] = useState([]);
    /*
    const products=[
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_1.png",
            isNew: true,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_2.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_3.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_4.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_5.png",
            isNew: false,
        },
        
    ];
    */

    const [selectedProduct, setSelectedProduct]=useState(null);
    const [isModalOpen, setIsModalOpen]=useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    const [cookies] = useCookies(["accessToken"]);

    const handleCardClick=(product)=>{
        setSelectedProduct(product);
        if(typeof cookies.accessToken !== "string"){
            alert("로그인이 필요합니다");
            return;
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        axios
            .get("/categories/3/items", {
                headers: {
                accept: "*/*",
                },
            })
            .then((response) => {
                setProducts(response.data.result);
            }) 
            .catch((err) => {
                console.log("LOGOUT API 요청 실패", err);
            });
    }, []);

    return(
        <div>
            <Banner title="New" ImagePath={"/banner_new.png"}/>
            <div className='product-container'>
                <div className='product-grid'>
                    {currentProducts.map((product)=>(
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onClick={()=>handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
            <div className="paging">
                {currentPage > 1 && (
                    <button onClick={() => setCurrentPage(currentPage - 1)}>
                        Prev
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => setCurrentPage(pageNumber)}
                            className={currentPage === pageNumber ? 'active' : ''}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
                {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>
                        Next
                    </button>
                )}
            </div>
            {isModalOpen && (<PayModal product={selectedProduct} onClose={handleCloseModal}/>)}
        </div>

    );
};

export default New;