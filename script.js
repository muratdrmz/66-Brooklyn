const imgs = [
  "images/hip1.jpg",
  "images/hip2.jpg",
  "images/hip3.jpg",
  "images/hip4.jpg",
  "images/hip5.jpg",
];

const container=document.getElementById('container');

function renderImgs(){
 let imgsDom=''
 for(i=0;i<imgs.length;i++){
  imgsDom+= `<img class="team-img" src="${imgs[i]}">`;
 }
 container.innerHTML=imgsDom;
}
renderImgs();