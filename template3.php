<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
global $USER;
$this->setFrameMode(true);
if(strripos($_SERVER["HTTP_USER_AGENT"],"iPhone") === false){
$this->addExternalJS($templateFolder."/js/zoomsl-3.0.min.js");
}
$GLOBALS["DETAIL"] = true; 

$discountinued = false;
$templateLibrary = array('popup');
if($arResult['PRODUCT_IS_TABAK'] != 'Y' && $arResult['PRODUCT_IS_FZADULT'] != 'Y'){
$socialServices  =  '<div class="social-services">   
                        <script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
                        <script src="https://yastatic.net/share2/share.js"></script>
                        <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,twitter,whatsapp,linkedin,telegram,viber,skype,moimir,collections" data-limit="8"></div>
                    </div>';
}

// Если раздела нет в разрешенных для функционала "Поделиться в социальных сетях"
// То обнуляем переменную с инициализацией плагина социальные сервисы поделить
if(!$GLOBALS["SHARE_SECTIONS"][$arResult["IBLOCK_SECTION_ID"]]){
    $socialServices = "";
}

//если карточка табака или алкоголя, и не подтвержден возраст, то редиректим на главную (если это поисковый бот, то пускаем)
$isBot = isBot($_SERVER['HTTP_USER_AGENT']);
if($isBot === false){
    if ($USER->IsAuthorized() && ($arResult['PRODUCT_IS_ALKOHOL'] !== false || $arResult['PRODUCT_IS_TABAK'] == 'Y') && !$_SESSION["SHOW_TOBACCO"]){
        LocalRedirect("/access_to_tobacco/");
    }elseif(($arResult['PRODUCT_IS_ALKOHOL'] !== false || $arResult['PRODUCT_IS_TABAK'] == 'Y' || $arResult['PRODUCT_IS_FZADULT'] == 'Y') && !$_SESSION["SHOW_TOBACCO"] or $_REQUEST["register_modal"] == true){
        LocalRedirect("/register/?register_tabak=Y&urlBack=".$_SERVER["REQUEST_URI"]);
        $GLOBALS["SHOW_MODAL"] = true; 
        require_once($_SERVER["DOCUMENT_ROOT"]."/ajax/register_modal.php");
    }
}

if(strripos($_SERVER["REQUEST_URI"],"alkogol") !== false or $arResult['PRODUCT_IS_ALKOHOL'] !== false){
// HTML с текстом информирующим о возможной брони алкоголя
$ALKOGOL_HTML = '<div class="alkogol-price-info">
                    <p>Интернет-магазин Наша Сеть не осуществляет дистанционную продажу алкогольной продукции.</p>
                    <p>Товар вы можете приобрести, воспользовавшись <a class="link_rezerv" href="mailto:ecommerce@nasha-set.ru?subject=Хочу зарезервировать алкоголь '.$arResult["NAME"].'&body=Хочу зарезервировать алкоголь '.$arResult["NAME"].'. В размере:">услугой резерва</a>. Товар будет отложен для вас в магазине.</p>
                </div>';
}

?>
<?if(strripos($_SERVER["REQUEST_URI"],"ajax") === false){?>
<script>
    $(function () {
        var backStock = $('.js-back-in-stock');
        backStock.click(function () {
            $('#' + $(this).data("modalId")).css('display', 'block');

        });
        $(".offSel").select2({
            minimumResultsForSearch: -1
        }).on("change", function (event) {
            showOffer(event);
        });

        $('.price-selector.price-selector_select.tabs_element').find('.price-selector__item:first-child').find('.price-selector__checkbox').trigger('click');

    });
    function hideNotAvail(id) {
        if ($('#in-stock-' + id).prop('checked')) {
            $('#back-in-stock_modal-' + id + ' .notavail').hide();
            $('.back-in-row').hide();
            $('.back-in-checkbox').prop('checked', true);
            $('.back-in-checkbox').attr('checked', true);
            $('.searchHide').hide();
        } else {
            $('#back-in-stock_modal-' + id + ' .notavail').show();
            $('.back-in-row').show();
           // $('.back-in-checkbox').prop('checked', false);
            //$('.back-in-checkbox').attr('checked', false);
            $('.searchHide').hide();
        }
    }

    function showOffer(event) {
        var offId = $(event.target).val();
        $('.product-page__price').css('display', 'none');


        if ($(event.target).hasClass('price-all-checkbox')) {
            $('.price-selector-all__checkbox').prop('checked', false);
            $('.price_all_' + offId).prop('checked', true);
        } else {

            $('.price-all-checkbox').prop('checked', false);
            $('#price_' + offId).prop('checked', true);
        }


        $('.price-selector.price-selector_select .price-selector__item').removeClass('price-selector__item--selected');

        $('.price_s_' + offId).addClass('price-selector__item--selected');

        $('#off' + offId).css('display', 'inline-block');
        try {
            showSkladAll();

        } catch (err) {


        }

    }

    function add2basket(id, action) {
        var amt_id = '#quant' + id;
        var curr_count = $(amt_id).val();
        if (curr_count < 1) {
            curr_count = 1;
        }

        var dialog_href = '/add2basket/?goodid=' + id;
        var e = '/ajax/buy.php?id=' + id + '&q=' + curr_count + '&action=' + action;

        $.get(e, function (data) {
            if (action == 'buy') {
                //setTimeout(window.location.href = dialog_href, 100);
            } else if (action == 'delay') {
                $('.delay_href').addClass('active');
                $('.delay_href').attr("onclick", "javascript:showInDelayMess();");
                $('#delay_mess').click();
            }
        });
    }

    function showInDelayMess() {
        $('#delay_mess').click();
    }

    function add2compare(id, operation) {

        if (operation == "add") {
            var e = '/ajax/compare.php?id=' + id + '&action=ADD_TO_COMPARE_LIST';
        } else {
            var e = '/ajax/compare.php?id=' + id + '&action=DELETE_FROM_COMPARE_LIST';
        }
        $.get(e, function (data) {
        });
        //$(".add-comparing").prop("disabled", "disabled");
        if (operation == "add") {
            $('.compare_href').addClass('active');
            $(".compare_href").each(function () {
                $(this).attr("onclick", "javascript:add2compare(" + id + ", 'del');");
            });
            $('#compare_mess').click();
        } else {
            $('.compare_href').removeClass('active');
            $(".compare_href").each(function () {
                $(this).attr("onclick", "javascript:add2compare(" + id + ", 'add');");
            });
            $('#compare_mess_del').click();
        }
    }

    function priceCalculation(product_id) {
        var price_parent_el = $(event.target).closest(".product-page__price-info");
        price_parent_el.find('.product__price-count-value').hide();
        $(".ajax_loader").show();
        $.ajax({
            type: "POST",
            url: '/q_script/updateCost.php',
            async: true,
            data: "AJAX_COST_UPDATE=1&PRODUCT_QUANTITY=" + parseInt(price_parent_el.find(".input-count").val()) + "&PRODUCT_ID=" + product_id + "&DEFAULT_VALUE=" + parseInt(price_parent_el.find('.product__price-count-value').text()),
            dataType: "json"
        }).done(function (data) {
            price_parent_el.find('.product__price-count-value').text(data + ' ₽');
            price_parent_el.find('.product__price-count-value').show();
            $(".ajax_loader").hide();
        });
    }
    $(function () {
        $("#iblock_add").on("submit", function (e) {
            e.preventDefault();
            var msg = $('#iblock_add').serialize();
            $.ajax({
                url: '/ajax/review_form_ajax.php',
                type: $('#iblock_add').attr('method'),
                //url: $('#iblock_add').attr('action'),
                data: msg + "&EL_ID=<?=$arResult['ID']?>&EL_NAME=<?=$arResult['NAME']?>&iblock_submit=Y",
                success: function (res) {
                    //var regexp = /<div class="modal__block">(.*)<\/div>/im;
                    //var result = res.match(regexp);
                    $(".review-form").html(res);
                }
            });
        });
        $(".paginator a").on("click", function (e) {
            e.preventDefault();
            var hashes = $(this).attr("href").slice($(this).attr("href").indexOf('?') + 1);
            $.ajax({
                url: '/ajax/review_list_ajax.php',
                type: "POST",
                data: hashes + "&EL_ID=<?=$arResult['ID']?>",
                success: function (res) {
                    $(".review-bl").html(res);
                    $(".review-bl").attr("tabindex", -1).focus();
                }
            });
        })
    });
    $(function () {
        $('.add-to-cart').on('click', function () {

            var button = $(this);

            function buyScriptInit(button) {

                var app = {

                    // Анимация полета
                    fly_animate: function (item, x_stop, y_stop) {
                        item.animate({
                                top: y_stop + 16,
                                left: x_stop + 16,
                                height: 0
                            }, 500,
                            function () {
                                // Удаляем клонированную картинку после анимации
                                item.remove();
                            });
                    },

                    cartAnim: function () {
                        var width = screen.width;
                        if (width > 840) {
                            var cart = $('.bar-bottom .cart--header');
                        } else {
                            var cart = $('.header .cart--header');
                        }

                        cart.addClass('cart-fly-anim');

                        setTimeout(function () {
                            cart.removeClass('cart-fly-anim')
                        }, 1000);
                    },

                    btnSetActive: function () {
                        var btnWrap = button.parents('.butn-wrapper');
                        btnWrap.addClass('added');
                    },

                    // Функция Летающей корзины
                    fly: function () {

                        // Определяем настройки
                        var width = screen.width;
                        var btn = button; // Кнопка, которая вызвала анимацию
                        if (width > 840) {
                            var trg = $('.bar-bottom .cart--header'); // класс, в какую точку летит анимация
                        } else {
                            var trg = $('.header .cart--header'); // класс, в какую точку летит анимация
                        }
                        var img = btn.parents('.js_prod-img-fly').find('.js_pic-fly'); // картинка с блока, которая будет анимироваться

                        if (btn.length && trg.length && img.length) {
                            //Определяем координаты
                            var x_start = img.offset().left;
                            var y_start = img.offset().top;
                            var x_stop = trg.offset().left;
                            var y_stop = trg.offset().top;
                            // Клонируем картинку
                            var item = img.clone().addClass('fly').appendTo('body').css({
                                top: y_start,
                                left: x_start
                            });

                            // Вызываем анимацию
                            this.fly_animate(item, x_stop, y_stop + 0);
                            this.cartAnim();
                            this.btnSetActive();
                        } else {
                            console.log('всё сломалось')
                        }
                    },


                    // инициализация приложения
                    init: function () {

                        app.fly();

                        // Запрещаем переход по ссылке
                        return false;
                    }
                };

// вызов приложения
                app.init();

            }

            buyScriptInit(button);

        });
        
        <?if(strripos($_SERVER["HTTP_USER_AGENT"],"iPhone") === false){?>
        $("body").find(".detail-photo .js_pic-fly").imagezoomsl({
            zoomrange: [3, 18],
            magnifiersize: [570, 410],
            scrollspeedanimate: 10,
            // loopspeedanimate: 5,
            cursorshadeborder: "3px solid black",
            magnifiereffectanimate: "fadeIn"                 
        });

        <?}?>
        $("body").on("click",".detail-list", function(){
            $("body").find(".detail-photo .js_pic-fly").attr("data-large",$(".js_pic-fly").attr("src"));
        });

        $("body").on("click", function(element){
            if(element.target.className == 'tracker'){
                $('.detail-photo [data-position="'+$(".photo-block").attr("data-position")+'"]').trigger("click");
            }
        })

        $("body").on("click", ".slick-slide img", function(){
            $('.detail-photo [data-position="'+$(this).attr("data-position")+'"]').trigger("click");
        });

        $("body").on("click", ".detail-list li", function(){
            $(".photo-block").attr("data-position",$(this).attr("data-position"));
        });

        $("body").on("mouseover", ".photo-block .detail-list li", function(){
            $(this).find("a").trigger("click");
        });

        $("body").on("mouseover", ".ajax_photos ul li", function(){
            $(".ajax_photos ul li").removeClass("hover");
            $(this).addClass("hover");
            var img = $(this).find("img").attr("rel");
            $(".detail-photo .first").addClass("hover").attr("data-default-img",$(".detail-photo .first").attr("href"));
            $(".detail-photo .first").attr("href",img);
            $(".detail-photo .first .js_pic-fly").attr("src",img);
            if($("body").find(".ajax_property_aromat .flav").length > 0 && $(this).find("img").attr("data-flav").length > 0){
                var flav = $(this).find("img").attr("data-flav");
                $("body").find(".ajax_property_aromat .flav").text(flav);
            }
        });

        $("body").on("mouseout", ".ajax_photos ul li", function(){
            if($(".detail-photo .first").hasClass("hover")){
                $(".detail-photo .first").attr("href",$(".detail-photo .first").attr("data-default-img"));
                $(".detail-photo .first .js_pic-fly").attr("src",$(".detail-photo .first").attr("data-default-img"));
                $(".detail-photo .first").removeClass("hover");
                if($("body").find(".ajax_property_aromat .flav").length > 0 && $(this).find("img").attr("data-flav").length > 0){
                    $("body").find(".ajax_property_aromat .flav").text($(".ajax_property_aromat .flav").attr("data-default"));
                }
            }
        });

        $("body").on("click", ".ajax_photos ul li", function(){
            $(".ajax_photos ul li").removeClass("active");
            $(this).addClass("active");
            $("h1").text($(this).find("img").attr("data-name"));
            var elem_code = $(this).find("img").attr("data-code");
            var elem_id = $(this).find("img").attr("data-id");
            var new_url =  $(this).find("img").attr("data-url");
            $("#characteristics_items, .product-page-price-simple, .photo-block").css({"opacity":"0.5"});
            // ajax запрос
            if(elem_code){
                $.ajax({
                  url: "/ajax/getProductData.php?CODE="+$(this).find("img").attr("data-code")+'&line=true',
                  cache: false,
                  success: function(html){
                    $("body").find(".product-detail").html(html);
                    // Обновляю блок Вопросы/ответы и Отзывы
                    $.ajax({
                      url: "/ajax/getProductReview.php?CODE="+elem_code+'&id='+elem_id+'&line=true',
                      cache: false,
                      success: function(html){
                        $("body").find("#reviews-container").html(html);
                        if(new_url){
                            history.pushState(null, null, new_url);
                        }

                        $(".js-product-slider").slick({dots:!0,infinite:!0,slidesToShow:1,arrows:!1});
                      }
                    });
                  }
                });
            }
        });

        $("body").on("click", ".btn-plus", function(){
            var s = $(this).closest(".product__count").find(".input-count");
            if(s.val()*1 > s.attr("data-max")*1){
                s.val(s.attr("data-max"));
            }
        });

        $("body").on("change", ".basket-quantity", function(){
            var s = $(this).closest(".product__count").find(".input-count");
            if(s.val()*1 > s.attr("data-max")*1){
                s.val(s.attr("data-max"));
                s.change();
            }
        });

    });
</script>
<? } ?>
<a href="/dialogs/buy.php?id=<?= $arResult["IBLOCK_SECTION_ID"] ?>" class="fbox" style="display: none;" id="buy_mess"
   rel="nofollow"></a>
<a href="/dialogs/delay.php" class="fbox" style="display: none;" id="delay_mess" rel="nofollow"></a>
<a href="/dialogs/compare.php" class="fbox" style="display: none;" id="compare_mess" rel="nofollow"></a>
<a href="/dialogs/compare.php?act=del" class="fbox" style="display: none;" id="compare_mess_del" rel="nofollow"></a>
<?
//TO_DO
$arTmpOffers = $arResult["OFFERS"];
$arCurOffer = array_shift($arTmpOffers);
$ProductID = $arCurOffer['ID'];
//TO_DO
?>
<div class="product-detail product-page product-page_tobacco js_prod-img-fly basket-catalog-item ns_detail" 
     id="<?= $arResult['ID']; ?>"
     data-id="<?= $ProductID; ?>" 
     data-name="<?= $arResult['NAME']; ?>"
     data-current="<?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>"
     itemscope itemtype="http://www.schema.org/Product">
    <meta itemprop="image" content="<?= $arResult["OG"]["IMG"]["src"] ?>">
    <meta itemprop="name" content="<?= $arResult["NAME"] ?>">
    <meta itemprop="description" content="<?= $arResult["IPROPERTY_VALUES"]["ELEMENT_META_DESCRIPTION"] ?>">
    <span itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
        <meta itemprop="priceCurrency" content="RUB">
        <span itemprop="price"
              content="<?= $arResult["PROPERTIES"]["MINIMALNAYA_TSENA_PREDLOZHENIYA"]["VALUE"] ?>"></span>
        <?if($_SERVER["REDIRECT_URL"]){?>            
        <meta itemprop="url" content="https://nasha-set.ru<?=$_SERVER["REDIRECT_URL"];?>">
        <?}?>        
    </span>   
    <?if($arResult["BALL"]["COUNT"]){?>
    <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
       <meta itemprop="ratingValue" content="<?=$arResult["BALL"]["BALL"];?>">
       <meta itemprop="reviewCount" content="<?=$arResult["BALL"]["COUNT"];?>">
    </span>
    <?}?>
    <?//$APPLICATION->ShowViewContent("AggregateRating")?>
    <div class="desctop-only raiting">
        <div class="article" data-buffer="<?=$arResult["PROPERTIES"]["CML2_ARTICLE"]["VALUE"];?>">Код товара: <?=substr($arResult["PROPERTIES"]["CML2_ARTICLE"]["VALUE"],0,5)." - ".substr($arResult["PROPERTIES"]["CML2_ARTICLE"]["VALUE"],5,100);?></div>
        <?/*<span class="raiting__text">Оценка покупателей</span>*/?>
        <div class="rating_el_static rating_top_block" id="rating_el" data-eid="<?= $arResult['ID'] ?>" data-id="<?=$arResult['ID'];?>">
            <? for ($i=0; $i < 5; $i++) { 
                            if(round($arResult["BALL"]["BALL3"]) > $i){ ?>
                                <i class="fa selected fa-star"></i>
                            <? }else{ ?>
                                <i class="fa selected fa-star-o"></i>
                            <? }
            } ?>    
            <?if($arResult["BALL"]["COUNT"]){?><span class="stars__count">(<?=$arResult["BALL"]["COUNT"];?>)</span><?}?>
        </div>
    </div>
    <div class="product-page__header <? if ($arResult["FLG_TABAK_SECTION"]): ?>tabaco-header<? endif; ?>">
        <div class="photo-block" data-position="one">
            <?
            $showImg = true;
            /*if ($arResult['PRODUCT_IS_TABAK'] != 'Y' || $arParams["SHOW_TOBACCO"] || $arResult["IBLOCK_SECTION_ID"] == 177 || $arResult["IBLOCK_SECTION_ID"] == 178):
                $showImg = false;*/
            ?>
            <div class="detail-photo">
                <a rel="gallery"
                   href="<?= !empty($arResult["DETAIL_PICTURE"]["SRC"]) ? $arResult["DETAIL_PICTURE"]["SRC"] : $arResult["PREVIEW"]["src"] ?>"
                   class="fancybox first">
                    <img class="js_pic-fly" 
                         src="<?= $arResult["PREVIEW"]["src"]; ?>"
                         alt="<?= $arResult["NAME"] ?> — фото" 
                         title="<?= $strTitle; ?>"
                         data-large="<?= !empty($arResult["DETAIL_PICTURE"]["SRC"]) ? $arResult["DETAIL_PICTURE"]["SRC"] : $arResult["PREVIEW"]["src"] ?>">
                </a>

                <!--noindex-->
                <a rel="galleryFancybox"
                   href="<?= !empty($arResult["DETAIL_PICTURE"]["SRC"]) ? $arResult["DETAIL_PICTURE"]["SRC"] : $arResult["PREVIEW"]["src"] ?>"
                   class="fancybox positionone"
                   data-position="one"></a>
                <? foreach ($arResult["PHOTOS"] as $key => $photo){?>
                <a rel="galleryFancybox" href="<?= $photo["PIC"]["src"] ?>" class="fancybox position<?=$key;?> hidden" data-position="<?=$key;?>"></a>
                <? } ?>
                <!--/noindex-->
                <? /*if (count($arResult["PHOTOS"]) > 0 || !empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])):?>
                    <? foreach ($arResult["PHOTOS"] as $photo):?>
                        <a rel="gallery" class="fancybox" style="display: none;" href="<?= $photo["PIC"]["src"] ?>"><img
                                src="<?= $photo["PREVIEW"]["src"]; ?>"
                                alt="<?= $arResult["NAME"] ?> — фото <?= $i; ?>" title="<?= $strTitle; ?>"></a>
                    <? endforeach;?>
                    <? if (!empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])):?>
                        <a rel="gallery" class="fancybox" style="display: none;" href="#video-frame"><img
                                src="<?= $arResult["PLAY_BUTTON"]["src"] ?>"
                                alt="Видео к товару <?= $arResult["NAME"] ?>" title="Видео к товару"></a>
                    <? endif;?>
                <? endif;*/?>
            </div>
            <div class="size-container"></div> 
            <? if (count($arResult["PHOTOS"]) > 0 || !empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])):?>
                <ul class="detail-list">
                    <li class="active" data-position="one" data-src="<?= !empty($arResult["DETAIL_PICTURE"]["SRC"]) ? $arResult["DETAIL_PICTURE"]["SRC"] : $arResult["PREVIEW"]["src"] ?>"><a
                            rel="<?= !empty($arResult["DETAIL_PICTURE"]["SRC"]) ? $arResult["DETAIL_PICTURE"]["SRC"] : $arResult["PREVIEW"]["src"] ?>"><img
                                rel="<?= $arResult["PREVIEW"]["src"]; ?>"
                                src="<?= !empty($arResult["THUMB"]["src"]) ? $arResult["THUMB"]["src"] : $arResult["PREVIEW"]["src"]; ?>"
                                data-position="one"></a>
                    </li>
                    <? foreach ($arResult["PHOTOS"] as $key => $photo):?>
                        <li data-position="<?=$key;?>" data-src="<?= $photo["PIC"]["src"] ?>"><a rel="<?= $photo["PIC"]["src"] ?>"><img  <?= ($i == 1 ? '' : '') ?>
                                    rel="<?= $photo["PREVIEW"]["src"]; ?>" src="<?= $photo["THUMB"]["src"]; ?>"
                                    alt="<?= $arResult["NAME"] ?>"
                                    ></a></li>
                    <? endforeach;?>
                    <? if (!empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])):?>
                        <li><a rel="#video-frame" onclick="$('#video-frame').fadeIn();"><img rel="<?= $arResult["PLAY_BUTTON"]["src"] ?>"
                                                       src="<?= $arResult["PLAY_BUTTON"]["src"] ?>"
                                                       alt="<?= $arResult["NAME"] ?> видео"></a></li>
                    <? endif;?>
                </ul>
            <? endif;?>
            <?/* else:*/?><!--
                <div class="detail_photo">
                    <img rel="gallery" src="<?/*= $arResult["ZAGLUSHKA"]["src"]; */?>" alt="<?/*= $arResult["NAME"] */?> — фото"
                         title="<?/*= $strTitle; */?>">
                </div>
            --><?/* endif; */?>
        </div>
        <div class="product-page__slider">
            <ul class="js-product-slider">
                <li>
                    <img src="<?=$arResult["PREVIEW"]["src"]; ?>"
                         alt="<?= $arResult["NAME"] ?> — фото" title="<?= $strTitle; ?>"
                         data-position="one">
                </li>
                <? if (count($arResult["PHOTOS"]) > 0): ?>
                    <? foreach ($arResult["PHOTOS"] as $key => $photo): ?>
                        <li>
                            <img src="<?= $photo["PREVIEW"]["src"]; ?>" alt="<?= $arResult["NAME"] ?> — фото <?= $i; ?>"
                                 title="<?= $strTitle; ?>" data-position="<?=$key;?>">
                        </li>
                    <? endforeach; ?>
                <? endif; ?>
                <? if (!empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])): ?>
                    <li>
                        <a href="#video-frame" onclick="$('#video-frame').fadeIn();">
                            <img rel="<?= $arResult["PLAY_BUTTON"]["src"] ?>"
                                 src="<?= $arResult["PLAY_BUTTON"]["src"] ?>">
                        </a>
                    </li>
                <? endif ?>
            </ul>
        </div>
        <div class="product-block__info product-block__info_tobacco">
            <ul class="tabs_list">
                <li class="tabs_item"><a class="modal-link cur" id="characteristics_list">Характеристики</a></li>
                <li class="tabs_item_scroll"><a class="modal-link" href="#reviews-block">Отзывы (<span
                            id="reviews_count"><?= count($arResult["REVIEWS"]) ?></span>)</a></li>
                <li class="tabs_item_scroll"><a class="modal-link" href="#questions-block">Вопросы (<span
                            id="questions_count"><?=$arResult["QUESTIONS_COUNT"];?></span>)</a></li>
            </ul>
            <div class="tabs_container">
                <?if($arResult["AJAX_PHOTOS"]){?>
                <?if($arResult["PROPERTIES"][$arResult["AROMAT"]]["VALUE"]){?>
                    <div class="ajax_property_aromat"><b><?=$arResult["PROPERTIES"][$arResult["AROMAT"]]["NAME"];?>:</b> <span data-default="<?=$arResult["PROPERTIES"][$arResult["AROMAT"]]["VALUE"];?>" class="flav"><?=$arResult["PROPERTIES"][$arResult["AROMAT"]]["VALUE"];?></span></div>
                <?}?>
                <div class="ajax_photos">
                    <ul>
                    <? foreach ($arResult["AJAX_PHOTOS"] as $key => $photo) { ?>
                        <li data-position="<?=$key;?>" data-src="<?= $photo["PIC"]["src"] ?>"<?if($photo["ACTIVE"]){?> class="active"<?}?>><a rel="<?= $photo["PIC"]["src"] ?>"><img  <?= ($i == 1 ? '' : '') ?>
                                    rel="<?= $photo["PREVIEW"]["src"]; ?>" src="<?= $photo["THUMB"]["src"]; ?>"
                                    alt="<?= $photo["NAME"] ?>"
                                    data-id="<?=$photo["ID"];?>"
                                    data-code="<?=$photo["CODE"];?>"
                                    data-name="<?=$photo["NAME"];?>"
                                    data-url="https://nasha-set.ru<?=$photo["DETAIL_PAGE_URL"];?>"
                                    data-flav="<?=$photo["PROPERTY_".$arResult["AROMAT"]."_VALUE"];?>"
                                    ></a></li>


                    <? } ?>
                    </ul>
                </div>
                <?}?>
                <div class="tab product-page__characteristic product-page__characteristic--full"
                     id="characteristics_items" style="display: block;">
                    <? $propAmount = 0; ?>
                    <ul class="characteristics_list">
                        <? foreach ($arResult['PROPERTIES'] as $code => $arOneProp): ?>
                            <? if (/*strpos($code, 'ROP_') == 1 && $arOneProp["VALUE"] != '' 
                                   or */$code == 'TIP_VKUSA_KALYANANDGIDKOST' && $arOneProp["VALUE"] != ''
                                   or strripos($code, 'NS_') !== false && $arOneProp["VALUE"] or                             
                            	   in_array($code, array("PROP_MANUFACURER","PROP_COUNTRY")) && $arOneProp["VALUE"]): 

                                // if(strripos($code, 'NS_') !== false)
                                //     {
                                //         echo"<li>".$code." = ".$arOneProp["VALUE"]."</li>";
                                //     }

                                   
                            	// if($_REQUEST["prop"]){
                            	// 		echo"<li><PRE>".print_r($code)."</PRE></li>";
                            	// }

                                   ?>
                                <? $propAmount++; ?>
                                <? if ($code == 'PROP_LINK'): ?>
                                    <li class="characteristics_item">
                                    <span class="characteristics__col characteristics__col--left"><b>
                                            <?= $arOneProp['NAME'] ?>:</b>
                                    </span>
                                            <span class="characteristics__col characteristics__col--right">
                                        <a class="link_to_manufacturer"
                                           href="http://<?= str_replace('http://', '', $arOneProp["VALUE"]) ?>"
                                           rel="http://<?= str_replace('http://', '', $arOneProp["VALUE"]) ?>"
                                           target="_blank">
                                            <?= $arOneProp["VALUE"]; ?>
                                        </a>
                                    </span>
                                    </li>

                                    <script>
                                        $('a.link_to_manufacturer').click(function () {
                                            window.open($(this).attr("rel"));
                                            return false;
                                        });
                                    </script>
                                <? elseif (strpos($code, 'STRONGNESS') > 1): ?>
                                    <li class="characteristics_item">
                                    <span class="characteristics__col characteristics__col--left">
                                        <b><?= $arOneProp['NAME'] ?>:</b>
                                    </span>
                                            <span class="characteristics__col characteristics__col--right">
                                        <? for ($i = 0; $i < $arOneProp["VALUE"]; $i++): ?>
                                            <img src="/img/star.png" alt="<?= $arOneProp["VALUE"] ?>/5"
                                                 title="<?= $arOneProp["VALUE"] ?>/5"/>
                                        <? endfor; ?>
                                                <? for ($i = 0; $i < 5 - $arOneProp["VALUE"]; $i++): ?>
                                                    <img src="/img/star2.png" alt="<?= $arOneProp["VALUE"] ?>/5"
                                                         title="<?= $arOneProp["VALUE"] ?>/5"/>
                                                <? endfor; ?>
                                    </span>
                                    </li>
                                <? else: ?>
                                    <li class="characteristics_item">
                                        <span
                                            class="characteristics__col characteristics__col--left"><b><?= $arOneProp['NAME'] ?>
                                                :</b></span>
                                        <span
                                            class="characteristics__col characteristics__col--right"><?= is_array($arOneProp['VALUE']) ? implode(' / ', $arOneProp['VALUE']) : $arOneProp['VALUE'] ?></span>
                                    </li>
                                <? endif; ?>
                            <? endif; ?>
                        <? endforeach; ?>
                        <? if (!empty($arResult["PROPERTIES"]["DESCR"]["~VALUE"])):
                            $propAmount++;?>
                            <li class="characteristics_item">
                                <b><?= $arResult["PROPERTIES"]["DESCR"]['NAME'] ?>:</b>
                                <?= trim($arResult["PROPERTIES"]["DESCR"]["~VALUE"]["TEXT"]); ?>
                            </li>                                                 

                        <? endif ?>

                        //правка2
                        <? if (!empty($arResult["PROPERTIES"]["DESCR"]["~VALUE"])):
                            $propAmount++;?>
                            <li class="characteristics_item">
                                <b><?= $arResult["PROPERTIES"]["DESCR"]['NAME'] ?>:</b>
                                <?= trim($arResult["PROPERTIES"]["DESCR"]["~VALUE"]["TEXT"]); ?>
                            </li>                                                 

                        <? endif ?>

                        <li class="characteristics_item no-border">
                            <small class="small-info">Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях</small>
                        </li>
                    </ul>
                    <? if ($propAmount === 0): ?>
                        Пока нет доступных характеристик, возможно они появятся позднее.
                    <? endif; ?>
                </div>


                //правка1

<? echo $arResult['DISPLAY_PROPERTIES']['ATTRIBUTE']['DISPLAY_VALUE'];?>

//Чтобы вывести и название и значение свойства есть вариант
<? if ($arResult["DISPLAY_PROPERTIES"]['СВОЙСТВО']){?> //если не пустое
<?=$arResult['DISPLAY_PROPERTIES']['СВОЙСТВО']['NAME']?>  //вывести название
<?echo $arResult['DISPLAY_PROPERTIES']['СВОЙСТВО']['DISPLAY_VALUE'];?>  //и значение
<?}?> 

//Чтобы вывести ссылку:
<? if ( $arItem["PROPERTIES"]["СВОЙСТВО"]["VALUE"] > 0 ) : ?>
<? echo '<a href="'.CFile::GetPath($arItem["PROPERTIES"]["СВОЙСТВО"]["VALUE"]).'">Скачать книгу</a> '; ?>
<? endif; ?> 

//Вывести список связанных элементов со свойством привязка к элементам в виде списка
<?foreach($arResult["PROPERTIES"]["СВОЙСТВО"]["VALUE"] as $analog):?>
<?$res = CIBlockElement::GetByID($analog);?> 
<?if($ar_res = $res->GetNext())?> 
<li><b><a href='<?=$ar_res["DETAIL_PAGE_URL"];?>'><?=$ar_res["NAME"];?></a></b></li>
<?endforeach;?>

//Вывести и отресайзить детальную картинку товара знаная ID товара (или элемента)
<?
$res = CIBlockElement::GetByID($arItem["ITEM_ID"]); 
if($ar_res = $res->GetNext()){ 
$img = CFile::ShowImage($ar_res["DETAIL_PICTURE"], 50, 50, "border=0", "", true);} 
?> 
<div class="bx_image" style="background-image: url('<?=$img?>')"></div>





                <?/*
                <div class="tab review__block" style="display: none;" id="review_block">
                    <div class="review-bl" tabindex="-1">
                        <div class="review__items">
                            <? if ($arResult["REVIEWS"]): ?>
                                <? $countRev = count($arResult["REVIEWS"]); ?>
                                <span itemprop="aggregateRating" itemscope=""
                                      itemtype="http://schema.org/AggregateRating">
                                            <meta itemprop="ratingValue"
                                                  content="<?= ($arResult["PROPERTIES"]["rating"]["VALUE"] ? "5" : "5") ?>">
                                            <meta itemprop="reviewCount" content="<?= $countRev ?>">
                                        </span>
                                <? foreach ($arResult["REVIEWS"] as $arReview): ?>
                                    <div class="review__item" itemprop="review" itemscope=""
                                         itemtype="https://schema.org/Review">
                                        <span class="review__person"><span
                                                itemprop="author"><?= preg_replace('/\\s*\\([^()]*\\)\\s*//*', '', $arReview["~CREATED_USER_NAME"]); ?></span>, <meta
                                                itemprop="datePublished"
                                                content="<?= date("Y-m-d", strtotime($arReview["ACTIVE_FROM"])); ?>"><?= date("d.m.Y", strtotime($arReview["ACTIVE_FROM"])); ?></span></span>
                                        <div class="review__text">
                                            <? if ($arReview["PROPERTY_EXPIRIENCE_VALUE"]): ?>
                                                <div>
                                                    <div class="review__text-title"><b>Опыт использования:</b></div>
                                                    <span><?= $arReview["~PROPERTY_EXPIRIENCE_VALUE"] ?></span>
                                                </div>
                                            <? endif; ?>
                                            <? if ($arReview["PROPERTY_ADVANTAGES_VALUE"]): ?>
                                                <div>
                                                    <div class="review__text-title"><b>Достоинства:</b></div>
                                                    <span <?= (!$arReview["PROPERTY_GENERAL_VALUE"] ? ' itemprop="description"' : '') ?>><?= $arReview["~PROPERTY_ADVANTAGES_VALUE"] ?></span>
                                                </div>
                                            <? endif; ?>
                                            <? if ($arReview["PROPERTY_DISADVANTAGES_VALUE"]): ?>
                                                <div>
                                                    <div class="review__text-title"><b>Недостатки:</b></div>
                                                    <span><?= $arReview["~PROPERTY_DISADVANTAGES_VALUE"] ?></span>
                                                </div>
                                            <? endif; ?>
                                            <? if ($arReview["PROPERTY_GENERAL_VALUE"]): ?>
                                                <div>
                                                    <div class="review__text-title"><b>Общее впечатление:</b></div>
                                                    <span
                                                        itemprop="description"><?= $arReview["~PROPERTY_GENERAL_VALUE"] ?></span>
                                                </div>
                                            <? endif; ?>
                                        </div>
                                    </div>
                                <? endforeach; ?>
                            <? else: ?>
                                <p>Никто пока не оставлял отзыв о данном товаре. Вы можете быть первым!</p>
                                <? if ($USER->IsAuthorized()){ ?>
                                    <div class="tabs_element__btn">
                                        <a href="javascript:void(0);" rel="nofollow" class="btn btn--fill-red-border-b" id="add-review">Написать отзыв</a>
                                    </div>
                                <? } ?>
                            <? endif; ?>
                        </div>
                    </div>
                </div>
                */?>
            </div>
        </div>

        <? if (count($arResult["OFFERS"]) > 1 && !$arResult["FLG_TABAK_SECTION"]): ?>
            <div class="mobile-only" style="margin-bottom: 5px;">
                <select class="offSel">
                    <? foreach ($arResult["OFFERS"] as $offer1): ?>
                        <? $show = false; ?>
                        <? foreach ($offer1["PROPERTIES"] as $code => $prop): ?>
                            <? if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0): ?>
                                <? $show = true; ?>
                            <? endif; ?>
                        <? endforeach; ?>
                        <? if ($offer1["CATALOG_PRICE_1"] != '' && $show): ?>
                            <?
                            if ($arResult["NAV_CHAIN"][1]["ID"] == 162) {
                                $offer1["NAME"] = str_replace('(', '(МРЦ ', $offer1["NAME"]);
                            }
                            ?>
                            <option value="<?= $offer1["ID"] ?>"><?= $offer1["NAME"]; ?></option>
                        <? endif; ?>
                    <? endforeach; ?>
                </select>
            </div>
        <? endif; ?>

        <? if ($arResult["FLG_TABAK_SECTION"]): ?>
            <div class="product-page-price">
                <? $i = 0;

                foreach ($arResult["OFFERS"] as $offer):

                    $show = false;
                    foreach ($offer["PROPERTIES"] as $code => $prop):
                        if (strpos($code, 'SKLAD') !== false && $prop["VALUE"] > 0):
                            $show = true;
                        endif;
                    endforeach;

                    ?>
                    <div class="product-page__price"
                         id="off<?= $offer["ID"] ?>"<?if ($i > 0):?> style="display: none;"<?endif;?>>
                        <div class="mobile-only">
                            <div class="_h1 heading heading--title"><?= $arResult['~NAME']; ?></div>
                            <div class="raiting stars"></div>
                            <?if($arResult["ACTIVE"] != "N"){?>
                            <div class="product__availability">
                                <span class="availability__status availability__status--in">
                                    <?if ($offer["CAN_BUY"] && $arResult["ACTIVE"] != "N"):?>
                                    В наличии <span>(<?= (intval($offer["AMOUNT"]) > 20 ? ">20" : $offer["AMOUNT"]) ?>
                                        шт*)
                                        <? else:?>
                                            Нет в наличии
                                        <?
                                        endif;
                                        ?>
                                </span>
                                <div>
                                    <?if($show === true):?>
                                        <a href="javascript:void(0);" rel="nofollow" class="modal-link js-back-in-stock"
                                           data-modal-id="back-in-stock_modal-all">Сейчас
                                            в <?= $offer['AVAIL_SHOP_AMOUNT'] ?> магазинах</a>
                                    <?endif?>
                                </div>
                            </div>
                            <?}?>
                        </div>
                        <div class="product-page__price-info">
                            <?if ($arResult["FLG_TABAK_SECTION"]):?>
                                <?

                                $name = $offer['MIN_PRICE']['VALUE'];

                                if (!empty($offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION'])) {
                                    $key = array_search('МРЦ', $offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION']);
                                    if ($key !== false)
                                        $name = $offer['PROPERTIES']['CML2_ATTRIBUTES']['VALUE'][$key];
                                }

                                ?>

                                <div class="product-page__price-topc">

                                    <div class="product__price-block product__meta-price">
                                        <?if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']):?>
                                         <?if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] && $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] > $offer['MIN_PRICE']['VALUE']):?>
                                                <?
                                                $oldPrice = floatval($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']);
                                                $salePrice = floatval($offer['MIN_PRICE']['VALUE']);
                                                $discount = intval((($oldPrice - $salePrice) / $oldPrice) * 100);
                                                ?>
                                                <div class="product__meta-col">
                                                    <div class="product__meta-sale">-<?= $discount ?>%</div>
                                                </div>
                                            <?endif?>
                                            <div
                                                class="product__meta-price-old"><?= $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] ?>
                                                <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                            </div>
                                        <?endif?>
                                        <?if($_REQUEST["test"]){?>
                                            <div class="product__meta-col">
                                                <div class="product__meta-sale">-40 %</div>
                                            </div>
                                        <?}?>
                                        <?if($arResult["PROPERTIES"]["HIT"]["VALUE"]){?>
                                            <div class="product__meta-col hit">
                                                <span class="product_hit"></span>
                                            </div>
                                        <?}?>
                                        <div class=" product__meta-price-descr"
                                             data-tooltip="МРЦ — это максимальная розничная цена">МРЦ <?= $name ?> <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                        </div>
                                        <img class="ajax_loader" src="/images/ajax-loader.gif" alt="icon-loaders">

                                        <div
                                            class="product__price-count-value product__meta-price-new"><?= $offer['MIN_PRICE']['VALUE'] ?>
                                            <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                        </div>
                                        <?if($_REQUEST["test"]){?>
                                            <div class="product__meta-price-old">5 000 ₽</div>
                                        <?}?>
                                    </div>

                                    <?if ($offer['PROPERTIES']['CML2_DISCONTINUED']['VALUE']):?>
                                        <div class="product__meta-col">
                                            <div class="product__meta-warning">
                                                <div class="product__meta-warning-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" id="svg11" version="1.1"
                                                         viewBox="0 0 21.292454 21.292454" height="21.292454"
                                                         width="21.292454">
                                                        <g transform="translate(-0.85410197,-0.70754676)">
                                                            <g transform="translate(-73,-327)">
                                                                <g transform="translate(73,327)">
                                                                    <path
                                                                        d="M 14.183282,2.3665632 21.82918,17.658359 c 0.740967,1.481936 0.140294,3.283955 -1.341641,4.024923 C 20.070972,21.891565 19.611633,22 19.145898,22 H 3.854102 c -1.6568543,0 -3.00000003,-1.343146 -3.00000003,-3 0,-0.465735 0.10843527,-0.925075 0.31671843,-1.341641 L 8.8167184,2.3665632 C 9.5576862,0.88462765 11.359705,0.28395461 12.841641,1.0249224 c 0.580582,0.2902911 1.05135,0.7610585 1.341641,1.3416408 z M 11.006211,14.935211 h 1.043478 L 12.776398,9.6070422 V 6 H 10.242236 V 9.6070422 Z M 11.509317,19 c 0.521742,0 0.90062,-0.122065 1.136646,-0.366197 C 12.881989,18.38967 13,18.078406 13,17.7 V 17.333803 C 13,16.955397 12.881989,16.644133 12.645963,16.4 c -0.236026,-0.244133 -0.614904,-0.366197 -1.136646,-0.366197 -0.534164,0 -0.919254,0.122064 -1.15528,0.366197 C 10.118011,16.644133 10,16.955397 10,17.333803 V 17.7 c 0,0.378406 0.118011,0.68967 0.354037,0.933803 C 10.590063,18.877935 10.975153,19 11.509317,19 Z"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="product__meta-warning-text">Товар снят с производства
                                                </div>
                                            </div>
                                        </div>
                                    <?endif?>

                                </div>

                            <?endif;?>
                            <?if ($offer["CAN_BUY"] == 1 && $arResult["HIDE_PRICE"] != 'Y'  && $arResult["ACTIVE"] != "N"):?>
                                <form class="buy_block">
                                    <a class="product__buy btn btn--fill-red-border-b fbox 1"
                                       href="/dialogs/make_order.php">
                                        <span class="btn__text in_basket">Подробнее</span>
                                    </a>
                                </form>
                                <!--noindex-->
                                <form class="buy_block fixed">
                                    <a class="product__buy btn btn--fill-red-border-b fbox 1"
                                       href="/dialogs/make_order.php">
                                        <span class="btn__text in_basket">Подробнее</span>
                                    </a>
                                </form>
                                <!--/noindex-->
                            <? else: ?>

                                <div class="buy_block">
                                    <div class="product__buy btn btn--fill-rasp">
                                        <span class="btn__text">Распродано</span>
                                    </div>                                
                                </div>
                            <? endif; ?>
                            <div class="add-block">

                                <a class="add-link-icon compare_href " id="comparing-<?= $offer['ID'] ?>"
                                   onclick="javascript:add2compare('<?= $arResult["ID"] ?>', 'add');">
                                    <span class="add-link-icon__text">К сравнению</span>
                                    <svg class='add-link-icon__icon' width="12px" height="14px" viewBox="0 0 12 14"
                                         version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g fill-rule="evenodd">
                                            <g transform="translate(-700.000000, -888.000000)" fill-rule="nonzero">
                                                <g transform="translate(60.000000, 788.000000)">
                                                    <g transform="translate(630.000000, 92.000000)">
                                                        <path
                                                            d="M16,12 L17,12 C17.5522847,12 18,12.4477153 18,13 L18,16 L20,16 L20,10 L16,10 L16,12 Z M14,12 L14,9 C14,8.44771525 14.4477153,8 15,8 L21,8 C21.5522847,8 22,8.44771525 22,9 L22,17 C22,17.5522847 21.5522847,18 21,18 L18,18 L18,21 C18,21.5522847 17.5522847,22 17,22 L11,22 C10.4477153,22 10,21.5522847 10,21 L10,13 C10,12.4477153 10.4477153,12 11,12 L14,12 Z M12,14 L12,20 L16,20 L16,14 L12,14 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>

                                <div>
                                    <a class="add-link-icon delay_href " id="add-favorite-<?= $offer['ID'] ?>"
                                       data-item-id="<?= $offer['ID'] ?>"
                                       onclick="javascript:add2basket('<?= $offer["ID"] ?>', 'delay');">
                                        <span class="add-link-icon__text">В закладки</span>
                                        <svg class='add-link-icon__icon' xmlns="http://www.w3.org/2000/svg"
                                             id="svg12" version="1.1" viewBox="0 0 9 13.142734" height="13.142734"
                                             width="9">
                                            <g>
                                                <g transform="translate(-701,-849)">
                                                    <g transform="translate(60,788)">
                                                        <g transform="translate(630,52)">
                                                            <path
                                                                d="m 13,11 v 7.285391 l 0.154722,-0.19397 c 0.139933,-0.175428 0.299108,-0.334603 0.474537,-0.474536 1.295261,-1.033182 3.182837,-0.820725 4.216019,0.474536 L 18,18.285391 V 11 Z M 12,9 h 7 c 0.552285,0 1,0.4477153 1,1 v 11.142696 c 0,0.552284 -0.447715,1 -1,1 -0.304284,0 -0.592014,-0.138543 -0.781759,-0.37642 l -1.936482,-2.427694 c -0.344394,-0.431753 -0.973586,-0.502572 -1.405339,-0.158178 -0.05848,0.04664 -0.111535,0.0997 -0.158179,0.158178 l -1.936482,2.427694 C 12.437365,22.19803 11.808173,22.268849 11.37642,21.924455 11.138543,21.734709 11,21.446979 11,21.142696 V 10 c 0,-0.5522847 0.447715,-1 1,-1 z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <?=$ALKOGOL_HTML;?>
                        <?if($arResult["ACTIVE"] != "N" && $offer["CAN_BUY"] == 1 && $arResult["HIDE_PRICE"] != 'Y'  && $arResult["ACTIVE"] != "N"){?>
                        <div class="desctop-only product__availability">
                            <span class="availability__status availability__status--in">

                                <?if ($offer["CAN_BUY"] && $arResult["ACTIVE"] != "N"):?>
                                    В наличии <span>(<?= (intval($offer["AMOUNT"]) > 20 ? ">20" : $offer["AMOUNT"]) ?>
                                        шт*)</span>
                                <?
                                else:?>
                                    Нет в наличии
                                <?endif;?>
                            </span>
                            <?if($show === true):?>
                                <a href="javascript:void(0);" rel="nofollow" class="modal-link js-back-in-stock" id="back-in-stock-<?= $offer['ID'] ?>"
                                   data-modal-id="back-in-stock_modal-all">Сейчас в <?= $offer['AVAIL_SHOP_AMOUNT'] ?>
                                    магазинах</a>
                            <?endif;?>
                        </div>
                        <?}?>
                    </div>
                    <?$i++;
                endforeach;
                ?>
                <?=$socialServices;?>
                <div class="tabs_element" data-id="characteristics_list ">
                    <div class="tabs_element__text">
                        <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                        Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>

                        <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                            <? if ($discountinued === true): ?>
                                <p>Самовывоз только по фактическому наличию в магазине.</p>
                            <? else: ?>
                                <span class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                            <? endif; ?>
                        <? endif ?>

                    </div>
                </div>
                <div class="tabs_element" data-id="review_list" style="display: none;">
                    <div class="tabs_element__text">
                        <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                        Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>

                        <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                            <? if ($discountinued === true): ?>
                                <p>Самовывоз только по фактическому наличию в магазине.</p>
                            <? else: ?>
                                <span class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                            <? endif; ?>
                        <? endif ?>

                    </div>
                </div>
                <? if (!$show && 0 && $arResult["ACTIVE"] != "N"): ?>
                    <div class="product-page__price">
                        <div class="mobile-only">
                            <div class="_h1 heading heading--title"><?= $arResult['NAME']; ?></div>
                            <div class="raiting stars">
                            </div>
                            <div class="product__availability">
                                <span class="availability__status availability__status--in">
                                    <? if ($arResult["CAN_BUY"] && $arResult["ACTIVE"] != "N"): ?>
                                        В наличии
                                        <span>(<?= (intval($arResult["AMOUNT"]) > 20 ? ">20" : $arResult["AMOUNT"]) ?>
                                            шт*)</span>
                                    <? else: ?>
                                        Нет в наличии
                                    <? endif; ?>
                                </span>

                                <div><a href="javascript:void(0);" rel="nofollow" class="modal-link js-back-in-stock"
                                        data-modal-id="back-in-stock_modal-all">Сейчас
                                        в <?= $arResult['AVAIL_SHOP_AMOUNT'] ?> мазгазинах</a></div>
                            </div>
                        </div>
                        <div class="product-page__price-info">
                            <div class="add-block">
                                <input class="add-comparing" type="checkbox" id="comparing"
                                       onchange="javascript:add2compare('<?= $arResult["ID"] ?>', 'add');">
                                <label class="add-comparing__label" for="comparing">К сравнению</label>

                                <div class="product__favorite" data-item-id="<?= $arResult['ID'] ?>"
                                     onclick="javascript:add2basket('<?= $arResult["ID"] ?>', 'delay');">
                                    <img class="item__heart" src="/img/png/heart.png" alt="heat-ico">
                                    <a class="add-favorite modal-link" id="add-favorite-<?= $arResult['ID'] ?>">В
                                        закладки</a>
                                </div>
                            </div>
                        </div>
                        <?=$ALKOGOL_HTML;?>
                        <? if($arResult["ACTIVE"] != "N"){ ?>
                        <div class="desctop-only product__availability">
                        <span class="availability__status availability__status--in">
                             В наличии <span>(<?= (intval($arResult["AMOUNT"]) > 20 ? ">20" : $arResult["AMOUNT"]) ?>
                                шт*)</span>
                        </span>
                            <a href="#" class="modal-link js-back-in-stock" id="back-in-stock-<?= $arResult['ID'] ?>"
                               data-modal-id="back-in-stock_modal-all">Сейчас в <?= $arResult['AVAIL_SHOP_AMOUNT'] ?>
                                магазинах</a>
                        </div>
                        <? } ?>
                        <?=$socialServices;?>
                        <? if ($i > 0 || 1): ?>
                            <div class="tabs_element" data-id="characteristics_list">
                                <div class="tabs_element__text">
                                    <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                                    Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>
                                    <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                                        <? if ($discountinued === true): ?>
                                            <p>Самовывоз только по фактическому наличию в магазине.</p>
                                        <? else: ?>
                                            <span
                                                class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                                        <? endif; ?>
                                    <? endif ?>
                                </div>
                            </div>
                            <div class="tabs_element" data-id="review_list" style="display: none;">
                                <div class="tabs_element__text">
                                    <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                                    Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>
                                    <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                                        <? if ($discountinued === true): ?>
                                            <p>Самовывоз только по фактическому наличию в магазине.</p>
                                        <? else: ?>
                                            <span
                                                class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                                        <? endif; ?>
                                    <? endif ?>
                                </div>
                            </div>
                        <? endif ?>
                    </div>
                <? endif; ?>
            </div>
        <? elseif (count($arResult["OFFERS"]) > 0): ?>
            <? $i = 0; ?>
            <div class="product-page-price-simple">
                <? if (count($arResult["OFFERS"]) > 1 && !$arResult["FLG_TABAK_SECTION"]): ?>
                    <div class="desctop-only offers-select">
                        <select class="offSel" style="width: 26.042%;">
                            <? foreach ($arResult["OFFERS"] as $offer1): ?>
                                <? $show = false; ?>
                                <? foreach ($offer1["PROPERTIES"] as $code => $prop): ?>
                                    <? if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0): ?>
                                        <? $show = true; ?>
                                    <? endif; ?>
                                <? endforeach; ?>
                                <? if ($offer1["CATALOG_PRICE_1"] != '' && $show): ?>
                                    <?
                                    if ($arResult["NAV_CHAIN"][1]["ID"] == 162) {
                                        $offer1["NAME"] = str_replace('(', '(МРЦ ', $offer1["NAME"]);
                                    }
                                    ?>
                                    <option value="<?= $offer1["ID"] ?>"><?= $offer1["NAME"]; ?></option>
                                <? endif; ?>
                            <? endforeach; ?>
                        </select>
                    </div>
                <? endif; ?>
                <? foreach ($arResult["OFFERS"] as $offer): ?>
                    <? if ($offer['PROPERTIES']['CML2_DISCONTINUED']['VALUE']): ?>
                        <? $discountinued = true; ?>
                    <? endif ?>
                    <? $show = false; ?>
                    <? foreach ($offer["PROPERTIES"] as $code => $prop): ?>
                        <? if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0): ?>
                            <? $show = true; ?>
                        <? endif; ?>
                    <? endforeach; ?>
                        <div class="product-page__price"
                             id="off<?= $offer["ID"] ?>"<? if ($i > 0): ?> style="display: none;"<? endif; ?>>
                            <? if($arResult["ACTIVE"] != "N"){ ?>
                            <div class="mobile-only">
                                <div class="_h1 heading heading--title"><?= $arResult['~NAME']; ?></div>
                                <div class="raiting stars">
                                </div>
                                <div class="product__availability">
                                <span class="availability__status availability__status--in">
                                    <? if ($offer["CAN_BUY"]): ?>
                                        В наличии
                                        <span>(<?= (intval($arResult["AMOUNT"]) > 20 ? ">20" : $arResult["AMOUNT"]) ?>
                                            шт*)</span>
                                    <? else: ?>
                                        Нет в наличии
                                    <? endif; ?>
                                </span>

                                    <div><a href="javascript:void(0);" rel="nofollow" class="modal-link js-back-in-stock"
                                            data-modal-id="back-in-stock_modal-<?= $offer['ID'] ?>">Сейчас
                                            в <?= $offer['AVAIL_SHOP_AMOUNT'] ?> магазинах</a></div>
                                </div>
                            </div>
                            <? } ?>
                            <div class="product-page__price-info">

                                <div class="product-page__price-topc">

                                    <? if ($offer['MIN_PRICE']['VALUE'] != '' && $arResult["HIDE_PRICE"] != 'Y'): ?>

                                        <div class="product__price-block product__meta-price">
                                            <? if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']): ?>
                                                <? if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] && $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] > $offer['MIN_PRICE']['VALUE']): ?>
                                                    <?
                                                    $oldPrice = floatval($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']);
                                                    $salePrice = floatval($offer['MIN_PRICE']['VALUE']);
                                                    $discount = intval((($oldPrice - $salePrice) / $oldPrice) * 100);
                                                    ?>
                                                    <div class="product__meta-col">
                                                        <div class="product__meta-sale">-<?= $discount ?>%</div>
                                                    </div>
                                                <? endif ?>
                                                <div
                                                    class="product__meta-price-old"><?= $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] ?>
                                                    <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                                </div>
                                            <? endif ?>                                        
                                            <?if($_REQUEST["test"]){?>
                                                <div class="product__meta-col">
                                                    <div class="product__meta-sale">-40 %</div>
                                                </div>
                                            <?}?>
                                            <?if($arResult["PROPERTIES"]["HIT"]["VALUE"]){?>
                                                <div class="product__meta-col">
                                                    <span class="product_hit"></span>
                                                </div>
                                            <?}?>
                                            <img class="ajax_loader" src="/images/ajax-loader.gif" alt="icon-loaders">

                                            <div
                                                class="product__price-count-value product__meta-price-new"><?= $offer['MIN_PRICE']['VALUE'] ?>
                                                <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                            </div>
                                            <?if($_REQUEST["test"]){?>
                                                <div class="product__meta-price-old">5 000 ₽</div>
                                            <?}?>
                                        </div>

                                        <? if ($offer['PROPERTIES']['CML2_DISCONTINUED']['VALUE']): ?>
                                            <div class="product__meta-col">
                                                <div class="product__meta-warning">
                                                    <div class="product__meta-warning-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="svg11" version="1.1"
                                                             viewBox="0 0 21.292454 21.292454" height="21.292454"
                                                             width="21.292454">
                                                            <g transform="translate(-0.85410197,-0.70754676)">
                                                                <g transform="translate(-73,-327)">
                                                                    <g transform="translate(73,327)">
                                                                        <path
                                                                            d="M 14.183282,2.3665632 21.82918,17.658359 c 0.740967,1.481936 0.140294,3.283955 -1.341641,4.024923 C 20.070972,21.891565 19.611633,22 19.145898,22 H 3.854102 c -1.6568543,0 -3.00000003,-1.343146 -3.00000003,-3 0,-0.465735 0.10843527,-0.925075 0.31671843,-1.341641 L 8.8167184,2.3665632 C 9.5576862,0.88462765 11.359705,0.28395461 12.841641,1.0249224 c 0.580582,0.2902911 1.05135,0.7610585 1.341641,1.3416408 z M 11.006211,14.935211 h 1.043478 L 12.776398,9.6070422 V 6 H 10.242236 V 9.6070422 Z M 11.509317,19 c 0.521742,0 0.90062,-0.122065 1.136646,-0.366197 C 12.881989,18.38967 13,18.078406 13,17.7 V 17.333803 C 13,16.955397 12.881989,16.644133 12.645963,16.4 c -0.236026,-0.244133 -0.614904,-0.366197 -1.136646,-0.366197 -0.534164,0 -0.919254,0.122064 -1.15528,0.366197 C 10.118011,16.644133 10,16.955397 10,17.333803 V 17.7 c 0,0.378406 0.118011,0.68967 0.354037,0.933803 C 10.590063,18.877935 10.975153,19 11.509317,19 Z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div class="product__meta-warning-text">Товар снят с производства
                                                    </div>
                                                </div>
                                            </div>
                                        <? endif ?>

                                    <? endif; ?>

                                </div>

                                <?//if($_REQUEST["fz"]){echo"<PRE>"; print_r($arResult); echo"</PRE>";}?>

                                <? if ($show && $offer["CAN_BUY"] == 1 && $arResult["HIDE_PRICE"] != 'Y' && $arResult["ACTIVE"] != "N" or $arResult["PROPERTIES"]["FZADULT"]["VALUE"] == "Y"): ?>
                                    <? if ($arResult['PRODUCT_IS_TABAK'] == 'Y' || $arResult["PRODUCT_IS_FZADULT"] == 'Y' && !$USER->IsAuthorized() or $arResult["PROPERTIES"]["FZADULT"]["VALUE"] == "Y"): ?>
                                        <form class="buy_block">
                                            <a class="product__buy btn btn--fill-red-border-b fbox 1"
                                               href="/dialogs/make_order.php">
                                                <span class="btn__text in_basket">Подробнее</span>
                                            </a>
                                        </form>
                                        <!--noindex-->
                                        <form class="buy_block fixed">
                                            <a class="product__buy btn btn--fill-red-border-b fbox 1"
                                               href="/dialogs/make_order.php">
                                                <span class="btn__text in_basket">Подробнее</span>
                                            </a>
                                        </form>
                                        <!--/noindex-->
                                    <? elseif ($arResult['SECTION']['PATH'][0]['ID'] == 256): // ?>
                                        <form class="buy_block">
                                            <a class="product__buy btn btn--fill-red-border-b fbox 2"
                                               href="/dialogs/make_order_alco.php">
                                                <span class="btn__text in_basket">Подробнее</span>
                                            </a>
                                        </form>
                                        <!--noindex-->
                                        <form class="buy_block fixed">
                                            <a class="product__buy btn btn--fill-red-border-b fbox 2"
                                               href="/dialogs/make_order_alco.php">
                                                <span class="btn__text in_basket">Подробнее</span>
                                            </a>
                                        </form>
                                        <!--/noindex-->
                                    <? elseif ($arResult['SECTION']['PATH'][0]['ID'] != 256 && $arResult['PRODUCT_IS_TABAK'] != 'Y' && $arResult["PROPERTIES"]["FZADULT"]["VALUE"] != "Y"): ?>
                                        <form class="buy_block">

                                            <div class="product__count">
                                                <div class="product__quantity basket-quantity-area">
                                                    <button class="btn-quantity btn-minus value-control"
                                                            data-action="minus" data-target="quant<?= $offer["ID"] ?>">
                                                        <img src="/img/png/ico-minus.png" alt="ico-minus">
                                                    </button>
                                                    <div class="btn-quantity btn-count">
                                                        <input class="input-count basket-quantity"
                                                               onchange="priceCalculation(<?= $offer["ID"] ?>)"
                                                               value="1" type="text" id="quant<?= $offer["ID"] ?>"
                                                               pattern="\d*" maxlength="4"
                                                               data-max="<?=$offer["AMOUNT"];?>">
                                                    </div>
                                                    <button class="btn-quantity btn-plus value-control"
                                                            data-action="plus" data-target="quant<?= $offer["ID"] ?>">
                                                        <img src="/img/png/ico-plus.png" alt="ico-plus">
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="butn-wrapper basket-added-area-button">

                                                <a href="/personal/cart/">
                                                    <div class="product__buy btn btn--fill-grey-border-b butn--hidden">
                                                        <span class="btn__text">В корзине</span>
                                                    </div>
                                                </a>

                                                <div
                                                    class="product__buy btn btn--fill-red-border-b basket-add-to-cart butn--visible"
                                                    data-id="<?= $offer["ID"]; ?>">
                                                    <span class="btn__text">Добавить в корзину</span>
                                                </div>

                                            </div>

                                        </form>

                                        <!--noindex-->
                                         <form class="buy_block fixed">

                                            <div class="product__count">
                                                <div class="product__quantity basket-quantity-area">
                                                    <button class="btn-quantity btn-minus value-control"
                                                            data-action="minus" data-target="quant<?= $offer["ID"] ?>">
                                                        <img src="/img/png/ico-minus.png" alt="ico-minus">
                                                    </button>
                                                    <div class="btn-quantity btn-count" disabled="">
                                                        <input class="input-count basket-quantity"
                                                               onchange="priceCalculation(<?= $offer["ID"] ?>)"
                                                               value="1" type="text" id="quant<?= $offer["ID"] ?>"
                                                               pattern="\d*" maxlength="4"
                                                               data-max="<?=$offer["AMOUNT"];?>">
                                                    </div>
                                                    <button class="btn-quantity btn-plus value-control"
                                                            data-action="plus" data-target="quant<?= $offer["ID"] ?>">
                                                        <img src="/img/png/ico-plus.png" alt="ico-plus">
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="butn-wrapper basket-added-area-button">

                                                <a href="/personal/cart/">
                                                    <div class="product__buy btn btn--fill-grey-border-b butn--hidden">
                                                        <span class="btn__text">В корзине</span>
                                                    </div>
                                                </a>

                                                <div
                                                    class="product__buy btn btn--fill-red-border-b basket-add-to-cart butn--visible">
                                                    <span class="btn__text">Купить <span class="za">за <span class="product__price-count-value"><?= $offer['MIN_PRICE']['VALUE'] ?> <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?></span></span></span>
                                                </div>

                                            </div>

                                        </form>
                                        <!--/noindex-->
                                    <? endif; ?>
                                <? else: ?>

                                    <div class="buy_block">
                                        <div class="product__buy btn btn--fill-rasp">
                                            <span class="btn__text">Распродано</span>
                                        </div>                                
                                    </div>

                                <? endif; ?>

                                <div class="add-block">

                                    <a class="add-link-icon compare_href " id="comparing-<?= $offer['ID'] ?>"
                                       onclick="javascript:add2compare('<?= $arResult["ID"] ?>', 'add');">
                                        <span class="add-link-icon__text">К сравнению</span>
                                        <svg class='add-link-icon__icon' width="12px" height="14px" viewBox="0 0 12 14"
                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g fill-rule="evenodd">
                                                <g transform="translate(-700.000000, -888.000000)" fill-rule="nonzero">
                                                    <g transform="translate(60.000000, 788.000000)">
                                                        <g transform="translate(630.000000, 92.000000)">
                                                            <path
                                                                d="M16,12 L17,12 C17.5522847,12 18,12.4477153 18,13 L18,16 L20,16 L20,10 L16,10 L16,12 Z M14,12 L14,9 C14,8.44771525 14.4477153,8 15,8 L21,8 C21.5522847,8 22,8.44771525 22,9 L22,17 C22,17.5522847 21.5522847,18 21,18 L18,18 L18,21 C18,21.5522847 17.5522847,22 17,22 L11,22 C10.4477153,22 10,21.5522847 10,21 L10,13 C10,12.4477153 10.4477153,12 11,12 L14,12 Z M12,14 L12,20 L16,20 L16,14 L12,14 Z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>

                                    <div>
                                        <a class="add-link-icon delay_href " id="add-favorite-<?= $offer['ID'] ?>"
                                           data-item-id="<?= $offer['ID'] ?>"
                                           onclick="javascript:add2basket('<?= $offer["ID"] ?>', 'delay');">
                                            <span class="add-link-icon__text">В закладки</span>
                                            <svg class='add-link-icon__icon' xmlns="http://www.w3.org/2000/svg"
                                                 id="svg12" version="1.1" viewBox="0 0 9 13.142734" height="13.142734"
                                                 width="9">
                                                <g>
                                                    <g transform="translate(-701,-849)">
                                                        <g transform="translate(60,788)">
                                                            <g transform="translate(630,52)">
                                                                <path
                                                                    d="m 13,11 v 7.285391 l 0.154722,-0.19397 c 0.139933,-0.175428 0.299108,-0.334603 0.474537,-0.474536 1.295261,-1.033182 3.182837,-0.820725 4.216019,0.474536 L 18,18.285391 V 11 Z M 12,9 h 7 c 0.552285,0 1,0.4477153 1,1 v 11.142696 c 0,0.552284 -0.447715,1 -1,1 -0.304284,0 -0.592014,-0.138543 -0.781759,-0.37642 l -1.936482,-2.427694 c -0.344394,-0.431753 -0.973586,-0.502572 -1.405339,-0.158178 -0.05848,0.04664 -0.111535,0.0997 -0.158179,0.158178 l -1.936482,2.427694 C 12.437365,22.19803 11.808173,22.268849 11.37642,21.924455 11.138543,21.734709 11,21.446979 11,21.142696 V 10 c 0,-0.5522847 0.447715,-1 1,-1 z"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>

                                </div>

                            </div>

                            <? if($arResult["ACTIVE"] != "N" && $offer["CAN_BUY"] == 1 && $arResult["HIDE_PRICE"] != 'Y' && $arResult["ACTIVE"] != "N"){ ?>
                            <div class="desctop-only product__availability">
                            <span class="availability__status availability__status--in">
                                <? if ($offer["CAN_BUY"]): ?>
                                    В наличии <span>(<?= (intval($offer["AMOUNT"]) > 20 ? ">20" : $offer["AMOUNT"]) ?>
                                        шт*)</span>
                                <? else: ?>
                                    Нет в наличии
                                <? endif; ?>
                            </span>
                                <a href="javascript:void(0);" class="modal-link js-back-in-stock" id="back-in-stock-<?= $offer['ID'] ?>"
                                   data-modal-id="back-in-stock_modal-<?= $offer['ID'] ?>">Сейчас
                                    в <?= $offer['AVAIL_SHOP_AMOUNT'] ?> магазинах</a>
                            </div>
                            <? } ?>
                        </div>
                        <? $i++; ?>
                    
                    <?=$ALKOGOL_HTML;?>
                <? endforeach; ?>           
                <?=$socialServices;?>
                <? if($arResult["ACTIVE"] != "N"){ ?>
                <div class="tabs_element" data-id="characteristics_list">
                    <div class="tabs_element__text">
                        <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                        Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>
                        <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                            <? if ($discountinued === true): ?>
                                <p>Самовывоз только по фактическому наличию в магазине.</p>
                            <? else: ?>
                                <span class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                            <? endif; ?>
                        <? endif ?>
                    </div>
                </div>
                <div class="tabs_element" data-id="review_list" style="display: none;">
                    <div class="tabs_element__text">
                        <span class="_red">*Количество актуально на 8:00 <?= date("d.m.Y") ?></span> <br>
                        Уточнить наличие и сделать заказ можно по т. +7 (921) 362-40-71<br>
                        <? if ($arResult['SECTION']['IBLOCK_SECTION_ID'] != '256'): ?>
                            <? if ($discountinued === true): ?>
                                <p>Самовывоз только по фактическому наличию в магазине.</p>
                            <? else: ?>
                                <span class="delivery_info">доставим в любой наш магазин <b>бесплатно!</b></span>
                            <? endif; ?>
                        <? endif ?>
                    </div>
                </div>
                <? } ?>
            </div>
        <? else: ?>
            <div class="product-page-price-simple">
                <? if (count($arResult["OFFERS"]) > 1 && !$arResult["FLG_TABAK_SECTION"]): ?>
                    <div class="desctop-only offers-select">
                        <select class="offSel" style="width: 26.042%;">
                            <? foreach ($arResult["OFFERS"] as $offer1): ?>
                                <? $show = false; ?>
                                <? foreach ($offer1["PROPERTIES"] as $code => $prop): ?>
                                    <? if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0): ?>
                                        <? $show = true; ?>
                                    <? endif; ?>
                                <? endforeach; ?>
                                <? if ($offer1["CATALOG_PRICE_1"] != '' && $show): ?>
                                    <?
                                    if ($arResult["NAV_CHAIN"][1]["ID"] == 162) {
                                        $offer1["NAME"] = str_replace('(', '(МРЦ ', $offer1["NAME"]);
                                    }
                                    ?>
                                    <option value="<?= $offer1["ID"] ?>"><?= $offer1["NAME"]; ?></option>
                                <? endif; ?>
                            <? endforeach; ?>
                        </select>
                    </div>
                <? endif; ?>
                <div class="product-page__price" id="off<?= $arResult["ID"] ?>">
                    <div class="mobile-only">
                        <div class="_h1 heading heading--title"><?= $arResult['~NAME']; ?></div>
                        <div class="raiting stars">

                        </div>
                        <?if($arResult["ACTIVE"] != "N"){?>
                        <div class="product__availability">
                            <span class="availability__status availability__status--in">
                                <? if ($arResult["CAN_BUY"]): ?>
                                В наличии <span>(<?= (intval($arResult["AMOUNT"]) > 20 ? ">20" : $arResult["AMOUNT"]) ?>
                                    шт*)
                                    <? else: ?>
                                        Нет в наличии
                                    <? endif; ?>
                            </span>
                        <div>
                            <a href="javascript:void(0);" class="modal-link js-back-in-stock"
                               data-modal-id="back-in-stock_modal-<?= $arResult['ID'] ?>">Сейчас
                                в <?= $arResult['AVAIL_SHOP_AMOUNT'] ?> мазгазинах</a></div>
                        </div>
                        <?}?>
                    </div>
                    <div class="product-page__price-info">

                        <? if ($arResult['MIN_PRICE']['VALUE'] != '' && $arResult["HIDE_PRICE"] != 'Y'): ?>

                            <div class="product__price-block product__meta-price">
                                <? if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']): ?>
                                    <? if ($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] && $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] > $offer['MIN_PRICE']['VALUE']): ?>
                                        <?
                                        $oldPrice = floatval($offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE']);
                                        $salePrice = floatval($offer['MIN_PRICE']['VALUE']);
                                        $discount = intval((($oldPrice - $salePrice) / $oldPrice) * 100);
                                        ?>
                                        <div class="product__meta-col">
                                            <div class="product__meta-sale">-<?= $discount ?>%</div>
                                        </div>
                                    <? endif ?>
                                    <div
                                        class="product__meta-price-old"><?= $offer['PROPERTIES']['CML2_OLD_PRICE']['VALUE'] ?>
                                        <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                    </div>
                                <? endif ?>
                                <?if($_REQUEST["test"]){?>
                                    <div class="product__meta-col">
                                        <div class="product__meta-sale">-40 %</div>
                                    </div>
                                <?}?>
                                <?if($arResult["PROPERTIES"]["HIT"]["VALUE"]){?>
                                    <div class="product__meta-col">
                                        <span class="product_hit"></span>
                                    </div>
                                <?}?>
                                <img class="ajax_loader" src="/images/ajax-loader.gif" alt="icon-loaders">

                                <div
                                    class="product__price-count-value product__meta-price-new"><?= $offer['MIN_PRICE']['VALUE'] ?>
                                    <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?>
                                </div>
                                <?if($_REQUEST["test"]){?>
                                    <div class="product__meta-price-old">5 000 ₽</div>
                                <?}?>
                            </div>

                            <? if ($offer['PROPERTIES']['CML2_DISCONTINUED']['VALUE']): ?>
                                <div class="product__meta-col">
                                    <div class="product__meta-warning">
                                        <div class="product__meta-warning-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="svg11" version="1.1"
                                                 viewBox="0 0 21.292454 21.292454" height="21.292454" width="21.292454">
                                                <g transform="translate(-0.85410197,-0.70754676)">
                                                    <g transform="translate(-73,-327)">
                                                        <g transform="translate(73,327)">
                                                            <path
                                                                d="M 14.183282,2.3665632 21.82918,17.658359 c 0.740967,1.481936 0.140294,3.283955 -1.341641,4.024923 C 20.070972,21.891565 19.611633,22 19.145898,22 H 3.854102 c -1.6568543,0 -3.00000003,-1.343146 -3.00000003,-3 0,-0.465735 0.10843527,-0.925075 0.31671843,-1.341641 L 8.8167184,2.3665632 C 9.5576862,0.88462765 11.359705,0.28395461 12.841641,1.0249224 c 0.580582,0.2902911 1.05135,0.7610585 1.341641,1.3416408 z M 11.006211,14.935211 h 1.043478 L 12.776398,9.6070422 V 6 H 10.242236 V 9.6070422 Z M 11.509317,19 c 0.521742,0 0.90062,-0.122065 1.136646,-0.366197 C 12.881989,18.38967 13,18.078406 13,17.7 V 17.333803 C 13,16.955397 12.881989,16.644133 12.645963,16.4 c -0.236026,-0.244133 -0.614904,-0.366197 -1.136646,-0.366197 -0.534164,0 -0.919254,0.122064 -1.15528,0.366197 C 10.118011,16.644133 10,16.955397 10,17.333803 V 17.7 c 0,0.378406 0.118011,0.68967 0.354037,0.933803 C 10.590063,18.877935 10.975153,19 11.509317,19 Z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="product__meta-warning-text">Товар снят с производства</div>
                                    </div>
                                </div>
                            <? endif ?>

                        <? endif; ?>

                        <? if ($arResult["CAN_BUY"] == 1 && $arResult['MIN_PRICE']['VALUE'] != '' && $arResult["HIDE_PRICE"] != 'Y'): ?>
                            <form class="buy_block">
                                <div class="product__count">
                                    <div class="product__quantity basket-quantity-area">
                                        <button class="btn-quantity btn-minus value-control" data-action="minus"
                                                data-target="quant<?= $arResult["ID"] ?>">
                                            <img src="/img/png/ico-minus.png" alt="icon-minus">
                                        </button>
                                        <div class="btn-quantity btn-count" disabled="">
                                            <input class="input-count basket-quantity"
                                                   onchange="priceCalculation(<?= $arResult["ID"] ?>)" value="1"
                                                   type="text" id="quant<?= $arResult["ID"] ?>" pattern="\d*"
                                                   maxlength="4"
                                                   data-max="<?=$offer["AMOUNT"];?>">
                                        </div>
                                        <button class="btn-quantity btn-plus value-control" data-action="plus"
                                                data-target="quant<?= $arResult["ID"] ?>">
                                            <img src="/img/png/ico-plus.png" alt="icon-plus">
                                        </button>
                                    </div>
                                </div>

                                <div class="butn-wrapper basket-added-area-button">

                                    <a href="/personal/cart/">
                                        <div class="product__buy btn btn--fill-grey-border-b butn--hidden">
                                            <span class="btn__text">В корзине</span>
                                        </div>
                                    </a>

                                    <div
                                        class="product__buy btn btn--fill-red-border-b basket-add-to-cart butn--visible">
                                        <span class="btn__text">Купить</span>
                                    </div>

                                </div>

                            </form>
                            <!--noindex-->
                            <form class="buy_block fixed">
                                <div class="product__count">
                                    <div class="product__quantity basket-quantity-area">
                                        <button class="btn-quantity btn-minus value-control" data-action="minus"
                                                data-target="quant<?= $arResult["ID"] ?>">
                                            <img src="/img/png/ico-minus.png" alt="icon-minus">
                                        </button>
                                        <div class="btn-quantity btn-count" disabled="">
                                            <input class="input-count basket-quantity"
                                                   onchange="priceCalculation(<?= $arResult["ID"] ?>)" value="1"
                                                   type="text" id="quant<?= $arResult["ID"] ?>" pattern="\d*"
                                                   maxlength="4"
                                                   data-max="<?=$offer["AMOUNT"];?>">
                                        </div>
                                        <button class="btn-quantity btn-plus value-control" data-action="plus"
                                                data-target="quant<?= $arResult["ID"] ?>">
                                            <img src="/img/png/ico-plus.png" alt="icon-plus">
                                        </button>
                                    </div>
                                </div>

                                <div class="butn-wrapper basket-added-area-button">

                                    <a href="/personal/cart/">
                                        <div class="product__buy btn btn--fill-grey-border-b butn--hidden">
                                            <span class="btn__text">В корзине</span>
                                        </div>
                                    </a>

                                    <div
                                        class="product__buy btn btn--fill-red-border-b basket-add-to-cart butn--visible">
                                        <span class="btn__text">Купить<span class="za"> за <?= $offer['MIN_PRICE']['VALUE'] ?> <?=($GLOBALS["current"])?$GLOBALS["current"]:"₽";?></span></span>
                                    </div>

                                </div>

                            </form>
                            <!--/noindex-->
                        <? else: ?>

                            <div class="buy_block">
                                <div class="product__buy btn btn--fill-grey-border-b butn--hidden">
                                    <span class="btn__text">Распродано</span>
                                </div>                                
                            </div>
                        <? endif; ?>

                        <div class="add-block">

                            <a class="add-link-icon compare_href " id="comparing-<?= $offer['ID'] ?>"
                               onclick="javascript:add2compare('<?= $arResult["ID"] ?>', 'add');">
                                <span class="add-link-icon__text">К сравнению</span>
                                <svg class='add-link-icon__icon' width="12px" height="14px" viewBox="0 0 12 14"
                                     version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g fill-rule="evenodd">
                                        <g transform="translate(-700.000000, -888.000000)" fill-rule="nonzero">
                                            <g transform="translate(60.000000, 788.000000)">
                                                <g transform="translate(630.000000, 92.000000)">
                                                    <path
                                                        d="M16,12 L17,12 C17.5522847,12 18,12.4477153 18,13 L18,16 L20,16 L20,10 L16,10 L16,12 Z M14,12 L14,9 C14,8.44771525 14.4477153,8 15,8 L21,8 C21.5522847,8 22,8.44771525 22,9 L22,17 C22,17.5522847 21.5522847,18 21,18 L18,18 L18,21 C18,21.5522847 17.5522847,22 17,22 L11,22 C10.4477153,22 10,21.5522847 10,21 L10,13 C10,12.4477153 10.4477153,12 11,12 L14,12 Z M12,14 L12,20 L16,20 L16,14 L12,14 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>

                            <div>
                                <a class="add-link-icon delay_href " id="add-favorite-<?= $offer['ID'] ?>"
                                   data-item-id="<?= $offer['ID'] ?>"
                                   onclick="javascript:add2basket('<?= $offer["ID"] ?>', 'delay');">
                                    <span class="add-link-icon__text">В закладки</span>
                                    <svg class='add-link-icon__icon' xmlns="http://www.w3.org/2000/svg" id="svg12"
                                         version="1.1" viewBox="0 0 9 13.142734" height="13.142734" width="9">
                                        <g>
                                            <g transform="translate(-701,-849)">
                                                <g transform="translate(60,788)">
                                                    <g transform="translate(630,52)">
                                                        <path
                                                            d="m 13,11 v 7.285391 l 0.154722,-0.19397 c 0.139933,-0.175428 0.299108,-0.334603 0.474537,-0.474536 1.295261,-1.033182 3.182837,-0.820725 4.216019,0.474536 L 18,18.285391 V 11 Z M 12,9 h 7 c 0.552285,0 1,0.4477153 1,1 v 11.142696 c 0,0.552284 -0.447715,1 -1,1 -0.304284,0 -0.592014,-0.138543 -0.781759,-0.37642 l -1.936482,-2.427694 c -0.344394,-0.431753 -0.973586,-0.502572 -1.405339,-0.158178 -0.05848,0.04664 -0.111535,0.0997 -0.158179,0.158178 l -1.936482,2.427694 C 12.437365,22.19803 11.808173,22.268849 11.37642,21.924455 11.138543,21.734709 11,21.446979 11,21.142696 V 10 c 0,-0.5522847 0.447715,-1 1,-1 z"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>

                        </div>

                    </div>
                    <?=$ALKOGOL_HTML;?>
                    <?if($arResult["ACTIVE"] != "N" && $arResult["CAN_BUY"] == 1 && $arResult['MIN_PRICE']['VALUE'] != '' && $arResult["HIDE_PRICE"] != 'Y'){?>
                    <div class="desctop-only product__availability">
                    <span class="availability__status availability__status--in">
                    <? if ($arResult["CAN_BUY"]): ?>
                        В наличии <span>(<?= (intval($arResult["AMOUNT"]) > 20 ? ">20" : $arResult["AMOUNT"]) ?>
                            шт*)</span>
                    <? else: ?>
                        Нет в наличии
                    <? endif; ?>
                    </span>
                        <a href="javascript:void(0);" rel="nofollow" class="modal-link js-back-in-stock" id="back-in-stock-<?= $arResult['ID'] ?>"
                           data-modal-id="back-in-stock_modal-<?= $arResult['ID'] ?>">Сейчас
                            в <?= $arResult['AVAIL_SHOP_AMOUNT'] ?> магазинах</a>
                    </div>
                    <?}?>
                </div>
            </div>
        <? endif; ?>

        <? if ($arResult["FLG_TABAK_SECTION"] && !empty($arResult["OFFERS"]) && count($arResult["OFFERS"]) > 0): ?>

            <?
            $maxMRP = false;

            $i = 0;
            foreach ($arResult["OFFERS"] as $offer):
                $show = false;
                foreach ($offer["PROPERTIES"] as $code => $prop):
                    if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0)
                        $show = true;
                endforeach;

                if ($offer["CATALOG_PRICE_1"] != '' && $show):


                    $name = $offer['MIN_PRICE']['VALUE'];

                    if (!empty($offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION'])) {
                        $key = array_search('МРЦ', $offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION']);
                        if ($key !== false)
                            $name = $offer['PROPERTIES']['CML2_ATTRIBUTES']['VALUE'][$key];
                    }

                    if ($maxMRP == false || $maxMRP < $name) {
                        $maxMRP = $name;
                    }

                endif;

            endforeach; ?>

            <div class="price-selector price-selector_select tabs_element" data-id="characteristics_list">
                <? $i = 0;
                foreach ($arResult["OFFERS"] as $offer):?>

                    <?
                    $show = false;
                    foreach ($offer["PROPERTIES"] as $code => $prop):
                        if (strpos($code, 'SKLAD') === 0 && $prop["VALUE"] > 0)
                            $show = true;
                    endforeach;

                    if ($offer["CATALOG_PRICE_1"] != '' && $show):


                        $name = $offer['MIN_PRICE']['VALUE'];

                        if (!empty($offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION'])) {
                            $key = array_search('МРЦ', $offer['PROPERTIES']['CML2_ATTRIBUTES']['DESCRIPTION']);
                            if ($key !== false)
                                $name = $offer['PROPERTIES']['CML2_ATTRIBUTES']['VALUE'][$key];
                        }

                        ?>
                        <div
                            class="price_s_<?= $offer['ID'] ?>  price-selector__item<?= $offer["CAN_BUY"] ? '' : '  price-selector__item--disabled' ?><?= $i == 0 ? ' price-selector__item--selected' : '' ?>">
                            <div class="price-selector__type" data-tooltip="МРЦ — это максимальная розничная цена">
                                МРЦ <?= $name ?><? //=$offer['NAME']
                                ?><i class="h"> </i><span class="rub">o</span></div>
                            <input
                                data-type_d="<?= $maxMRP == false || $name == $maxMRP ? '1' : '2' ?>"  <?= $i == 0 ? ' checked ' : '' ?>
                                onchange="showOffer(event)" id="price_<?= $offer['ID'] ?>" value="<?= $offer['ID'] ?>"
                                type="radio" name="availability2"
                                class="price-all-checkbox price-selector__checkbox<?= $i == 0 ? ' btn btn--fill-red-border-b' : '' ?>">
                            <label for="price_<?= $offer['ID'] ?>"
                                   class="price-selector__btn btn btn--fill-red-border-b"
                                   data-tooltip="Нажмите для выбора цены"><?= $offer['MIN_PRICE']['VALUE'] ?><i
                                    class="h"> </i><span class="rub">o</span></label>
                            <span
                                class="price-selector__count">Кол-во: <?= (intval($offer['AMOUNT']) > 20 ? ">20" : $offer['AMOUNT']) ?>
                                шт*</span>
                            <a href="javascript:void(0);" rel="nofollow" id="back-in-stock-<?= $offer['ID'] ?>"
                               onclick="$('#price_<?= $offer['ID'] ?>').trigger('click')"
                               data-modal-id="back-in-stock_modal-all"
                               class="js-back-in-stock price-selector__available">В <?= $offer['AVAIL_SHOP_AMOUNT'] ?>
                                магазинах</a>
                        </div>
                        <? $i++;endif;?>
                <? endforeach; ?>
            </div>
        <? endif; ?>

    </div>

</div>

<? if (!empty($arResult["PROPERTIES"]["VIDEO"]["VALUE"])): ?>
    <div id="video-frame" style="display: none;">
        <div class="close" onclick="$('#video-frame').fadeOut();">&#9932;</div>
        <?= $arResult["PROPERTIES"]["VIDEO"]["~VALUE"]; ?>
    </div>
<? endif; ?>

<?if(strripos($_SERVER["REQUEST_URI"],"ajax") === false){?>
<? if($arResult["PROIZVODITEL"] && $arResult["PROIZVODITEL"]["PROPERTY_COMPANY_HISTORY_VALUE"]["TEXT"]): ?>
<div class="detail-page-brand-block" id="proizvoditel">
    <h2><div class="logo" style="background-image: url('<?=$arResult["PROIZVODITEL"]["LOGO"]["src"];?>');"></div> <?=$arResult["PROIZVODITEL"]["NAME"];?></h2>
    <div class="info<? if($arResult["PROIZVODITEL"]["BACKGROUND_IMAGE"]["src"]){ ?> lazy-background<? } ?>"<? if($arResult["PROIZVODITEL"]["BACKGROUND_IMAGE"]["src"]){ ?> data-src="<?=$arResult["PROIZVODITEL"]["BACKGROUND_IMAGE"]["src"];?>"<? } ?>>
        <div class="text">
            <?=$arResult["PROIZVODITEL"]["~PROPERTY_COMPANY_HISTORY_VALUE"]["TEXT"];?>
        </div>
        <? if($arResult["PROIZVODITEL"]["DETAIL_PAGE_URL"]){ ?>
        <div class="podrobnee">
            <a href="<?=$arResult["PROIZVODITEL"]["DETAIL_PAGE_URL"];?>">Прочитать полностью</a>
        </div>
        <? } ?>
    </div>

    <?
    // $arResult["TABACO_NO_AUTH"] = true;
    // Если пользователь не авторизован, а показываются только товары с табаком
    if($arResult["TABACO_NO_AUTH"]){?>
        <div class="tabac_informer">
            <p>Для того чтобы посмотреть товары данного производителя пожалуйста пройдите процедуру авторизации</p> 
            <a class="btn btn--fill-red-border-b" href="/auth/?backlocation=true">Авторизоваться</a>
        </div>
    <?}?>

    <? if($arResult["PROIZVODITEL"]["PRODUCTS_CNT"] && strripos($_SERVER["REQUEST_URI"],"ajax") === false){ ?>
    <div class="block-with-goods<?=($arResult["TABACO_NO_AUTH"])?" section_tabaco_no_auth":"";?>">
                <?if($arResult["TABACO_NO_AUTH"]){?>
                    <div class="zaglushka"></div>
                <?}?>
        <h3>Популярные товары производителя <?=$arResult["PROIZVODITEL"]["NAME"];?></h3>
        <?
                $GLOBALS["arrFilter"]["PROPERTY_PROIZVODITEL_BY_ID"] = $arResult["PROIZVODITEL"]["ID"];
                $GLOBALS["arrFilter"]["!ID"] = $arResult["ID"];
                $GLOBALS["arrFilter"]["PROPERTY_CML2_TOBACCO_PRODUCT"] = false;
                $GLOBALS["arrFilter"]["PROPERTY_FZADULT"] = false;

                if ($USER->IsAuthorized() && CSite::InGroup(array(5,8))){
                    unset($GLOBALS["arrFilter"]["PROPERTY_CML2_TOBACCO_PRODUCT"]);
                    unset($GLOBALS["arrFilter"]["PROPERTY_FZADULT"]);
                }
                
                $APPLICATION->IncludeComponent(
                "bitrix:catalog.section", 
                "proizvoditel", 
                array(
                    "ACTION_VARIABLE" => "action",
                    "ADD_PICT_PROP" => "MORE_PHOTO",
                    "ADD_PROPERTIES_TO_BASKET" => "Y",
                    "ADD_SECTIONS_CHAIN" => "N",
                    "ADD_TO_BASKET_ACTION" => "ADD",
                    "AJAX_MODE" => "N",
                    "AJAX_OPTION_ADDITIONAL" => "",
                    "AJAX_OPTION_HISTORY" => "N",
                    "AJAX_OPTION_JUMP" => "N",
                    "AJAX_OPTION_STYLE" => "Y",
                    "BACKGROUND_IMAGE" => "UF_BACKGROUND_IMAGE",
                    "BASKET_URL" => "/personal/basket.php",
                    "BRAND_PROPERTY" => "BRAND_REF",
                    "BROWSER_TITLE" => "-",
                    "CACHE_FILTER" => "N",
                    "CACHE_GROUPS" => "Y",
                    "CACHE_TIME" => "36000000",
                    "CACHE_TYPE" => "A",
                    "COMPATIBLE_MODE" => "Y",
                    "CONVERT_CURRENCY" => "Y",
                    "CURRENCY_ID" => "RUB",
                    "CUSTOM_FILTER" => "",
                    "DATA_LAYER_NAME" => "dataLayer",
                    "DETAIL_URL" => "",
                    "DISABLE_INIT_JS_IN_COMPONENT" => "N",
                    "DISCOUNT_PERCENT_POSITION" => "bottom-right",
                    "DISPLAY_BOTTOM_PAGER" => "N",
                    "DISPLAY_TOP_PAGER" => "N",
                    "ELEMENT_SORT_FIELD" => "SHOW_COUNTER",
                    "ELEMENT_SORT_FIELD2" => "id",
                    "ELEMENT_SORT_ORDER" => "DESC",
                    "ELEMENT_SORT_ORDER2" => "desc",
                    "ENLARGE_PRODUCT" => "PROP",
                    "ENLARGE_PROP" => "NEWPRODUCT",
                    "FILTER_NAME" => "arrFilter",
                    "HIDE_NOT_AVAILABLE" => "N",
                    "HIDE_NOT_AVAILABLE_OFFERS" => "N",
                    "IBLOCK_ID" => IBLOCK_CATALOG_ID,
                    "INCLUDE_SUBSECTIONS" => "Y",
                    "LABEL_PROP" => "-",
                    "LABEL_PROP_MOBILE" => "",
                    "LABEL_PROP_POSITION" => "top-left",
                    "LAZY_LOAD" => "Y",
                    "LINE_ELEMENT_COUNT" => "5",
                    "LOAD_ON_SCROLL" => "N",
                    "MESSAGE_404" => "N",
                    "MESS_BTN_ADD_TO_BASKET" => "В корзину",
                    "MESS_BTN_BUY" => "Купить",
                    "MESS_BTN_DETAIL" => "Подробнее",
                    "MESS_BTN_LAZY_LOAD" => "Показать ещё",
                    "MESS_BTN_SUBSCRIBE" => "Подписаться",
                    "MESS_NOT_AVAILABLE" => "Нет в наличии",
                    "META_DESCRIPTION" => "-",
                    "META_KEYWORDS" => "-",
                    "OFFERS_FIELD_CODE" => array(
                        0 => "ID",
                        1 => "",
                    ),
                    "OFFERS_CART_PROPERTIES" => array(
                        0 => "CML2_DISCONTINUED",
                    ),
                    "OFFERS_PROPERTY_CODE" => array(
                    ),
                    "OFFERS_SORT_FIELD" => "sort",
                    "OFFERS_SORT_ORDER" => "asc",
                    "OFFERS_SORT_FIELD2" => "id",
                    "OFFERS_SORT_ORDER2" => "desc",
                    "OFFERS_LIMIT" => "10",
                    "PAGER_BASE_LINK_ENABLE" => "N",
                    "PAGER_DESC_NUMBERING" => "N",
                    "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                    "PAGER_SHOW_ALL" => "N",
                    "PAGER_SHOW_ALWAYS" => "N",
                    "PAGER_TEMPLATE" => ".default",
                    "PAGER_TITLE" => "Товары",
                    "PAGE_ELEMENT_COUNT" => "4",
                    "PARTIAL_PRODUCT_PROPERTIES" => "Y",
                    "PRICE_CODE" => array(
                        0 => "BASE",
                    ),
                    "PRICE_VAT_INCLUDE" => "Y",
                    "PRODUCT_BLOCKS_ORDER" => "price,props,sku,quantityLimit,quantity,buttons,compare",
                    "PRODUCT_DISPLAY_MODE" => "Y",
                    "PRODUCT_ID_VARIABLE" => "id",
                    "PRODUCT_PROPERTIES" => array(
                    ),
                    "PRODUCT_PROPS_VARIABLE" => "prop",
                    "PRODUCT_QUANTITY_VARIABLE" => "",
                    "PRODUCT_ROW_VARIANTS" => "[{'VARIANT':'2','BIG_DATA':false},{'VARIANT':'2','BIG_DATA':false},{'VARIANT':'2','BIG_DATA':true}]",
                    "PRODUCT_SUBSCRIPTION" => "Y",
                    "PROPERTY_CODE_MOBILE" => "",
                    "RCM_TYPE" => "personal",
                    "SECTION_URL" => "",
                    "SECTION_USER_FIELDS" => array(
                        0 => "",
                        1 => "",
                    ),
                    "SEF_MODE" => "N",
                    "SET_BROWSER_TITLE" => "Y",
                    "SET_LAST_MODIFIED" => "N",
                    "SET_META_DESCRIPTION" => "Y",
                    "SET_META_KEYWORDS" => "Y",
                    "SET_STATUS_404" => "N",
                    "SET_TITLE" => "N",
                    "SHOW_404" => "N",
                    "SHOW_ALL_WO_SECTION" => "Y",
                    "SHOW_CLOSE_POPUP" => "Y",
                    "SHOW_DISCOUNT_PERCENT" => "Y",
                    "SHOW_FROM_SECTION" => "N",
                    "SHOW_MAX_QUANTITY" => "N",
                    "SHOW_OLD_PRICE" => "Y",
                    "SHOW_PRICE_COUNT" => "1",
                    "SHOW_SLIDER" => "Y",
                    "SLIDER_INTERVAL" => "3000",
                    "SLIDER_PROGRESS" => "N",
                    "TEMPLATE_THEME" => "blue",
                    "USE_ENHANCED_ECOMMERCE" => "Y",
                    "USE_MAIN_ELEMENT_SECTION" => "N",
                    "USE_PRICE_COUNT" => "N",
                    "USE_PRODUCT_QUANTITY" => "Y",
                    "COMPONENT_TEMPLATE" => "new_redesign",
                    "IBLOCK_TYPE" => "1c_catalog",
                    "SECTION_ID" => "",
                    "SECTION_CODE" => "",
                    "PROPERTY_CODE" => array(
                        0 => "",
                        1 => "",
                    ),
                    "MESS_BTN_COMPARE" => "Сравнить",
                    "SECTION_ID_VARIABLE" => "SECTION_ID",
                    "COMPOSITE_FRAME_MODE" => "A",
                    "COMPOSITE_FRAME_TYPE" => "AUTO",
                    "DISPLAY_COMPARE" => "Y",
                    "OFFER_ADD_PICT_PROP" => "-",
                    "OFFER_TREE_PROPS" => "",
                    "COMPARE_PATH" => "",
                    "PROIZVODITEL_HREF" => ($arResult["PROIZVODITEL"]["PRODUCTS_CNT"])?$arResult["PROIZVODITEL"]["DETAIL_PAGE_URL"]."#catalog":""
                ),
                false
            );?>
       
    </div>
    <? } ?>
</div>
<? endif; ?>
<style>
    .product__price-count {
        display: none !important;
    }

    .product-page__price-topc {
        margin-bottom: 20px;
    }

    @media (max-width: 840px) {
        .footer__content
        {
            padding-bottom: 80px;
        }
    }
</style>
<?}?>
<?if(strripos($_SERVER["REQUEST_URI"],"alkogol") !== false or $arResult['PRODUCT_IS_ALKOHOL'] !== false){?>
<script>
    if($(".buy_block .btn__text").text() != 'Распродано'){
        $(".buy_block .btn__text").html("Резерв");
        $(".buy_block .btn__text").parents('a').attr('href','/dialogs/make_order_alco.php');
    }else{
        $(".product-page_tobacco .add-block").attr("style","margin-top:10px !important");
    }
</script>
<?}?>