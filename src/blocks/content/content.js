const article = document.querySelector('.article')
const readMoreArticle = article.querySelector('.button--read-more')
let readMoreArticleText = readMoreArticle.addEventListener(
  'click',
  function () {
    const articleText = article.querySelector('.article__text')
    let paragraph = document.createElement('p')
    paragraph.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam a, officia similique unde deserunt. Pariatur, et adipisci in nisi, fuga assumenda nobis doloremque sint quod sequi voluptatum similique omnis.'
    articleText.appendChild(paragraph)
    readMoreArticle.classList.add('hidden')
  }
)
