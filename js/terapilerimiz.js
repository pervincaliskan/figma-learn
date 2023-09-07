async function getTherapies() {
  return fetch("http://localhost:3000/products-list", {
    method: "GET",
  })
    .then(response => {
      console.log('response', response);

      return response.json()

    })
    .catch(error => console.log('error', error));
}

getTherapies()

function renderTerapiler(terapilerDataList) {
  const terapilerWrapper = document.querySelector('.terapiler-wrapper');
  console.log(terapilerWrapper);
  const row = terapilerWrapper.querySelector('.row');
  console.log(row)

  let htmlRaw = '';
  const terapilerDataListFilteredHaveImages = terapilerDataList.filter((terapi) => terapi.mediaDetails?.[0]?.mediaUrlFull)
  const terapilerDataUniquList = terapilerDataListFilteredHaveImages.filter(x => x.productSpecs.length)
  for (let index = 0; index < terapilerDataUniquList.length; index++) {
    const terapi = terapilerDataUniquList[index];
    
    const image = terapi.mediaDetails?.[0]?.mediaUrlFull;
    const name = terapi.name;
    const description = terapi.description;
    const newPage = "/terapiler-urun-detay.html?urunId=" + terapi.id;

    const col = `<div class="col-6 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <div class="terapi-img-div text-center card-img-container">
          <img src="${image}" alt="image" width="159" height="197">
        </div>
        <div class="terapi-description my-2">
          <h3><b>${name}</b></h3>
          <p class="subtitle">${description}</p>
        </div>
        <div class="d-flex flex-column align-items-center mt-auto">
          <button onclick="window.location.href='${newPage}'" class="btn light-purple-btn d-flex align-items-center justify-content-center">
            <p class="font-size-14 m-0 d-none d-lg-block"> Daha Fazla Bilgi</p> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M8.5 6L12.5 10L8.5 14" stroke="#8B499C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
      </div>
    </div>
  </div>`

    htmlRaw += col
  }

  row.innerHTML = htmlRaw
}

async function renderTerapilerPage() {
  const terapilerResponse = await getTherapies();
  const terapilerDataList = terapilerResponse.dataList;
  console.log('terapilerDataList', terapilerDataList)


  renderTerapiler(terapilerDataList)
}


document.addEventListener('DOMContentLoaded', renderTerapilerPage)