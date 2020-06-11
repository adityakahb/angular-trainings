const fs = require('fs');

const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec lectus fringilla, rutrum justo ut, sagittis mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tincidunt, neque sit amet ullamcorper efficitur, tellus odio bibendum felis, tincidunt tincidunt felis mi eget massa. Maecenas consectetur augue a laoreet tristique. Nulla sit amet blandit elit, in rutrum sem. Donec euismod suscipit tempus. Nam ut arcu non enim rhoncus luctus. Donec id nisi pellentesque justo suscipit pretium sodales sed ipsum. Sed venenatis iaculis velit ac fermentum. Suspendisse mattis ante vitae commodo porta. Nullam eleifend eleifend lectus, eget vestibulum quam pulvinar ac. Proin aliquet, neque ut congue aliquam, velit sem convallis est, vitae ultrices lectus risus et odio. In non arcu at felis vehicula condimentum quis non metus. Nunc congue metus quis egestas pretium. Sed in risus eget risus blandit rutrum.';
const searchResultsCount = 30;
const featuredResultsCount = 12;
let wordsArr = [];

const nameGenerator = (count) => {
  let resultName = '';
  count = count || 2;
  for(let name = 0; name < count; name++) {
    resultName += wordsArr[Math.floor(Math.random() * wordsArr.length)] + ' ';
  }
  return resultName.replace(/^\s+|\s+$/g, '').split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');;
}

const imgGenerator = (w, h, bg, fg) => {
  return `https://via.placeholder.com/${w}x${h}/${bg}/${fg}`;
}

const ratingsGenerator = () => {
  return (Math.floor(Math.random() * 51) / 10).toFixed(1);
}

const minorGenerator = () => {
  return Math.floor(Math.random() * 100).toFixed();
}

const majorGenerator = () => {
  return Math.floor(1000 + Math.random() * 9000).toFixed();
}

const generateFiles = () => {

  wordsArr = str.toLowerCase().split(', ').join(' ').split('. ').join(' ').split('.').join(' ').split(' ');




  let searchResultsArr = [];
  let featuredResultsArr = [];
  for (let i=0; i<searchResultsCount; i++) {

    let nameCount = Math.floor(Math.random() * 20) + 1;

    let bg = Math.floor(Math.random()*16777215).toString(16);
    let fg = Math.floor(Math.random()*16777215).toString(16);

    let sampleResult = {
      "title": nameGenerator(nameCount),
      "img": {
        "xs": imgGenerator(320, 320, bg, fg),
        "xs2": imgGenerator(640, 640, bg, fg),
        "md": imgGenerator(360, 360, bg, fg),
        "md2": imgGenerator(720, 720, bg, fg),
        "xl": imgGenerator(400, 400, bg, fg),
        "xl2": imgGenerator(800, 800, bg, fg)
      },
      "link": "#",
      "ratings": ratingsGenerator(),
      "price": {
        "currency": "inr",
        "major": majorGenerator(),
        "minor": minorGenerator()
      },
      "oldprice": {
        "currency": "inr",
        "major": majorGenerator(),
        "minor": minorGenerator()
      }
    };
    searchResultsArr.push(sampleResult);
  }
  for (let i=0; i<featuredResultsCount; i++) {

    let nameCount = Math.floor(Math.random() * 16) + 1;

    let bg = Math.floor(Math.random()*16777215).toString(16);
    let fg = Math.floor(Math.random()*16777215).toString(16);

    let sampleResult = {
      "title": nameGenerator(nameCount),
      "img": {
        "xs": imgGenerator(320, 320, bg, fg),
        "xs2": imgGenerator(640, 640, bg, fg),
        "md": imgGenerator(360, 360, bg, fg),
        "md2": imgGenerator(720, 720, bg, fg),
        "xl": imgGenerator(400, 400, bg, fg),
        "xl2": imgGenerator(800, 800, bg, fg)
      },
      "link": "#",
      "ratings": ratingsGenerator(),
      "price": {
        "currency": "inr",
        "major": majorGenerator(),
        "minor": minorGenerator()
      },
      "oldprice": {
        "currency": "inr",
        "major": majorGenerator(),
        "minor": minorGenerator()
      }
    };
    featuredResultsArr.push(sampleResult);
  }
  // console.log('============searchResultsArr', searchResultsArr);
  fs.writeFile('./src/app/data/search-results.json', JSON.stringify(searchResultsArr), function (err) {
    if (err) throw err;
    console.log('Search Results Replaced');
  });
  fs.writeFile('./src/app/data/featured-results.json', JSON.stringify(featuredResultsArr), function (err) {
    if (err) throw err;
    console.log('Featured Results Replaced');
  });
};

generateFiles();