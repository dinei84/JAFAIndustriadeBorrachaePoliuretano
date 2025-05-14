// Product Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'product-modal';
    modalContainer.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="image-container">
                <img src="" alt="Product Image" id="modal-image">
            </div>
            <div class="modal-title"></div>
            <div class="zoom-controls">
                <button class="zoom-in" title="Ampliar"><i class="fas fa-search-plus"></i></button>
                <button class="zoom-out" title="Reduzir"><i class="fas fa-search-minus"></i></button>
                <button class="zoom-reset" title="Resetar zoom"><i class="fas fa-undo"></i></button>
            </div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    // Get modal elements
    const modal = document.querySelector('.product-modal');
    const modalContent = document.querySelector('.modal-content');
    const imageContainer = document.querySelector('.image-container');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const closeButton = document.querySelector('.modal-close');
    const zoomInButton = document.querySelector('.zoom-in');
    const zoomOutButton = document.querySelector('.zoom-out');
    const zoomResetButton = document.querySelector('.zoom-reset');

    // Zoom functionality variables
    let currentZoom = 1;
    const zoomStep = 0.2;
    const maxZoom = 3;
    const minZoom = 1;

    // Drag functionality variables
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Function to handle zoom
    function setZoom(zoom) {
        currentZoom = zoom;
        modalImage.style.transform = `scale(${currentZoom})`;
        
        // Reset position when zooming out to 1
        if (currentZoom === 1) {
            translateX = 0;
            translateY = 0;
            modalImage.style.transform = `scale(1) translate(0px, 0px)`;
        } else {
            modalImage.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
        }
        
        // Enable/disable dragging based on zoom level
        if (currentZoom > 1) {
            imageContainer.classList.add('draggable');
        } else {
            imageContainer.classList.remove('draggable');
        }
    }

    // Zoom in button
    zoomInButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentZoom < maxZoom) {
            setZoom(currentZoom + zoomStep);
        }
    });

    // Zoom out button
    zoomOutButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentZoom > minZoom) {
            setZoom(currentZoom - zoomStep);
        }
    });

    // Reset zoom button
    zoomResetButton.addEventListener('click', function(e) {
        e.stopPropagation();
        setZoom(1);
    });

    // Dragging functionality
    modalImage.addEventListener('mousedown', function(e) {
        if (currentZoom > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            modalImage.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            modalImage.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modalImage.style.cursor = 'grab';
        }
    });

    // Touch events for mobile dragging
    modalImage.addEventListener('touchstart', function(e) {
        if (currentZoom > 1) {
            isDragging = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
            e.preventDefault();
        }
    }, { passive: false });

    modalImage.addEventListener('touchmove', function(e) {
        if (isDragging) {
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            modalImage.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
            e.preventDefault();
        }
    }, { passive: false });

    modalImage.addEventListener('touchend', function() {
        isDragging = false;
    });

    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Function to open modal
    function openModal(imageUrl, title) {
        // Reset zoom and position
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        modalImage.style.transform = '';
        
        // Preload image
        const img = new Image();
        img.onload = function() {
            modalImage.src = imageUrl;
            modalTitle.textContent = title;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        };
        img.src = imageUrl;
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset modal image after transition
        setTimeout(() => {
            modalImage.src = '';
        }, 300);
    }

    // Add click event to each product card image
    productCards.forEach(card => {
        const imageDiv = card.querySelector('.bg-cover');
        const title = card.querySelector('h3').textContent;
        const backgroundImage = imageDiv.style.backgroundImage;
        const imageUrl = backgroundImage.replace(/url\(['"]?([^'"]*)['"]/g, '$1');

        imageDiv.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(imageUrl, title);
        });
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Prevent closing when clicking on modal content
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Handle swipe to close on mobile devices
    let touchStartY = 0;
    let touchEndY = 0;
    
    modal.addEventListener('touchstart', function(e) {
        if (e.target === modal) {
            touchStartY = e.changedTouches[0].screenY;
        }
    }, false);
    
    modal.addEventListener('touchend', function(e) {
        if (e.target === modal) {
            touchEndY = e.changedTouches[0].screenY;
            if (touchEndY - touchStartY > 50) { // Swipe down
                closeModal();
            }
        }
    }, false);

    // Mouse wheel zoom
    imageContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0 && currentZoom < maxZoom) {
            // Zoom in
            setZoom(currentZoom + zoomStep);
        } else if (e.deltaY > 0 && currentZoom > minZoom) {
            // Zoom out
            setZoom(currentZoom - zoomStep);
        }
    });

    // Double click to zoom in/out
    imageContainer.addEventListener('dblclick', function(e) {
        e.preventDefault();
        if (currentZoom === 1) {
            setZoom(2); // Zoom in to 2x
        } else {
            setZoom(1); // Reset to 1x
        }
    });
});