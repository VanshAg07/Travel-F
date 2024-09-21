import React, { useState }  from 'react';

const Payments = () => {
        const [accountNumber, setAccountNumber] = useState('');
        const [ifscCode, setIfscCode] = useState('');
        const [holderName, setHolderName] = useState('');

    return (
        <div className="payment-section">
            <div className="payment-option" id="bank-transfer">
            <h2>Bank Transfer</h2>
            <form>
                <label htmlFor="account-number">Account Number:</label>
                <input 
                    type="text" 
                    id="account-number" 
                    name="account-number" 
                    value={accountNumber} 
                    onChange={(e) => setAccountNumber(e.target.value)} 
                    required 
                />
                
                <label htmlFor="ifsc-code">IFSC Code:</label>
                <input 
                    type="text" 
                    id="ifsc-code" 
                    name="ifsc-code" 
                    value={ifscCode} 
                    onChange={(e) => setIfscCode(e.target.value)} 
                    required 
                />
                
                <label htmlFor="holder-name">Account Holder's Name:</label>
                <input 
                    type="text" 
                    id="holder-name" 
                    name="holder-name" 
                    value={holderName} 
                    onChange={(e) => setHolderName(e.target.value)} 
                    required 
                />
            </form>
        </div>
        <div className="payment-option" id="upi-transfer">
            <h2>UPI Transfer</h2>
            <p>Use the UPI ID provided below for the payment.</p>
            <p><strong>UPI ID:</strong> example@upi</p>
        </div>
        <div className="payment-option" id="qr-code">
            <h2>QR Code</h2>
            <p>Scan the QR code below to complete the payment.</p>
            <img src="path-to-your-qr-code-image.png" alt="QR Code" />
        </div>
        </div>
    );
};
export default Payments;