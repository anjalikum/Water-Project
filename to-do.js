var cardContainer1 = $('.card-container1');
var submit1 = $('.submit-btn1');

submit1.on("click", appendWaterStorage1);
submit1.on("click", appendCalculation1);
submit1.on("click", appendCalculation5);
var totalMorningDuration =0;
function appendWaterStorage1() {
  var time1 = $('.time1').val();
  var activity1 = $('.activity1').val();
  var duration1 = $('.duration1').val();
    if (duration1 == 1) {
        cardContainer1.append(`<p class="name-card1">At ${time1} I used water to ${activity1} for ${duration1} minute.</p>
        `);
    } else {
        cardContainer1.append(`
        <p class="name-card1">At ${time1} I used water to ${activity1} for ${duration1} minutes.</p>
        `);
    }

    totalMorningDuration+=duration1;
    $('.time1').val("");
    $('.activity1').val("");
    $('.duration1').val("");
  }

function appendCalculation1() {
  console.log("here")
  var max1 = totalMorningDuration * 0.236588;
  console.log(max1 + "litersMorning")
  $("#litersMorning").text(`I used ≈${max1} liters of water this morning.`);
  }





  var cardContainer2 = $('.card-container2');
  var submit2 = $('.submit-btn2');

  submit2.on("click", appendWaterStorage2);
  submit2.on("click", appendCalculation2);
  submit2.on("click", appendCalculation5);
  var totalAfternoonDuration =0;
  function appendWaterStorage2() {
    var time2 = $('.time2').val();
    var activity2 = $('.activity2').val();
    var duration2 = $('.duration2').val();
      if (duration2 == 1) {
          cardContainer2.append(`
          <p class="name-card2">At ${time2} I used water to ${activity2} for ${duration2} minute.</p>
          `);
      } else {
          cardContainer2.append(`
          <p class="name-card2">At ${time2} I used water to ${activity2} for ${duration2} minutes.</p>
          `);
      }

      totalAfternoonDuration+=duration2;
      $('.time2').val("");
      $('.activity2').val("");
      $('.duration2').val("");
    }

  function appendCalculation2() {
    console.log("here")
    var max2 = totalAfternoonDuration * 0.236588;
    console.log(max2 + "litersAfternoon")
    $("#litersAfternoon").text(`I used ≈${max2} liters of water this afternoon.`);
    }





    var cardContainer3 = $('.card-container3');
    var submit3 = $('.submit-btn3');

    submit3.on("click", appendWaterStorage3);
    submit3.on("click", appendCalculation3);
    submit3.on("click", appendCalculation5);
    var totalEveningDuration =0;
    function appendWaterStorage3() {
      var time3 = $('.time3').val();
      var activity3 = $('.activity3').val();
      var duration3 = $('.duration3').val();
        if (duration3 == 1) {
            cardContainer3.append(`
            <p class="name-card3">At ${time3} I used water to ${activity3} for ${duration3} minute.</p>
            `);
        } else {
            cardContainer3.append(`
            <p class="name-card3">At ${time3} I used water to ${activity3} for ${duration3} minutes.</p>
            `);
        }

        totalEveningDuration+=duration3;
        $('.time3').val("");
        $('.activity3').val("");
        $('.duration3').val("");
      }

    function appendCalculation3() {
      console.log("here")
      var max3 = totalEveningDuration * 0.236588;
      console.log(max3 + "litersEvening")
      $("#litersEvening").text(`I used ≈${max3} liters of water this evening.`);
      }





      var cardContainer4 = $('.card-container4');
      var submit4 = $('.submit-btn4');

      submit4.on("click", appendWaterStorage4);
      submit4.on("click", appendCalculation4);
      submit4.on("click", appendCalculation5);
      var totalNightDuration =0;
      function appendWaterStorage4() {
        var time4 = $('.time4').val();
        var activity4 = $('.activity4').val();
        var duration4 = $('.duration4').val();
          if (duration4 == 1) {
              cardContainer4.append(`
              <p class="name-card4">At ${time4} I used water to ${activity4} for ${duration4} minute.</p>
              `);
          } else {
              cardContainer4.append(`
              <p class="name-card4">At ${time4} I used water to ${activity4} for ${duration4} minutes.</p>
              `);
          }

          totalNightDuration+=duration4;
          $('.time4').val("");
          $('.activity4').val("");
          $('.duration4').val("");
        }

      function appendCalculation4() {
        console.log("here")
        var max4 = totalNightDuration * 0.236588;
        console.log(max4 + "litersNight")
        $("#litersNight").text(`I used ≈${max4} liters of water this night.`);
        }



      var totalDuration =0;

      totalDuration+=totalMorningDuration+=totalAfternoonDuration+=totalEveningDuration+=totalNightDuration;
      $('.duration1').val("");
      $('.duration2').val("");
      $('.duration3').val("");
      $('.duration4').val("");

      function appendCalculation5() {
          console.log("here")
          var max5 = (totalMorningDuration * 0.236588) + (totalAfternoonDuration * 0.236588) + (totalEveningDuration * 0.236588) + (totalNightDuration * 0.236588);
          console.log(max5 + "total")
          $("#total").text(`In total, I used ≈${max5} liters of water today.`);
          }
