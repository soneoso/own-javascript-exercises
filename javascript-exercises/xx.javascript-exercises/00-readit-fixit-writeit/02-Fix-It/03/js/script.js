const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

// Good code

tvshows.reverse();

document.write(`<ol>`);
for (let i = 0; i < tvshows.length; i++) {
  document.write(`<li>${tvshows[i]}</li>`);
}
document.write(`</ol>`);

// Bad code

// document.write(`<ol>`);
// for (let i = 0; i < movies.length; i++) {
//   document.write(`<li>${movies[i]}</li>`);
// }
// document.write(`</ol>`);