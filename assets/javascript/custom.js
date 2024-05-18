$(".bookSession").validate({
errorPlacement: function(error, element) {
    if (element.attr("name") == "session_mode" )
        error.insertAfter("#error_session_mode");
    else
        error.insertAfter(element);
    },
rules: {
    session_mode:{
        required:true
    },
    name:{
        required:true
    },
    email:{
        required:true
    },
    mobile:{
        required:true
    },
    city:{
        required:true
    },
    qualification:{
        required:true
    },
    },
    messages:{
        session_mode:{
            required:"Please select session mode.",
        },
        name:{
            required:"Name is required.",
        },
        email:{
            required:"Name is required.",
        },
        mobile:{
            required:"Mobile is required.",
        },
        city:{
            required:"City is required.",
        },
        qualification:{
            required:"Qualification is required.",
        },
},
submitHandler: function() {
event.preventDefault();
const form = $('#bookSession')[0];
const formData = new FormData(form);
$.ajax({
    url: $("#bookSession").attr('action'),
    method: "POST",
    data: formData,
    cache:false,
    contentType: false,
    processData: false,
    success: function (response) {
        form.reset();
        if (response.status == 'success') {
            Message.add(response.message, {type: 'success'});
        }else{
            Message.add(response.message, {type: 'error'});
        }
    },
    error: function(data) {
        Message.add(response.message, {type: 'error'});
    },
});
}
});