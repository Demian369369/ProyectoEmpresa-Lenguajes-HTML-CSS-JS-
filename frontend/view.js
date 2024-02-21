function addComment() {
    const commentArea = document.getElementById('comment-area');
    const commentText = commentArea.value.trim();
    const ratingValue = document.querySelector('input[name="rating"]:checked');
    const clientName = document.getElementById('client-name').value;
    const profileImages = [
        'https://i.pinimg.com/originals/0f/40/b4/0f40b4d08a7971fa4c8606ebb7498448.jpg',
        'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/KLRVE2LFTJH4TAMBBYPVMWSWXQ.jpeg',
        'https://pbs.twimg.com/media/FfMgqxYWQAUZQUl.jpg',
        'https://pbs.twimg.com/media/FrHZdN5WwAIt8NE?format=webp&name=360x360',
        'https://images7.memedroid.com/images/UPLOADED915/64fe54a20b953.jpeg',
        'https://pyxis.nymag.com/v1/imgs/abb/2ca/e31316d4b31cbda80e7084e1cfc28f7b24-10-breaking-bad-refresher-lede.rsquare.w700.jpg',
        'https://images7.memedroid.com/images/UPLOADED645/6201803e9abd9.jpeg',
        'https://i.pinimg.com/originals/cd/74/96/cd7496fa2c9beacd2fc2451e299122d0.jpg'
    ];
    if (commentText !== '' && ratingValue && clientName) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        const userImage = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * profileImages.length);
        userImage.src = profileImages[randomIndex];
        userImage.alt = 'Foto de perfil del usuario';
        userImage.classList.add('user-image');
        userImage.style.maxWidth = '50px';
        commentElement.appendChild(userImage);
        const clientNameElement = document.createElement('p');
        clientNameElement.textContent = `Cliente: ${clientName}`;
        commentElement.appendChild(clientNameElement);
        const starsElement = document.createElement('span');
        starsElement.innerHTML = 'Calificación: ';
        for (let i = 5; i >= parseInt(ratingValue.value); i--) {
            const star = document.createElement('span');
            star.innerHTML = '★';
            starsElement.appendChild(star);
        }
        commentElement.appendChild(starsElement);
        const commentTextElement = document.createElement('p');
        commentTextElement.textContent = `Comentario: ${commentText}`;
        commentElement.appendChild(commentTextElement);
        const commentList = document.getElementById('comment-list');
        commentList.appendChild(commentElement);
        commentArea.value = '';
        commentArea.style.height = 'auto';
        document.getElementById('client-name').value = '';
        saveComment({
            clientName,
            rating: parseInt(ratingValue.value),
            commentText,
            userImage: profileImages[randomIndex]
        });
    } else {
        alert('Por favor, ingrese su nombre, seleccione una calificación y escriba un comentario antes de enviar.');
    }
}
function saveComment(commentData) {
    const existingCommentsJSON = localStorage.getItem('comments');
    const existingComments = existingCommentsJSON ? JSON.parse(existingCommentsJSON) : [];
    existingComments.push(commentData);
    localStorage.setItem('comments', JSON.stringify(existingComments));
}
document.addEventListener('DOMContentLoaded', function () {
    const existingCommentsJSON = localStorage.getItem('comments');
    const existingComments = existingCommentsJSON ? JSON.parse(existingCommentsJSON) : [];
    updateCommentList(existingComments);
});
function updateCommentList(comments) {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';
    for (const comment of comments) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        const userImage = document.createElement('img');
        userImage.src = comment.userImage; 
        userImage.alt = 'Foto de perfil del usuario';
        userImage.classList.add('user-image');
        userImage.style.maxWidth = '50px';
        commentElement.appendChild(userImage);
        const clientNameElement = document.createElement('p');
        clientNameElement.textContent = `Cliente: ${comment.clientName}`;
        commentElement.appendChild(clientNameElement);
        const starsElement = document.createElement('span');
        starsElement.innerHTML = 'Calificación: ';
        for (let i = 5; i >= comment.rating; i--) {
            const star = document.createElement('span');
            star.innerHTML = '★';
            starsElement.appendChild(star);
        }
        commentElement.appendChild(starsElement);
        const commentTextElement = document.createElement('p');
        commentTextElement.textContent = `Comentario: ${comment.commentText}`;
        commentElement.appendChild(commentTextElement);
        commentList.appendChild(commentElement);
    }
}
function togglePrices() {
    const productsPrices = document.getElementById('products-prices');
    productsPrices.style.display = productsPrices.style.display === 'block' ? 'none' : 'block';
}
function showContent(contentId) {
    var popup = document.getElementById('history-popup');
    var title = document.getElementById('popup-title');
    var content = document.getElementById('popup-content');
    if (contentId === 'historia') {
        title.textContent = 'Nuestra Historia';
        content.innerHTML = document.getElementById('history-content').innerHTML;
    }
    popup.style.display = 'block';
}
function closeContent() {
    var popup = document.getElementById('history-popup');
    popup.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").classList.remove("hidden");
    }
});
document.getElementById("accept-cookies").addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").classList.add("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
});
document.getElementById("accept-cookies").addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-banner").style.display = "none";
});
function mostrarInformacion(idCuadro) {
    const infoCuadro = document.getElementById(idCuadro);

    if (infoCuadro.classList.contains('oculto')) {
        infoCuadro.classList.remove('oculto');
        infoCuadro.classList.add('mostrado');
    } else {
        infoCuadro.classList.remove('mostrado');
        infoCuadro.classList.add('oculto');
    }
}
function resetComments() {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';
    localStorage.removeItem('comments');
}
//resetComments();