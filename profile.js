document.querySelector('#color').addEventListener('click', ()=> {
	alert("My favorite Color is Purple!")
})
document.querySelector('#place').addEventListener('click', ()=> {
	alert("My Favorite Place is Handle's Ice Cream!")
})
document.querySelector('#ritual').addEventListener('click', ()=> {
	alert("My Favorite Ritual is Watashitachiha aisuru mishiranu hitode wa arimasen anata wa rūru o shitte imasu, soshite watashi mo sōdesu (watashi wa sō shimasu) watashi ga kangaete iru no wa kanzen'na komittomentodesu kore wa hoka no otoko kara wa e rarenai watashi wa tada anata ni watashi no kimochi o tsutaetai dakedesu rikai sa senakya anata o akirameru tsumori wa arimasen anata o gakkari sa seru koto wa arimasen hashirimawatte anata o misuteru koto wa kesshite nai anata o nakaseru koto wa kesshite nai sayonara nante iwanai uso o tsuite anata o kizutsukeru koto wa kesshite nai watashitachiha nagaiai otagai o shitte imasu anata no kokoro wa itande irukedo, anata wa sore o iu ni wa hazukashigariyadesu (itte kudasai) naibude wa, watashitachiha ryōhō tomo nani ga okotte iru ka o shitte imasu (shinkō-chū) watashitachiha gēmu o shitte ite, sore o purei suru tsumoridesu soshite, anata ga watashi ni dono yō ni kanjite iru ka tazunetara mekura sugite mienai nante iwanaide anata o akirameru tsumori wa arimasen anata o gakkari sa seru koto wa arimasen hashirimawatte anata o misuteru koto wa kesshite nai anata o nakaseru koto wa kesshite nai sayonara nante iwanai uso o tsuite anata o kizutsukeru koto wa kesshite nai anata o akirameru tsumori wa arimasen anata o gakkari sa seru koto wa arimasen hashirimawatte anata o misuteru koto wa kesshite nai anata o nakaseru koto wa kesshite nai sayonara nante iwanai uso o tsuite anata o kizutsukeru koto wa kesshite nai")
})



function validate(){
    preventDefault()
  
    let valid = false;
  if(document.getElementById("bad-input").checked){
    valid = false;
  } 
  if(document.getElementById("lecture-input").checked){
    valid = true;
  } 
  if(document.getElementById("doudle-input").checked){
    valid = true;
  }
}
alert(valid);

form.addEventListener('submit', validate);