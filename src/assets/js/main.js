document.onreadystatechange = function() {
    if (document.readyState === "interactive") {
        if (document.querySelector('.sidebar') !== null && window.innerWidth <= 1220) {
            document.querySelector('.sidebar__content').insertAdjacentElement('afterbegin', document.querySelector('.filter'));
        }
        if (document.querySelector('main.event') !== null) {
            document.querySelector('.tags-line').insertAdjacentElement('afterend', document.querySelector('.speakers'));
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
        $contentMore = document.querySelector('.content__more');


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
        if (window.scrollY > window.innerHeight) $buttonUp.classList.add('button-up--active');
        else $buttonUp.classList.remove('button-up--active');
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
        if (window.innerWidth > 1220) item.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
    });
    if ($tagsElementLabel !== null) $tagsElementLabel.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, undefined), false);
        if (window.innerWidth > 1220) item.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
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
    if ($filterSubmit !== null) $filterSubmit.addEventListener('click', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
    if (window.innerWidth > 1220 && $checkboxElementInput !== null) {
        $checkboxElementInput.forEach(function(item) {
            item.addEventListener('input', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
        });
    }
    if (window.innerWidth > 1220 && $choiseElementInput !== null) {
        $choiseElementInput.forEach(function(item) {
            item.addEventListener('input', ajaxRequest.bind(null, $filterSubmit.closest('.form').className, 'test.php'), false);
        });
    }
    window.addEventListener('scroll', checkScroll, false);
    if ($buttonUp !== null) $buttonUp.addEventListener('click', upPage);
    if ($contentMore !== null) {
        $contentMore.addEventListener('click', autoDetectHeight.bind(null, document.querySelector('.content__text'), undefined, 36), false);
        $contentMore.addEventListener('click', renameContentText.bind(null, $contentMore, 'Скрыть', 'Показать полностью'))
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



    filterHeight();
});