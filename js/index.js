
const allApiData = () =>{
const url = `https://openapi.programming-hero.com/api/ai/tools`;
fetch(url)
  .then((res) => res.json())
  .then((data) => featuresAllApiData(data.data.tools));
}

const featuresAllApiData = data =>{
    // console.log(data);
    const featuresAllData = document.getElementById('features-all-data');
    data = data.slice(0, 6);
    data.forEach(singleFeaturesData => {
        console.log(singleFeaturesData);
        // featuresAllApiData.innerHTML += `
        const card = document.createElement("div");
        
    card.classList.add("card", "mb-3");
    card.innerHTML = `
        <div class="card h-100">
                        <img src="${singleFeaturesData.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h4 class="card-title">Features</h4>
                        <p class="card-text"><ul>
                        <li>${singleFeaturesData.features[0]}</li>
                        <li>${singleFeaturesData.features[1]}</li>
                        <li>${singleFeaturesData.features[2]}</li>
                    </ul></p>
                    
                    <div class="d-flex justify-content-between">
                        <div class="">
                            <h4 class="fs-4">${singleFeaturesData.name}</h4>
                        </div>
                        <i class="align-items-center fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    </div>
        `;
        featuresAllData.appendChild(card);
    });
}

allApiData();