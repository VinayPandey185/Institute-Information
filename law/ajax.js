// Create Account Section Start
function create_account(){
    $("#create_button").click(function(e){
        e.preventDefault();
        console.log("create Account Button Clicked");


        //Java Script Variable
        var name= $("#create_name").val();
        var email= $("#create_email").val();
        var password= $("#create_password").val();


        // Validation

         if(name == ""){
            $("#create_name_message").html("<small class='text-danger font-weight-bold ml-2'>Please Enter Your Name</small>")
            $("#create_name").focus();
        }else if(email == ""){
            $("#create_email_message").html("<small class='text-danger font-weight-bold ml-2'>Please Enter Your Email</small>")
            $("#create_email").focus();
        }else if(password == ""){
            $("#create_password_message").html("<small class='text-danger font-weight-bold ml-2'>Please Enter Your password</small>")
            $("#create_password").focus();
        }else {
            // console.log("all Right")   
            var mydata = {name:name, email:email,
            password:password};
            
            //Ajax Call Here
            $.ajax({
                url:"insert.php",
                method:"POST",
                dataType:"json",
                data : JSON.stringify(mydata),
                success:function(data){
                    console.log(data);}
            })
            }
        }

        //cheking
        // console.log(name);
        // console.log(email);
        // console.log(password);

       



 ) 
}
create_account();
// Create Account Section End