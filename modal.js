const info = [
  {
    id: 'project-1',
    title: 'Tonic',
    canopy: 'Canopy',
    card_list: ['html', 'css', 'javascript', 'python'],
    image: 'images/one.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-2',
    title: 'Multi-Post-Stories',
    canopy: 'Canopy',
    card_list: ['html', 'css', 'javascript'],
    image: 'images/two.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-3',
    title: 'Facebook 360',
    canopy: 'Canopy',
    card_list: ['html', 'css', 'javascript'],
    image: 'images/first-work1.png',
    about:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
  },
  {
    id: 'project-4',
    title: 'Uber Navigation',
    canopy: 'Canopy',
    card_list: ['html', 'css', 'javascript'],
    image: 'images/four.png',
    about:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  },
];

const myHtmlArticle = (myObj) => {
  const articleTemplate = `
        <article class="my-design">
        <div class="first-card">
          <div class="card-image">
            <img
                class="first-work-one"
                src=${myObj.image}
                alt="Nature"
              />
          </div>
          <div class="card-content">
            <h2 class="card-title">${myObj.title}</h2>
            <div class="card-info">
              <p class="card-info-item-canopy">${myObj.canopy}</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">Back End Dev</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">2015</p>
            </div>

            <p class="card-description">
             ${myObj.about}
            </p>

            <ul class="card-list">
            ${myObj.card_list.map((elem) => `<li class="card-list-tags">${elem}</li>`).join('')}
             
            </ul>

            <div class="button">
            <a href="#"  onclick="openPopup()">
                <button type="submit" class="card-link">
                See Project
                </button>
            </a>
             </div>

          </div>
        </div>
      </article>
  `;
  return articleTemplate;
};

const cardHolder = document.querySelector('#portfolio');
info.forEach((elem) => {
  cardHolder.insertAdjacentHTML('beforeend', myHtmlArticle(elem));
});

// Popup section//
function openPopup() {
  document.querySelector('#popup-section').innerHTML += `<div class="popup-container">
    <div class="popup" id="popup"> 
        <div id="desktop-popup" class="">
            <div class="info-header popup-header">
                <h2 class="tonic">Uber Navigation
                </h2>
                <img src="./images/Icon.png" alt="popup-x icon" class="popup-header-image" onclick="closePopup()">
            </div>
            <div class="card-content">
            <div class="card-info">
              <p class="card-info-item-canopy">CANOPY</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">Back End Dev</p>
              <img class="circle-img" src="./images/circle.png" alt="Circle">
              <p class="card-info-item">2015</p>
            </div>
            <div id="desktop-popup" class="popup-img1">
                <img src="./images/Snapshoot Portfolio.png" alt="popup image 1">
            </div>

            <div id="mobile-popup" class="popup-img2">
                <img src="./images/phone.png" alt="popup image 1">
            </div>
            <div class="popup-text">
                <div class="popup-body">
                    <p class="desk-hidden">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                    </p>
                    <p class="mobile-hidden">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                    </p>
                </div>
                <div id ="mobile-popup-langs" class="popup-lang">
                    <div id="lang">
                        <ul class="langs">
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                            <li>github</li>
                            <li>ruby</li>
                            <li>bootstrap</li>
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="#">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/g.png" alt="">
                            </button>
                        </a>
                        <button type="submit" class="see-project pop-button">
                            See Source
                            <img src="./images/h.png" alt="">
                            </button>
                        </a>
                    </div>
                </div>
                <div id ="mobile-popup-langs"class="popup-langs">
                    <div id="lang" style= "height: 24px;">
                        <ul class="langs">
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="#">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/g.png" alt="">
                            </button>
                        </a>
                        <button type="submit" class="see-project pop-button">
                            See Source
                            <img src="./images/h.png" alt="">
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>`;

  document.getElementById('popup-section').style.display = 'block';
  document.getElementById('popup').style.filter = 'blur(7px)';
}
openPopup();

function closePopup() {
  document.getElementById('popup-section').style.display = 'none';
  document.getElementById('popup').style.filter = 'blur(0px)';
}
closePopup();
