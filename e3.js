// $('div.item1').attr("class"); // pobieramyz div z klasą item1 klasę: item1
// const divClass = $('div.item1').attr("class"); // mozemy pobrac nazwe klasy i przypisac do zmiennej
// console.log(divClass);

//Zmieniamy zawartośc 
// $('div.item1').attr("class", "red blue"); // możemy zmienić zawartośc class i id. teraz zmienimy nazwę klasy

// $('div.item1').attr("id", "red blue"); // możemy zmienić zawartośc class i id. teraz zmienimy dodajemy id.

// console.log($('div.red.blue').attr("class")); // pobieramy nazwę class z naszego elementu.
// console.log($('div.red').attr("class"));

console.log($('[data-idUser]').attr("id")); //pobieram wszystkie elementy które maja atrybut data-idUser.

// $('[data-idUser]').attr("id", ""); Jesli chcemy zresetowac id lub class usunąc jego zawartość. Nie usuwa id ale jego nazwe.

// console.log($('[data-idUser]').attr("id"));

console.log($('.vip_user').removeAttr("class")); // usuwamy class lub id tak że niezostanie ponim śladu.