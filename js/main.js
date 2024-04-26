function op_menu() {
    const menu = document.getElementById('menu');
    const menu_new = document.getElementById('menu-new');
    if (menu.classList.contains('active')) {
        document.getElementsByClassName('dropdown-content')[0].classList.remove('active');
        document.getElementsByClassName('dropdown-content')[1].classList.remove('active');
        document.getElementsByClassName('dropdown-content')[2].classList.remove('active');
        menu.classList.remove('active');
        menu_new.classList.remove('active');
    }
    else {
        menu.classList.toggle('active');
        menu_new.classList.toggle('active');
    }
}
function op_menu_p(x) {
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) || (window.innerWidth < 1000)) {
        const menu = document.getElementById('p' + x);
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
        else {
            menu.classList.toggle('active');
        }
    }
}

function op_har(x) {
    if (x == 1) {
        document.getElementById('bottominf').innerHTML = 'Если во время эксплуатации листогиба Tapco Max-20 вышла из строя (или сломалась) какая-либо его часть, и вы не знаете куда обратиться за помощью — вы попали по адресу.<br><br>Для того, чтобы точно узнать стоимость замены какой-либо детали или узла вам необходимо воспользоваться схемой сборки и деталировкой листогиба Tapco и определить артикульный номер нужной вам детали. По артикулу вы узнаете стоимость запчасти. Практически все артикульные позиции имеются в наличии у нас на складах. <br><br>Бывает часто так, что неоходимо заменить на листогибе силиконовую ленту на гибочной балке (или по другому вставка виниловая) и несколько кулaчков в сборе, которые постоянно участвуют в процессе фиксациии зажима металлического листа и с определенной периодичностью могут выходить из строя, и в решении этого вопроса производителем данного оборудования был сформирован специальный комплект расходных материалов. Купив его, клиент выигрывает по стоимости, в сравнении с тем, если покупать каждую позицию по отдельности';
        document.getElementById('op').style.borderBottom = "3px solid #e5af26";
        document.getElementById('har').style.borderBottom = "0";
    };
    if (x == 2) {
        document.getElementById('bottominf').innerHTML = 'Характеристик нет';
        document.getElementById('har').style.borderBottom = "3px solid #e5af26";
        document.getElementById('op').style.borderBottom = "0";
    };
};
const popup_order = document.getElementById('popup_order');
const popup_links = document.querySelectorAll('.op_popup');
const popup_close = document.getElementById('popup_close');
const submit_btn = document.getElementById('order_submit_btn');



const body = document.querySelector('body');

if (popup_links.length > 0) {
    for (let i = 0; i < popup_links.length; i++) {
        const popup_link = popup_links[i];
        popup_link.addEventListener('click', function (e) {
            popup_order.classList.toggle('open');
            body.classList.toggle('block');
            popup_close.addEventListener('click', function (e) {
                popup_order.classList.remove('open');
            })
            popup_order.addEventListener('click', function (e) {
                if (!e.target.closest('.popup_order')) {
                    popup_order.classList.remove('open');
                    body.classList.remove('block');
                }
            })

        });
    }
    submit_btn.addEventListener('click', function (e) {
        const number = document.getElementById('number');
        if (number.value == '')
            alert("Поле не заполнено");
        else {
            alert("Отправлено!");
            number.value = "";
            popup_order.classList.remove('open');
            body.classList.remove('block');
        }

    })
}
;