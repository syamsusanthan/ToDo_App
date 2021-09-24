// callback
function verify(callback){
        var user=document.getElementById("inp");
        var pw=document.getElementById("pas");
        var nouser=document.getElementById("userlab");
        var nopw=document.getElementById("paslab");
        var str=/admin/;
        var pas=/12345/;
        
        var c=0;
        var x;
        var y;
        if(user.value.trim()==""){
            nouser.innerHTML="This field can not be empty";
            nouser.style.color="red";
            nouser.style.fontSize="13px";
            nouser.style.fontStyle="italic";
             x=0;
        }
        if(pw.value.trim()==""){
            nopw.innerHTML="This field can not be empty";
            nopw.style.color="red";
            nopw.style.fontSize="13px";
            nopw.style.fontStyle="italic";
             y=0;
        }
        if(user.value.trim()!=""){
            if(user.value.length<6){
                if(str.test(user.value)){
                    x=1;
                    nouser.innerHTML="";
                }
                else{
                    x=0;
                    nouser.style.color="red";
                nouser.innerHTML="Username entered is not valid";
                nouser.style.fontSize="13px";
                nouser.style.fontStyle="italic";
                }
                
            }
            else{
                x=0;
                nouser.style.color="red";
                nouser.innerHTML="Username entered is not valid";
                nouser.style.fontSize="13px";
                nouser.style.fontStyle="italic";
            }
        }
        if(pw.value.trim()!=""){
            if(pw.value.length<6){
                if(pas.test(pw.value)){
                    y=1;
                    nopw.innerHTML="";
                }else{
                    nopw.style.color="red";
                    nopw.innerHTML="Wrong password";
                    nopw.style.fontSize="13px";
                    nopw.style.fontStyle="italic";
                    y=0;
                }
            }
            else{
                y=0;
                nopw.style.color="red";
                nopw.innerHTML="Wrong password";
                nopw.style.fontSize="13px";
                nopw.style.fontStyle="italic";
            }
        }
        if(x==1&&y==1){
               var z=callback();
               if(z==true){
                   return true;
               }
        }
        else{
            return false;
        }
}
function find(){
    return true;
}