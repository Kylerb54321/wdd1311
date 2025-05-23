const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedPara = document.getElementById("lastModified");
lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
