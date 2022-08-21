let day_output = document.getElementById('day')
let date_output = document.getElementById('date')
let d = new Date()
let day = d.getDay();
// console.log(d.getHours()+":"+d.getMinutes()+":"+d.);
let full_date = d.toLocaleDateString()
switch (day) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
}
day_output.innerHTML = day;
date_output.innerHTML = full_date
let add_count=0;
let done_count1= 0;
let delet_count=0;
let remaining_count=0;
let done_count2=0
let temp=0;

document.querySelector('#Add_task').onclick = function () {

    if (document.querySelector('#task_input').value.length == 0) {
        document.getElementById('error').innerHTML = "You can't add blank task";
    }
    else {
        document.getElementById('default').style.display='none';
        document.getElementById('error').innerHTML = "";
        add_count++;
        //remaining_count++;
        let d = new Date()
        let hr=d.getHours();
        let mm=d.getMinutes();
        let ss=d.getSeconds();
        let ampm=hr>=12 ? 'Pm':'Am';
        hr%=12;
        if(hr==0){
        hr=12;}
        mm=mm<10 ? '0'+mm:mm;
        ss=ss<10 ? '0'+ss:ss;
        let time=(hr+":"+mm+":"+ss+" "+ampm)
        document.querySelector('#task_container').innerHTML += `
          <div class="task">
                    <div class="task_text">
                    ${document.querySelector('#task_input').value}
                    <span id="time"></span>
                    ${document.getElementsByClassName('.task').innerHTML=time}
                     
                   </div>
                <button class="done" id="done"><img src="logo_image/Done.png"></butoon>
                
                 <button class="delet" id="delet"><img src="logo_image/delete-icon-14.jpg
                    "></button>
               </div>
            
        `;
        document.getElementById('task_remaining_count').innerHTML = add_count;
        // document.getElementById('task_ramining_count').innerHTML =done_count;
        document.getElementById('task_input').value = "";
            remaining_count=add_count;
        var current_task = document.querySelectorAll(".delet");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
              this.parentNode.remove()
              delet_count++
              if(temp==0)
               remaining_count--;
              //if(delet_count<=add_count)
              //remaining_count=add_count-delet_count;
              //let remain= remaining_count<delet_count ?remaining_count:delet_count;
              if(remaining_count>=0){
              document.getElementById('task_remaining_count').innerHTML =remaining_count;
              temp=0;
              }
               if(remaining_count==0){
              add_count=0;
              document.getElementById('default').style.display='block';
              temp=0;

               }
             
             
            }
        }
        var done=document.querySelectorAll(".done");
        for (var i=0;i<done.length;i++)
        {
            done[i].onclick=function()
            {
                this.parentNode.style.backgroundColor='white';
                this.parentNode.style.color='gray';
                //console.log(this.parentNode);
                done_count1++;
                document.getElementById('task_done_count').innerHTML =done_count1;
                remaining_count--;
                if(remaining_count>=0){
                document.getElementById('task_remaining_count').innerHTML = remaining_count;
                temp=1;}
                if(remaining_count==0)
                {add_count=0;
                    temp=0;
                    document.getElementById('default').style.display='block';
                }
                
            }
                
        }

        // let allDelet=document.querySelectoraAll('#delet_all');
        // for (var i = 0; i < allDelet.length; i++) {
        // {
        //     all[i].onclick = function ()
        // }
    }

}

