function closeModal(){
  document.getElementById('ct').style.opacity= "100%";
  document.getElementById('md').style.display= "none";
  document.getElementById('bdy').style.overflow="auto";
}

function colorMode(){
  if(document.documentElement.style.getPropertyValue("--lightmode-rightbg-color") ==="#f0f0f5"){
    document.documentElement.style.setProperty("--lightmode-rightbg-color","#212121");
    document.documentElement.style.setProperty("--lightmode-color","#f0f0f5");
  }else{
    document.documentElement.style.setProperty("--lightmode-rightbg-color","#f0f0f5");
    document.documentElement.style.setProperty("--lightmode-color","#212121");
  }
}