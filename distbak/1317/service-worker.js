/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./js/home_1b3b8bda.js","14a4d760b12c2ea42822c6ff51c1b1b2"],["./js/module2_ad6e8f56.js","c8dbf4112348569b66ca748259a9b3bf"],["./js/pwa_34a92cb7.js","128d7b811dbbacc723c6246078ec7136"],["./module/home.html","528bdbc876d9bc8db13733120c86654a"],["./module/module2.html","a06b921b3bb6c3c4582a2bcf60b17736"],["./module/pwa.html","ba4423fd4512757a97f14e28773e5de8"],["./static/1-95691f0.png","95691f0f2d58d9dc8eb74cdda873abe4"],["./static/2-bedafa6.png","bedafa6529a49510e3f0760427d9c559"],["./static/3-8526896.png","85268966bcaa010b173baa5e57a4e17a"],["./static/4-aaf81ee.png","aaf81ee184fd8005782f1ef0e9a0dc25"],["./static/5-67204c3.png","67204c3493b7e6d2e8b1459e86ed7ef2"],["./static/6-29dfafc.png","29dfafcc3298989aa6482d61288d16e6"],["./static/barf-a605274.jpg","a605274dfc8de52a13a4d4dc672fd494"],["./static/c3po-2ff1822.jpg","2ff18228f85c12022d812fd8f587d9b7"],["./static/chewbacca-6ecf689.jpg","6ecf6891b0211692a84f82c9179c1bd6"],["./static/darkhelmet-ea03b33.jpg","ea03b3396758840eadd2e5d7ee70ff3c"],["./static/darthvader-7085a56.jpg","7085a5609c3e2d3ca724f3af2f9eac0e"],["./static/html5极速3D立体式图片相册切换效果/images/1.jpg","4963e445059d8eafec293d01c8f4dd68"],["./static/html5极速3D立体式图片相册切换效果/images/10.jpg","5963748e0e20dc80d39594421915ce33"],["./static/html5极速3D立体式图片相册切换效果/images/11.jpg","c3aa240a9b9ed735703d2bf50fea0abb"],["./static/html5极速3D立体式图片相册切换效果/images/12.jpg","d66e6028a814b3536a8112c06552effe"],["./static/html5极速3D立体式图片相册切换效果/images/2.jpg","abdf92e80246c12b8dfcabbd00f24ba7"],["./static/html5极速3D立体式图片相册切换效果/images/3.jpg","b0d273de3f36c037f5916c6be87aedc1"],["./static/html5极速3D立体式图片相册切换效果/images/4.jpg","448256b849c6b0811e80937efe1dfb0a"],["./static/html5极速3D立体式图片相册切换效果/images/5.jpg","f3c76d8635dfa73e5685e3602b14d43f"],["./static/html5极速3D立体式图片相册切换效果/images/6.jpg","ccfd8d439ce88ceb5db6b530ceefd85a"],["./static/html5极速3D立体式图片相册切换效果/images/7.jpg","f8a5cbf6fbbba665c6f3a564cb8e89a4"],["./static/html5极速3D立体式图片相册切换效果/images/8.jpg","1e300acc333ad585d285001ab0960606"],["./static/html5极速3D立体式图片相册切换效果/images/9.jpg","aa299cde1a2ab8537f9a5313e2982bdf"],["./static/html5极速3D立体式图片相册切换效果/index.html","bd76dd12f9279abde1a786c9d2ab5faa"],["./static/html5极速3D立体式图片相册切换效果/js/ge1doot.js","93b5101a3852a930dcfa1ea2b40b0624"],["./static/html5极速3D立体式图片相册切换效果/js/imageTransform3D.js","de88b0c181c46190fc6d79f1a322714c"],["./static/html5极速3D立体式图片相册切换效果/lanrenzhijia.com下载说明.txt","f8644384e2389b7df28595f958f16544"],["./static/html5极速3D立体式图片相册切换效果/访问懒人之家.url","47d25610de79a76a9b8b4b92336e54f7"],["./static/js+css3实现3D效果时间表/css/demo.css","2970d83c9896a1af9bcc27df983a7689"],["./static/js+css3实现3D效果时间表/css/font/LICENSE.txt","6bfa0a31fd72354166698055306f6a6a"],["./static/js+css3实现3D效果时间表/css/font/README.txt","42bfbeb6cc8bca1b44a6f8e19fae6f8e"],["./static/js+css3实现3D效果时间表/css/font/fontawesome-selected.eot","bb26eb78512bb741adb8548a20fbd318"],["./static/js+css3实现3D效果时间表/css/font/fontawesome-selected.svg","8bd26a312bb9f16df10847367f388493"],["./static/js+css3实现3D效果时间表/css/font/fontawesome-selected.ttf","4f57e26706f2320023c4818918b6934d"],["./static/js+css3实现3D效果时间表/css/font/fontawesome-selected.woff","9a273578cbdf41d3310788a0d6394281"],["./static/js+css3实现3D效果时间表/css/lanrenzhijia.css","2ceeedf514d4aac536def6ccc19ea5c0"],["./static/js+css3实现3D效果时间表/images/barf.jpg","b7c302d1493cba54da324d52d634fdbe"],["./static/js+css3实现3D效果时间表/images/c3po.jpg","f89b298394c92726506b142a674b4c4d"],["./static/js+css3实现3D效果时间表/images/chewbacca.jpg","6d555a542727169810f604aec1ad1ee5"],["./static/js+css3实现3D效果时间表/images/darkhelmet.jpg","ece946289af8a7fbfba7ee3d3470e51d"],["./static/js+css3实现3D效果时间表/images/darthvader.jpg","b243f141008f1c38b634838ac78acdbf"],["./static/js+css3实现3D效果时间表/images/dotmatrix.jpg","cdba1a5cfcb66a9a143df358a024fc13"],["./static/js+css3实现3D效果时间表/images/leia.jpg","3cfe149270f491e726328944910c8c73"],["./static/js+css3实现3D效果时间表/images/vespa.jpg","8059859ce784ff7f3d9bb5e2ed9f2776"],["./static/js+css3实现3D效果时间表/index.html","384e5cf3e7b4f0902397e2c10381a013"],["./static/js+css3实现3D效果时间表/js/modernizr.custom.63321.js","919e53b2b89a1ff579e54ebd288c4a30"],["./static/js+css3实现3D效果时间表/lanrenzhijia.com下载说明.txt","f8644384e2389b7df28595f958f16544"],["./static/js+css3实现3D效果时间表/访问懒人之家.url","47d25610de79a76a9b8b4b92336e54f7"],["./static/leia-76c9ebd.jpg","76c9ebd38944ebdf8c85e04476385e91"],["./static/reset.css","7a99e1e2685980759c24893c782b8b80"],["./static/vespa-92dbd8f.jpg","92dbd8f8587b2b72529ff931eac8ba50"]];
var cacheName = 'sw-precache-v3-my-project-name-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







