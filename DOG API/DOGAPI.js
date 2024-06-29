let Image = document.getElementById("Image-tag");
let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    async function getData() {
        try {
          const result = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await result.json();
          const img = document.getElementById("Image-tag");
          const value = data.message;
          img.setAttribute("src", value);
        } catch (err) {
          console.log(err);
        }
      }
      getData()
})


