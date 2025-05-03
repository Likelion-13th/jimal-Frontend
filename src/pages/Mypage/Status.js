import React from "react";

const Status=()=>{
    return(
        <div className="status-container-wrap">
            <div className="status-title">나의 주문 현황</div>
            <div className="status-container">
                <div className="status-section">
                    <div className="status-label">입금완료</div>
                    <div className="status-value">1</div>
                </div>
                <div className="status-section"> 
                    <div className="status-label">배송중</div>
                    <div className="status-value">10</div>
                </div>
                <div className="status-section">
                    <div className="status-label">배송완료</div>
                    <div className="status-value">100</div>
                </div>
                <div className="status-section">
                    <div className="status-label">주문취소</div>
                    <div className="status-value">0</div>
                </div>
            </div>
        </div>
    );
};
export default Status;