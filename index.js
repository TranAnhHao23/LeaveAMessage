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
    xhr.open('POST', 'https://be-neu-elearning.onrender.com/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')
    alert("Chúng tôi đã tiếp nhận thông tin. Chúng tôi sẽ liên lạc với bạn trong giây lát")

    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
