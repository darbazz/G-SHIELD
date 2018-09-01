// icon set

function Icons() {

  // general style for buttons
  function btnStyle(button) {
    const style = button.style;

    style.width = '50px';
    style.height = '50px';
    style.padding = '0';
    style.boxSizing = 'border-box';
  }


  // icon names

  const closeBtn    = document.createElement('div');
  const infoBtn     = document.createElement('div');
  const restartBtn  = document.createElement('div');
  const zoomBtn     = document.createElement('div');


  btnStyle(closeBtn);
  btnStyle(infoBtn);
  btnStyle(restartBtn);
  btnStyle(zoomBtn);

  const close = '<svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Icons" transform="translate(-108.000000, -43.000000)" stroke="#FFFFFF" stroke-width="3"><g id="Group-4" transform="translate(110.000000, 45.000000)"><circle id="Oval-2" cx="25" cy="25" r="25"></circle><path d="M13.5,14.5 L37.5,36.5" id="Line-4" stroke-linecap="square"></path><path d="M13.5,14.5 L37.5,36.5" id="Line-4-Copy" stroke-linecap="square" transform="translate(25.500000, 25.500000) scale(1, -1) translate(-25.500000, -25.500000) "></path></g></g></g></svg>';


  const restart = '<svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Icons" transform="translate(-38.000000, -43.000000)">g id="Group" transform="translate(40.000000, 45.000000)"><circle id="Oval-2-Copy-4" stroke="#FFFFFF" stroke-width="3" cx="25" cy="25" r="25"></circle><path d="M37.3937438,29.3565788 C35.7683668,34.3728416 31.0577675,38 25.5,38 C18.5964406,38 13,32.4035594 13,25.5 C13,18.5964406 18.5964406,13 25.5,13 C30.0450607,13 34.0235583,15.425745 36.2114728,19.0532151 L36.970375,20.1937468 C37.2509913,20.6154767 37.5940654,20.9921147 37.9878485,21.3107626 L38.0030837,21.323091" id="Oval-2-Copy-6" stroke="#FFFFFF" stroke-width="3"></path><polygon id="Triangle-2" fill="#FFFFFF" transform="translate(37.482899, 22.041852) rotate(147.000000) translate(-37.482899, -22.041852) " points="37.4828991 17.5418518 43.4828991 26.5418518 31.4828991 26.5418518"></polygon></g></g></g></svg>';

  const info =
        '<svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
        '<g id="Icons" transform="translate(-190.000000, -43.000000)">' +
           '<g id="Group-3" transform="translate(192.000000, 45.000000)">' +
                '<circle id="Oval-2-Copy" stroke="#FFFFFF" stroke-width="3" cx="25" cy="25" r="25"></circle>' +
                '<path d="M30.25,33.1796875 C30.6718771,33.4296887 30.8828125,33.6718738 30.8828125,33.90625 C30.8828125,34.4687528 30.2031318,35.5781167 28.84375,37.234375 C27.0156159,39.4843863 25.3203203,40.609375 23.7578125,40.609375 C22.6171818,40.609375 22.046875,39.8515701 22.046875,38.3359375 C22.046875,37.6953093 22.2812477,35.726579 22.75,32.4296875 L23.6640625,26.0546875 L23.8984375,24.4375 L24.0859375,23.1484375 C24.1640629,22.6015598 24.203125,22.1406269 24.203125,21.765625 C24.203125,20.9843711 23.9843772,20.59375 23.546875,20.59375 C22.3281189,20.59375 21.015632,21.9374866 19.609375,24.625 C19.3124985,24.3593737 19.1640625,24.0937513 19.1640625,23.828125 C19.1640625,22.8749952 20.04296,21.593758 21.8007812,19.984375 C23.5586025,18.374992 24.9609323,17.5703125 26.0078125,17.5703125 C27.1796934,17.5703125 27.765625,18.3828044 27.765625,20.0078125 C27.765625,20.3203141 27.7031256,20.9609327 27.578125,21.9296875 L27.3671875,23.5 C27.3515624,23.6250006 27.2656258,24.2578068 27.109375,25.3984375 L26.1484375,32.1015625 L25.9140625,33.6015625 C25.7109365,35.0859449 25.609375,36.0781225 25.609375,36.578125 C25.609375,37.2500034 25.8046855,37.5859375 26.1953125,37.5859375 C27.5078191,37.5859375 28.859368,36.1172022 30.25,33.1796875 Z" id="i" fill="#FFFFFF"></path>' +
                '<circle id="Oval-3" fill="#FFFFFF" cx="25.5" cy="12.5" r="2.5"></circle>' +
            '</g></g></g></svg>';

  const zoom = '<svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Icons" transform="translate(-254.000000, -44.000000)"><g id="Group-2" transform="translate(256.000000, 46.000000)"><circle id="Oval-2-Copy-2" stroke="#FFFFFF" stroke-width="3" cx="25" cy="25" r="25"></circle><polygon id="Triangle" fill="#FFFFFF" transform="translate(34.435029, 17.435029) rotate(45.000000) translate(-34.435029, -17.435029) " points="34.4350288 9.43502884 45.4350288 25.4350288 23.4350288 25.4350288"></polygon><polygon id="Triangle-Copy" fill="#FFFFFF" transform="translate(18.435029, 33.435029) scale(-1, -1) rotate(45.000000) translate(-18.435029, -33.435029) " points="18.4350288 25.4350288 29.4350288 41.4350288 7.43502884 41.4350288"></polygon></g></g></g></svg>';

  return {
    closeButton: function() {
      closeBtn.innerHTML = close;
    },

    restartButton: function() {
      restartBtn.innerHTML = restart;
    },

    infoButton: function() {
      infoBtn.innerHTML = info;
    },

    zoomButton: function() {
      zoomBtn.innerHTML = zoom;
    }
  }

}







