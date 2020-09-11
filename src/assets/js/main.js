document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        if (
            document.querySelector(".content__video") !== null &&
            window.innerWidth <= 1220
        ) {
            document
                .querySelector(".content")
                .insertAdjacentElement(
                    "afterbegin",
                    document.querySelector(".content__video")
                );
        }
        if (
            document.querySelector(".sidebar") !== null &&
            window.innerWidth <= 1220
        ) {
            if (document.querySelector("main.broadcast") !== null) {
            } else
                document
                    .querySelector(".sidebar__content")
                    .insertAdjacentElement(
                        "afterbegin",
                        document.querySelector(".filter")
                    );
        }
        if (
            document.querySelector(".moderators") !== null &&
            document.querySelector(".content__mobail") !== null &&
            window.innerWidth <= 1220
        ) {
            document
                .querySelector(".content__mobail")
                .insertAdjacentElement(
                    "beforebegin",
                    document.querySelector(".moderators")
                );
        }
        if (
            document.querySelector("main.event") !== null &&
            window.innerWidth <= 1220
        ) {
            document
                .querySelector(".content__mobail")
                .insertAdjacentElement(
                    "beforeend",
                    document.querySelector(".speakers")
                );
            document
                .querySelector(".content__mobail")
                .insertAdjacentElement(
                    "beforeend",
                    document.querySelector(".content__info-inner")
                );
            document
                .querySelector(".content__material")
                .insertAdjacentElement(
                    "afterend",
                    document.querySelector(".content__info-bottom")
                );
        }
        if (
            document.querySelector(".favorites__settings") !== null &&
            window.innerWidth <= 700
        ) {
            document
                .querySelector(".favorites__top")
                .insertAdjacentElement(
                    "afterend",
                    document.querySelector(".favorites__settings")
                );
        }
        if (
            document.querySelector("main.last") !== null &&
            window.innerWidth <= 1220
        ) {
            document
                .querySelector(".content__product")
                .insertAdjacentElement(
                    "beforebegin",
                    document.querySelector(".content__sidebar")
                );
        }
    }
};
window.addEventListener("load", function () {
    let $contentTextInfo = document.querySelectorAll(
            ".program .content__text-info"
        ),
        $content = document.querySelector(".content"),
        $avatar = document.querySelectorAll(".avatar"),
        $choise = document.querySelectorAll(".choise"),
        $checkBox = document.querySelectorAll(".checkbox"),
        $choiseOpen = document.querySelectorAll(".choise--open"),
        $checkboxOpen = document.querySelectorAll(".checkbox--open"),
        $dateElement = document.querySelectorAll(".date__element"),
        $tagsElementLabel = document.querySelectorAll(".tags__element-label"),
        $tagsMore = document.querySelector(".tags__more"),
        $filterReset = document.querySelector(".filter__reset"),
        $contentBtnMore = document.querySelectorAll(".content__btn-more"),
        $settingsIcon = document.querySelector(".settings__icon"),
        $sidebar = document.querySelector(".sidebar"),
        $filterClose = document.querySelector(".filter__close"),
        $filterSubmit = document.querySelector(".filter__submit"),
        $checkboxElementInput = document.querySelectorAll(
            ".checkbox__element-input"
        ),
        $choiseElementInput = document.querySelectorAll(
            ".choise__element-input"
        ),
        $buttonUp = document.querySelector(".button-up"),
        $contentMore = document.querySelector(".content__more"),
        $speakersTopMore = document.querySelector(".speakers__top-more"),
        $speakersInner = document.querySelector(".speakers__inner"),
        $swiperContainer = document.querySelector(".swiper-container"),
        $infoTextMore = document.querySelectorAll(".info__text-more"),
        $filterTimeDropdown = document.querySelector(".filter-time__dropdown"),
        $filterTime = document.querySelector(".filter-time"),
        $filterTimeElement = document.querySelectorAll(".filter-time__element"),
        $filterTimeInput = document.querySelector(".filter-time__input"),
        $formRegistrationBtn = document.querySelector(
            ".form__registration-btn"
        ),
        $comentsForm = document.querySelector(".event__form"),
        $modal = document.querySelector(".modal"),
        $modalFormBtn = document.querySelector(".modal__form-btn"),
        $modalClose = document.querySelector(".modal__close"),
        $contentAlphabetElement = document.querySelectorAll(
            ".content__alphabet-element"
        ),
        $contentFilterElementPage = document.querySelectorAll(
            ".content__filter-element--page"
        ),
        $pageFilterElement = document.querySelectorAll(".page-filter__element"),
        $pageFilterSubmit = document.querySelector(".page-filter__submit"),
        $favoritesFilterElement = document.querySelectorAll(
            ".favorites__filter-element"
        ),
        $favoritesFilterSubmit = document.querySelector(
            ".favorites__filter-submit"
        ),
        $contentFormBtn = document.querySelector(".content__form-btn"),
        $infoMore = document.querySelector(".info__more"),
        $speakersFilterAlphabetLetter = document.querySelectorAll(
            ".speakers-filter__alphabet-letter"
        ),
        $speakersFilterElement = document.querySelectorAll(
            ".speakers-filter__element"
        ),
        $speakersFilterSubmit = document.querySelector(
            ".speakers-filter__submit"
        ),
        $broadcastTopChat = document.querySelectorAll(".broadcast__top-chat"),
        $broadcastForm = document.querySelector(".broadcast__form"),
        $contentSidebarMore = document.querySelector(".content__sidebar-more"),
        $lastBox = document.querySelectorAll(".last__box"),
        $lastBoxClose = document.querySelectorAll(".last__box-close"),
        $lastBoxMore = document.querySelector(".last__box-more"),
        $exhibitorInput = document.querySelectorAll(".exhibitor__input"),
        $exhibitorBtn = document.querySelector(".exhibitor__btn"),
        $programInput = document.querySelectorAll(".program__input"),
        $programBtn = document.querySelector(".program__btn"),
        $contentProgramFormInput = document.querySelectorAll(
            ".content__program-form-input"
        ),
        $contentProgramFormDay = document.querySelectorAll(
            ".content__program-form-day"
        ),
        $contentInfoParticipantsAll = document.querySelectorAll(
            ".content__info-participants-all"
        ),
        $contentProductTitle = document.querySelectorAll(
            ".content__product-title"
        );

    // $broadcastTopChat = document.querySelectorAll(".broadcast__top-chat");

    let swiperBrend,
        swiperExpo,
        swiperExhebitorEvent,
        swiperPageSpeaker,
        swiperLast,
        swiperLastblock;

    let elementParent;

    if ($swiperContainer !== null) {
        if (document.querySelector("main.main") !== null) {
            let widthPartnersLogo = 0,
                sliderCoef;
            if (window.innerWidth <= 500) sliderCoef = 50;
            else sliderCoef = 110;
            document
                .querySelectorAll(".partners__box")
                .forEach(function (item) {
                    widthPartnersLogo += item.clientWidth;
                });
            if (widthPartnersLogo + sliderCoef > window.innerWidth) {
                swiperBrend = new Swiper(".partners", {
                    spaceBetween: 5,
                    slidesPerView: "auto",
                    slidesOffsetBefore: 15,
                    breakpoints: {
                        501: {
                            spaceBetween: 10,
                        },
                    },
                });
            } else
                document
                    .querySelector(".partners")
                    .classList.toggle("partners--not-slider");

            swiperExpo = new Swiper(".expo__block", {
                spaceBetween: 20,
                slidesPerView: "auto",
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperExpo.destroy(true, true);
        }
        if (document.querySelector("main.exhibitor-event") !== null) {
            swiperExhebitorEvent = new Swiper(".swiper-container", {
                spaceBetween: 20,
                slidesPerView: "auto",
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500)
                swiperExhebitorEvent.destroy(true, true);
        }
        if (document.querySelector("main.page-speaker") !== null) {
            swiperPageSpeaker = new Swiper(".swiper-container", {
                spaceBetween: 20,
                slidesPerView: "auto",
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperPageSpeaker.destroy(true, true);
        }
        if (document.querySelector("main.last") !== null) {
            swiperLast = new Swiper(".slider .swiper-container", {
                spaceBetween: 20,
                slidesPerView: "auto",
                slidesOffsetBefore: 15,
            });
            if (window.innerWidth <= 500) swiperLast.destroy(true, true);
        }

        if (
            document.querySelector(
                ".content__slider-block.swiper-container"
            ) !== null
        ) {
            if (window.innerWidth > 700) {
                swiperLastblock = new Swiper(
                    ".content__slider-block.swiper-container",
                    {
                        spaceBetween: 20,
                        autoHeight: false,
                        // slidesPerColumn: 3,
                        slidesPerView: 1,
                        // width: 666,
                        navigation: {
                            nextEl: ".strip__next",
                            prevEl: ".strip__prev",
                        },
                        pagination: {
                            el: ".strip__numbers",
                            clickable: true,
                            renderBullet: function (index, className) {
                                return (
                                    `<div class="strip__number ${className}">` +
                                    (index + 1) +
                                    "</div>"
                                );
                            },
                        },
                        breakpoints: {
                            1651: {
                                autoHeight: true,
                            },
                            701: {
                                autoHeight: false,
                            },
                        },
                    }
                );
            } else {
                swiperLastblock = new Swiper(
                    ".content__slider-block.swiper-container",
                    {
                        spaceBetween: 20,
                        autoHeight: false,
                        slidesPerView: 1,
                        navigation: {
                            nextEl: ".strip__next-mobail",
                            prevEl: ".strip__prev-mobail",
                        },
                        pagination: {
                            el: ".strip__numbers",
                            clickable: true,
                            renderBullet: function (index, className) {
                                return (
                                    `<div class="strip__number ${className}">` +
                                    (index + 1) +
                                    "</div>"
                                );
                            },
                        },
                    }
                );
            }
        }
    }

    function autoDetectHeight(_element, coef = 0, startHeight = 0) {
        let buffChildrenHeight = 0;
        if (
            _element.style.height === "" ||
            _element.style.height === `${startHeight}px`
        ) {
            _element.childNodes.forEach(function (item) {
                if (item.offsetHeight !== undefined)
                    buffChildrenHeight += item.offsetHeight + coef;
            });
            _element.style.height = (buffChildrenHeight + 1).toString() + "px";
        } else _element.style.height = `${startHeight}px`;
    }

    function addModifierOpen(_element) {
        if (Array.isArray(_element)) {
            _element.forEach(function (item) {
                item.classList.toggle(`${item.classList[0]}--open`);
            });
        } else _element.classList.toggle(`${_element.classList[0]}--open`);
    }

    function addModifierActive(_element, master = false) {
        if (master)
            document
                .querySelectorAll(`.${_element.classList[0]}--active`)
                .forEach(function (item) {
                    item.classList.toggle(`${_element.classList[0]}--active`);
                });
        _element.classList.toggle(`${_element.classList[0]}--active`);
    }

    function renameContentText(_element, textFirst, textSecond = textFirst) {
        if (_element.textContent === textFirst)
            _element.textContent = textSecond;
        else _element.textContent = textFirst;
    }

    function doubleClick(_element) {
        if (Array.isArray(_element)) {
            _element.click();
            _element.click();
        } else {
            _element.forEach(function (item) {
                setTimeout(function () {
                    item.click();
                    item.click();
                }, 200);
            });
        }
    }
    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    function blockBody() {
        document.querySelector("body").classList.toggle("block");
    }

    function ajaxRequest(ajaxForm, url) {
        checkFilterNumber();
        try {
            history.replaceState(null, null, "#");
        } catch (z) {
            console.log(z);
        }
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                let result = $.parseJSON(response);
                console.log(result);
            },
            error: function (response) {
                // Данные не отправлены
                alert("Ошибка. Данные не отправлены.");
            },
        });
    }

    function checkScroll() {
        if ($buttonUp !== null) {
            if (window.scrollY > window.innerHeight / 1.5)
                $buttonUp.classList.add("button-up--active");
            else $buttonUp.classList.remove("button-up--active");
        }
    }

    function upPage(speed = 1000) {
        $("html, body").animate({ scrollTop: 0 }, speed);
    }

    function scrollBehavior() {
        if (String(this).slice(-1) !== "#") {
            event.preventDefault();
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $("html, body").animate({ scrollTop: dn - 70 }, 400);
        }
    }

    if ($content !== null) {
        $content.addEventListener(
            "click",
            function () {
                if (event.target.closest(".content__text-info") !== null) {
                    focusContenTextInfo.bind(
                        event.target.closest(".content__text-info"),
                        (
                            event.target
                                .closest(".content__text-info")
                                .closest(".content__box")
                                .querySelector(".content__box-inner")
                                .offsetHeight + 20
                        ).toString() + "px"
                    )();
                    event.target
                        .closest(".content__text-info")
                        .addEventListener("blur", blurInfoText, false);
                }
                if (event.target.closest(".avatar") !== null) {
                    clickAvatar.bind(event.target)();
                    addModifierOpen(
                        event.target
                            .closest(".avatar")
                            .querySelector(".avatar__info")
                    );
                    event.target
                        .closest(".avatar")
                        .addEventListener("blur", blurAvatar, false);
                }
            },
            false
        );
    }
    if ($choise !== null)
        $choise.forEach(function (item) {
            item.querySelector(".choise__title").addEventListener(
                "click",
                addModifierOpen.bind(item, item),
                false
            );
            item.querySelector(".choise__title").addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    item.querySelector(".choise__inner"),
                    15,
                    undefined
                ),
                false
            );
        });
    if ($checkBox !== null)
        $checkBox.forEach(function (item) {
            item.querySelector(".checkbox__title").addEventListener(
                "click",
                addModifierOpen.bind(item, item),
                false
            );
            item.querySelector(".checkbox__title").addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    item.querySelector(".checkbox__inner"),
                    15,
                    undefined
                ),
                false
            );
        });

    // if ($avatar !== null)
    //     $avatar.forEach(function (item) {
    //         item.addEventListener("click", clickAvatar, false);
    //         item.addEventListener(
    //             "click",
    //             addModifierOpen.bind(null, item.querySelector(".avatar__info")),
    //             false
    //         );
    //         item.addEventListener(
    //             "blur",
    //             function () {
    //                 document
    //                     .querySelector(".avatar__info--open")
    //                     .classList.remove("avatar__info--open");
    //             },
    //             false
    //         );
    //     });
    // if ($contentTextInfo !== null)
    //     $contentTextInfo.forEach(function (item) {
    //         item.addEventListener(
    //             "click",
    //             focusContenTextInfo.bind(
    //                 item,
    //                 (
    //                     item
    //                         .closest(".content__box")
    //                         .querySelector(".content__box-inner").offsetHeight +
    //                     20
    //                 ).toString() + "px"
    //             ),
    //             false
    //         );
    //         item.addEventListener(
    //             "blur",
    //             function () {
    //                 document
    //                     .querySelector(".content__modal--open")
    //                     .classList.remove("content__modal--open");
    //             },
    //             false
    //         );
    //     });
    if ($dateElement !== null)
        $dateElement.forEach(function (item) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, true),
                false
            );
        });
    if ($tagsElementLabel !== null)
        $tagsElementLabel.forEach(function (item) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, undefined),
                false
            );
        });
    if ($tagsMore !== null) {
        $tagsMore.addEventListener(
            "click",
            renameContentText.bind(null, $tagsMore, "Скрыть", "Показать все"),
            false
        );
        $tagsMore.addEventListener(
            "click",
            addModifierOpen.bind(
                null,
                $tagsMore.closest(".tags").querySelector(".tags__inner")
            ),
            false
        );
    }
    if ($filterReset !== null) {
        $filterReset.addEventListener("click", resetFilter);
    }
    if ($contentBtnMore !== null)
        $contentBtnMore.forEach(function (item) {
            item.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    item
                        .closest(".content__box")
                        .querySelector(".content__modal"),
                    undefined,
                    26
                ),
                false
            );
            item.addEventListener(
                "click",
                renameContentText.bind(
                    null,
                    item,
                    "Скрыть полный текст",
                    "Читать полностью"
                ),
                false
            );
        });
    if ($settingsIcon !== null) {
        $settingsIcon.addEventListener(
            "click",
            addModifierOpen.bind(null, [
                $sidebar,
                document.querySelector(".sidebar__content"),
            ]),
            false
        );
        $settingsIcon.addEventListener(
            "click",
            doubleClick.bind(null, document.querySelectorAll(".choise__title")),
            false
        );
        $settingsIcon.addEventListener(
            "click",
            doubleClick.bind(
                null,
                document.querySelectorAll(".checkbox__title")
            ),
            false
        );
        $settingsIcon.addEventListener("click", blockBody, false);
        $settingsIcon.addEventListener("click", upPage, false);
    }
    if ($sidebar !== null)
        $sidebar.addEventListener("click", checkEventTargetSidebar);
    if ($filterClose !== null) {
        $filterClose.addEventListener(
            "click",
            addModifierOpen.bind(null, [
                $sidebar,
                document.querySelector(".sidebar__content"),
            ]),
            false
        );
        $filterClose.addEventListener("click", blockBody, false);
    }
    window.addEventListener("scroll", checkScroll, false);
    if ($buttonUp !== null) $buttonUp.addEventListener("click", upPage);
    if ($contentMore !== null) {
        if (window.innerWidth > 500)
            $contentMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".content__text"),
                    undefined,
                    36
                ),
                false
            );
        else
            $contentMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".content__text"),
                    undefined,
                    32
                ),
                false
            );
        $contentMore.addEventListener(
            "click",
            renameContentText.bind(
                null,
                $contentMore,
                "Скрыть",
                "Показать полностью"
            )
        );
    }
    if ($speakersTopMore !== null) {
        $speakersTopMore.addEventListener(
            "click",
            autoDetectHeight.bind(null, $speakersInner, 20, 325),
            false
        );
        $speakersTopMore.addEventListener(
            "click",
            renameContentText.bind(
                null,
                $speakersTopMore,
                "Скрыть",
                "Показать всех"
            ),
            false
        );
    }
    if ($infoTextMore !== null) {
        $infoTextMore.forEach(function (item, index) {
            if (window.innerWidth > 500)
                item.addEventListener(
                    "click",
                    autoDetectHeight.bind(
                        null,
                        document.querySelectorAll(".info__text-p")[index],
                        0,
                        55
                    ),
                    false
                );
            else
                item.addEventListener(
                    "click",
                    autoDetectHeight.bind(
                        null,
                        document.querySelectorAll(".info__text-p")[index],
                        0,
                        108
                    ),
                    false
                );
            item.addEventListener(
                "click",
                renameContentText.bind(
                    null,
                    item,
                    "Скрыть",
                    "Показать полностью"
                ),
                false
            );
        });
    }
    if ($filterTime !== null) {
        $filterTime.addEventListener(
            "click",
            autoDetectHeight.bind(null, $filterTimeDropdown, 0, 0),
            false
        );
        $filterTime.addEventListener(
            "click",
            addModifierOpen.bind(
                null,
                document.querySelector(".filter-time__inner")
            ),
            false
        );
    }
    if ($checkboxElementInput.length !== null)
        $checkboxElementInput.forEach(function (item) {
            item.addEventListener(
                "input",
                function () {
                    if (
                        this.closest(".checkbox__element") ===
                        this.closest(".checkbox")
                            .querySelector(".checkbox__element-label--all")
                            .closest(".checkbox__element")
                    ) {
                        this.closest(".checkbox")
                            .querySelectorAll(".checkbox__element-input")
                            .forEach(function (item) {
                                item.checked = false;
                            });
                        this.checked = true;
                    } else {
                        this.closest(".checkbox")
                            .querySelector(".checkbox__element-label--all")
                            .closest(".checkbox__element")
                            .querySelector("input").checked = false;
                    }
                },
                false
            );
        });
    if ($filterTimeElement !== null)
        $filterTimeElement.forEach(function (item) {
            item.addEventListener(
                "click",
                renameContentText.bind(
                    null,
                    document.querySelector(".filter-time__span"),
                    item.textContent,
                    undefined
                ),
                false
            );
            item.addEventListener("click", choiseTimeElement);
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
        });
    if ($broadcastTopChat.length !== 0)
        $broadcastTopChat.forEach(function (item) {
            item.addEventListener("click", scrollBehavior, false);
        });
    if ($infoMore !== null) {
        $infoMore.addEventListener(
            "click",
            renameContentText.bind(
                null,
                $infoMore,
                "Скрыть",
                "Показать полностью"
            ),
            false
        );
        if (window.innerWidth >= 500)
            $infoMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".info__text"),
                    0,
                    60
                ),
                false
            );
        else
            $infoMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".info__text"),
                    0,
                    114
                ),
                false
            );
    }
    if ($modalClose !== null) $modalClose.addEventListener("click", openModal);
    if ($speakersFilterAlphabetLetter !== null)
        $speakersFilterAlphabetLetter.forEach(function (item) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
            item.addEventListener("click", scrollBehavior, false);
        });
    // if ($broadcastTopChat !== null) {
    //     $broadcastTopChat.addEventListener(
    //         "click",
    //         addModifierOpen.bind(null, [
    //             $sidebar,
    //             document.querySelector(".sidebar__content"),
    //         ]),
    //         false
    //     );
    //     $broadcastTopChat.addEventListener("click", blockBody, false);
    //     $broadcastTopChat.addEventListener(
    //         "click",
    //         upPage.bind(null, 100),
    //         false
    //     );
    // }
    if ($contentSidebarMore !== null) {
        if (window.innerWidth >= 500)
            $contentSidebarMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".content__sidebar-text"),
                    0,
                    60
                ),
                false
            );
        else
            $contentSidebarMore.addEventListener(
                "click",
                autoDetectHeight.bind(
                    null,
                    document.querySelector(".content__sidebar-text"),
                    0,
                    64
                ),
                false
            );
        $contentSidebarMore.addEventListener(
            "click",
            renameContentText.bind(
                null,
                $contentSidebarMore,
                "Скрыть",
                "Показать полностью"
            ),
            false
        );
    }
    if ($lastBoxMore !== null)
        $lastBoxMore.addEventListener(
            "click",
            autoDetectHeight.bind(
                null,
                $lastBoxMore.parentNode.querySelector(".last__box-text"),
                0,
                51
            ),
            false
        );
    if ($lastBox !== null)
        $lastBox.forEach(function (item) {
            item.addEventListener("click", clickLastBox, false);
        });
    if ($lastBoxClose !== null)
        $lastBoxClose.forEach(function (item) {
            item.addEventListener("click", clickCloseLastBox);
        });
    if ($contentProgramFormDay !== null)
        $contentProgramFormDay.forEach(function (item, index) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
            switch (index) {
                case 0:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "first"),
                        false
                    );
                    break;
                case 1:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "second"),
                        false
                    );
                    break;
                case 2:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "third"),
                        false
                    );
                    break;
                case 3:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "fourth"),
                        false
                    );
                    break;
                case 4:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "fifth"),
                        false
                    );
                    break;
                case 5:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "sixth"),
                        false
                    );
                    break;
                case 6:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "seventh"),
                        false
                    );
                    break;
                case 7:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "eighth"),
                        false
                    );
                    break;
                case 8:
                    item.addEventListener(
                        "click",
                        createProgramSlider.bind(item, "ninth"),
                        false
                    );
                    break;
            }
        });
    if ($contentInfoParticipantsAll !== null)
        $contentInfoParticipantsAll.forEach(function (item) {
            item.addEventListener("click", clickMoreAvatar, false);
            item.addEventListener(
                "click",
                renameContentText.bind(null, item, "Скрыть", "Показать всех"),
                false
            );
        });
    if ($contentProductTitle !== null)
        $contentProductTitle.forEach(function (item) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
            item.addEventListener("click", clickProducttitle, false);
        });

    // ************** Формы
    // Форма Регистрации
    if ($formRegistrationBtn !== null)
        $formRegistrationBtn.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $formRegistrationBtn.closest("form").className,
                "test.php"
            ),
            false
        );
    // /Форма Регистрации
    // Форма отправки комментария (страница Мероприятие)
    if ($comentsForm !== null)
        $comentsForm.addEventListener(
            "submit",
            ajaxRequest.bind(null, $comentsForm.className, "test.php"),
            false
        );
    // /Форма отправки комментария (страница Мероприятие)
    // Форма входа
    if ($modalFormBtn !== null)
        $modalFormBtn.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $modalFormBtn.closest("form").className,
                "test.php"
            ),
            false
        );
    // /Форма входа
    // Форма на странице page.html (в макете "Экспоненты 1921")
    if ($contentAlphabetElement !== null)
        $contentAlphabetElement.forEach(function (item) {
            item.addEventListener(
                "click",
                ajaxRequest.bind(
                    null,
                    item.closest("form").className,
                    "test.php"
                ),
                false
            ); //Это алфавит
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
        });
    if ($contentFilterElementPage !== null)
        $contentFilterElementPage.forEach(function (item) {
            item.addEventListener(
                "click",
                addModifierActive.bind(null, item, 1),
                false
            );
            item.addEventListener(
                "click",
                ajaxRequest.bind(
                    null,
                    item.closest("form").className,
                    "test.php"
                ),
                false
            ); //Это Все/Мои/Рекомендованные
        });
    if ($pageFilterElement !== null)
        $pageFilterElement.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "input",
                    ajaxRequest.bind(
                        null,
                        item.closest("form").className,
                        "test.php"
                    ),
                    false
                ); //Это все параметры правой плашки
        });
    if ($pageFilterSubmit !== null)
        $pageFilterSubmit.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $pageFilterSubmit.closest("form").className,
                "test.php"
            ),
            false
        ); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // /Форма на странице page.html (в макете "Экспоненты 1921")
    // Форма на странице favorites.html (в макете "Избранное 1921")
    if ($favoritesFilterElement !== null)
        $favoritesFilterElement.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "input",
                    ajaxRequest.bind(
                        null,
                        item.closest("form").className,
                        "test.php"
                    ),
                    false
                ); //Это все параметры правой плашки
        });
    if ($favoritesFilterSubmit !== null)
        $favoritesFilterSubmit.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $favoritesFilterSubmit.closest("form").className,
                "test.php"
            ),
            false
        ); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // /Форма на странице favorites.html (в макете "Избранное 1921")
    // Форма на странице спикера (speaker.html, в макете: Страница спикера 1924)
    if ($contentFormBtn !== null)
        $contentFormBtn.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $contentFormBtn.closest("form").className,
                "test.php"
            ),
            false
        );
    // /Форма на странице спикера (speaker.html, в макете: Страница спикера 1924)
    // Форма на странице speakers.html (в макете "Спикеры 1922")
    if ($speakersFilterElement !== null)
        $speakersFilterElement.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "input",
                    ajaxRequest.bind(
                        null,
                        item.closest("form").className,
                        "test.php"
                    ),
                    false
                ); //Это все параметры правой плашки
        });
    if ($speakersFilterSubmit !== null)
        $speakersFilterSubmit.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $speakersFilterSubmit.closest("form").className,
                "test.php"
            ),
            false
        ); //Это все параметры правой плашки при нажатии на применить (в моб. версии)
    // Форма на странице speakers.html (в макете "Спикеры 1922")
    // Форма отправки комментария (страница Трансляции)
    if ($broadcastForm !== null)
        $broadcastForm.addEventListener(
            "submit",
            ajaxRequest.bind(null, $broadcastForm.className, "test.php"),
            false
        );
    // /Форма отправки комментария (страница Трансляции)
    // Форма отправки Программа экспонентов (exhibitor.html)
    if ($exhibitorInput !== null)
        $exhibitorInput.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "input",
                    ajaxRequest.bind(
                        null,
                        item.closest("form").className,
                        "test.php"
                    ),
                    false
                ); //Это все параметры правой плашки кроме времени
        });
    if ($filterTimeElement !== null)
        $filterTimeElement.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "click",
                    ajaxRequest.bind(
                        null,
                        item.closest(".form").className,
                        "test.php"
                    ),
                    false
                ); //Это время
        });
    if ($exhibitorBtn !== null)
        $exhibitorBtn.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $exhibitorBtn.closest(".form").className,
                "test.php"
            ),
            null
        ); //На мобайле кнопка применить
    // /Форма отправки Программа экспонентов (exhibitor.html)
    // Форма отправки Программа мероприятий (program.html)
    if ($programInput !== null)
        $programInput.forEach(function (item) {
            if (window.innerWidth > 1220)
                item.addEventListener(
                    "input",
                    ajaxRequest.bind(
                        null,
                        item.closest("form").className,
                        "test.php"
                    ),
                    false
                ); //Это все параметры правой плашки
        });
    if ($programBtn !== null)
        $programBtn.addEventListener(
            "click",
            ajaxRequest.bind(
                null,
                $programBtn.closest(".form").className,
                "test.php"
            ),
            null
        ); //На мобайле кнопка применить
    // /Форма отправки Программа мероприятий (program.html)
    // Выбор даты Программы мероприятий (last.html)
    if ($contentProgramFormInput !== null)
        $contentProgramFormInput.forEach(function (item) {
            item.addEventListener(
                "input",
                ajaxRequest.bind(
                    null,
                    item.closest("form").className,
                    "test.php"
                ),
                false
            );
        });
    // /Выбор даты Программы мероприятий (last.html)
    // ************** /Формы

    function blurAvatar() {
        document
            .querySelector(".avatar__info--open")
            .classList.remove("avatar__info--open");
    }
    function clickLastBox() {
        if (window.innerWidth > 500) {
            let _this = this,
                elementOne,
                elementTwo;
            elementParent = this.closest(".swiper-slide");

            if ($(elementParent).find(".content__box").length > 2) {
                elementOne = $(elementParent)
                    .find(".content__box")
                    .not(_this)[0];
                elementTwo = $(elementParent)
                    .find(".content__box")
                    .not(_this)
                    .not(elementOne)[0];
            }
            if ($(elementParent).find(".content__box").length === 2) {
                elementOne = $(elementParent)
                    .find(".content__box")
                    .not(_this)[0];
                elementTwo = document.createElement("div");
            }
            if ($(elementParent).find(".content__box").length === 1) {
                elementOne = document.createElement("div");
                elementTwo = document.createElement("div");
            }

            $(elementParent).find(".content__box").fadeOut(400);

            setTimeout(function () {
                addModifierActive(document.querySelector(".content__block"), 1);
                addModifierActive(_this, 0);
                elementParent
                    .querySelectorAll(".content__box")
                    .forEach(function (item) {
                        if (
                            item !== _this &&
                            item.classList.contains("content__box--active")
                        )
                            addModifierActive(item, 0);
                    });
                if (
                    elementParent
                        .querySelector(".last__block-inner")
                        .querySelector(".last__box") !== null
                ) {
                    elementParent
                        .querySelector(".last__block-inner")
                        .querySelector(".last__box")
                        .addEventListener("click", clickLastBox);
                    elementParent
                        .querySelector(".content__slide-wrapper")
                        .insertAdjacentElement(
                            "afterbegin",
                            elementParent
                                .querySelector(".last__block-inner")
                                .querySelector(".last__box")
                        );
                }
                elementParent
                    .querySelector(".last__block-inner")
                    .insertAdjacentElement("afterbegin", _this);
                elementParent
                    .querySelector(".last__block-wrapper")
                    .insertAdjacentElement("beforeend", elementOne);
                elementParent
                    .querySelector(".last__block-wrapper")
                    .insertAdjacentElement("beforeend", elementTwo);

                $(_this).fadeIn(400);
                $(elementOne).fadeIn(400);
                $(elementTwo).fadeIn(400);
                _this.removeEventListener("click", clickLastBox);
            }, 400);
        } else {
            addModifierActive(document.querySelector(".content__block"), 1);
            $(this).children(".last__box-close").fadeIn(400);
            $(this).children(".last__box-inner").toggle(400);
            this.removeEventListener("click", clickLastBox);
        }
    }

    function clickCloseLastBox() {
        elementParent = this.closest(".swiper-slide");
        if (window.innerWidth > 500) {
            $(elementParent).find(".content__box").fadeOut(400);
            setTimeout(function () {
                addModifierActive(document.querySelector(".content__block"), 1);
                console.log("first");
                addModifierActive(
                    elementParent
                        .querySelector(".last__block-inner")
                        .querySelector(".last__box")
                );
                console.log("second");
                elementParent
                    .querySelector(".last__block-inner")
                    .querySelector(".last__box")
                    .addEventListener("click", clickLastBox);
                // document.querySelector('.last__block-inner').insertAdjacentElement('afterend', document.querySelector('.last__block-inner').querySelector('.last__box'));
                elementParent
                    .querySelector(".content__slide-wrapper")
                    .insertAdjacentElement(
                        "afterbegin",
                        elementParent
                            .querySelector(".last__block-inner")
                            .querySelector(".last__box")
                    );
                elementParent
                    .querySelector(".last__block-wrapper")
                    .querySelectorAll(".last__box")
                    .forEach(function (item) {
                        // document.querySelector('.last__block-inner').insertAdjacentElement('afterend', item);
                        elementParent
                            .querySelector(".content__slide-wrapper")
                            .insertAdjacentElement("afterbegin", item);
                    });
                $(elementParent).find(".content__box").fadeIn(400);
            }, 400);
        } else {
            document
                .querySelector(".content__block")
                .classList.toggle("content__block--active");
            let _this = this;
            $(this).parent().children(".last__box-inner").toggle(400);
            $(this).fadeOut(400);
            // addModifierActive(this, 1);
            // addModifierActive(this.parentNode);
            setTimeout(function () {
                _this
                    .closest(".last__box")
                    .addEventListener("click", clickLastBox);
            }, 200);
        }
    }

    function clickLastBoxPlus() {
        clickCloseLastBox();
        clickLastBox();
    }
    function clickAvatar() {
        if (
            document.querySelector(".avatar__info--open") !== null &&
            document.querySelector(".avatar__info--open").closest(".avatar") !==
                this.closest(".avatar")
        )
            document
                .querySelector(".avatar__info--open")
                .classList.remove("avatar__info--open");
    }
    function createProgramSlider(numberTab) {
        document
            .querySelectorAll(`.content__program .content__program`)
            .forEach(function (item) {
                item.classList.add("content__program--hidden");
            });
        document
            .querySelector(`.content__program--${numberTab}`)
            .classList.remove("content__program--hidden");
        // if (!this.classList.contains("content__program-form-day--init")) {
        //     this.classList.add(`content__program-form-day--init`);
        //     document
        //         .querySelector(`.content__program--${numberTab}`)
        //         .classList.add("content__program--init");
        //     let arrowNext, arrowPrev;
        //     if (window.innerWidth > 700) {
        //         arrowNext = `.strip__next.strip__next--${numberTab}`;
        //         arrowPrev = `.strip__prev.strip__prev--${numberTab}`;
        //     } else {
        //         arrowNext = `.strip__next-mobail.strip__next-mobail--${numberTab}`;
        //         arrowPrev = `.strip__prev-mobail.strip__prev-mobail--${numberTab}`;
        //     }
        //     let programSliderFirst = new Swiper(
        //         `.content__program.content__program--${numberTab}.swiper-container`,
        //         {
        //             spaceBetween: 20,
        //             autoHeight: true,
        //             slidesPerView: 1,
        //             navigation: {
        //                 nextEl: arrowNext,
        //                 prevEl: arrowPrev,
        //             },
        //             pagination: {
        //                 el: `.strip__numbers-program.strip__numbers-program--${numberTab}`,
        //                 clickable: true,
        //                 renderBullet: function (index, className) {
        //                     return (
        //                         `<div class="strip__number ${className}">` +
        //                         (index + 1) +
        //                         "</div>"
        //                     );
        //                 },
        //             },
        //         }
        //     );
        // }
    }

    function clickProducttitle() {
        if (this.classList.contains("content__product-title--second")) {
            document
                .querySelector(".content__slider-block")
                .classList.add("content__slider-block--hidden");
            document
                .querySelector(".content__program")
                .classList.remove("content__program--hidden");
            if (
                !document
                    .querySelector(".content__program")
                    .classList.contains("content__product-title--init")
            ) {
                document
                    .querySelector(".content__program")
                    .classList.add("content__product-title--init");
                createProgramSlider.bind(
                    document.querySelector(".content__program-form-day--first"),
                    "first"
                )();
            }
        } else {
            document
                .querySelector(".content__program")
                .classList.add("content__program--hidden");
            document
                .querySelector(".content__slider-block")
                .classList.remove("content__slider-block--hidden");
        }
    }
    function blurInfoText() {
        document
            .querySelector(".content__modal--open")
            .classList.remove("content__modal--open");
    }
    function choiseTimeElement() {
        $filterTimeInput.value = this.id;
    }

    function checkEventTargetSidebar() {
        if (event.target === this) {
            addModifierOpen([this, this.querySelector(".sidebar__content")]);
            blockBody();
        }
    }

    function resetFilter() {
        $dateElement.forEach(function (item) {
            item.classList.remove(`${item.classList[0]}--active`);
        });
        $tagsElementLabel.forEach(function (item) {
            item.classList.remove(`${item.classList[0]}--active`);
        });
        setTimeout(function () {
            checkFilterNumber();
        }, 200);
    }

    function focusContenTextInfo(_height) {
        let $contentModal = this.closest(".content__box").querySelector(
            ".content__modal"
        );
        $contentModal.style.height = _height;
        $contentModal.classList.toggle("content__modal--open");
    }

    function filterHeight() {
        if ($choiseOpen !== null)
            $choiseOpen.forEach(function (item) {
                autoDetectHeight(item.querySelector(".choise__inner"), 15);
            });
        if ($checkboxOpen !== null)
            $checkboxOpen.forEach(function (item) {
                autoDetectHeight(item.querySelector(".checkbox__inner"), 15);
            });
    }
    // Функция вызова окна входа
    function openModal() {
        addModifierActive($modal);
        addModifierActive($modal.querySelector(".modal__box"));
    }
    // /Функция вызова окна входа
    function clickMoreAvatar() {
        document
            .querySelectorAll(".event__avatars")
            .forEach(function (item, index) {
                if (index !== 0) {
                    item.classList.toggle("avatars--hidden");
                }
            });
    }

    function checkFilterNumber() {
        let countActive = 0,
            countActiveBuff = 0;
        if (document.querySelectorAll(".choise__element-label") !== null)
            document
                .querySelectorAll(".choise__element-label")
                .forEach(function (item) {
                    if (!item.classList.contains("choise__element-label--all"))
                        if (item.parentNode.querySelector("input").checked)
                            countActive++;
                });
        if (document.querySelectorAll(".date__element") !== null)
            document
                .querySelectorAll(".date__element")
                .forEach(function (item) {
                    if (!item.classList.contains("date__element--all"))
                        if (item.parentNode.querySelector("input").checked)
                            countActive++;
                });
        if (document.querySelectorAll(".filter__checkbox") !== null) {
            document
                .querySelectorAll(".filter__checkbox")
                .forEach(function (item) {
                    countActiveBuff = 0;
                    item.querySelectorAll("input").forEach(function (input) {
                        if (
                            !input.parentNode
                                .querySelector("label")
                                .classList.contains(
                                    "checkbox__element-label--all"
                                )
                        )
                            if (input.checked) {
                                countActiveBuff = 1;
                            }
                    });
                    countActive += countActiveBuff;
                });
            // if (countActive) {
            //     document
            //         .querySelector(".checkbox__element-label--all")
            //         .closest(".checkbox__element")
            //         .querySelector("input").checked = false;
            // }
        }
        countActiveBuff = 0;
        if (document.querySelectorAll(".filter__tags input") !== null)
            document
                .querySelectorAll(".filter__tags input")
                .forEach(function (item) {
                    if (item.checked) countActiveBuff = 1;
                });
        countActiveBuff = 0;
        if (document.querySelectorAll(".filter-time__dropdown") !== null)
            document
                .querySelectorAll(
                    ".filter-time__dropdown .filter-time__element"
                )
                .forEach(function (item) {
                    if (
                        item.classList.contains(
                            "filter-time__element--active"
                        ) &&
                        !item.classList.contains("filter-time__element--all")
                    )
                        countActiveBuff = 1;
                });
        countActive += countActiveBuff;
        document.querySelector(".filter__number").innerHTML = countActive;
        if (countActive !== 0) {
            document
                .querySelector(".filter__number")
                .classList.add("filter__number--visible");
            document
                .querySelector(".filter__reset")
                .classList.add("filter__reset--active");
        } else {
            document
                .querySelector(".filter__number")
                .classList.remove("filter__number--visible");
            document
                .querySelector(".filter__reset")
                .classList.remove("filter__reset--active");
        }
    }

    // Вызов окна входа
    if ($modal !== null) openModal();
    // /Вызов окна входа
    // checkFilterNumber();
    if ($speakersInner !== null && window.innerWidth <= 1220) {
        let buffValue = 0;
        $speakersInner.childNodes.forEach(function (item) {
            if (item.offsetHeight !== undefined) buffValue++;
        });
        if (buffValue <= 4) $speakersTopMore.style.display = "none";
    }
    filterHeight();
});
