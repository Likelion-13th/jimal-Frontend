import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Diffuser=()=>{
    const products=[
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_7.png",
            isNew: true,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_8.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_9.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_10.png",
            isNew: false,
        },
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_11.png",
            isNew: false,
        },
        
    ];

    const [selectedProduct, setSelectedProduct]=useState(null);
    const [isModalOpen, setIsModalOpen]=useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    

    const handleCardClick=(product)=>{
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return(
        <div>
            <Banner title="Diffuser" ImagePath={"/banner_diffuser.png"}/>
            <div className='product-container'>
                <div className='product-grid'>
                    {products.map((product)=>(
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

export default Diffuser;