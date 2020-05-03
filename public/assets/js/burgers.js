$(function(){
    $('.devoured-burger').on('click', function(event){
        var id = $(this).data('id');
        var devouredBurger = $(this).data('devouredburger')

        var devouredBurgerState ={
            devour: devouredBurger
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredBurgerState
        }).then(
            function(){
                console.log('burger has been devoured', devouredBurger);
                location.reload()
            }
        );
    })


$('.create-form').on('submit', function(event){
    e.preventDefault();

    var newBurger ={
        name: $('#burger').val().trim(),
        devour: $('[burger=devour]:checked').val().trim()
    };

    $.ajax('/api/burgers',{
        type: 'POST',
        data: newBurger
    }).then(
        function(){
            console.log('new burger created!');
            location.reload()
        }
    );
    });
})
