
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(ev) {
        if (this.contains(ev.target.closest(gyerek))) {
            mit(ev, ev.target.closest(gyerek))
        }
    }
    szulo.addEventListener(mikor, esemenyKezelo)
}

delegal(document.querySelector('table'), 'a[data-id]', 'click', ajax);


function ajax(event, a) {
    fetch(`mail.php?id=${a.dataset.id}&username=${a.dataset.username}`).then(res => res.json()).then(data => {
        console.log(data);
        if (data.ok) {
            document.querySelector('#text').innerHTML = data.text;
        }
    });
}