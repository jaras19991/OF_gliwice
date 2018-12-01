import $ from 'jquery';

export const eventList = () => {

    var dateFromInput =  $('input#dateFrom');
    var dateToInput =  $('input#dateTo');
    
    // fillFilters (filterData);
    // LoadList (filterData);

    function getJsonFromUrl() { 
        var query = window.location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");
            var component = decodeURIComponent(item[1]);
            if (component != 'undefined') {
                result[item[0]] = component;    
            }
        });
        return result;
    }

    function LoadList (filterData) {
        filterData.categories = filterData.categories.join(',');
        filterData.addresses = filterData.addresses.join(',');

        $.ajax({
            'url':eventListAjaxUrl,
            'data':filterData,
            'beforeSend':function(){
                $('#eventCategoriesList').before('<span class="loader">ładowanie...</span>');
            },
            'success':function(resp){
                $('#dateInfo').html( resp.dateInfo );
                $('#dateTitle').html( resp.dateTitle );
                
                $('#eventCategoriesList').parent().find('.loader').remove();
                $('#eventCategoriesList').html( resp.list );
            }
        });   
    }

    function fillFilters (filterData){
        dateFromInput.val( filterData.dateFrom )
        dateToInput.val( filterData.dateTo )

        for (var i in  filterData.categories){
            var value = filterData.categories[i];
            $('input.eventCategoryCheckbox[value="'+value+'"]').prop('checked', true);
        }

        for (var i in  filterData.addresses){
            var value = filterData.addresses[i];
            $('input.addressCheckbox[value="'+value+'"]').prop('checked', true);
        }
    }

    function refreshList (){
        filterData.dateFrom = dateFromInput.val();
        filterData.dateTo = dateToInput.val();

        $('.filterGroup').each(function(i,group){
            var groupName = $(group).data('group');
            filterData[groupName] = [];

            $(group).find('input[type="checkbox"]:checked').each(function(j,checkbox){
                filterData[groupName].push( $(checkbox).val() );
            });
        });
        fillFilters(filterData);
        LoadList (filterData);

        var urlParameters = Object.entries(filterData).map(e => e.join('=')).join('&');

        history.pushState({}, "", "?" + urlParameters );
    }

    function dateObjectToString(dateObj) {
        return dateObj.getFullYear()
                +'-'+ ("0" + (dateObj.getMonth() + 1)).slice(-2)
                +'-'+ ("0" + dateObj.getDate()).slice(-2);
    }

    $('.monthButton').click(function(){
        dateFromInput.val( $(this).data('date-from') );
        dateFromInput.change();
        refreshList();
    });
    
    dateFromInput
        .change(function(){
            var dateFrom = new Date( $(this).val() );
            var lastDayOfMonthDate = new Date(dateFrom.getFullYear(), dateFrom.getMonth() + 1, 0);
            dateToInput.val(  dateObjectToString(lastDayOfMonthDate) );
            refreshList( );         
        })
        .datetimepicker({
   //         lang: lang,
            format: 'Y-m-d',
            dayOfWeekStart:1,
            timepicker:false,
            onChangeDateTime: function() {
                dateFromInput.change();
            }
        });

    var timeout;
    $('.filterCheckbox').click(function(){
        window.clearTimeout(timeout);
        timeout = window.setTimeout(function(){

            refreshList( );

        }, 500);
    }); 
};