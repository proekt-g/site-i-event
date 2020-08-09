window.addEventListener('load', function() {
    let $contentTextInfo = document.querySelectorAll('.program .content__text-info');



    if ($contentTextInfo !== null) $contentTextInfo.forEach(function(item) {
        item.addEventListener('mouseenter', hoverContenTextInfo);
    });

    function hoverContenTextInfo() {
        let $contentModal = document.querySelector('.content__modal');
        $contentModal.style.height = document.querySelector('.content__box-inner').offsetHeight;
        console.log(document.querySelector('.content__box-inner').offsetHeight + 17);
        console.log($contentModal.style.height);

        $contentModal.classList.toggle('content__modal--open');
    }
});