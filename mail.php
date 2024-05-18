<?php
if ($_SERVER['REQUEST_METHOD']=='POST') { 
    sendMail($_POST);
}

function sendMail($post){ 
    
    $admin = 'kamujutrinadh@gmail.com'; // admin mail send
    
    $admin_subject = 'New Booking request from '.$post['name'];
    $user_subject = 'Thank you for your booking with us.';
	
    //your site secret key
	/*$secret = '6LdA934pAAAAACa6dXN0OtDhV_EAfWCtk7jnWISm';
	//get verify response data
	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
	$responseData = json_decode($verifyResponse);

	if (!$responseData->success) {
		echo json_encode(['status'=>'error','message'=>"Recaptch error occured."]);exit;
	}*/
    
    
   $admin_headers = "MIME-Version: 1.0" . "\r\n";
   $admin_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
   // More headers
   #$admin_headers .= 'From: <'.$admin.'>';
    
    $get_adminbody = file_get_contents('emails/bookings/admin.html');
    $adminArr['{{session_mode}}'] = $post['session_mode'];
    $adminArr['{{name}}'] = $post['name'];
    $adminArr['{{name}}'] = $post['name'];
    $adminArr['{{email}}'] = $post['email'];
    $adminArr['{{mobile}}'] = $post['mobile'];
    $adminArr['{{qualification}}'] = $post['qualification'];
    $adminArr['{{city}}'] = $post['city'];
    $adminArr['{{message}}'] = $post['message'];
    $admin_body = str_replace(array_keys($adminArr),array_values($adminArr),$get_adminbody);

    $user_headers = "MIME-Version: 1.0" . "\r\n";
    $user_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // More headers
    #$user_headers .= 'From: <'.$post['email'].'>';
    
    $user_mailbody = file_get_contents('emails/bookings/user.html');

    #$user_mailbody = str_replace(array_keys($s),array_values($s),$get_mailbody);
    
	if(@mail($admin, $admin_subject, $admin_body, $admin_headers))
	{
    	@mail($post['email'], $user_subject, $user_mailbody, $user_headers);
    	echo json_encode(['status'=>'success','message'=>'Your request has been received successfully.']);
    }else{
        echo json_encode(['status'=>'error','message'=>'Unexpected error occured!. Please try again.']);
    }
} 
?>