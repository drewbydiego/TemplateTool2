
GreetingEng1 = document.getElementById("greetingEng1");
//greetingEsp1 = document.getElementById("greetingEsp1");
HoldStatement = document.getElementById("HoldStatement");
MandClosing = document.getElementById("MandClosing");
EmpDisc = document.getElementById("EmpDisc");

OrderStatusBtn = document.getElementById("OrderStatusBtn");
OrderStatusBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://www.lowes.com/mylowes/orders/checkorderstatus");
});
SupunchStatusBtn = document.getElementById("SupunchStatusBtn");
SupunchStatusBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://superpunchtms.com/v2/dashboard");
});
RemoteDeskBtn = document.getElementById("RemoteDeskBtn");
RemoteDeskBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://rdweb.wvd.microsoft.com/arm/webclient/index.html");
});
LivepBtn = document.getElementById("LivepBtn");
LivepBtn.addEventListener("click", ()=>{
    SecundaryWindow("https://authentication.liveperson.net/login.html");
});

function SecundaryWindow (URL){
    //window.open(URL,"ventana1","width=300,height=300,scrollbars=NO")
    //var myWindow = window.open("", "myWindow", "width=600,height=600","incognito: true");   // Opens a new window
    //windows.create({"url": URL, "incognito": true});
    window.open(URL, "_blank", "popup");
}

GreetingEng1 = document.getElementById("greetingEng1");
GreetingEng1.addEventListener("click", ()=>{
    clipboard(GreetingEng1, GreetingEng1)
});

/*greetingEsp1 = document.getElementById("greetingEsp1");
greetingEsp1.addEventListener("click", ()=>{
    clipboard(greetingEsp1, greetingEsp1)
});
*/
acknow1 = document.getElementById("acknow1");
acknow1.addEventListener("click", ()=>{
    clipboard(acknow1, acknow1)
});
acknow2 = document.getElementById("acknow2");
acknow2.addEventListener("click", ()=>{
    clipboard(acknow2, acknow2)
});

closing1 = document.getElementById("closing1");
closing1.addEventListener("click", ()=>{
    clipboard(closing1, closing1)
});
closing2 = document.getElementById("closing2");
closing2.addEventListener("click", ()=>{
    clipboard(closing2, closing2)
});

closingEsp1 = document.getElementById("closingEsp1");
closingEsp1.addEventListener("click", ()=>{
    clipboard(closingEsp1, closingEsp1)
});




/*closingEsp1 = document.getElementById("closingEsp1");
closingEsp1.addEventListener("click", ()=>{
    clipboard(closingEsp1, closingEsp1)
});*/
//HOLDING & CHECK UNRESPONSIVE
Phold1 = document.getElementById("Phold1");
Phold1.addEventListener("click", ()=>{
    clipboard(Phold1, Phold1)
});
Phold2 = document.getElementById("Phold2");
Phold2.addEventListener("click", ()=>{
    clipboard(Phold2, Phold2)
});
Phold3 = document.getElementById("Phold3");
Phold3.addEventListener("click", ()=>{
    clipboard(Phold3, Phold3)
});
warning1 = document.getElementById("warning1");
warning1.addEventListener("click", ()=>{
    clipboard(warning1, warning1)
});
warning2 = document.getElementById("warning2");
warning2.addEventListener("click", ()=>{
    clipboard(warning2, warning2)
});
cunresp1 = document.getElementById("cunresp1");
cunresp1.addEventListener("click", ()=>{
    clipboard(cunresp1, cunresp1)
});
cunresp2 = document.getElementById("cunresp2");
cunresp2.addEventListener("click", ()=>{
    clipboard(cunresp2, cunresp2)
});
//REFRESH CONVERSATION SECTION
Refre1 = document.getElementById("Refre1");
Refre1.addEventListener("click", ()=>{
    clipboard(Refre1, Refre1)
});
Refre2 = document.getElementById("Refre2");
Refre2.addEventListener("click", ()=>{
    clipboard(Refre2, Refre2)
});
Refre3 = document.getElementById("Refre3");
Refre3.addEventListener("click", ()=>{
    clipboard(Refre3, Refre3)
});

//ORDERS & TRANSFERS SECTION
tranorder1 = document.getElementById("tranorder1");
tranorder1.addEventListener("click", ()=>{
    clipboard(tranorder1, tranorder1)
});
tranorder2 = document.getElementById("tranorder2");
tranorder2.addEventListener("click", ()=>{
    clipboard(tranorder2, tranorder2)
});

//MORE HELP SECTION
morehelp1 = document.getElementById("morehelp1");
morehelp1.addEventListener("click", ()=>{
    clipboard(morehelp1, morehelp1)
});
morehelp2 = document.getElementById("morehelp2");
morehelp2.addEventListener("click", ()=>{
    clipboard(morehelp2, morehelp2)
});

//ASKING FOR INFORMATION SECTION
askinfo1 = document.getElementById("askinfo1");
askinfo1.addEventListener("click", ()=>{
    clipboard(askinfo1, askinfo1)
});
askinfo2 = document.getElementById("askinfo2");
askinfo2.addEventListener("click", ()=>{
    clipboard(askinfo2, askinfo2)
});
askinfo3 = document.getElementById("askinfo3");
askinfo3.addEventListener("click", ()=>{
    clipboard(askinfo3, askinfo3)
});
askinfo4 = document.getElementById("askinfo4");
askinfo4.addEventListener("click", ()=>{
    clipboard(askinfo4, askinfo4)
});
askinfo5 = document.getElementById("askinfo5");
askinfo5.addEventListener("click", ()=>{
    clipboard(askinfo5, askinfo5)
});
askinfo6 = document.getElementById("askinfo6");
askinfo6.addEventListener("click", ()=>{
    clipboard(askinfo6, askinfo6)
});
askinfo7 = document.getElementById("askinfo7");
askinfo7.addEventListener("click", ()=>{
    clipboard(askinfo7, askinfo7)
});
//EMPATHY SECTION
empathy1 = document.getElementById("empathy1");
empathy1.addEventListener("click", ()=>{
    clipboard(empathy1, empathy1)
});
empathy2 = document.getElementById("empathy2");
empathy2.addEventListener("click", ()=>{
    clipboard(empathy2, empathy2)
});
empathy3 = document.getElementById("empathy3");
empathy3.addEventListener("click", ()=>{
    clipboard(empathy3, empathy3)
});
empathy4 = document.getElementById("empathy4");
empathy4.addEventListener("click", ()=>{
    clipboard(empathy4, empathy4)
});
empathy5 = document.getElementById("empathy5");
empathy5.addEventListener("click", ()=>{
    clipboard(empathy5, empathy5)
});
//SELF SERVICE SECTION
selfs1order = document.getElementById("selfs1order");
selfs1order.addEventListener("click", ()=>{
    clipboard(selfs1order, selfs1order)
});
selfs2 = document.getElementById("selfs2");
selfs2.addEventListener("click", ()=>{
    clipboard(selfs2, selfs2)
});
selfs3 = document.getElementById("selfs3");
selfs3.addEventListener("click", ()=>{
    clipboard(selfs3, selfs3)
});
selfs4 = document.getElementById("selfs4");
selfs4.addEventListener("click", ()=>{
    clipboard(selfs4, selfs4)
});
selfs5 = document.getElementById("selfs5");
selfs5.addEventListener("click", ()=>{
    clipboard(selfs5, selfs5)
});
selfs6 = document.getElementById("selfs6");
selfs6.addEventListener("click", ()=>{
    clipboard(selfs6, selfs6)
});
selfs7 = document.getElementById("selfs7");
selfs7.addEventListener("click", ()=>{
    clipboard(selfs7, selfs7)
});
selfs8 = document.getElementById("selfs8");
selfs8.addEventListener("click", ()=>{
    clipboard(selfs8, selfs8)
});
selfs9 = document.getElementById("selfs9");
selfs9.addEventListener("click", ()=>{
    clipboard(selfs9, selfs9)
});
selfs10 = document.getElementById("selfs10");
selfs10.addEventListener("click", ()=>{
    clipboard(selfs10, selfs10)
});
selfs11 = document.getElementById("selfs11");
selfs11.addEventListener("click", ()=>{
    clipboard(selfs11, selfs11)
});
selfs12 = document.getElementById("selfs12");
selfs12.addEventListener("click", ()=>{
    clipboard(selfs12, selfs12)
});
selfs13 = document.getElementById("selfs13");
selfs13.addEventListener("click", ()=>{
    clipboard(selfs13, selfs13)
});
selfs14 = document.getElementById("selfs14");
selfs14.addEventListener("click", ()=>{
    clipboard(selfs14, selfs14)
});
selfs15 = document.getElementById("selfs15");
selfs15.addEventListener("click", ()=>{
    clipboard(selfs15, selfs15)
});
selfs16 = document.getElementById("selfs16");
selfs16.addEventListener("click", ()=>{
    clipboard(selfs16, selfs16)
});
selfs17 = document.getElementById("selfs17");
selfs17.addEventListener("click", ()=>{
    clipboard(selfs17, selfs17)
});
selfs18 = document.getElementById("selfs18");
selfs18.addEventListener("click", ()=>{
    clipboard(selfs18, selfs18)
});
selfs19 = document.getElementById("selfs19");
selfs19.addEventListener("click", ()=>{
    clipboard(selfs19, selfs19)
});
selfs20 = document.getElementById("selfs20");
selfs20.addEventListener("click", ()=>{
    clipboard(selfs20, selfs20)
});
selfs21 = document.getElementById("selfs21");
selfs21.addEventListener("click", ()=>{
    clipboard(selfs21, selfs21)
});
selfs22 = document.getElementById("selfs22");
selfs22.addEventListener("click", ()=>{
    clipboard(selfs22, selfs22)
});
selfs23 = document.getElementById("selfs23");
selfs23.addEventListener("click", ()=>{
    clipboard(selfs23, selfs23)
});
//CREDIT CARDS AND DISCOUNTS SECTION
creditnDis1 = document.getElementById("creditnDis1");
creditnDis1.addEventListener("click", ()=>{
    clipboard(creditnDis1, creditnDis1)
});
creditnDis2 = document.getElementById("creditnDis2");
creditnDis2.addEventListener("click", ()=>{
    clipboard(creditnDis2, creditnDis2)
});
creditnDis3 = document.getElementById("creditnDis3");
creditnDis3.addEventListener("click", ()=>{
    clipboard(creditnDis3, creditnDis3)
});
creditnDis4 = document.getElementById("creditnDis4");
creditnDis4.addEventListener("click", ()=>{
    clipboard(creditnDis4, creditnDis4)
});
creditnDis5 = document.getElementById("creditnDis5");
creditnDis5.addEventListener("click", ()=>{
    clipboard(creditnDis5, creditnDis5)
});
//REFUND AND CHARGES SECTION
ChargRef1 = document.getElementById("ChargRef1");
ChargRef1.addEventListener("click", ()=>{
    clipboard(ChargRef1, ChargRef1)
});
ChargRef2 = document.getElementById("ChargRef2");
ChargRef2.addEventListener("click", ()=>{
    clipboard(ChargRef2, ChargRef2)
});
//INSTALLATIONS SECTION
installations1 = document.getElementById("installations1");
installations1.addEventListener("click", ()=>{
    clipboard(installations1, installations1)
});
installations2 = document.getElementById("installations2");
installations2.addEventListener("click", ()=>{
    clipboard(installations2, installations2)
});
installations3 = document.getElementById("installations3");
installations3.addEventListener("click", ()=>{
    clipboard(installations3, installations3)
});
installations4 = document.getElementById("installations4");
installations4.addEventListener("click", ()=>{
    clipboard(installations4, installations4)
});
installations5 = document.getElementById("installations5");
installations5.addEventListener("click", ()=>{
    clipboard(installations5, installations5)
});
installations6 = document.getElementById("installations6");
installations6.addEventListener("click", ()=>{
    clipboard(installations6, installations6)
});
//LOWE'S PRO ACCOUNT SECTION
proacc1 = document.getElementById("proacc1");
proacc1.addEventListener("click", ()=>{
    clipboard(proacc1, proacc1)
});
proacc2 = document.getElementById("proacc2");
proacc2.addEventListener("click", ()=>{
    clipboard(proacc2, proacc2)
});
proacc3 = document.getElementById("proacc3");
proacc3.addEventListener("click", ()=>{
    clipboard(proacc3, proacc3)
});
proacc4 = document.getElementById("proacc4");
proacc4.addEventListener("click", ()=>{
    clipboard(proacc4, proacc4)
});
//PROTECTION PLANS SECTION
protect1 = document.getElementById("protect1");
protect1.addEventListener("click", ()=>{
    clipboard(protect1, protect1)
});
protect2 = document.getElementById("protect2");
protect2.addEventListener("click", ()=>{
    clipboard(protect2, protect2)
});
protect3 = document.getElementById("protect3");
protect3.addEventListener("click", ()=>{
    clipboard(protect3, protect3)
});
protect4 = document.getElementById("protect4");
protect4.addEventListener("click", ()=>{
    clipboard(protect4, protect4)
});
protect5 = document.getElementById("protect5");
protect5.addEventListener("click", ()=>{
    clipboard(protect5, protect5)
});
protect6 = document.getElementById("protect6");
protect6.addEventListener("click", ()=>{
    clipboard(protect6, protect6)
});
//IN-STORE REFER TO STORE
instore1 = document.getElementById("instore1");
instore1.addEventListener("click", ()=>{
    clipboard(instore1, instore1)
});
instore2 = document.getElementById("instore2");
instore2.addEventListener("click", ()=>{
    clipboard(instore2, instore2)
});
instore3 = document.getElementById("instore3");
instore3.addEventListener("click", ()=>{
    clipboard(instore3, instore3)
});
instore4 = document.getElementById("instore4");
instore4.addEventListener("click", ()=>{
    clipboard(instore4, instore4)
});
instore5 = document.getElementById("instore5");
instore5.addEventListener("click", ()=>{
    clipboard(instore5, instore5)
});
instore6 = document.getElementById("instore6");
instore6.addEventListener("click", ()=>{
    clipboard(instore6, instore6)
});
instore7 = document.getElementById("instore7");
instore7.addEventListener("click", ()=>{
    clipboard(instore7, instore7)
});
//AVAILABILITY SECTION
Avail1 = document.getElementById("Avail1");
Avail1.addEventListener("click", ()=>{
    clipboard(Avail1, Avail1)
});
//ABUSIVE CUSTOMER SECTION
abusive1 = document.getElementById("abusive1");
abusive1.addEventListener("click", ()=>{
    clipboard(abusive1, abusive1)
});
//CUSTOMER CARE REFER SECTION
custcare1 = document.getElementById("custcare1");
custcare1.addEventListener("click", ()=>{
    clipboard(custcare1, custcare1)
});




function clipboard(ElementTag, elementID) {
    //Creating the hidden input
    //ItemReturned.value = ItemReturned.value + elementID

    const Hiddeninput = document.createElement('textarea')
    Hiddeninput.value = elementID.innerText;
    console.log(Hiddeninput.value)
    document.body.appendChild(Hiddeninput);
    //Copying the content
    Hiddeninput.select();
    document.execCommand('copy')
    document.body.removeChild(Hiddeninput);


    //Adding animation
    ElementTag.classList.add("seleccionado");
    setTimeout(function(){
        ElementTag.classList.remove("seleccionado");
    }, 500);
}

//CODING THE FUNCTION TO FOCUSE THE SEARCH BAR TO FILTER THE TEMPLATES
document.addEventListener("keydown", function(event) {
    // Check for the key combination Ctrl + Shift + F
    if (event.ctrlKey && event.shiftKey && event.keyCode === 70) {
      // Give focus to the search input
    document.getElementById("buscador").focus();
    }
});

//CODING THE FILTER - EACH WORD/PHRASE INSERTED IN THE SEARCHING INPUT WILL BE DISPLAYED AND FILTERED HERE
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        if (e.key ==="Escape")e.target.value = ""

        //Removing the card tittle
        document.querySelectorAll(".card-title").forEach(template =>{
            template.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?template.classList.remove("filtro")
                :template.classList.add("filtro")
        })
        //Removing the text of the card
        document.querySelectorAll(".col-xl-4").forEach(template =>{
            template.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?template.classList.remove("filtro")
                :template.classList.add("filtro")
        })
    }
})

refreshTemplates = document.getElementById("refreshTemplates")
refreshTemplates.addEventListener("click", ()=>{
        document.getElementById("buscador").value = ""
        //Removing the card tittle
        document.querySelectorAll(".col-xl-4").forEach(template =>{
                template.classList.remove("filtro")
        })
        //Removing the text of the card
        document.querySelectorAll(".card-title").forEach(template =>{
                template.classList.remove("filtro")
        })
    })



