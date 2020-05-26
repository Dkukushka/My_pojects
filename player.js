var count=0;//отслеживает текущую песню
//список песен в проигрывателе
var songs = ["Imagine Dragons - Bad Liar", 
             "Imagine Dragons - Battle Cry",
             "Imagine Dragons - Bleed It Out", 
             "Imagine Dragons - Dream", 
             "Imagine Dragons - Friction",
             "Imagine Dragons - I Don't Know Why",
             "Imagine Dragons - Next To Me", 
             "Imagine Dragons - Nothing Left To Say",
              "Imagine Dragons - Trouble",
             "Imagine_Dragons-Believer",
             "imagine_dragons-i_bet_my_life",
             "imagine_dragons-its_time", 
             "imagine_dragons-monster",
             "imagine_dragons-not_today",
             "Imagine_dragons-nothing_left_to_say",  
             "imagine_dragons-walking_the_wire",
             "imagine_dragons-who_we_are",
             "Imagine-Dragons-Birds", 
             "imagine-dragons-demons",
             "imagine-dragons-im-so-sorry",
             "Imagine-Dragons-Natural", 
             "imagine-dragons-on-top-of-the-world",
             "imagine-dragons-radioactive", 
             "Imagine-Dragons-Sucker-For-Pain", 
             "imagine-dragons-thunder",
             "Imagine-dragons-warriors",
             "Imagine-dragons-whatever-it-takes",
             "Imagine-dragons-zero"
            
            
            
             
];
window.onload=function(){
    var mp3=this.document.getElementById("mp3");//получаем ссылку на audio ээлемент

    document.getElementById("next").onclick=next;
    document.getElementById("stop").onclick=stop;
    document.getElementById("play").onclick=play;
    document.getElementById("prev").onclick=prev;

    /* Инициализируем теги li и добавляем список названия песен*/
    var ul=document.getElementById("ul");

    for(var i=0;i<songs.length;i++){
        var li =document.createElement("li");
        li.innerHTML=songs[i];
        ul.appendChild(li);
    }
}

/*Определяем текущую музыку и добавляем класс active */
function changeColor(){
    var color= document.getElementsByTagName('li');

    for(var x=0;x<color.length;x++){
        if(count==x){
            color[x].classList.add("active");
        }else{
            color[x].classList.remove("active");
        }
    }
}
/* Далее функция обратного вызова для кнопок */
function next(){
    if(count<songs.length-1){
        count++;
        play();
    }
}
 
function prev(){
    if(count>0){
        count--;
        play();
    }
}
function play(){
    changeColor();
    mp3.src="muz\\"+songs[count]+".mp3";
}
function stop(){
    mp3.pause();
}