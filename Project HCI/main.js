function validationForm()
{
    let fullname = document.getElementById("fullname").value;
    let Gmail = document.getElementById("Gmail").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let datefrom = document.getElementById("datefrom").value;
    let dateto = document.getElementById("dateto").value;
    let room1checked = document.getElementById("room1");
    let room2checked = document.getElementById("room2");
    let room3checked = document.getElementById("room3");
    let yeschecked = document.getElementById("yes");
    let nochecked = document.getElementById("no");
}

if(fullname.length < 6){
  document.getElementById("errorFullName").innerHTML = "Full name must be more than 6 letters";
} else{
    document.getElementById("errorFullName").innerHTML ="";
}

  if(Gmail.endsWith("gmail.com") == false){
    document.getElementById("errorGmail").innerHTML = "Email must be end with gmail.com";
}else{
    document.getElementById("errorGmail").innerHTML = "";
}

  if(phonenumber.length < 7){
    document.getElementById("errorPhoneNumber").innerHTML = "Phone Number are too short";
  }else if(phonenumber.length > 15){
    document.getElementById("errorPhoneNumber").innerHTML = "Phone Number are too long";
  }else{
      document.getElementById("errorPhoneNumber").innerHTML ="";
  }

if(dateto > datefrom){
    document.getElementById("errorDate").innerHTML = "Check out date must not be earlier than check in date";
} else{
    document.getElementById("errorDate").innerHTML ="";
}

if(room1checked.checked == false && room2checked.checked == false && room3checked.checked == false){
    document.getElementById("errorRoom").innerHTML = "Please select at least one type of rooms";
} else{
    document.getElementById("errorRoom").innerHTML ="";
}

if(yeschecked.checked == false && nochecked.checked==false){
    document.getElementById("errorYesNo").innerHTML = "Please answer with one of the following choices";
} else{
    document.getElementById("errorYesNo").innerHTML ="";
}