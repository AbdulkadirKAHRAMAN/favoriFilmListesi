const moviesNumber=Number(prompt("kaç adet film girmek istiyorsunuz"));
const movieLists=[];
for (let index = 0; index < moviesNumber; index++) {
  const movieName = prompt(`${index+1} . Filmi Giriniz`);
  movieLists.push(movieName);
}
movieLists.sort();
console.log("Favori film listeniz:");
for (const movieLists2 of movieLists) {
  
  console.log(movieLists2);
  
  
}