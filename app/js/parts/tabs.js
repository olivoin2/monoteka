(function ($) {
    $.fn.multitabs = function () {
        var _this = $(this);

        $('.tab__header > div').on('click', function () {
            var num;
            var _this = $(this);
            var classNameTab = _this.attr('class').split(' ');
            var classNameContent = _this.parent().siblings().children();
            var classNameTabHeaderKey = _this.attr('class').replace('tab__header--active','');
            //var classNameTabContentKey = classNameContent.attr('class').replace('tab__content--active','');
            
            
            for (i = 0; i <= classNameTab.length; i++) {
                if (/([\d.]+)/.test(classNameTab[i])) {
                    num = classNameTab[i].split('-')[1];
                    _this.siblings().removeClass('tab__header--active');
                    _this.addClass('tab__header--active');  
                }
            }

            $(classNameContent).each(function (i, n) {
                var name = $(n).attr('class').split(' ');
                for (n = 0; n <= name.length; n++) {
                    if (name[n] != undefined) {
                        if (/([\d.]+)/.test(name[n])) {
                            if (num === name[n].split('-')[1]) {
                                var el = $(classNameContent)[num - 1];
                                var classNameTabContentKey = $(el).attr('class').replace('tab__content--active','');
                                $(classNameContent).removeClass('tab__content--active');
                                $(el).addClass('tab__content--active');
                            }
                        }
                    }
                }
            });
            
        });
        
    }
})(jQuery);