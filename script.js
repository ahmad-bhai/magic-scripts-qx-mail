var dia = document.querySelectorAll("dialog");

if (dia.length) {
    dia.forEach(d => d.innerHTML = "");
}

var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = "dialog::backdrop {background: #181a20} ::selection {background: crimson;color:white}";
var loader = document.createElement("dialog");
document.body.appendChild(loader);
loader.innerHTML = `<div>PLEASE WAIT...</div>`;
loader.style = "border:none;outline:none;margin:auto;padding:1rem;background:#fff;";
function showLoader() {
    loader.showModal();
    setTimeout(() => hideLoader(), 8000);
}
var hideLoader = () => loader.close();
showLoader();

const crypto = localStorage.getItem("ahmad_script_uid");
if (crypto) {
    fetch(`https://ahmad-bhai-codes-shop.vercel.app/f?id=${crypto}`)
        .then(res => res.text())
        .then(data => {
            hideLoader();
            if (data == "F") {
                document.querySelector("#box").style.display="block";
                var time = new Date().toLocaleTimeString("en", { timeStyle: 'short' });
                document.querySelector(".receivedTime").innerHTML = time;

                document.querySelector(".time").innerHTML = time.replace(/\s|PM|AM/g, "");

                document.querySelector("#box").contentEditable = true
                var btn = document.querySelector(".btn")
                btn.addEventListener("click", () => {
                    document.body.contentEditable = false
                    html2canvas(document.querySelector("#box")).then(canvas => {
                        let a = document.createElement("a")
                        a.download = `SS-${Date.now()}.png`
                        a.href = canvas.toDataURL("image/png")
                        a.click()
                    })
                });

                document.querySelector(".battery2").style.width = `${Number(document.querySelector("input").value) * 25 / 100}px`;

                document.querySelector("input").onchange = () => {
                    document.querySelector(".battery2").style.width = `${Number(document.querySelector("input").value) * 25 / 100}px`;
                }
            }
            else {
                SETITEM(crypto);
            }
        })
}

else {
    let cid = self.crypto.getRandomValues(new BigUint64Array(1))[0];
    localStorage.setItem("ahmad_script_uid", cid);
    SETITEM(cid);
    hideLoader();
}

function SETITEM(cid) {
    var myDialog = document.createElement("dialog");
    document.body.appendChild(myDialog);
    myDialog.innerHTML = `<div style="
    background:#fff;
    width:320px;
    padding:40px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.45);
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
">

    <img src="quotex.svg"
        style="width:70px;height:70px;display:block;margin:0 auto 15px;">

    <div style="
        color:#222;
        font-size:24px;
        font-weight:700;
        margin-bottom:8px;
    ">
        ACCESS LOCKED
    </div>

    <div style="
        color:#666;
        font-size:13px;
        margin-bottom:15px;
    ">
        Your device is not authorized.
    </div>

    <div style="
        background:#f8fafc;
        color:#334155;
        padding:12px;
        border-radius:10px;
        border:1px dashed #dc2626;
        font-family:monospace;
        font-size:14px;
        word-break:break-all;
        margin-bottom:20px;
    ">
        ${cid}
    </div>

    <div style="
        text-align:left;
        font-size:14px;
        color:#444;
        line-height:1.7;
        border-top:1px solid #eee;
        padding-top:15px;
        margin-bottom:18px;
    ">
        <b>Telegram:</b>
        <span style="color:#dc2626;">@Magic_Scripts</span>
    </div>

    <button onclick="location.reload()" style="
        width:100%;
        background:#dc2626;
        color:#fff;
        border:none;
        padding:12px;
        border-radius:10px;
        font-size:15px;
        font-weight:700;
        cursor:pointer;
    ">
        RETRY 🔄
    </button>

    <div style="
        margin-top:18px;
        padding-top:15px;
        border-top:1px solid #eee;
        font-size:12px;
        color:#888;
    ">
        🔴 Developed By @Magic_Scripts 🔴
    </div>

</div>`;
    myDialog.style = `
padding:0;
border:none;
outline:none;
margin:auto;
background:transparent;
border-radius:15px;
overflow:hidden;
box-shadow:none;
max-width:none;
`;
    myDialog.showModal();
              }
