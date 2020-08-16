document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
        if (document.querySelector('.sidebar') !== null && window.innerWidth <= 1220) {
            document.querySelector('.sidebar__content').insertAdjacentElement('afterbegin', document.querySelector('.filter'));
        }
        if (document.querySelector('main.event') !== null && window.innerWidth <= 1220) {
            document.querySelector('.content__mobail').insertAdjacentElement('beforeend', document.querySelector('.speakers'));
            document.querySelector('.content__mobail').insertAdjacentElement('beforeend', document.querySelector('.content__info-inner'));
            document.querySelector('.content__material').insertAdjacentElement('afterend', document.querySelector('.content__info-bottom'));
        }
        if (document.querySelector('.favorites__settings') !== null && window.innerWidth <= 700) {
            document.querySelector('.favorites__top').insertAdjacentElement('afterend', document.querySelector('.favorites__settings'));
        }
    }
}
window.addEventListener('load', function() {
    let $contentTextInfo = document.querySelectorAll('.program .content__text-info'),
        $avatar = document.querySelectorAll('.avatar'),
        $choise = document.querySelectorAll('.choise'),
        $checkBox = document.querySelectorAll('.checkbox'),
        $choiseOpen = document.querySelectorAll('.choise--open'),
        $checkboxOpen = document.querySelectorAll('.checkbox--open'),
        $dateElement = document.querySelectorAll('.date__element'),
        $tagsElementLabel = document.querySelectorAll('.tags__element-label'),
        $tagsMore = document.querySelector('.tags__more'),
        $filterReset = document.querySelector('.filter__reset'),
        $contentBtnMore = document.querySelectorAll('.content__btn-more'),
        $settingsIcon = document.querySelector('.settings__icon'),
        $sidebar = document.querySelector('.sidebar'),
        $filterClose = document.querySelector('.filter__close'),
        $filterSubmit = document.querySelector('.filter__submit'),
        $checkboxElementInput = document.querySelectorAll('.checkbox__element-input'),
        $choiseElementInput = document.querySelectorAll('.choise__element-input'),
        $buttonUp = document.querySelector('.button-up'),
        $contentMore = document.querySelector('.content__more'),
        $speakersTopMore = document.querySelector('.speakers__top-more'),
        $speakersInner = document.querySelector('.speakers__inner'),
        $swiperContainer = document.querySelector('.swiper-container'),
        $infoTextMore = document.querySelectorAll('.info__text-more'),
        $filterTimeDropdown = document.querySelector('.filter-time__dropdown'),
        $filterTime = document.querySelector('.filter-time'),
        $filterTimeElement = document.querySelectorAll('.filter-time__element'),
        $filterTimeInput = document.querySelector('.filter-time__input'),
        $formRegistrationBtn = document.querySelector('.form__registration-btn'),
        $comentsForm = document.querySelector('.coments__form'),
        $modal = document.querySelector('.modal'),
        $modalFormBtn = document.querySelector('.modal__form-btn'),
        $modalClose = document.querySelector('.modal__close'),
        $contentAlphabetElement = document.querySelectorAll('.content__alphabet-element'),
        $contentFilterElementPage = document.querySelectorAll('.content__filter-element--page'),
        $pageFilter = document.querySelector('.page-filter'),
        $pageFilterElement = document.querySelectorAll('.page-filter__element'),
        $pageFilterSubmit = document.querySelector('.page-filter__submit'),
        $favoritesFilterElement = document.querySelectorAll('.favorites__filter-element'),
        $favoritesFilterSubmit = document.querySelector('.favorites__filter-submit'),
        $contentFormBtn = document.querySelector('.content__form-btn'),
        $infoMore = document.querySelector('.info__more'),
        $speakersFilterAlphabetLetter = document.querySelectorAll('.speakers-filter__alphabet-letter'),
        $speakersFilterElement = document.querySelectorAll('.speakers-filter__element'),
        $speakersFilterSubmit = document.querySelector('.speakers-filter__submit');

    let swiperBrend,
        swiperExpo,
        swiperExhebitorEvent,
        swiperPageSpeaker;

    if ($swiperContainer !== null) {
        if (document.querySelector('main.main') !== null) {
            swiperBrend = new Swiper('.partners', {
                spaceBetween: 5,
                slidesPerView: 'auto',
                slidesOffsetBefore: 15,
                breakpoints: {
                    501: {
                        spaceBetween: 10
                    }
                }

            });
            swiperExpo = new Swiper('.expo__block', {
                spaceBetween: 20,
                slidesPerView: 'auto',
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperExpo.destroy(true, true);
        }
        if (document.querySelector('main.exhibitor-event') !== null) {
            swiperExhebitorEvent = new Swiper('.swiper-container', {
                spaceBetween: 20,
                slidesPerView: 'auto',
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperExhebitorEvent.destroy(true, true);
        }
        if (document.querySelector('main.page-speaker') !== null) {
            swiperPageSpeaker = new Swiper('.swiper-container', {
                spaceBetween: 20,
                slidesPerView: 'auto',
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperPageSpeaker.destroy(true, true);
        }
    }




    function autoDetectHeight(_element, coef = 0, startHeight = 0) {
        let buffChildrenHeight = 0;
        if (_element.style.height === '' || _element.style.height === `${startHeight}px`) {
            _element.childNodes.forEach(function(item) {
                if (item.offsetHeight !== undefined) buffChildrenHeight += (item.offsetHeight + coef);
            });
            _element.style.height = (buffChildrenHeight + 1).toString() + 'px';
        } else _element.style.height = `${startHeight}px`;


    }

    function addModifierOpen(_element) {
        if (Array.isArray(_element)) {
            _element.forEach(function(item) {
                item.classList.toggle(`${item.classList[0]}--open`);
            });
        } else _element.classList.toggle(`${_element.classList[0]}--open`);
    }

    function addModifierActive(_element, master = false) {
        if (master) document.querySelectorAll(`.${_element.classList[0]}--active`).forEach(function(item) {
            item.classList.toggle(`${_element.classList[0]}--active`);
        });
        _element.classList.toggle(`${_element.classList[0]}--active`);

    }

    function renameContentText(_element, textFirst, textSecond = textFirst) {
        if (_element.textContent === textFirst) _element.textContent = textSecond;
        else _element.textContent = textFirst;
    }

    function doubleClick(_element) {
        if (Array.isArray(_element)) {
            _element.click();
            _element.click();
        } else {
            _element.forEach(function(item) {
                setTimeout(function() {
                    item.click();
                    item.click();
                }, 200);
            });
        }
    }

    function blockBody() {
        document.querySelector('body').classList.toggle('block');
    }

    function ajaxRequest(ajaxForm, url) {
        // event.preventDefault();
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                let result = $.parseJSON(response);
                console.log(result);
            },
            error: function(response) { // Данные не отправлены
                alert('Ошибка. Данные не отправлены.');
            }
        });
    }

    function checkScroll() {
        if ($buttonUp !== null) {
            if ((window.scrollY > window.innerHeight / 1.5)) $buttonUp.classList.add('button-up--active');
            else $buttonUp.classList.remove('button-up--active');
        }

    }

    function upPage() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    }





    if ($choise !== null) $choise.forEach(function(item) {
        item.querySelector('.choise__title').addEventListener('click', addModifierOpen.bind(item, item), false);
        item.querySelector('.choise__title').addEventListener('click', autoDetectHeight.bind(null, item.querySelector('.choise__inner'), 15, undefined), false);
    });
    if ($checkBox !== null) $checkBox.forEach(function(item) {
        item.querySelector('.checkbox__title').addEventListener('click', addModifierOpen.bind(item, item), false);
        item.querySelector('.checkbox__title').addEventListener('click', autoDetectHeight.bind(null, item.querySelector('.checkbox__inner'), 15, undefined), false);
    });

    if ($avatar !== null) $avatar.forEach(function(item) {
        item.addEventListener('focus', addModifierOpen.bind(null, item.querySelector('.avatar__info')), false);
        item.addEventListener('blur', addModifierOpen.bind(null, item.querySelector('.avatar__info')), false);
    });
    if ($contentTextInfo !== null) $contentTextInfo.forEach(function(item) {
        item.addEventListener('focus', focusContenTextInfo.bind(item, (item.closest('.content__box').querySelector('.content__box-inner').offsetHeight + 20).toString() + 'px'), false);
        item.addEventListener('blur', focusContenTextInfo.bind(item, '0px'), false);
    });
    if ($dateElement !== null) $dateElement.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, true), false);
        // if (window.innerWidth > 1220) item.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
    });
    if ($tagsElementLabel !== null) $tagsElementLabel.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, undefined), false);
        // if (window.innerWidth > 1220) item.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
    });
    if ($tagsMore !== null) {
        $tagsMore.addEventListener('click', renameContentText.bind(null, $tagsMore, 'Скрыть', 'Показать все'), false);
        $tagsMore.addEventListener('click', addModifierOpen.bind(null, $tagsMore.closest('.tags').querySelector('.tags__inner')), false);
    }
    if ($filterReset !== null) $filterReset.addEventListener('click', resetFilter);
    if ($contentBtnMore !== null) $contentBtnMore.forEach(function(item) {
        item.addEventListener('click', autoDetectHeight.bind(null, item.closest('.content__box').querySelector('.content__modal'), undefined, 26), false);
        item.addEventListener('click', renameContentText.bind(null, item, 'Скрыть полный текст', 'Читать полностью'), false);
    });
    if ($settingsIcon !== null) {
        $settingsIcon.addEventListener('click', addModifierOpen.bind(null, [$sidebar, document.querySelector('.sidebar__content')]), false);
        $settingsIcon.addEventListener('click', doubleClick.bind(null, document.querySelectorAll('.choise__title')), false);
        $settingsIcon.addEventListener('click', doubleClick.bind(null, document.querySelectorAll('.checkbox__title')), false);
        $settingsIcon.addEventListener('click', blockBody, false);
    }
    if ($sidebar !== null) $sidebar.addEventListener('click', checkEventTargetSidebar);
    if ($filterClose !== null) {
        $filterClose.addEventListener('click', addModifierOpen.bind(null, [$sidebar, document.querySelector('.sidebar__content')]), false);
        $filterClose.addEventListener('click', blockBody, false);
    }
    // if ($filterSubmit !== null) $filterSubmit.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
    if (window.innerWidth > 1220 && $checkboxElementInput !== null) {
        // $checkboxElementInput.forEach(function(item) {
        //     item.addEventListener('input', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
        // });
    }
    if (window.innerWidth > 1220 && $choiseElementInput !== null) {
        // $choiseElementInput.forEach(function(item) {
        //     item.addEventListener('input', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
        // });
    }
    window.addEventListener('scroll', checkScroll, false);
    if ($buttonUp !== null) $buttonUp.addEventListener('click', upPage);
    if ($contentMore !== null) {
        if (window.innerWidth > 500) $contentMore.addEventListener('click', autoDetectHeight.bind(null, document.querySelector('.content__text'), undefined, 36), false);
        else $contentMore.addEventListener('click', autoDetectHeight.bind(null, document.querySelector('.content__text'), undefined, 32), false);
        $contentMore.addEventListener('click', renameContentText.bind(null, $contentMore, 'Скрыть', 'Показать полностью'))
    }
    if ($speakersTopMore !== null) {
        $speakersTopMore.addEventListener('click', autoDetectHeight.bind(null, $speakersInner, 20, 325), false);
        $speakersTopMore.addEventListener('click', renameContentText.bind(null, $speakersTopMore, 'Скрыть', 'Показать всех'), false);
    }
    if ($infoTextMore !== null) {
        $infoTextMore.forEach(function(item, index) {
            if (window.innerWidth > 500) item.addEventListener('click', autoDetectHeight.bind(null, document.querySelectorAll('.info__text-p')[index], 0, 55), false);
            else item.addEventListener('click', autoDetectHeight.bind(null, document.querySelectorAll('.info__text-p')[index], 0, 108), false);
            item.addEventListener('click', renameContentText.bind(null, item, 'Скрыть', 'Показать полностью'), false);
        });

    }
    if ($filterTime !== null) {
        $filterTime.addEventListener('click', autoDetectHeight.bind(null, $filterTimeDropdown, 0, 0), false);
        $filterTime.addEventListener('click', addModifierOpen.bind(null, document.querySelector('.filter-time__inner')), false);
    }

    if ($filterTimeElement !== null) $filterTimeElement.forEach(function(item) {
        item.addEventListener('click', renameContentText.bind(null, document.querySelector('.filter-time__span'), item.textContent, undefined), false);
        item.addEventListener('click', choiseTimeElement);
        if (window.innerWidth > 500) item.addEventListener('click', ajaxRequest.bind(null, item.closest('.form').className, 'test.php'), false);
        item.addEventListener('click', addModifierActive.bind(null, item, 1), false)
    });
    if ($infoMore !== null) {
        $infoMore.addEventListener('click', renameContentText.bind(null, $infoMore, 'Скрыть', 'Показать полностью'), false);
        if (window.innerWidth >= 500) $infoMore.addEventListener('click', autoDetectHeight.bind(null, document.querySelector('.info__text'), 0, 60), false);
        else $infoMore.addEventListener('click', autoDetectHeight.bind(null, document.querySelector('.info__text'), 0, 114), false);
    };
    if ($modalClose !== null) $modalClose.addEventListener('click', openModal);
    if ($speakersFilterAlphabetLetter !== null) $speakersFilterAlphabetLetter.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, 1), false)
    });



    // ************** Формы
    // Форма Регистрации
    if ($formRegistrationBtn !== null) $formRegistrationBtn.addEventListener('click', ajaxRequest.bind(null, $formRegistrationBtn.closest('form').className, 'test.php'), false);
    // /Форма Регистрации
    // Форма отправки комментария (страница Мероприятие)
    if ($comentsForm !== null) $comentsForm.addEventListener('submit', ajaxRequest.bind(null, $comentsForm.className, 'test.php'), false);
    // /Форма отправки комментария (страница Мероприятие)
    // Форма входа
    if ($modalFormBtn !== null) $modalFormBtn.addEventListener('click', ajaxRequest.bind(null, $modalFormBtn.closest('form').className, 'test.php'), false);
    // /Форма входа
    // Форма на странице page.html (в макете "Экспоненты 1921")
    if ($contentAlphabetElement !== null) $contentAlphabetElement.forEach(function(item) {
        item.addEventListener('click', ajaxRequest.bind(null, item.closest('form').className, 'test.php'), false); //Это алфавит
        item.addEventListener('click', addModifierActive.bind(null, item, 1), false);
    });
    if ($contentFilterElementPage !== null) $contentFilterElementPage.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, 1), false);
        item.addEventListener('click', ajaxRequest.bind(null, item.closest('form').className, 'test.php'), false); //Это Все/Мои/Рекомендованные
    });
    if ($pageFilterElement !== null) $pageFilterElement.forEach(function(item) {
        if (window.innerWidth > 1220) item.addEventListener('input', ajaxRequest.bind(null, item.closest('form').className, 'test.php'), false); //Это все параметры правой плашки
    });
    if ($pageFilterSubmit !== null) $pageFilterSubmit.addEventListener('click', ajaxRequest.bind(null, $pageFilterSubmit.closest('form').className, 'test.php'), false); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // /Форма на странице page.html (в макете "Экспоненты 1921")
    // Форма на странице favorites.html (в макете "Избранное 1921")
    if ($favoritesFilterElement !== null) $favoritesFilterElement.forEach(function(item) {
        if (window.innerWidth > 1220) item.addEventListener('input', ajaxRequest.bind(null, item.closest('form').className, 'test.php'), false); //Это все параметры правой плашки
    });
    if ($favoritesFilterSubmit !== null) $favoritesFilterSubmit.addEventListener('click', ajaxRequest.bind(null, $favoritesFilterSubmit.closest('form').className, 'test.php'), false); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // /Форма на странице favorites.html (в макете "Избранное 1921")
    // Форма на странице спикера (speaker.html, в макете: Страница спикера 1924)
    if ($contentFormBtn !== null) $contentFormBtn.addEventListener('click', ajaxRequest.bind(null, $contentFormBtn.closest('form').className, 'test.php'), false);
    // /Форма на странице спикера (speaker.html, в макете: Страница спикера 1924)
    // Форма на странице speakers.html (в макете "Спикеры 1922")
    if ($speakersFilterElement !== null) $speakersFilterElement.forEach(function(item) {
        if (window.innerWidth > 1220) item.addEventListener('input', ajaxRequest.bind(null, item.closest('form').className, 'test.php'), false); //Это все параметры правой плашки
    });
    if ($speakersFilterSubmit !== null) $speakersFilterSubmit.addEventListener('click', ajaxRequest.bind(null, $speakersFilterSubmit.closest('form').className, 'test.php'), false); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // Форма на странице speakers.html (в макете "Спикеры 1922")
    // ************** /Формы





    function choiseTimeElement() {
        $filterTimeInput.value = this.id;
    }

    function checkEventTargetSidebar() {
        if (event.target === this) {
            addModifierOpen([this, this.querySelector('.sidebar__content')]);
            blockBody();
        }
    }

    function resetFilter() {
        $dateElement.forEach(function(item) {
            item.classList.remove(`${item.classList[0]}--active`);
        });
        $tagsElementLabel.forEach(function(item) {
            item.classList.remove(`${item.classList[0]}--active`);
        });
    }

    function focusContenTextInfo(_height) {
        let $contentModal = this.closest('.content__box').querySelector('.content__modal');
        $contentModal.style.height = _height;
        $contentModal.classList.toggle('content__modal--open');
    }

    function filterHeight() {
        if ($choiseOpen !== null) $choiseOpen.forEach(function(item) {
            autoDetectHeight(item.querySelector('.choise__inner'), 15);
        });
        if ($checkboxOpen !== null) $checkboxOpen.forEach(function(item) {
            autoDetectHeight(item.querySelector('.checkbox__inner'), 15);
        });
    }
    // Функция вызова окна входа
    function openModal() {
        addModifierActive($modal);
        addModifierActive($modal.querySelector('.modal__box'));

    }
    // /Функция вызова окна входа







    // Вызов окна входа
    if ($modal !== null) openModal();
    // /Вызов окна входа
    if ($speakersInner !== null && window.innerWidth <= 1220) {
        let buffValue = 0;
        $speakersInner.childNodes.forEach(function(item) {
            if (item.offsetHeight !== undefined) buffValue++;
        });
        if (buffValue <= 4) $speakersTopMore.style.display = 'none';
    }
    filterHeight();
});