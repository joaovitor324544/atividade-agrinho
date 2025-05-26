document.addEventListener('DOMContentLoaded', () => {
// Interatividade para os tópicos
const topicBoxes = document.querySelectorAll('.topic-box');

topicBoxes.forEach(box => {
box.addEventListener('click', () => {
const details = box.querySelector('.topic-details');
if (details) {
details.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder
}
});
});

// Interatividade para os placeholders de imagem
const imagePlaceholders = document.querySelectorAll('.image-placeholder');

imagePlaceholders.forEach(placeholder => {
placeholder.addEventListener('click', () => {
const imageId = placeholder.id;
let imageUrl = '';
let altText = '';

// Definir imagens de exemplo com base no ID
if (imageId === 'imagePlaceholder1') {
imageUrl = 'https://via.placeholder.com/600x300?text=Imagem+Superior';
altText = 'Imagem Ilustrativa Superior';
} else if (imageId === 'imagePlaceholder2') {
imageUrl = 'https://via.placeholder.com/400x200?text=Imagem+Inferior';
altText = 'Imagem Ilustrativa Inferior';
}

if (imageUrl) {
// Remover qualquer imagem existente para evitar duplicação
placeholder.innerHTML = '';

const img = document.createElement('img');
img.src = imageUrl;
img.alt = altText;
img.style.maxWidth = '100%';
img.style.height = 'auto';
img.style.display = 'block'; // Para remover espaçamento extra

placeholder.appendChild(img);
placeholder.style.backgroundColor = 'transparent'; // Mudar cor de fundo
placeholder.style.cursor = 'default'; // Remover cursor de clique
placeholder.removeEventListener('click', () => {}); // Remover o event listener para não clicar novamente
}
});
});
});