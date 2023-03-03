const allApiData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => featuresAllApiData(data.data.tools));
};

const featuresAllApiData = (data) => {
  // console.log(data);
  const featuresAllData = document.getElementById("features-all-data");
  const showAllData = document.getElementById("show-all-data");
  if (data.length > 6) {
    data = data.slice(0, 6);
    showAllData.classList.remove("d-none");
  } else {
    showAllData.classList.add("d-none");
  }
  data.forEach((singleFeaturesData) => {
    const { id, image, name, features } = singleFeaturesData;
    // featuresAllApiData.innerHTML += `
    const card = document.createElement("div");

    card.classList.add("card", "mb-3");
    card.innerHTML = `
        <div class="card h-100">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h4 class="card-title">Features</h4>
                        <p class="card-text"><ol type ="1">
                        <li>${features[0]}</li>
                        <li>${features[1]}</li>
                        <li>${features[2]}</li>
                    </ol></p>
                    
                    <div class="d-flex justify-content-between">
                        <div class="">
                            <h4 class="fs-4">${name}</h4>
                            <p>${singleFeaturesData}</p>
                        </div>
                        <i class="fa-solid fa-arrow-right" onclick="fetchFeatureData('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </div>
                    </div>
                    </div>
        `;
    featuresAllData.appendChild(card);
  });
  toggleLoader(false);
};

const fetchFeatureData = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFeatureData(data.data));
};

const showFeatureData = (featureDetails) => {
  console.log(featureDetails);
  const { id, image, name, features,image_link } = featureDetails;
  // featuresAllApiData.innerHTML += `modal-body

  document.getElementById("modal-body").innerHTML = `

    <div class="card md-6">
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src="${image_link[0]}" class="card-img-top" alt="...">
        <h4 class="card-title">Hi, how are you doing today?</45>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
</div>
</div>
    `;
};

const date = () => {
  const day = new Date();
  const showDate = document.getElementById("date");
  showDate.innerText = day.getFullYear();
};

const toggleLoader = (isLoading) => {
  const loadingSpinner = document.getElementById("loader");
  if (isLoading) {
    loadingSpinner.classList.remove("d-none");
  } else {
    loadingSpinner.classList.add("d-none");
  }
};

document.getElementById("show-all-data").addEventListener("click", function () {
  toggleLoader(true);
  featuresAllApiData();
});

allApiData();
