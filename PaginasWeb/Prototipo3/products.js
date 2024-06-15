document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('.menu-list li');
    const productImage = document.getElementById('productImage');
    let currentSelected = null;
  
    menuToggle.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        if (currentSelected) {
          currentSelected.classList.remove('selected');
        }
        currentSelected = item;
        item.classList.add('selected');
  
        const imageUrl = item.getAttribute('data-image');
        productImage.setAttribute('src', `./images/${imageUrl}`);
        productImage.style.display = 'block';
      });
    });
  
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        if (currentSelected) {
          currentSelected.classList.remove('selected');
        }
        productImage.style.display = 'none';
      }
    });
  });
  