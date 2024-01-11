function calcAvg(){
    const avg1Element = document.getElementById('avg1');
    const avg1 = Number(avg1Element.value);// Kiểu string đổi sang kiểu số 


    const avg2Element = document.getElementById('avg2');
    const avg2 = Number(avg2Element.value);
    
    const avg = (avg1 + avg2 *2)/3;
    //toFixed(value): làm tròn giá trị với value số thập phân

    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    resultElement.style.display = "block"; //thay đổi trạng thái none trong css bằng block(show block thay vì ẩn như mặc định) trong lúc người dùng bấm vào button
    scoreElement.textContent = avg;
    console.log(avg.toFixed(1));


}
