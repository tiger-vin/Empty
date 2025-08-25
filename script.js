document.addEventListener('DOMContentLoaded', function() {
    // Get the buy button element
    const buyButton = document.querySelector('.buy-button');
    
    // Add click event listener to the buy button
    buyButton.addEventListener('click', function() {
        // Show a confirmation modal before executing
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        // Create the modal content
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        // Add content to the modal
        modal.innerHTML = `
            <h2>Confirm Purchase</h2>
            <p>You are about to purchase 1M DocDB Boost Z9000s for $349.99 Each</p>
            <p class="success-message">Order #: DB${Math.floor(Math.random() * 10000)}</p>
            <div class="button-container">
                <button class="execute-button">Confirm & Execute</button>
                <button class="close-button">Cancel</button>
            </div>
        `;
        
        // Append modal to overlay and overlay to body
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Add click event to close button
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        // Add click event to execute button
        const executeButton = modal.querySelector('.execute-button');
        executeButton.addEventListener('click', function() {
            // Redirect to the execution page
            window.location.href = 'execute-mgodatagen.html';
        });
        
        // Add click event to overlay to close when clicking outside modal
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
    
    // Add hover effect to product image
    const productImage = document.querySelector('.product-image img');
    productImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    productImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add these styles to the document
const styles = document.createElement('style');
styles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .modal {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        animation: modalFadeIn 0.3s ease-out;
    }
    
    .modal h2 {
        color: #ff00cc;
        margin-bottom: 1rem;
    }
    
    .success-message {
        font-size: 1.5rem;
        font-weight: bold;
        color: #3333ff;
        margin: 1.5rem 0;
    }
    
    .button-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .execute-button {
        background: linear-gradient(90deg, #ff00cc 0%, #3333ff 100%);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .execute-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .close-button {
        background: #f5f5f5;
        color: #333;
        border: none;
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .close-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(styles);
