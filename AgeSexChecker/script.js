function verify()
   {
   var data = new Date()
   var year = data.getFullYear()
   var fyear = document.getElementById('txtyear')
   var res = document.getElementById('res')


   if (fyear.value.length == 0 || Number(fyear.value) > year ){
      window.alert('Verify the data and try again')
   } else {
      var fsex = document.getElementsByName('radsex')
      var age = year - Number(fyear.value)
      var gender = '' 
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')


   if (fsex[0].checked) {
         gender = 'Male'
   if (age >=0 && age < 10) {
       //male child 
       img.setAttribute('src','malebaby.png')
      } else if (age < 21){
         //Young 
       img.setAttribute('src', 'youngmale.png')
      } else if  (age < 50){
         //Adult
         img.setAttribute('src','adultman.png')
       } else {
        //Elderly
         img.setAttribute('src','elderlymale.png')
       }
      } else if (fsex[1].checked){
         gender = 'Female'
           if (age >=0 && age < 10) {
            //female child 
            img.setAttribute('src', 'femalebaby.png')
           }else if (age < 21){
              //Young 
            img.setAttribute('src', 'youngwoman.png')
           }else if (age < 50){
              //Adult
            img.setAttribute('src','adultwoman.png')
            } else {
             //Elderly
            img.setAttribute('src','elderlywoman.png')
            }
         }
      res.style.textAlign = 'center'
      res.innerHTML = `We detected ${gender} with ${age} years old.`
      res.appendChild(img)
   }
}