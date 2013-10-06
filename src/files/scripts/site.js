$.extend(jQuery.easing,
    {
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    }
);

$.chain = function () {
    var promise = $.Deferred().resolve().promise();
    jQuery.each(arguments, function () {
        promise = promise.pipe(this);
    });
    return promise;
};

$(function () {

    // setup carousels
    $(".carousel-inner .item:first").addClass('active');
    $(".carousel").carousel();

    // handle agjusting thumbnail sizes when the window resizes, also set the initial sizes
    var resize = function () {
        $(".thumbnail .item-image").each(function () {
            var $el = $(this);
            var width = $el.width();
            $el.css('height', (width * 0.75) + 'px');
        });
        $("#item-list").css('opacity', 1);
    };
    setTimeout(resize, 0);
    $(window).resize(resize);

    // on the front page, cycle through the text on the "For Sale By Owner" sign
    var delay = 6000;
    var index = 0;
    var phrases = ['erv@ewal.net', 'Great Prices!', 'Amazing Deals!', 'Email Today!'];
    $(".for-sale-sign .name").text(phrases[0]);
    var changeSignText = function () {
        var $el = $(".for-sale-sign .name");
        $.chain(function () {
            return $el.fadeOut();
        }, function () {
            index++;
            if (index >= phrases.length) {
                index = 0;
            }
            var text = phrases[index];
            $el.text(text);
            return $el.fadeIn();
        })
        setTimeout(changeSignText, delay);
    };
    setTimeout(changeSignText, delay);

    // on the front page, wire up the animation for the thumbnails
    var imageDuration = 1000;
    var priceDuration = 400;
    $("#item-list .thumbnail.available").hover(function () {
        if ($(window).width() >= 768) {
            var startTime = new Date();
            $("img", this).stop(true).animate({top: '-30%', left: 0}, imageDuration, 'easeOutQuad');
            $(".price", this).stop(true).animate({top: '50%'}, {
                duration: priceDuration,
                easing: 'easeOutQuart',
                step: function (data) {
                    var elapsed = new Date() - startTime;
                    var percent = Math.floor(100 * elapsed / priceDuration) / 100;
                    var $el = $(this);
                    var price = Number($el.attr('data-price'));
                    var priceRange = Math.pow(10, Math.floor(Number((Math.log(price) / Math.LN10).toPrecision(6)))) * 0.8;
                    var animatedPrice = (price - priceRange + Math.floor((priceRange * percent) / (priceRange / 8)) * (priceRange / 8));
                    $el.text('$' + animatedPrice);
                },
                complete: function () {
                    var $el = $(this);
                    var price = Number($el.attr('data-price'));
                    $el.text('$' + price);
                }
            });
        }
    }, function () {
        if ($(window).width() >= 768) {
            $("img", this).stop(true).animate({top: '0', left: '-30%'}, imageDuration, 'easeOutQuad');
            $(".price", this).stop(true).animate({top: '150%'}, priceDuration, 'easeOutQuad');
        }
    });

    // on the details page, wire up the thumbnails to the carousel
    $("#item-details .thumbnail").on('click', function () {
        var $el = $(this);
        var imageNumber = Number($el.attr('data-to'));
        if (isFinite(imageNumber)) {
            $("#item-images").carousel(imageNumber);
        }
    });

});