// const targetElms = document.getElementById("editor");
//
// // const observeOptions = { attributes: true, childList: true, characterData: true };
// //
// // const observer = new MutationObserver(records => {
// //     records.forEach(record => {
// //       console.dir(record);
// //   })
// // });
// //
// // observer.observe(targetElms, observeOptions);
//
// console.dir(targetElms);

const parent =  document.getElementById("footer_msgs");

let heartButton = document.querySelector(".heartButton");

if (heartButton == null) {

  let heartButton = document.createElement("div");
  heartButton.className = "heartButton";
  heartButton.style.zIndex = "2147483647";
  heartButton.style.position = "relative";
  heartButton.style.paddingLeft = "30px";
  heartButton.style.backgroundColor = "#C6497D";
  heartButton.style.fontSize = ".7em";
  heartButton.innerText = "文章に♡をつける"
  heartButton.style.color= "#FFFFFF";
  parent.appendChild(heartButton);
  heartButton.addEventListener('click',function(){
    console.log("HeartButton pushed!");
    const targetElms = Array.from(document.body.querySelectorAll('div'))
    .filter( item => {
      return item.classList.contains("c-message__content") && item.innerText != null
    })

    targetElms.forEach(item => {
      item.innerHTML += "<span>💕</span>"
    });

    console.dir(targetElms);
  });
} else {
  console.log("heartButton is already added");
}
