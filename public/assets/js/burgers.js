$(function(){
    $('.devour-burger').on('click', function(event){
        var id = $(this).data('id');
        var devourBurger = $(this).data('devourburger')

        var burgerDevoured ={
            devoured: devourBurger
        };
        $.ajax('/api/burgers' + id, {
            type: 'POST',
            data: burgerDevoured
        }).then(
            function(){
                console.log('burger has been devoured', devourBurger);
                location.reload()
            }
        );
    })


$('.create-form').on('submit', function(event){
    e.preventDefault();

    var newBurger ={
        name: $('#burgers').val().trim()
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
