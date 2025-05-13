document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('readMoreBtn');

  button.addEventListener('click', () => {
    const extraContent = document.createElement('p');
    extraContent.textContent = 'Here’s some additional information about the blog. Stay tuned for awesome content!';
    extraContent.style.marginTop = '1rem';
    extraContent.style.animation = 'fadeIn 1s ease forwards';
    document.querySelector('.intro').appendChild(extraContent);
    button.disabled = true;
  });
});
