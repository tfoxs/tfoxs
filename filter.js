$(document).ready(function(){
    var targets = $('.filter'),
        buttons = $('.filter-button').click(function(){
            var value = $(this).data('filter');
            if(value == "all")
                buttons.removeClass('checked');
            else
                $(this).toggleClass('checked');

            var checkedClasses = buttons.filter('.checked').toArray().map(function(btn){return $(btn).data('filter');}); //create array of filters

            if(checkedClasses.length === 0)
                targets.show();
            else
            {
                var selector = '.' + checkedClasses.join('.'), //create selector of the combined classes
                    show = targets.filter(selector);
                targets.not(show).hide();
                show.show();
            }
        });
});