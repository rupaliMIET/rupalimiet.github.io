var start = 0;
var tap_counter1=1;
question_time(0);
$("#testtube_button").click(e=>{
	if(start==0){
	question_time(0);
	var rbs = document.querySelectorAll('input[name="testtube"]');
            let rb1;
            for (var rb of rbs) {
                if (rb.checked) {
                    rb1 = rb.value;
                    break;
                }
            }
			
	rbs = document.querySelectorAll('input[name="Sample"]');
            let rb2;
            for (var rb of rbs) {
                if (rb.checked) {
                    rb2 = rb.value;
                    break;
                }
            }
	
	if(rb1==1 && rb2==1){
		testtube_purple();
		question_time(1);
		start=1;
	}
	else if(rb1==1 && rb2==2){
		alert("Please Choose Correct Measuring Cylinder Size");
	}
	else if(rb1==2 && rb2==2){
		testtube_blue();
		question_time(1);
		start=1;
	}
	else{
		alert("Please Choose Correct Measuring Cylinder Size");
	}
	}
	else{
	start=0;
	document.getElementById("led").innerHTML =`
	<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z" transform="translate(0.5 0.5)" id="Ellipse" fill="url(#gradient_1)" stroke="#000000" stroke-width="1" />
                        </svg>
	`;
	document.getElementById("testtube1").innerHTML ='';
	document.getElementById("testtube2").innerHTML ='';
	document.getElementById("testtubeholder").innerHTML ='';
    $("#obj1,#obj2").css({"animation-iteration-count":0});
	}})
	

$("#start_tap").click(e=>{
	if(start==1){
	var rbs = document.querySelectorAll('input[name="no_of_taps"]');
            let y;
            for (var rb of rbs) {
                if (rb.checked) {
                    y = rb.value;
                    break;
                }
            }
			if(tap_counter1!=y){
				alert("Choose No of Taps Correctly");
			}
			else{
				tap_counter1=tap_counter1+1;
			var x;
			if(y==1){
				x=10;
			}
			else if(y==2){
				x=500;
			}
			else if(y==3){
				x=1250;
			}
			else{
				x=0;
			}
	
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = x;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining ${remainingPathColor}"
        d="M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;
startTimer();
task(x);
$("#obj1,#obj2").css({"animation-iteration-count":Number.MAX_VALUE});


function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
}}})


function testtube_purple() {
  document.getElementById("testtube2").innerHTML =`
	
	 <?xml version="1.0" encoding="utf-8"?>
<svg width="17px" height="80px" viewBox="0 0 17 80" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>Created with Lunacy</desc>
  <g id="tt2" transform="translate(0.3999939 0.3999939)">
    <g id="g3780">
      <g id="g3000">
        <path d="M15.79 1.84067C15.79 2.23756 15.2512 2.60511 14.3348 2.90573L11.1135 2.90573C13.5198 2.71198 15.175 2.30783 15.175 1.84067C15.175 1.18506 11.915 0.65358 7.89401 0.65358C3.87399 0.65358 0.614014 1.18506 0.614014 1.84067C0.614014 2.30785 2.26916 2.71199 4.67505 2.90573L1.45494 2.90573C0.538679 2.60511 0 2.23756 0 1.84067C0 0.82407 3.534 0 7.89502 0C12.255 0 15.79 0.82411 15.79 1.84067ZM4.67505 2.90573C5.64565 2.98389 6.73843 3.02781 7.89401 3.02781C9.04984 3.02781 10.1428 2.98389 11.1135 2.90573L4.67505 2.90573ZM1.45494 2.90573C2.88555 3.37511 5.23663 3.68134 7.89502 3.68134C10.5528 3.68134 12.904 3.37512 14.3348 2.90573L15.112 2.90573L15.112 68.4124C15.112 68.4124 15.402 77.6056 7.90201 77.664C0.403015 77.7222 0.692993 68.4124 0.692993 68.4124L0.692993 2.90573L1.45494 2.90573Z" id="path3760-1" fill="#D3D3D3" fill-rule="evenodd" stroke="#000000" stroke-width="0.8" />
        <g id="g3874" transform="translate(1.000031 49)">
          <g id="g3878">
            <g id="path3862" transform="translate(0 1.071106)">
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="#EAE7CC" stroke="none" />
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="none" stroke="#000000" stroke-width="0.8" />
            </g>
            <path d="M14.1868 1.0344C14.1868 1.6057 11.0118 2.0688 7.09392 2.0688C3.17606 2.0688 0 1.6057 0 1.0344C0 0.463203 3.17606 0 7.09392 0C11.0118 0 14.1868 0.4631 14.1868 1.0344L14.1868 1.0344Z" transform="translate(0.03323364 0)" id="path3840" fill="#EAE7CC" stroke="#000000" stroke-width="0.743482" />
          </g>
        </g>
        <g id="g3829" transform="translate(1.597015 12.17149)">
          <path d="M0 0C1 0.658445 4.48199 1.13704 5.64899 0.964543" id="path3760" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658386 4.48199 1.13693 5.64899 0.964597" transform="translate(0 6.175599)" id="path3760-17" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658358 4.48199 1.13702 5.64899 0.964556" transform="translate(0 12.3512)" id="path3760-4" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 18.52679)" id="path3760-0" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658357 4.48199 1.13702 5.64899 0.964556" transform="translate(0 24.70241)" id="path3760-9" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658444 4.48199 1.13704 5.64899 0.964546" transform="translate(0 30.8741)" id="path3760-48" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 37.0497)" id="path3760-8" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658385 4.48199 1.13694 5.64899 0.964597" transform="translate(0 43.2253)" id="path3760-2" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 49.40089)" id="path3760-45" fill="none" stroke="#000000" stroke-width="0.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
	
`;

document.getElementById("testtube1").innerHTML =`
	
	 <?xml version="1.0" encoding="utf-8"?>
<svg width="17px" height="80px" viewBox="0 0 17 80" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <desc>Created with Lunacy</desc>
  <g id="tt2" transform="translate(0.3999939 0.3999939)">
    <g id="g3780">
      <g id="g3000">
        <path d="M15.79 1.84067C15.79 2.23756 15.2512 2.60511 14.3348 2.90573L11.1135 2.90573C13.5198 2.71198 15.175 2.30783 15.175 1.84067C15.175 1.18506 11.915 0.65358 7.89401 0.65358C3.87399 0.65358 0.614014 1.18506 0.614014 1.84067C0.614014 2.30785 2.26916 2.71199 4.67505 2.90573L1.45494 2.90573C0.538679 2.60511 0 2.23756 0 1.84067C0 0.82407 3.534 0 7.89502 0C12.255 0 15.79 0.82411 15.79 1.84067ZM4.67505 2.90573C5.64565 2.98389 6.73843 3.02781 7.89401 3.02781C9.04984 3.02781 10.1428 2.98389 11.1135 2.90573L4.67505 2.90573ZM1.45494 2.90573C2.88555 3.37511 5.23663 3.68134 7.89502 3.68134C10.5528 3.68134 12.904 3.37512 14.3348 2.90573L15.112 2.90573L15.112 68.4124C15.112 68.4124 15.402 77.6056 7.90201 77.664C0.403015 77.7222 0.692993 68.4124 0.692993 68.4124L0.692993 2.90573L1.45494 2.90573Z" id="path3760-1" fill="#D3D3D3" fill-rule="evenodd" stroke="#000000" stroke-width="0.8" />
        <g id="g3874" transform="translate(1.000031 49)">
          <g id="g3878">
            <g id="path3862" transform="translate(0 1.071106)">
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="#EAE7CC" stroke="none" />
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="none" stroke="#000000" stroke-width="0.8" />
            </g>
            <path d="M14.1868 1.0344C14.1868 1.6057 11.0118 2.0688 7.09392 2.0688C3.17606 2.0688 0 1.6057 0 1.0344C0 0.463203 3.17606 0 7.09392 0C11.0118 0 14.1868 0.4631 14.1868 1.0344L14.1868 1.0344Z" transform="translate(0.03323364 0)" id="path3840" fill="#EAE7CC" stroke="#000000" stroke-width="0.743482" />
          </g>
        </g>
        <g id="g3829" transform="translate(1.597015 12.17149)">
          <path d="M0 0C1 0.658445 4.48199 1.13704 5.64899 0.964543" id="path3760" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658386 4.48199 1.13693 5.64899 0.964597" transform="translate(0 6.175599)" id="path3760-17" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658358 4.48199 1.13702 5.64899 0.964556" transform="translate(0 12.3512)" id="path3760-4" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 18.52679)" id="path3760-0" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658357 4.48199 1.13702 5.64899 0.964556" transform="translate(0 24.70241)" id="path3760-9" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658444 4.48199 1.13704 5.64899 0.964546" transform="translate(0 30.8741)" id="path3760-48" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 37.0497)" id="path3760-8" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658385 4.48199 1.13694 5.64899 0.964597" transform="translate(0 43.2253)" id="path3760-2" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 49.40089)" id="path3760-45" fill="none" stroke="#000000" stroke-width="0.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
	
`;

document.getElementById("testtubeholder").innerHTML =`
<svg width="957" height="630" viewBox="0 0 957 630" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="slide-top-h1">
                        <g id="g5070_2">
                        <path id="path3222-1_2" fill-rule="evenodd" clip-rule="evenodd" d="M396.269 84.0581L396.219 75.0558L396.217 74.6457L396.034 74.6466C395.076 73.5472 390.35 72.7321 384.661 72.7604C378.971 72.7886 374.255 73.6505 373.309 74.7594L373.126 74.7603L373.129 75.1704L373.178 84.1727L396.269 84.0581L396.269 84.0581Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-4-6_2" fill-rule="evenodd" clip-rule="evenodd" d="M374.167 82.6106C374.16 81.387 379.019 80.3709 385.021 80.3412C391.022 80.3114 395.893 81.2791 395.9 82.5027C395.906 83.7263 391.047 84.7423 385.045 84.7721C379.044 84.8019 374.173 83.8341 374.167 82.6106Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-1_2" fill-rule="evenodd" clip-rule="evenodd" d="M384.848 85.0221C388.074 85.0061 391.086 84.8066 393.65 84.4742L401.848 84.4335L401.832 81.482L401.745 81.4825C401.726 79.5773 394.148 78.0705 384.81 78.1169C375.471 78.1632 367.905 79.7452 367.907 81.6504L367.836 81.6508L367.853 84.6022L376.041 84.5616C378.608 84.8686 381.622 85.0381 384.848 85.0221L384.848 85.0221Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-4_2" fill-rule="evenodd" clip-rule="evenodd" d="M367.811 84.1704C367.8 82.2377 375.469 80.6327 384.94 80.5857C394.411 80.5387 402.097 82.0674 402.108 84.0002C402.119 85.9329 394.45 87.5378 384.979 87.5849C375.508 87.6319 367.822 86.1031 367.811 84.1704Z" fill="black" stroke="black" stroke-width="0.999996" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-0-8_2" fill-rule="evenodd" clip-rule="evenodd" d="M374.562 84.3496C374.556 83.192 379.149 82.2307 384.822 82.2026C390.495 82.1744 395.099 83.09 395.106 84.2477C395.112 85.4053 390.519 86.3666 384.846 86.3947C379.173 86.4229 374.569 85.5072 374.562 84.3496Z" fill="black" stroke="black" stroke-width="0.999973" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g>
                        <g id="slide-top-h2">
                        <g id="g5070_3">
                        <path id="path3222-1_3" fill-rule="evenodd" clip-rule="evenodd" d="M347.161 78.8857L347.111 69.8834L347.109 69.4733L346.927 69.4742C345.969 68.3748 341.243 67.5598 335.553 67.588C329.864 67.6163 325.147 68.4781 324.201 69.587L324.019 69.5879L324.021 69.998L324.071 79.0003L347.161 78.8857L347.161 78.8857Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-4-6_3" fill-rule="evenodd" clip-rule="evenodd" d="M325.059 77.4382C325.052 76.2146 329.912 75.1986 335.913 75.1688C341.915 75.139 346.785 76.1068 346.792 77.3303C346.799 78.5539 341.939 79.57 335.938 79.5998C329.936 79.6295 325.066 78.6618 325.059 77.4382Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-1_3" fill-rule="evenodd" clip-rule="evenodd" d="M335.74 79.8498C338.966 79.8338 341.979 79.6343 344.542 79.3018L352.741 79.2611L352.724 76.3097L352.637 76.3101C352.618 74.405 345.04 72.8982 335.702 72.9445C326.364 72.9909 318.797 74.5728 318.8 76.4781L318.729 76.4784L318.745 79.4299L326.933 79.3892C329.5 79.6962 332.514 79.8658 335.74 79.8498L335.74 79.8498Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-4_3" fill-rule="evenodd" clip-rule="evenodd" d="M318.703 78.998C318.693 77.0653 326.362 75.4604 335.833 75.4134C345.303 75.3663 352.99 76.8951 353 78.8278C353.011 80.7605 345.342 82.3655 335.871 82.4125C326.4 82.4595 318.714 80.9308 318.703 78.998Z" fill="black" stroke="black" stroke-width="0.999996" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-0-8_3" fill-rule="evenodd" clip-rule="evenodd" d="M325.455 79.1773C325.448 78.0196 330.042 77.0584 335.715 77.0302C341.388 77.002 345.992 77.9177 345.998 79.0753C346.005 80.2329 341.411 81.1942 335.738 81.2224C330.065 81.2505 325.461 80.3349 325.455 79.1773Z" fill="black" stroke="black" stroke-width="0.999973" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g></svg>
						`;
						
document.getElementById("led").innerHTML =`
	<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z" transform="translate(0.5 0.5)" id="Ellipse" fill="url(#gradient_2)" stroke="#000000" stroke-width="1" />
                        </svg>
	`;
display_table(1);

}

function testtube_blue() {
  
document.getElementById("testtube1").innerHTML =`
<svg width="17px" height="80px" viewBox="0 0 17 80" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <g id="tt2" transform="translate(0.3999939 0.3999939)">
    <g id="g3780">
      <g id="g3000">
        <path d="M15.79 1.84067C15.79 2.23756 15.2512 2.60511 14.3348 2.90573L11.1135 2.90573C13.5198 2.71198 15.175 2.30783 15.175 1.84067C15.175 1.18506 11.915 0.65358 7.89401 0.65358C3.87399 0.65358 0.614014 1.18506 0.614014 1.84067C0.614014 2.30785 2.26916 2.71199 4.67505 2.90573L1.45494 2.90573C0.538679 2.60511 0 2.23756 0 1.84067C0 0.82407 3.534 0 7.89502 0C12.255 0 15.79 0.82411 15.79 1.84067ZM4.67505 2.90573C5.64565 2.98389 6.73843 3.02781 7.89401 3.02781C9.04984 3.02781 10.1428 2.98389 11.1135 2.90573L4.67505 2.90573ZM1.45494 2.90573C2.88555 3.37511 5.23663 3.68134 7.89502 3.68134C10.5528 3.68134 12.904 3.37512 14.3348 2.90573L15.112 2.90573L15.112 68.4124C15.112 68.4124 15.402 77.6056 7.90201 77.664C0.403014 77.7222 0.692992 68.4124 0.692992 68.4124L0.692992 2.90573L1.45494 2.90573Z" id="path3760-1" fill="#48D1FC" fill-rule="evenodd" stroke="#000000" stroke-width="0.8" />
        <g id="g3874" transform="translate(1.000031 49)">
          <g id="g3878">
            <g id="path3862" transform="translate(0 1.071106)">
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="#EAE7CC" stroke="none" />
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="none" stroke="#000000" stroke-width="0.8" />
            </g>
            <path d="M14.1868 1.0344C14.1868 1.6057 11.0118 2.0688 7.09392 2.0688C3.17606 2.0688 0 1.6057 0 1.0344C0 0.463203 3.17606 0 7.09392 0C11.0118 0 14.1868 0.4631 14.1868 1.0344L14.1868 1.0344Z" transform="translate(0.03323364 0)" id="path3840" fill="#EAE7CC" stroke="#000000" stroke-width="0.743482" />
          </g>
        </g>
        <g id="g3829" transform="translate(1.597015 12.17149)">
          <path d="M0 0C1 0.658445 4.48199 1.13704 5.64899 0.964543" id="path3760" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658386 4.48199 1.13693 5.64899 0.964597" transform="translate(0 6.175599)" id="path3760-17" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658358 4.48199 1.13702 5.64899 0.964556" transform="translate(0 12.3512)" id="path3760-4" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 18.52679)" id="path3760-0" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658357 4.48199 1.13702 5.64899 0.964556" transform="translate(0 24.70241)" id="path3760-9" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658444 4.48199 1.13704 5.64899 0.964546" transform="translate(0 30.8741)" id="path3760-48" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 37.0497)" id="path3760-8" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658385 4.48199 1.13694 5.64899 0.964597" transform="translate(0 43.2253)" id="path3760-2" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 49.40089)" id="path3760-45" fill="none" stroke="#000000" stroke-width="0.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
`;

document.getElementById("testtube2").innerHTML =`
<svg width="17px" height="80px" viewBox="0 0 17 80" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <g id="tt2" transform="translate(0.3999939 0.3999939)">
    <g id="g3780">
      <g id="g3000">
        <path d="M15.79 1.84067C15.79 2.23756 15.2512 2.60511 14.3348 2.90573L11.1135 2.90573C13.5198 2.71198 15.175 2.30783 15.175 1.84067C15.175 1.18506 11.915 0.65358 7.89401 0.65358C3.87399 0.65358 0.614014 1.18506 0.614014 1.84067C0.614014 2.30785 2.26916 2.71199 4.67505 2.90573L1.45494 2.90573C0.538679 2.60511 0 2.23756 0 1.84067C0 0.82407 3.534 0 7.89502 0C12.255 0 15.79 0.82411 15.79 1.84067ZM4.67505 2.90573C5.64565 2.98389 6.73843 3.02781 7.89401 3.02781C9.04984 3.02781 10.1428 2.98389 11.1135 2.90573L4.67505 2.90573ZM1.45494 2.90573C2.88555 3.37511 5.23663 3.68134 7.89502 3.68134C10.5528 3.68134 12.904 3.37512 14.3348 2.90573L15.112 2.90573L15.112 68.4124C15.112 68.4124 15.402 77.6056 7.90201 77.664C0.403014 77.7222 0.692992 68.4124 0.692992 68.4124L0.692992 2.90573L1.45494 2.90573Z" id="path3760-1" fill="#48D1FC" fill-rule="evenodd" stroke="#000000" stroke-width="0.8" />
        <g id="g3874" transform="translate(1.000031 49)">
          <g id="g3878">
            <g id="path3862" transform="translate(0 1.071106)">
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="#EAE7CC" stroke="none" />
              <path d="M14.1819 0L14.1819 19.5023C14.1819 19.5023 14.4669 28.2043 7.09114 28.2592C-0.283596 28.3143 0.00145534 19.5023 0.00145534 19.5023L0.00145534 0" id="Shape" fill="none" stroke="#000000" stroke-width="0.8" />
            </g>
            <path d="M14.1868 1.0344C14.1868 1.6057 11.0118 2.0688 7.09392 2.0688C3.17606 2.0688 0 1.6057 0 1.0344C0 0.463203 3.17606 0 7.09392 0C11.0118 0 14.1868 0.4631 14.1868 1.0344L14.1868 1.0344Z" transform="translate(0.03323364 0)" id="path3840" fill="#EAE7CC" stroke="#000000" stroke-width="0.743482" />
          </g>
        </g>
        <g id="g3829" transform="translate(1.597015 12.17149)">
          <path d="M0 0C1 0.658445 4.48199 1.13704 5.64899 0.964543" id="path3760" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658386 4.48199 1.13693 5.64899 0.964597" transform="translate(0 6.175599)" id="path3760-17" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658358 4.48199 1.13702 5.64899 0.964556" transform="translate(0 12.3512)" id="path3760-4" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 18.52679)" id="path3760-0" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658357 4.48199 1.13702 5.64899 0.964556" transform="translate(0 24.70241)" id="path3760-9" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658444 4.48199 1.13704 5.64899 0.964546" transform="translate(0 30.8741)" id="path3760-48" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 37.0497)" id="path3760-8" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.658385 4.48199 1.13694 5.64899 0.964597" transform="translate(0 43.2253)" id="path3760-2" fill="none" stroke="#000000" stroke-width="0.5" />
          <path d="M0 0C1 0.65839 4.48199 1.13694 5.64899 0.964597" transform="translate(0 49.40089)" id="path3760-45" fill="none" stroke="#000000" stroke-width="0.5" />
        </g>
      </g>
    </g>
  </g>
</svg>
`;

document.getElementById("testtubeholder").innerHTML =`
<svg width="957" height="630" viewBox="0 0 957 630" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="slide-top-h1">
                        <g id="g5070_2">
                        <path id="path3222-1_2" fill-rule="evenodd" clip-rule="evenodd" d="M396.269 84.0581L396.219 75.0558L396.217 74.6457L396.034 74.6466C395.076 73.5472 390.35 72.7321 384.661 72.7604C378.971 72.7886 374.255 73.6505 373.309 74.7594L373.126 74.7603L373.129 75.1704L373.178 84.1727L396.269 84.0581L396.269 84.0581Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-4-6_2" fill-rule="evenodd" clip-rule="evenodd" d="M374.167 82.6106C374.16 81.387 379.019 80.3709 385.021 80.3412C391.022 80.3114 395.893 81.2791 395.9 82.5027C395.906 83.7263 391.047 84.7423 385.045 84.7721C379.044 84.8019 374.173 83.8341 374.167 82.6106Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-1_2" fill-rule="evenodd" clip-rule="evenodd" d="M384.848 85.0221C388.074 85.0061 391.086 84.8066 393.65 84.4742L401.848 84.4335L401.832 81.482L401.745 81.4825C401.726 79.5773 394.148 78.0705 384.81 78.1169C375.471 78.1632 367.905 79.7452 367.907 81.6504L367.836 81.6508L367.853 84.6022L376.041 84.5616C378.608 84.8686 381.622 85.0381 384.848 85.0221L384.848 85.0221Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-4_2" fill-rule="evenodd" clip-rule="evenodd" d="M367.811 84.1704C367.8 82.2377 375.469 80.6327 384.94 80.5857C394.411 80.5387 402.097 82.0674 402.108 84.0002C402.119 85.9329 394.45 87.5378 384.979 87.5849C375.508 87.6319 367.822 86.1031 367.811 84.1704Z" fill="black" stroke="black" stroke-width="0.999996" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-0-8_2" fill-rule="evenodd" clip-rule="evenodd" d="M374.562 84.3496C374.556 83.192 379.149 82.2307 384.822 82.2026C390.495 82.1744 395.099 83.09 395.106 84.2477C395.112 85.4053 390.519 86.3666 384.846 86.3947C379.173 86.4229 374.569 85.5072 374.562 84.3496Z" fill="black" stroke="black" stroke-width="0.999973" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g>
                        <g id="slide-top-h2">
                        <g id="g5070_3">
                        <path id="path3222-1_3" fill-rule="evenodd" clip-rule="evenodd" d="M347.161 78.8857L347.111 69.8834L347.109 69.4733L346.927 69.4742C345.969 68.3748 341.243 67.5598 335.553 67.588C329.864 67.6163 325.147 68.4781 324.201 69.587L324.019 69.5879L324.021 69.998L324.071 79.0003L347.161 78.8857L347.161 78.8857Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-4-6_3" fill-rule="evenodd" clip-rule="evenodd" d="M325.059 77.4382C325.052 76.2146 329.912 75.1986 335.913 75.1688C341.915 75.139 346.785 76.1068 346.792 77.3303C346.799 78.5539 341.939 79.57 335.938 79.5998C329.936 79.6295 325.066 78.6618 325.059 77.4382Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-1_3" fill-rule="evenodd" clip-rule="evenodd" d="M335.74 79.8498C338.966 79.8338 341.979 79.6343 344.542 79.3018L352.741 79.2611L352.724 76.3097L352.637 76.3101C352.618 74.405 345.04 72.8982 335.702 72.9445C326.364 72.9909 318.797 74.5728 318.8 76.4781L318.729 76.4784L318.745 79.4299L326.933 79.3892C329.5 79.6962 332.514 79.8658 335.74 79.8498L335.74 79.8498Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-4_3" fill-rule="evenodd" clip-rule="evenodd" d="M318.703 78.998C318.693 77.0653 326.362 75.4604 335.833 75.4134C345.303 75.3663 352.99 76.8951 353 78.8278C353.011 80.7605 345.342 82.3655 335.871 82.4125C326.4 82.4595 318.714 80.9308 318.703 78.998Z" fill="black" stroke="black" stroke-width="0.999996" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="path3222-9-7-0-8_3" fill-rule="evenodd" clip-rule="evenodd" d="M325.455 79.1773C325.448 78.0196 330.042 77.0584 335.715 77.0302C341.388 77.002 345.992 77.9177 345.998 79.0753C346.005 80.2329 341.411 81.1942 335.738 81.2224C330.065 81.2505 325.461 80.3349 325.455 79.1773Z" fill="black" stroke="black" stroke-width="0.999973" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </g></svg>
						`;

document.getElementById("led").innerHTML =`
	<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z" transform="translate(0.5 0.5)" id="Ellipse" fill="url(#gradient_2)" stroke="#000000" stroke-width="1" />
                        </svg>
	`;
	display_table(1);
}

function ok_click(i){
	if(i==5){
		question_time(5);
	}
	else if(i==1){
		question_time(2);
	}
		document.getElementById("result_table").innerHTML ="";
		document.getElementById("calc_time").innerHTML = "";
	}
	
function result_click(){
	var a = document.getElementById("bulk").value;
	var b = document.getElementById("tapped").value;
	var rbs = document.querySelectorAll('input[name="Sample"]');
            for (var rb of rbs) {
                if (rb.checked) {
                    y = rb.value;
                    break;
                }
            }
			var z;
			if(y==1){
				z=15;
			}
			else if(y==2){
				z=50;
			}
		
		document.getElementById("calc_time").innerHTML =`
		<div id="calc_time_form">
		<p style="font-size:40px; font-weight: bold; text-align:center;">Result</p><br>
		<table>
		<tr><th style="width:25rem; height:5rem; font-size:30px; font-weight: bold;">Bulk Density</th>
		<th style="width:25rem; font-size:30px; font-weight: bold;">Tapped Density</th>
		</tr>
		<tr><td style="height:5rem; font-size:25px; font-weight: bold;">`+z/a+`</td>
		<td style="height:5rem; font-size:25px; font-weight: bold;">`+z/b+`</td>
		</tr>
		</table><br>
	<button id="ok_btn" onclick="ok_click(5)">Close</button>
				</div>
		`;
		
	}

$("#start_calc").click(e=>{
	document.getElementById("calc_time").innerHTML =`
	<div id="calc_time_form">
	<form>
                <label style="font-size:40px; font-weight: bold;">Calculation Time</label><br><br>
				<label style="font-size:20px; font-weight: bold;">Enter Bulk Volume Obtained</label><br><br>
                <input type="text" id="bulk" name="Bulk" placeholder="Bulk Volume..">
				<label style="font-size:20px; font-weight: bold;">Enter Tapped Volume Obtained</label><br><br>
                <input type="text" id="tapped" name="Tapped" placeholder="Tapped Volume..">
                </form><button id="ok_btn" onclick="result_click()">RESULT</button>
				</div>
	`;
	})


function display_table(i){
	var rbs = document.querySelectorAll('input[name="powder"]');
            let y;
            for (var rb of rbs) {
                if (rb.checked) {
                    y = rb.value;
                    break;
                }
            }
			var x;
			if(y==2){
				x="Sodium subcarbonate(Light)";
			}
			else if(y==3){
				x="Magnesium Carbonate(Heavy)";
			}
			else if(y==4){
				x="Talc";
			}
			else{
				x="Sodium subcarbonate(Heavy)";
			}
			
			var rbs = document.querySelectorAll('input[name="Sample"]');
            for (var rb of rbs) {
                if (rb.checked) {
                    y = rb.value;
                    break;
                }
            }
			var z;
			if(y==1){
				z="15mg";
			}
			else if(y==2){
				z="50mg";
			}
			var r1;
			var r2;
			var r3;
			var r4;
			var oc="4";
			if(z=="15mg"){
				if(x=="Sodium subcarbonate(Heavy)"){
					r1="14.85";
					r2="10.40";
					r3="9.39";
					r4="7.24";
				}
				else if(x=="Sodium subcarbonate(Light)"){
					r1="68.18";
					r2="56.14";
					r3="33.00";
					r4="31.25";
				}
				else if(x=="Magnesium Carbonate(Heavy)"){
					r1="38.46";
					r2="26.13";
					r3="17.44";
					r4="15.82";
				}
				else if(x=="Talc"){
					r1="31.25";
					r2="21.87";
					r3="18.75";
					r4="16.40";
				}
			}
			else if(z=="50mg"){
				if(x=="Sodium subcarbonate(Heavy)"){
					r1="48.50";
					r2="34.67";
					r3="26.31";
					r4="24.13";
				}
				else if(x=="Sodium subcarbonate(Light)"){
					r1="236.27";
					r2="221.53";
					r3="101.59";
					r4="100.00";
				}
				else if(x=="Magnesium Carbonate(Heavy)"){
					r1="132.20";
					r2="117.34";
					r3="61.72";
					r4="59.97";
				}
				else if(x=="Talc"){
					r1="104.17";
					r2="72.90";
					r3="62.502";
					r4="54.67";
				}
			}
			if(i==1){
				r2="0";
				r3="0";
				r4="0";
				oc="1";
			}
			else if(i==2){
				r3="0";
				r4="0";
				oc="2";
			}
			else if(i==3){
				r4="0";
				oc="3";
			}
			
			
	var content=`
						<table>
						<tr>
						<th colspan="4" style="width:60rem; height:5rem; text-align: center ; background-color: #0055FF; color:white; font-size:35px;">Observation Table</th></tr>
						<tr>
						<td colspan="4" style="height:5rem; text-align: center ; background-color: #E8E8E8; color:Black; font-size:25px;" >Sample Used: `+x+"("+z+")"+`</td></tr>
						<tr style="height:5rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:20px; font-weight: bold;">
						<td>Bulk Volume</td>
						<td>Tapped Volume <br>After 10Taps</td>
						<td>Tapped Volume <br>After 500Taps</td>
						<td>Tapped Volume <br>After 1250Taps</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td>`+r1+"ml"+`</td>
						<td>`+r2+"ml"+`</td>
						<td>`+r3+"ml"+`</td>
						<td>`+r4+"ml"+`</td>
						</tr>
						<tr style="height:7rem; text-align: center ; background-color: #E8E8E8; color:darkblue; font-size:30px; font-weight: bold;">
						<td colspan="4">
			<button id="ok_btn" onclick="ok_click(`+oc+`)">OK</button>
						</td>
						</tr>
						
						</table>
	`;
	document.getElementById("result_table").innerHTML =content;
}



function task(i) { 
  setTimeout(function() { 
      $("#obj1,#obj2").css({"animation-iteration-count":0});
	  if(i==10){
		  question_time(3);
		  display_table(2);
	  }
	  else if(i==500){
		  display_table(3);
	  }
	  else if(i==1250){
		  question_time(4);
		  display_table(4);
	  }
      // Add tasks to do 
  }, 1000*i); 
}

function question_time(i){
	document.getElementById("question_box").innerHTML =`
	<div id="questions">
						<div class="quiz-box custom-box ">
	<div class="question-number hide">

	</div>
	<div class="question-text">

	</div>
	<div class="option-container">

	</div>
	<div class="next-question-btn">
		<button type="button" class="btn" onclick="next()">Next</button>
	</div>
	<div class="answers-indicator">
	</div>
</div>
</div>
	`;
	question_func(i);
}

var currentQuestion;

function question_func(ques_number){
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0 ;

let availableQuestions = [];
let availableOptions = [];


// Push the // QUESTION:  into availableQuestion Array
function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i = 0 ; i<totalQuestion; i++){
    availableQuestions.push(quiz[i])
  }
}

function getNewQuestion(){
 // set question number
 questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

 // set question questionText
 // get random question


  const questionIndex = availableQuestions[ques_number];

 currentQuestion = questionIndex;
 questionText.innerHTML = currentQuestion.q;

 // get the position of 'questionIndex' from the availableQuestion Array;

 const index1 = availableQuestions.indexOf(ques_number);
 // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat again

 availableQuestions.splice(index1,1);

// set options
// get the length of options

const optionlen = currentQuestion.options.length
// push options into availableOptions Array

for(let i =0 ; i< optionlen ; i++){
  availableOptions.push(i)
}

optionContainer.innerHTML = '';
 let animationDelay = 0.2;

 // create options in HTML

 for(let i =0 ; i < optionlen; i++){
   // random opton
   const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
   // get the position of 'optonIndex' from the availableOptions
   const index2 = availableOptions.indexOf(optonIndex);

  // remove the 'optionIndex' from the availableOptions, so that the option does not repeat

  availableOptions.splice(index2,1);



   const option = document.createElement("div");
   option.innerHTML = currentQuestion.options[optonIndex];
   option.id = optonIndex;
   option.style.animationDelay = animationDelay + 's';
   animationDelay = animationDelay + 0.2;


   option.className = "option";
   optionContainer.appendChild(option)
   option.setAttribute("onclick","getResult(this)");
 }
 questionCounter++
}

// get the result of current attempt question


 setAvailableQuestions();
  getNewQuestion();
	
}
function getResult(element){
  const id = parseInt(element.id);
  // get the answer by comparsing the id of clicked option
  if(id === currentQuestion.answer){
    // set the green color to the correct option
    element.classList.add("correct");
  }
  else{
    // set the red color for wrong answer
    element.classList.add("wrong");
  }
}

function next(){
	document.getElementById("question_box").innerHTML ="";
}