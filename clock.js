
function time() {
      let date = new Date();
      let b = date.getHours(12);
      let para1 = document.getElementById('para1').innerHTML = b + ':';

      let c = date.getMinutes();
      let para2 = document.getElementById('para2').innerHTML = c + ':';

      let d = date.getSeconds();
      let para3 = document.getElementById('para3').innerHTML = d;

      if (b<=12) {
            document.getElementById('para4').innerHTML='AM';
      }
      else{
            document.getElementById('para4').innerHTML='PM';
            
      }

}
      function result(){

            setInterval(time);
      };

      result();