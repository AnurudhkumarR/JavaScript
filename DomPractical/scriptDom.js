// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorAll('#css-image')
// const cssImage = document.querySelector('.css-image')
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// const ul = document.querySelector("ul");
// we can find nested also by using ('ul li')or using nth child
const ul = document.querySelector("ul");
// to find specfic perticular element  we can use variable ref and use like this
ul.querySelector("css-image");
// but when we use document then it search to all page but in var it search for specific
document.querySelector("css-image");
// it show h1 also in this code of line but when we use
// var on querSelector it find specific element
// And getlementByid work on document not in var like ul.querySelector('css-class)
const allImages = document.querySelectorAll("img");

const imageInsideUl = ul.querySelector(".css-image");

const imagesUrl = [
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=",
];
// mannually seting image
// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// dynamic change automatic
// }
// same thing using for each
allImages.forEach((image, i) => {
  image.src = imagesUrl[i];
});
// forach not work on htmlcollection(queryselector)but convert it into array like const allImages = [...document.images]
// forach work with nodelist(querySelectorAll)

// ------------how to style in JS-------------------------

const h1 = document.querySelector("h1");
const paragraph = document.querySelector("p");
const allLinks = document.querySelectorAll("a");

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = "hotpink";
h1.style.backgroundColor = "skyblue";

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = 'teal'
// }

for (const link of allLinks) {
  // link.style.color = 'teal'
  // link.style.textDecorationLine = 'none'
  // link.style.fontWeight = '700'
  // link.style.fontFamily = 'cursive'
  // link.style.fontSize = '18px'

  // link.style.cssText = `
  //     color: teal;
  //     text-decoration-line: none;
  //     font-weight: 700;
  //     font-family: cursive;
  //     font-size: 18px;
  // `

  // link.className = 'green-link'
  // link.setAttribute('class', 'green-link')

  link.classList.add("green-link");
  link.classList.remove("my-link");
  // link.classList.toggle('my-link')
}
// ------------------------innerHtml,innerText and innerContent

// -------------------setAttribute and getAttribute------------------------
const h1 = document.querySelector("h1");
const paragraphe = document.querySelector("p");

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

// -----------------------parentSibling and child sibling--------------------------
const firstLink = document.querySelector(
  "body > p:nth-child(5) > a.hii.hello.green-link"
);
// firstLink.parentElement
// firstLink.nextElementSibling.nextElementSibling
// firstLink.previousElementSibling
