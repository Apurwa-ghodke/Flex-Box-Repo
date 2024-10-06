// script.js
const flexContainer = document.querySelector('.flex-container');
const flexDirection = document.getElementById('flex-direction');
const flexWrap = document.getElementById('flex-wrap');
const justifyContent = document.getElementById('justify-content');
const alignItems = document.getElementById('align-items');
const alignContent = document.getElementById('align-content');
const flexItem = document.getElementById('flex-item');

function updateFlexbox() {
    flexContainer.style.flexDirection = flexDirection.value;
    flexContainer.style.flexWrap = flexWrap.value;
    flexContainer.style.justifyContent = justifyContent.value;
    flexContainer.style.alignItems = alignItems.value;
    flexContainer.style.alignContent = alignContent.value;

    // Update flex-grow for items
    const items = document.querySelectorAll('.flex-item');
    items.forEach(item => {
        item.style.flexGrow = flexItem.value;
    });
}

// Add event listeners to each select element
flexDirection.addEventListener('change', updateFlexbox);
flexWrap.addEventListener('change', updateFlexbox);
justifyContent.addEventListener('change', updateFlexbox);
alignItems.addEventListener('change', updateFlexbox);
alignContent.addEventListener('change', updateFlexbox);
flexItem.addEventListener('change', updateFlexbox);

// Initial update to set styles
updateFlexbox();
