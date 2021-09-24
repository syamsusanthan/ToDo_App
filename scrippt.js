
var ar=[];
var t=[];
var i=0;
var z;
function response(){
    var xhttp=new XMLHttpRequest();

    
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
           var res=JSON.parse(this.responseText);
          var myDiv=document.getElementById("result_area");
            var html_content="";
            var x="";
            z=res.length;
            
            for(i=0;i<res.length;i++){
                var out= res[i];
                x=out.title;
                var checkbox=document.createElement("input");
                checkbox.type="checkbox";
                ar[i]=checkbox;
                t[i]=out.completed;
            
                if(out.completed==true){
                    var label = document.createElement("label");
                    checkbox.setAttribute("checked","true");
                    checkbox.setAttribute("class","disabled");
                   
                   
                    myDiv.appendChild(checkbox);
                    myDiv.appendChild(label);
                    label.appendChild(document.createTextNode(x));
                    label.setAttribute("class","grey");
                }else{
                    var label = document.createElement("label");
                    label.setAttribute("class","active");
                    checkbox.removeAttribute("class","disabled");
                    myDiv.appendChild(checkbox);
                    myDiv.appendChild(label);
                    label.appendChild(document.createTextNode(x));
                    label.setAttribute("class","active1");
                }
                
                var linebreak=document.createElement("br");
                var hr=document.createElement("hr");
                                
            
                
                myDiv.appendChild(linebreak);
                myDiv.appendChild(hr);
                
                
            }
        
        
        
      
        
    }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
    }
// promise
function s(){
    var promise=new Promise(function(resolve,reject){
        var c=0;
        var j=0;
        var b=0;
        var w=0;
        for(j=0;j<200;j++){
            if(ar[j].checked){
                c++;
            
            }
            else{
                b++;
               
            }
            
        }
        if(b-c==10){
            resolve();
        }
        else{
            reject(b-c);
        }
    })
promise.then(function(){
    document.getElementById("ptag").innerHTML="Congrats you have successfully completed 5 TASKs" ;
    document.getElementById("mp3").setAttribute("src","audio/completion.wav");
    alert("You Are Completed The Fifth Task To Conform Click Ok");

}).catch(function(s){
    
    if(s==18){
        document.getElementById("ptag").innerHTML="4 Remaining task to complete 5 TASKs";
    }
    if(s==16){
        document.getElementById("ptag").innerHTML="3 Remaining task to complete 5 TASKs" ;
    }

    if(s==14){
        document.getElementById("ptag").innerHTML="2 Remaining task to complete 5 TASKs" ;
    }
    if(s==12){
        document.getElementById("ptag").innerHTML="1 Remaining task to complete 5 TASKs" ;
    }if(s==20){
        document.getElementById("ptag").innerHTML="Complete any 5 Tasks";
    }

});
}
function abc(){ 
        for(var k=0;k<200;k++){
            if(ar[k].checked && t[k]!=true){
              ar[k].checked=false;
              document.getElementById("del").setAttribute("src","audio/delete.wav");
              document.getElementById("ptag").innerHTML="Complete any 5 Tasks";
            }
        }
    }
    function select(){
        
        for(var k=0;k<200;k++){
            document.getElementById("ptag").innerHTML="You completed All Tasks";
              ar[k].checked=true;
             }
             document.getElementById("song").setAttribute("src","audio/select all.wav");
             alert("You Are Going To Select All The Task Click Ok To Continue");
    }
    