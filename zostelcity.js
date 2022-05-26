import footer from "./components/footer.js";

document.getElementById("footer").innerHTML = footer();

const getCityData = async (text) => {
  try {
    let cityRes = await fetch("http://localhost:3000/cities");
    let cityData = await cityRes.json();

    cityData.forEach((city) => {
      let name = city.type + " " + city.Name;
      let name2 = city.type + " " + city.Name;

      if (name === text) {
        displayCityData(city);
        console.log(city);
      } else if (name2 === text) {
        displayCityData(city);
        console.log(city);
      }
    });

    console.log(cityData);
  } catch (error) {
    console.log(error);
  }
};

let cities = document.querySelectorAll(".city");

for (let item of cities) {
  item.addEventListener("click", (ele) => {
    let text = ele.target.innerText;
    getCityData(text);
    console.log(text);
  });
}
const displayCityData = (city) => {

  localStorage.setItem("roomDetails",JSON.stringify(city.roomDetails))

  document.getElementById("cityImage").innerHTML = "";
  document.getElementById("stays").innerHTML = "";
  let image = document.createElement("img");
  image.setAttribute("class", "cityImage")
  image.src = city.Image;

  document.getElementById("cityImage").append(image);

  document.querySelector(".cityName").innerText = city.Name;
  document.querySelector(".cityName1").innerText = city.Name;
 


  document.querySelector("#desc").innerText = city.Description;

  let stayDiv = document.createElement("div");

  city.stays.forEach((stay) => {
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "imageDiv")

    let imageCard = document.createElement("img");
    imageCard.src = stay.staysImage;

    imageDiv.append(imageCard);

    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "descDiv")

    

    let type = document.createElement("p");
    type.innerText = "ZOSTEL";
    type.setAttribute("class", "type")

    let name = document.createElement("p");
    name.innerText = stay.staysName;
    name.setAttribute("class", "stayName")

    let desc = document.createElement("p");
    desc.innerText = stay.staysDescription;
    desc.setAttribute("class", "stayDesc")

    let rateBtn = document.createElement("div");
    rateBtn.setAttribute("class", "rateBtn")

    let price = document.createElement("p");
    price.innerText = "starting from" + " " + "₹" + stay.rate;
    price.setAttribute("class", "stayPrice")

    let viewButton = document.createElement("button");
    viewButton.innerText = "View" + " " + "→";



    viewButton.addEventListener("click", () => {
     
      location.href = "rooms.html"
      
    });

    rateBtn.append(price,viewButton)

    descDiv.append(type, name, desc,rateBtn);

    stayDiv.append(imageDiv, descDiv);
    document.getElementById("stays").append(stayDiv);
  });
};
