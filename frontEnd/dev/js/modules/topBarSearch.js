import $ from 'jquery';
export function topBarSearch() {
    
    $(function () {
        var form = $('#searchForm');
        var input = $('#searchWord');
        
        var phrase = form.data('phrase');
        input.val(phrase);

        form.submit(function () {
            var action = form.data('url') + "/" + input.val();
            //input.attr('disabled', true);
            form.attr('action', action);

            return true;
        });
    });
    
}

