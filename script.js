const khodams = [
    { name: "Onde-Onde", image: "img/onde.jpeg" },
    { name: "Minyak Telon", image: "img/minyak.jpg" },
    { name: "Ipin Gosong", image: "img/ipin.jpg" },
    { name: "Bantal Leher", image: "img/bantal.jpeg" },
    { name: "Mangkok Ayam", image: "img/mangkok.jpg" },
    { name: "Serigala Galau", image: "img/serigala.jpg" },
    { name: "Sayur Lodeh", image: "img/lodeh.jpg" },
    { name: "Rigen", image: "img/rigen.jpg" }
  ];

  function getKhodam() {
    const nameInput = document.getElementById('namaLengkap').value;
    const resultDiv = document.getElementById('hasil');
  
    if (nameInput.trim() === "") {
      alert("Masukkan nama terlebih dahulu");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const chosenKhodam = khodams[randomIndex];
  
    resultDiv.innerHTML = `
      <h2>Khodam ${nameInput} adalah ${chosenKhodam.name}</h2>
      <img src="${chosenKhodam.image}" alt="${chosenKhodam.name}">
    `;
  }