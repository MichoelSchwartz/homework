/* globals $*/
(async function () {
    'use strict';
  
    const videoSelect = $('#videos');
    const nameElem = $('#title');
    const videoElem = $('#video');
  
    async function loadJson(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (e) {
        console.log(e.message);
      }
    }
  
    async function selectVideo(e) {
      const video = await loadJson(`${e.target.value}.json`);
      if (! video) {
        return;
      }
      nameElem.text(video.name);
      videoElem.attr('src', video.url);
    }
  
    const videos = await loadJson('videos.json');
  
    videos.forEach(video => {
      videoSelect.append(`<option value=${video.id}>${video.name}</option>`);
    });
  
    videoSelect.change(selectVideo);
  }());