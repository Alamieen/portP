const items = [ 'My skills include, HTML, CSS, JAVASCRIPT AND REACT',];

function typewriterEffect(element, text, delay) {
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

const typewriterList = document.getElementById('typewriterList');

items.forEach((item) => {
  const listItem = document.createElement('h2');
  typewriterList.appendChild(listItem);
  typewriterEffect(listItem, item, 200);
});
