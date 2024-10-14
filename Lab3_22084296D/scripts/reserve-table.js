$(document).ready(function(){
    let bookedTables = JSON.parse(localStorage.getItem('bookedTable')) || [];

    let selectedTableId = null;

    function update(){
    $('.table').each(function(){
        let tableId = $(this).attr('id');
        if (bookedTables.includes(tableId)) {
            $(this).addClass('booked');
        }else{
            $(this).removeClass('booked');
        }
    });
}
    update();
    $('.table').click(function(){
        let tableId = $(this).attr('id');
        if (bookedTables.includes(tableId)){
            alert("This table is already booked");
        }else{
            selectedTableId = tableId;
            $("#confirm").removeClass("d-none");
            $("#selected-table").html("Do you want to book Table "+selectedTableId);
        }
    })

    $('#confirm-booking').click(function(){
        if(selectedTableId){
            bookedTables.push(selectedTableId);
            localStorage.setItem('bookedTable', JSON.stringify(bookedTables));
            update();
            $('#selected-table').html('Click a table to book');
            $('#confirm').addClass('d-none');
            selectedTableId = null;
        }
    })

    $('#cancel-booking').click(function(){
        $('#selected-table').html('Click a table to book');
        $('#confirm').addClass('d-none');
        selectedTableId = null;
    });
})