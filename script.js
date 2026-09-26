const itemForm=document.getElementById("item-form");
const input=document.getElementById("item-input");
const list=document.getElementById("item-list");

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
//event listeners

itemForm.addEventListener("submit",addİtem);
