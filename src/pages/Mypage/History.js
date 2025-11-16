import React from "react";

const History=({historyData, onCancel})=>{
    const formattedDate = (date) => date.split("T")[0];
    const statusMap = {
        PROCESSING: "배송중",
        COMPLETE: "배송완료",
        CANCEL: "주문취소",
    };
    if (!Array.isArray(historyData)) return null;
    
    return(
        <div className="history-container-wrap">
            <div className="history-title">나의 쇼핑 내역</div>
            <div className="history-container">
                <table className="history-table" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                           <th>주문 일자</th>
                           <th>상품 정보</th> 
                           <th>수량</th> 
                           <th>구매 금액</th> 
                           <th>상태</th> 
                           <th>주문 취소</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item) => (
                            <tr key={item.orderId}>
                                <td>{formattedDate(item.createdAt)}</td>
                                <td>
                                    {item.item_name}
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.totalPrice.toLocaleString()}원</td>
                                <td>{statusMap[item.status]}</td>
                                <td>
                                    <button onClick={() => onCancel(item.orderId)}>
                                        취소
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default History;