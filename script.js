const itemForm=document.getElementById("item-form");
const input=document.getElementById("item-input");
const list=document.getElementById("item-list");
const clearbtn=document.getElementById("clear");




function addİtem(e){
e.preventDefault();     // form gonderınce sayfasnın yenılenmesını onledık

if(input.value === ''){         //bos gırıldıyse hata verılır
    alert("please add something")
    return;    //fonksiyondan cıkar 

}
const li=document.createElement("li");      //  Yeni bir <li> (liste elemanı) oluşturma
li.appendChild(document.createTextNode(input.value));     // İletilen metni li'nin içine koy

const button=createButton("remove-item btn-link text-red");  //Silme butonunu oluşturup li'nin içine ekleme
li.appendChild(button);

list.appendChild(li);     //  Hazırlanan bu <li>'yi ana ekrandaki <ul> listesine (list) ekleme
input.value='';     // Input kutusunu temizleme
}

function createButton(classes){
    const button=document.createElement("button");    // <button> oluştur
    button.className=classes;                        // CSS sınıflarını (stillerini) ata
    const icon=createIcon("fa-solid fa-xmark");  //Çarpı (X) ikonunu alt fonksiyondan iste
    button.appendChild(icon);                     // İkonu butonun içine yerleştir

    return button;     // Hazır butonu çağrıldığı yere geri gönder

}
function createIcon(classes){
    const icon=document.createElement("i"); // FontAwesome için <i> etiketi oluştur
    icon.className=classes;                    // Çarpı işareti stil sınıflarını ver ("fa-solid fa-xmark")
return icon;   // Hazır ikonu geri gönder

}

function removeİtem(e){
    if(e.target.parentElement.classList.contains("remove-item")){     //Tıklanan şeyin bir üst kapsayıcısı (butonu) remove-item sınıfına sahip mi?" kontrolü yapılır. Böylece listenin boş veya başka bir yerine tıklandığında silme işleminin yanlışlıkla çalışması engellenir.
      e.target.parentElement.parentElement.remove(); 
      //e.target → <i> (Çarpı ikonu)
      //parentElement → <button> (Silme butonu)
      //parentElement.parentElement → <li> (Listenin o satırı)
      //.remove() fonksiyonu çağrılarak en dıştaki <li> ögesi ekrandan ve DOM'dan tamamen kaldırılır.


}
}

function clearİtem(e){

    const ul=document.querySelectorAll("#item-list");
    ul.forEach((item)=>{
      item.remove();

    })

} 






//event listeners

itemForm.addEventListener("submit",addİtem);
list.addEventListener("click",removeİtem);
clearbtn.addEventListener("click",clearİtem);

