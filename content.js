window.onload = () =>{
    // console.log("this is content file");
    try {
        var button = document.createElement("button");
        button.innerHTML = "click to copy";

        var parent = document.getElementsByTagName("pre")[0];
        parent.appendChild(button);
        var str = document.getElementsByTagName('code')[0].textContent;

        button.addEventListener('click', () => {
            window.navigator.clipboard.writeText(str);  
        } ); 
    } catch (error) {
       console.log(error); 
    }
}