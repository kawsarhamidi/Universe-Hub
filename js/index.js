const allApiData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => featuresAllApiData(data.data.tools));
};

const featuresAllApiData = (data) => {
  // console.log(data);

  const featuresAllData = document.getElementById("features-all-data");
  const showAllData = document.getElementById("show-all");
//   if (data.length > 6) {
//     data = data.slice(0, 6);
//     showAllData.classList.remove("d-none");
//   } else {
//     ;
//     showAllData.classList.add("d-none");
//   }
featuresAllApiData.innerHTML = '';
  data.forEach((singleFeaturesData) => {
    const { id, image, name, features,published_in } = singleFeaturesData;
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
                            <p><i class="fa-regular fa-calendar-days"></i>${published_in}</p>
                        </div>
                        <i class="fa-solid fa-arrow-right" onclick="fetchFeatureData('${id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </div>
                    </div>
                    </div>
        `;
    featuresAllData.appendChild(card);
  });
//   toggleLoader(false);
};

const fetchFeatureData = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFeatureData(data.data));
};

const showFeatureData = (featureDetails) => {
  console.log(featureDetails);
  const { id, input_output_examples,image_link, input, description, pricing, features, integrations, feature_name, accuracy} = featureDetails;
  // featuresAllApiData.innerHTML += `modal-body
// const generate = (rating) =>{
//     let ratingHTML=``;
//     for(let i = 0; i<=Math.map(rating); i++){
//         ratingHTML += `<li></li>`
//     }
//     if(rating - Math.map(rating) > 0){
//         rating += `<li></li>`
//     }
// }
  document.getElementById("modal-body").innerHTML = `

    <div class="card lg-6">
    <div class="row">
  <div class="col-md-6 mb-3 mb-md-0">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${description}</h4>
        <div class="d-flex justify-content-around">
        <h6>${pricing[0].price || 'Free of Cost/Basic'}</h6>
        <h6>${pricing[1].price || 'Free Of Cost/Pro'}</h6>
        <h6>${pricing[2].price || 'Free of Cost /Enterprise'}</h6>
      </div>
      <div class="d-flex justify-content-around">
            <div class="">
                <h4>Features</h4>
                <ul>
                    <li>${features[1].feature_name ? features[1].feature_name: 'Free of Cost/Basic'}</li>
                    <li>${features[2].feature_name ? features[2].feature_name: 'Free Of Cost/Pro'}</li>
                    <li>${features[3].feature_name ? features[3].feature_name: 'Free of Cost /Enterprise'}</li>
                    </ul>
            </div>
            <div class="">
                <h4>Integrations</h4>
                <ul >
                    <li>${integrations[0] ? integrations[0] : 'No data Found'}</li>
                    <li>${integrations[1] ? integrations[1] : 'No data Found'}</li>
                    <li>${integrations[2] ? integrations[2] : 'No data Found'}</li>
                    <li>${integrations[3] ? integrations[3] : 'No data Found'}</li>
                    </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
      <button>${accuracy}</button>
      <img  src="${image_link[0]}" class="card-img-top" alt="" >
        <h4 class="card-title">${input_output_examples[0].input ? input_output_examples[0].input : 'Can you give any example?'}</h4>
        <p class="card-text">${input_output_examples[0].output ? input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
        
      </div>
    </div>
  </div>
</div>
</div>
    `;
};


// const toggleLoader = (isLoading) => {
//   const loadingSpinner = document.getElementById("loader");
//   if (isLoading) {
//     loadingSpinner.classList.remove("d-none");
//   } else {
//     loadingSpinner.classList.add("d-none");
//   }
// };

// document.getElementById("show-all-data").addEventListener("click", function () {
//     toggleLoader(true);
    
//     allApiData();
// });

allApiData();


// ${news?.others_info?.is_trending ? `<span class="badge text-bg-warning">Trending</span>` : ""}

/*{ <button onclick="loadDataDetails('${id}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<i class="fa-solid fa-2x fa-arrow-right"></i>
  </button>
const loadDataDetails = async (id) => {
  const url= `https://openapi.programming-hero.com/api/ai/tool/02/${id}`
  const res = await fetch(url)
  const data = await res.json()
  modalDisplayData(data)
//  console.log(data);
}

const modalDisplayData=data=>{
  console.log(data);
  const modalShow=document.getElementById('modal-show')

} }*/