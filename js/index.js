const allApiData = (showMor, sortByData) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => featuresAllApiData(data.data.tools, showMor, sortByData));
};
//card
const featuresAllApiData = (data, showMor, sortByData) => {
  const featuresAllData = document.getElementById("features-all-data");
  featuresAllData.innerHTML = "";
  const showAll = document.getElementById('show-all');
  // data = data.slice(0, 6);
  if (!showMor && data?.length > 0) {
    data = data.slice(0, 6);
    showAll.classList.remove('d-none');
  }
  else{
    showAll.classList.add('d-none'); 
  }
  data.forEach((singleFeaturesData) => {
    const { id, image, name, features, published_in } = singleFeaturesData;
    const card = document.createElement("div"); 
    // const x = document.createElement('ol');
    // features.forEach(()=>x.innerHTML += `<li></li> ` )
  
    card.classList.add("card", "mb-3");
    card.innerHTML = `
        <div class="card h-100">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h4 class="card-title">Features</h4>
                        <ol type ="1" >
                        ${generateAllRandomData(features)}
                      </ol>
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
  toggleLoader(false);
};
// show all 
document.getElementById("show-all-data").addEventListener("click", function () {
  toggleLoader(true);
  allApiData(true);
});
// loader
const toggleLoader = (isLoading) => {
  const loadingSpinner = document.getElementById("loader");
  if (isLoading) {
    loadingSpinner.classList.remove("d-none");
  } else {
    loadingSpinner.classList.add("d-none");
  }
};
// li for loop function

// ${generateAllRandomData(rating.features)}
const generateAllRandomData = (rating) => {
  let ratingHTML = '';
  for (let i = 0; i < rating.length; i++) {
    ratingHTML += `<li>${rating[i]}</li> `;
  }
  if (rating - rating.length > 0) {
    ratingHTML += `<li>"No data Found"</li>`
  }
  return ratingHTML;
};
// sort by data
// const displayDates = sortByData=>{
//   return sortByData.sort((a,b)=> new Date(a.published_in).getTime - new Date(b.published_in).getTime);
// }
// model function
const fetchFeatureData = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFeatureData(data.data));
};

const showFeatureData = (featureDetails) => {
  const {
    id,
    input_output_examples,
    image_link,
    input,
    description,
    pricing,
    features,
    integrations,
    feature_name,
    accuracy,
  } = featureDetails;
  console.log(featureDetails);
  document.getElementById("modal-body").innerHTML = `
    <div class="card lg-6">
    <div class="row">
  <div class="col-md-6 mb-3 mb-md-0">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${description}</h4>
        <div class="d-flex justify-content-around">
        <h6 class="gap-3 p-2">${pricing[0].price ? pricing[0].price : "Free of Cost/Basic"}</h6>
        <h6 class="gap-3 p-2">${pricing[1].price ? pricing[1].price : "Free Of Cost/Pro"}</h6>
        <h6 class="gap-3 p-2">${
          pricing[2].price ? pricing[2].price : "Free of Cost /Enterprise"
        }</h6>
      </div>
      <div class="d-flex justify-content-around">
            <div class="">
                <h4>Features</h4>
                <ul>
                    <li>${
                      features[1].feature_name
                        ? features[1].feature_name
                        : "Free of Cost/Basic"
                    }</li>
                    <li>${
                      features[2].feature_name
                        ? features[2].feature_name
                        : "Free Of Cost/Pro"
                    }</li>
                    <li>${
                      features[3].feature_name
                        ? features[3].feature_name
                        : "Free of Cost /Enterprise"
                    }</li>
                    </ul>
            </div>
            <div class="">
                <h4>Integrations</h4>
                <ul >
                    ${generateAllRandomData(integrations)}
                    </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
      <div class="btn btn-primary">${accuracy.score ? `<p> <span> ${accuracy.score * 100 ? accuracy.score * 100 : "Not Fount"} % accuracy </span></p>` : ''}</div>
      <img  src="${image_link[0]}" class="card-img-top" alt="" >
        <h4 class="card-title">${
          input_output_examples[0].input
            ? input_output_examples[0].input
            : "Can you give any example?"
        }</h4>
        <p class="card-text">${
          input_output_examples[0].output
            ? input_output_examples[0].output
            : "No! Not Yet! Take a break!!!"
        }</p>
        
      </div>
    </div>
  </div>
</div>
</div>
    `;
};




allApiData();
