function sendEmail() {
    let name = "Tran Anh Hao";
    let phone = document.getElementById("account_phone").value;
    let description = document.getElementById("description").value;
    if (phone === '' || description === '') {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    let email = 'trananhhaonuce@gmail.com'
    let subject = "Số điện thoại "+ phone  + " đã gửi thông tin yêu cầu hỗ trợ";
    let body = "Số điện thoại: " + phone + "\n" +
        "Thông tin cần hỗ trợ: " + description
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.response)
        } else {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
