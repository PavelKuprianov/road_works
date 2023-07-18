
document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	
	  autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteration: false,
	  },
	
	});
	
	
	const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

		const header = document.querySelector('.header') // находим header и записываем в константу
 		let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
		let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

		window.addEventListener('scroll', () => { // при прокрутке страницы

			currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

			const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет

			if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
				header.classList.add('header_hidden') // то скрываем header
			}
			if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
				header.classList.remove('header_hidden') // то отображаем header
			}

			prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

		})

	}

	onScrollHeader() // вызываем основную функцию onScrollHeader


	//Модальное окно
	const btnOpen = document.querySelectorAll('.feedback');
	const btnClose = document.querySelector('.close-modal-img');
	const modal = document.querySelector('.modal');
	const form = document.querySelector('.form');
	modal.style.display = 'flex';

	const modalViewHandler = () => {
		
		modal.classList.toggle('modal--open');
	}

	btnOpen.forEach((item) => {
		item.addEventListener('click', modalViewHandler);
	})

	btnClose.addEventListener('click', modalViewHandler);

	form.addEventListener('submit', (e) => {
		modal.classList.remove('modal--open');
		e.preventDefault();
	});

	modal.addEventListener('click', (e)=> {
		if(!e.target.closest('.modal-wrap')) {
			modal.classList.remove('modal--open');
		}
	})

	const handleReload = () => {
		location.reload();
	}


	//Яндекс карта
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [58.575069, 49.650613],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [58.575069, 49.650613]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: 'Дорожно-строительные работы',
            hintContent: 'Дорожно-строительные работы'
        }
    }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackStretchyIcon',
        iconColor: 'red',
        // Метку можно перемещать.
        draggable: false
    });

    myMap.geoObjects
        .add(myGeoObject)
	}
});


