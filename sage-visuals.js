(() => {
  const main = document.querySelector('main');
  const live = document.querySelector('.deployments');
  const work = document.querySelector('#work');
  const about = document.querySelector('#about');
  main.insertBefore(live, work);
  main.insertBefore(about, work);
  const art = document.createElement('div');
  art.className = 'cricket-diagram';
  art.setAttribute('aria-hidden', 'true');
  art.innerHTML = '<svg viewBox="0 0 470 430" fill="none"><ellipse cx="235" cy="215" rx="205" ry="205"/><ellipse cx="235" cy="215" rx="176" ry="176"/><ellipse class="dashed" cx="235" cy="215" rx="135" ry="135"/><path d="M215 135h40v160h-40zM204 150h62M204 280h62M228 130v25m7-25v25m7-25v25M228 275v25m7-25v25m7-25v25"/><g><circle cx="104" cy="193" r="3"/><circle cx="181" cy="66" r="3"/><circle cx="304" cy="335" r="3"/></g></svg>';
  document.querySelector('.hero-note').prepend(art);
  const thumbs = [
    '<div class="device phone"><div class="device-bar"></div><div class="phone-line"></div><i></i><i></i><i></i><i></i></div>',
    '<div class="device dashboard"><div class="device-bar"></div><div class="dashboard-panels"><i></i><i></i><i></i></div><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="dashboard-panels"><i></i><i></i><i></i></div></div>',
    '<div class="device club-screen"><div class="device-bar"></div><div class="club-landscape"><i></i><b></b></div><div class="phone-line"></div><div class="phone-line"></div></div>',
    '<div class="device quiz-screen"><div class="quiz-check">✓</div><div class="phone-line"></div><i></i><i></i><i></i></div>'
  ];
  live.querySelectorAll('.deployment-list > a').forEach((link, index) => {
    const visual = document.createElement('div');
    visual.className = 'live-thumbnail thumb-' + index;
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = thumbs[index];
    link.prepend(visual);
  });
})();
