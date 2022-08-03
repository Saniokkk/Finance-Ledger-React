

const rootElement = document.documentElement;

function getCoords(elem) {
  const box = elem.getBoundingClientRect();  
  return box.top + window.pageYOffset;
}

function scrollToTop(coord) {
  const headerHeight = () => {
    if (window.visualViewport.width < 768) {
      return 120
    }
    if (window.visualViewport.width > 768 && window.visualViewport.width < 1360) {
      return 80
    }
    if (window.visualViewport.width > 1360) {
      return 66
    }
  }

  rootElement.scrollTo({
    top: coord ? coord - headerHeight() : 0,
    behavior: "smooth"
  });
}

export const handleClick = (event) => {
  const nameBtn = event.target.name;
  
const aboutSection = document.querySelector('#about')
const casesSection = document.querySelector('#cases')
const blogSection = document.querySelector('#blog')
const contactSection = document.querySelector('#contact')
  
  switch (nameBtn) {
    case 'home':
      scrollToTop()
      break;
    case 'about':
      scrollToTop(getCoords(aboutSection));
      break;
    case 'cases':
      scrollToTop(getCoords(casesSection));
      break;
    case 'blog':
      scrollToTop(getCoords(blogSection));
      break;
    case 'contact':
      scrollToTop(getCoords(contactSection));
      break;
      
    default:
      break;
  }
}
