<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <title>AJAX Call</title>
    <script>

        $(document).ready(function() {
           $('button').click(ajax);
        });

        function ajax() {
            $.ajax({
                url: 'index_insert.php',
                type: 'POST',
                dataType: 'text',
                data: {
                    name: $("input[name*='name']").val(),
                    email: $("input[name*='email']").val(),
                    age: $("input[name*='age']").val(),
                    password: $("input[name*='password']").val()
                },
                success: function(response) {
                    console.log(response);
                }
            });
        };
    </script>
</head>

<body>
<form>
    <input type="text" name="name" value="" placeholder="Name">
    <input type="text" name="email" value="" placeholder="Email">
    <input type="text" name="age" value="" placeholder="Age">
    <input type="text" name="password" value="" placeholder="Password">
    <button type="submit" name="button">Submit</button>
</form>
</body>

</html>