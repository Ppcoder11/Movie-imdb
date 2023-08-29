let movieName=document.getElementById('movieName');
let year=document.getElementById('year');
let details=document.getElementById("details");
let slideShow=document.getElementById("animation");
let fet=document.getElementById('firstDetails');
let det=document.getElementById('secondDetails');
let rightDiv=document.getElementById('right');
let back=document.getElementById('back');
let Gif=document.getElementById('gif');

let imgLink1="https://i.ibb.co/m5n6Ch3/pexels-photo-2752777.jpg";
let imgLink2="https://i.ibb.co/W52Y7kD/THE-AVENGERS-LEGAL-480x-progressive.webp";
let imgLink6="https://i.ibb.co/GFf16kH/harry.webp";
let imgLink3="https://i.ibb.co/0hyKS4f/jurassic.webp" ;
let imgLink4="https://i.ibb.co/DkDShB6/onward.webp" ;
let imgLink5="https://i.ibb.co/r43NW4N/spidy.webp" ;
let imgLink7="https://i.ibb.co/WnS6Qj7/z4.jpg";
let imgLink8="https://i.ibb.co/C8sWbqk/z5.jpg";
let imgLink9="https://i.ibb.co/LPNfVkh/oppenheimer-ver3.jpg";
let imgLink10="https://i.ibb.co/MBxm6NS/talk-to-me.jpg";
let imgLink11="https://i.ibb.co/3BV8Q05/warm-season.jpg";
let imgLink12="https://i.ibb.co/4jGCgDc/Z9.jpg";
let imgLink13="https://i.ibb.co/wsYFp5j/Z11.jpg";

let arr=[imgLink1,imgLink2,imgLink3,imgLink4,imgLink5,imgLink6,imgLink7,imgLink8,imgLink9,imgLink10,imgLink11,imgLink12,imgLink13];
let arr2=[];
let random;
let res;

let i=0;
setInterval(function(){
   slideShow.src=arr[i];
    i++;
  if(i==12){
    i=0;
  }
},1850);

function show(){
  if(!movieName.value || !year.value){
    alert("!! INCOMPLETE INFORMATION !!")
    gif();
  }else{
    let searchTerm=movieName.value;

    const url=`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=a5ba98bd`;
    console.log(url);
    console.log(year.value);
    
      fetch(url).then(function(res){
         return res.json();  
      }).then(
        function(res){
            console.log(res);
            console.log(typeof(res));
          
            findD2(res.Search);
            
        }
      ).catch(function(err){
     console.log(err);
     gif();
    })
    }
  
}

function findD1(arr2){
  arr2.forEach(function (el){
    let p=document.createElement('p');
    p.style="margin-left:2.4vw;";
    p.innerText=el;
    rightDiv.appendChild(p);
  })
}
function findD2(data){
     data.forEach(element => {
        random=element.Year;
        if( element.Year==year.value){
          let movieResult=(`Movie name =${element.Title} ,  Year  =${element.Year} `);
          arr2.push(movieResult);
          let imgs=document.getElementById("imgs");
            imgs.innerHTML="";
           fet.innerHTML=`<img src="${element.Poster}" id="poster" style="height:72vh;
           margin-bottom: 1.6vh;
           width: 23vw;">`;
          det.innerText=`Movie details :- \n Movie name =${element.Title} \n imdbID = ${element.imdbID} \n Type  =${element.Type}  \n Year = ${element.Year}`;
        }
        else if(arr2.length==0){
          fet.innerHTML=`<img src="https://media3.giphy.com/media/YmhKt1BEwdkr46gmPV/giphy.gif?cid=ecf05e478xkh6ncve0yhd8dhlw4rxzakf8175btos9putyir&ep=v1_gifs_search&rid=giphy.gif&ct=g" id="poster" style="height:72vh;
          margin-bottom: 1.6vh;
          width: 23vw;"><p>No related searches available !!</p>`;
        }
      });
      rightDiv.innerHTML=`<h1 style="margin-left:2.4vw;"><u>Related searches</u></h1>`;
      findD1(arr2);
}

function gif(){
  let url="https://media4.giphy.com/media/QZOaeparxsNOfKWbER/giphy.gif?cid=ecf05e47zjzwvr1zoyo2ze1ynmpthags1ht55dgx9c86m9iv&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  Gif.style.visibility='visible';
  Gif.src=url;
  
}
function goBack() {
  
  location.reload();
}