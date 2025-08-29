document.addEventListener('DOMContentLoaded', function() {
    // Get the buy button element
    const buyButton = document.querySelector('.buy-button');
    
    // Add click event listener to the buy button
    buyButton.addEventListener('click', function() {
        // Show confirmation modal
        showConfirmationModal();
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

/**
 * Show the confirmation modal
 */
function showConfirmationModal() {
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const orderNumber = document.getElementById('order-number');
    const executionOutput = document.getElementById('execution-output');
    const outputContent = document.getElementById('output-content');
    
    // Set initial modal content
    modalTitle.textContent = 'Confirm Purchase';
    modalMessage.textContent = 'You are about to purchase 50,000,000 shoes for $349.99 each';
    orderNumber.textContent = `Order #: DB${Math.floor(Math.random() * 10000)}`;
    executionOutput.style.display = 'none';
    
    // Replace close button with confirm and cancel buttons
    const closeButton = modal.querySelector('.close-button');
    closeButton.textContent = 'Cancel';
    
    // Create confirm button if it doesn't exist
    let confirmButton = modal.querySelector('.confirm-button');
    if (!confirmButton) {
        confirmButton = document.createElement('button');
        confirmButton.className = 'close-button confirm-button';
        confirmButton.style.backgroundColor = '#ff00cc';
        confirmButton.style.marginRight = '10px';
        confirmButton.textContent = 'Confirm & Execute';
        closeButton.parentNode.insertBefore(confirmButton, closeButton);
    }
    
    // Add click event to confirm button
    confirmButton.addEventListener('click', function() {
        executeMgodatagen();
    });
    
    // Show the modal
    modal.style.display = 'flex';
}

/**
 * Execute the mgodatagen executable via Flask API
 */
function executeMgodatagen() {
    const modal = document.getElementById('result-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const orderNumber = document.getElementById('order-number');
    const executionOutput = document.getElementById('execution-output');
    const outputContent = document.getElementById('output-content');
    
    // Update modal content to show processing
    modalTitle.textContent = 'Processing...';
    modalMessage.textContent = 'Executing the order...';
    
    // Remove confirm button if it exists
    const confirmButton = modal.querySelector('.confirm-button');
    if (confirmButton) {
        confirmButton.remove();
    }
    
    // Update close button
    const closeButton = modal.querySelector('.close-button');
    closeButton.textContent = 'Close';
    
    // Make API request to execute mgodatagen
    fetch('/execute-mgodatagen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            modalTitle.textContent = 'Thank You!';
            modalMessage.textContent = 'Your order for Ultra Boost X9000 has been placed and mgodatagen has been executed.';
            orderNumber.textContent = `Order #: ${data.order_number}`;
            
            // Show execution output
            executionOutput.style.display = 'block';
            outputContent.textContent = `STDOUT:\n${data.stdout}\n\nSTDERR:\n${data.stderr}`;
        } else {
            modalTitle.textContent = 'Error';
            modalMessage.textContent = data.message;
            executionOutput.style.display = 'none';
        }
    })
    .catch(error => {
        modalTitle.textContent = 'Error';
        modalMessage.textContent = 'An error occurred while executing mgodatagen.';
        console.error('Error:', error);
    });
}

/**
 * Close the modal
 */
function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.style.display = 'none';
}
