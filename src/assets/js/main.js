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
        $filterReset = document.querySelector('.filter__reset');

    function autoDetectHeight(_element, coef = 0) {
        let buffChildrenHeight = 0;
        if (_element.style.height === '' || _element.style.height === '0px') {
            _element.childNodes.forEach(function(item) {
                if (item.offsetHeight !== undefined) buffChildrenHeight += (item.offsetHeight + coef);
            });
            _element.style.height = (buffChildrenHeight + 1).toString() + 'px';
        } else _element.style.height = '0px';

    }

    function addModifierOpen(_element) {
        _element.classList.toggle(`${_element.classList[0]}--open`);
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




    if ($choise !== null) $choise.forEach(function(item) {
        item.querySelector('.choise__title').addEventListener('click', addModifierOpen.bind(item, item, false));
        item.querySelector('.choise__title').addEventListener('click', autoDetectHeight.bind(null, item.querySelector('.choise__inner'), 15, false));
    });
    if ($checkBox !== null) $checkBox.forEach(function(item) {
        item.querySelector('.checkbox__title').addEventListener('click', addModifierOpen.bind(item, item, false));
        item.querySelector('.checkbox__title').addEventListener('click', autoDetectHeight.bind(null, item.querySelector('.checkbox__inner'), 15, false));
    });

    if ($avatar !== null) $avatar.forEach(function(item) {
        item.addEventListener('focus', addModifierOpen.bind(null, item.querySelector('.avatar__info'), false));
        item.addEventListener('blur', addModifierOpen.bind(null, item.querySelector('.avatar__info'), false));
    });
    if ($contentTextInfo !== null) $contentTextInfo.forEach(function(item) {
        item.addEventListener('focus', focusContenTextInfo.bind(item, (item.closest('.content__box').querySelector('.content__box-inner').offsetHeight + 20).toString() + 'px'), false);
        item.addEventListener('blur', focusContenTextInfo.bind(item, '0px', false));
    });
    if ($dateElement !== null) $dateElement.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, true, false));
    });
    if ($tagsElementLabel !== null) $tagsElementLabel.forEach(function(item) {
        item.addEventListener('click', addModifierActive.bind(null, item, false));
    });
    if ($tagsMore !== null) {
        $tagsMore.addEventListener('click', renameContentText.bind(null, $tagsMore, 'Скрыть', 'Показать все', false));
        $tagsMore.addEventListener('click', addModifierOpen.bind(null, $tagsMore.closest('.tags').querySelector('.tags__inner'), false));

    }
    if ($filterReset !== null) $filterReset.addEventListener('click', resetFilter);




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




    if ($choiseOpen !== null) $choiseOpen.forEach(function(item) {
        autoDetectHeight(item.querySelector('.choise__inner'), 15);
    });
    if ($checkboxOpen !== null) $checkboxOpen.forEach(function(item) {
        autoDetectHeight(item.querySelector('.checkbox__inner'), 15);
    })
});