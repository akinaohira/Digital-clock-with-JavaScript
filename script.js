'use strict';

{
  function showClock() {
    let now = new Date(); // 現在時刻を取得
    let hour = now.getHours(); // 時間を取得
    let min = now.getMinutes(); // 分を取得
    let sec = now.getSeconds(); //秒を取得
    let ms = now.getMilliseconds();
    let ampm;

    if (hour < 12) {
      ampm = 'AM';
    } else {
      ampm = 'PM';
    }

    // 時間を0-12で表示させるため
    hour = hour % 12;
    if (hour === 0) {
      hour = 12;
    }

    hour = `${hour}`.padStart(2, '0');
    min = `${min}`.padStart(2, '0');
    sec = `${sec}`.padStart(2, '0');
    ms = `${ms}`.padStart(3, '0');

    // clockに取得した時間を代入
    let clock = `${ampm} ${hour} : ${min} : ${sec} . ${ms} `;
    document.getElementById('realTime').textContent = clock;

    setTimeout(showClock, 100);
  }

  showClock();
}
