let total = 0;

document.getElementById("divClick").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const itemName = document.getElementById("card-title-name").innerText
    const li = document.createElement ("li");
    li.innerText = itemName;
    itemContainer.appendChild(li);



    const price = document.getElementById("card-title-price").innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-id").innerText = total



    document.getElementById("applyCouponBtn").addEventListener("click", function(){
        const enterCode = document.getElementById("couponCodeInput").value;
        
        if( enterCode=== "SELL200" && total >= 200){
            let discountAmount = .20 * total ;
            let discountTotal = total - discountAmount;
            
            document.getElementById("discount-id").innerText = discountAmount;
            document.getElementById("grand-total-id").innerText = discountTotal;
        } else{
            // alert("Coupon Code not match")   
        }
    })

    // home button on modal
    document.getElementById("homeBtn").addEventListener("click", function(){
        window.location.href = " ";
    })
})