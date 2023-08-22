let total = 0;

function handClickBtn(target){
    // console.log(target.childNodes[5].innerText);
    // console.log(target.childNodes[7].innerText);
    const itemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[5].innerText

    const li = document.createElement ("li");
    li.innerText = itemName;
    itemContainer.appendChild(li);



    const price = target.childNodes[7].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-id").innerText = total
    


   
    document.getElementById("applyCouponBtn").addEventListener("click", function(){
        const enterCode = document.getElementById("couponCodeInput").value;


        if( enterCode=== "SELL200" && total >= 200){
            let discountAmount = .20 * total;
            let discountTotal = total - discountAmount;
            
            document.getElementById("discount-id").innerText = discountAmount.toFixed(2);
            document.getElementById("grand-total-id").innerText = discountTotal.toFixed(2);
        } else{
            
            // alert('Coupon Code not match');
            // return;  
        }

       
    })

    // home button on modal
    document.getElementById("homeBtn").addEventListener("click", function(){
        window.location.href = " ";
    })


}