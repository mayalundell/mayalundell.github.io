/* SIDEBAR FUNCTIONS */

function openNav() {
    document.getElementById("contact-info").style.width = "250px";

}

function closeNav() {
    document.getElementById("contact-info").style.width = "0";
}

function emailAppear(){
    let click = document.getElementById("email-icon");
    let clickoff = document.getElementById("email-address");
    if (click && clickoff){
        click.classList.toggle("hidden");
        clickoff.classList.toggle("hidden");
    }
}
